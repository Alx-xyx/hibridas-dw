//* Importo todo lo necesario
import FavCharacterManager from "../classes/favoriteModel";
import CharacterManager from "../classes/characterModel";
import chalk from "chalk";

//* Creo mis constantes
const favCharacterManager = new FavCharacterManager;
const characterManager = new CharacterManager;

export const getFavs = async (req, res) =>{
    console.log(chalk.bgGreen('Te encuentras en la ruta: Favorite Characters'));
    let html = ``;
    try {
        await favCharacterManager.loadFavs();
        const favIds = favCharacterManager.getFavs();
        const allChars = await characterManager.getChar();
        const favCharacters = allChars.filter(char => favIds.includes(char.id));

        html += '<h1>Mis personajes favoritos</h1>';
        html+= `
            <a href="/">
                <button>Volver</button>
            </a>
        `;
        html += `<p>Lista de personajes favoritos</p>`;

        favCharacters.forEach(char =>{
            html = `
                <p>
                    <strong>${char.name}</strong>:<br>
                    Elemento: ${char.elemento}<br>
                    Via: ${char.path}<br>
                    Faccion: ${char.faction} <br>
                    Descripcion: ${char.desc} <br>
                </p>
            `;
        })

        if (favCharacters === 0) {
            html += `<p>Todavia no hay personajes favoritos añadidos</p>`
        };

        res.send(html);

    } catch (error) {
        console.error('Error al obtener personajes favoritos. Error en el favCharController');
        console.error(error);
        res.status(500).send("Error al obtener personajes favoritos");
    }
}

export default getFavs;