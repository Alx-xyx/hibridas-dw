// Constantes y Variables
import fs from "fs/promises";
const path = "./data/characters.json";

//* Class

class CharacterManager{
    // Declaro mi variable Characters como un array vacio
    characters = [];

    constructor(characters = []){
        this.characters = characters;
    }

    //! Metodos

    //? Obtencion de personajes

    async getChar(){
        try {
            const data = await fs.readFile(path, 'utf-8');
            this.characters = JSON.parse(data);
            //console.log('Los personajes han sido obtenidos desde el Path.');
            //console.log(this.characters);
            return this.characters
        } catch (error) {
            //console.error('No se han podido obtener los personajes');
            //console.error(error);
            return [];
        }
    }
}

export default CharacterManager;