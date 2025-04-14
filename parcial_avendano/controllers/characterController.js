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