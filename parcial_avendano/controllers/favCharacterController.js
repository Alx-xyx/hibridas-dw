//* Importo todo lo necesario
import FavCharacterManager from "../classes/favoriteModel.js";
import CharacterManager from "../classes/characterModel.js";
import chalk from "chalk";

//* Creo mis constantes
const favCharacterManager = new FavCharacterManager;
const characterManager = new CharacterManager;

export const getFavs = async (req, res) => {
    try {

        // Cargamos los favoritos
        await favCharacterManager.loadFavs();
        const favIds = await favCharacterManager.getFavs(); // Guardo mis favoritos en mi constante

        // Busco todos los personajes y fitlro todos los que están en favoritos
        const allChars = await characterManager.getChar();
        const favCharacters = allChars.filter(char => favIds.includes(char.id));

        // Si no hay favoritos, mostramos un mensaje
        if (favCharacters.length === 0) {
            return res.json({ msg: "Todavía no tienes personajes favoritos." });
        }

        // Si hey favoritos existen, mando mediante response
        res.status(200).json(favCharacters);
        
    } catch (error) {
        console.error('Error al obtener personajes favoritos:', error);
        res.status(500).json({ msg: "Error al obtener los personajes favoritos" });
    }
}

export const addFavs = async (req, res) => {
    // Solo obtenemos el id del personaje
    const { id } = req.body;

    try {
        // Asegúrate de cargar los favoritos
        await favCharacterManager.loadFavs();

        // Verificamos si el personaje ya está en favoritos
        if (favCharacterManager.favChars.includes(id)) {
            return res.status(400).json({ msg: "El personaje ya está en favoritos" });
        }

        // Agregar el id al listado de favoritos
        const status = await favCharacterManager.addFav(id);

        if (status) {
            res.json({ msg: "Personaje favorito agregado correctamente" });
        } else {
            res.status(400).json({ msg: "No se pudo agregar el personaje" });
        }

    } catch (error) {
        console.error("Error al agregar favorito:", error);
        res.status(500).json({ msg: "Error al agregar el personaje favorito" });
    }
}

export const deleteFavs = async(req, res) =>{
    try {
        const id = req.params.id;
        console.log('ID recibido para eliminar:', id); // Verifica que el id recibido es el correcto
        const status = await favCharacterManager.deleteFav(id);

        if (status) {
            res.json({ msg: 'Personaje eliminado correctamente de los favoritos' });
        } else {
            res.status(404).json({ msg: 'No se encontró el personaje para eliminar' });
        }
    } catch (error) {
        console.error('Error al eliminar personaje favorito:', error);
        res.status(500).json({ msg: "Error al eliminar personaje favorito" });
    }
}