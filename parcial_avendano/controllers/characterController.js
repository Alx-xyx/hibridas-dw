//? Importo el modelo que necesito para trabajar
import chalk from "chalk";
import CharacterManager from "../classes/characterModel.js";

const characterManager = new CharacterManager();

export const getCharacters = async(req, res) =>{
    console.log(chalk.bgGreen('Te encuentras en la ruta: Characters'));
    let characters = [];
    let html = `
    <!DOCTYPE html>
        <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Mi Proyecto</title>
                <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">
                <link rel="stylesheet" href="../public/estilos.css">
            </head>
            <body class='container' id='main_title'>
            </body>
        </html>
    `;
    try {
        characters = await characterManager.getChar();
        html += '<h1>Personajes de Honkai Star Rail</h1>'
        // console.log(typeof characters);
        // console.log(Array.isArray(characters));
        html += `
            <a href="/">
                <button>Volver</button>
            </a>
        `;
        html += `<p>Lista de personajes</p>`
        characters.forEach(char => {
            //console.log('ID del personaje:', char.id);
            html += 
            `
            <p>
                <strong>${char.name}</strong>:<br>
                Elemento: ${char.elemento}<br>
                Via: ${char.path}<br>
                Faccion: ${char.faction}<br>
                Descripccion: ${char.desc}<br>
                <form action='/favCharacters' method='DELETE'>
                    <input type="hidden" name='id' value="${char.id}">
                    <button type="submit" class="btn btn-warning">Agregar a favoritos</button>
                </form>
            </p>
            `
        });
        res.send(html);
    } catch (error) {
        console.error('Ha ocurrido un error al intentar obtener a los personajes. Error en el Controller');
        console.error(error);
        res.status(500).send('Error al obtener productos')
    }
}

export const getCharById = async(req, res) =>{
    const id = req.params.id;
    try {
        const character = await characterManager.getCharById(id);
        if (character) {
            res.status(200).json(character);
        } else{
            res.status(404).json({
                msg: "No se ha encontrado el usuario"
            })
        }
    } catch (error) {
        console.error('Error en el controlador de getCharById', error);
        res.status(500).json({
            msg: "Error interno al tratar de obtener el personaje"
        })
    }
}

export const addCharacter = async (req, res) =>{
    const character = req.body;
    console.log({character});

    try {
        const id = await characterManager.addChar(character)
        res.json({id})
    } catch (error) {
        console.error('Error al agregar personaje',error);
        res.status(500).json({
            msg: 'Error interno al agregar el personaje'
        })
    }
}

export const deleteCharacter = async(req, res) =>{
    try {
        const id = req.params.id;
        console.log('ID para eliminar:', id);
        const status = await characterManager.deleteChar(id);
        
        if (status) {
            res.json({
                msg: 'Personaje eliminado correctamente de la seccion de personajes'
            })
        } else {
            res.status(404).json({
                msg: 'No se encontró el personaje solicitado'
            })
        }
    } catch (error) {
        console.error('Error al eliminar el personaje', error);
        res.status(500).json({
            msg: 'Error al eliminar el personaje'
        })
    }
}

export const updateChar = async(req, res) =>{
    // Saco el id y demas informacion por parametro
    const id = req.params.id;
    const newData = req.body;

    try {
        const status = await characterManager.updateChar(id, updatedData);

        if (status) {
            res.json({
                msg: 'Personaje actualizado correctamente' 
            });
        } else {
            res.status(404).json({
                msg: 'Personaje no encontrado' 
            });
        }
    } catch (error) {
        console.error('Error en el controlador de actualización:', error);
        res.status(500).json({
            msg: 'Error interno del servidor' 
        });
    }

}