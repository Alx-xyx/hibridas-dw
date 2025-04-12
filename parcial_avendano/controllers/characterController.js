//? Importo el modelo que necesito para trabajar
import chalk from "chalk";
import CharacterManager from "../classes/characterModel.js";

const characterManager = new CharacterManager();
let html = ``;


export const getCharacters = async(req, res) =>{
    console.log(chalk.bgGreen('Te encuentras en la ruta: Characters'));
    let characters = [];
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
            html += 
            `
            <p>
                <strong>${char.name}</strong>:<br>
                Elemento: ${char.elemento}<br>
                Via: ${char.path}<br>
                Faccion: ${char.faction}<br>
                Descripccion: ${char.desc}<br>
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