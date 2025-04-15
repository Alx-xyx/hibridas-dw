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
            console.log('Los personajes han sido obtenidos desde el Path.');
            console.log(this.characters);
            return this.characters
        } catch (error) {
            console.error('No se han podido obtener los personajes. Error en el model');
            console.error(error);
            return [];
        }
    }

    async addChar(character){
        await this.getChar();
        this.characters.push(character);
        const data = JSON.stringify(this.characters, null, 2);

        try {
            await fs.writeFile(path, data);
            return character.id;
        } catch (error) {
            console.error('Error al escribir el archivo de personaje', error);
        }
    }

    async deleteChar(id){
        try {
            await this.getChar();
            console.log('Personajes cargados:', this.characters);
            const pos = this.characters.findIndex(char => char === id);
            console.log('Posicion encontrada:', pos);

            if (pos === -1) {
                console.log('No se han encontrado personajes');
                return false;
            }

            this.characters.splice(pos, 1);
            console.log('Personajes despues de la eliminacion:', this.characters);

            await this.getChar();
            console.log('Peronsajes actuales:', this.characters);
            
            return true;
        } catch (error) {
            console.error('Error al eliminar el personaje:', error);
            return false;
        }
    }
}

export default CharacterManager;