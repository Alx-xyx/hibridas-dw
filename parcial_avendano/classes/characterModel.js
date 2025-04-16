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

    async getCharById(id){
        await this.getChar();
        const character = this.characters.find(char => char.id === id);
        console.log(character);
        
        if (character) {
            return character;  // Si lo encuentra, devuelve el personaje
        } else {
            return null;  // Si no lo encuentra, devuelve null
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
            //console.log('Personajes cargados:', this.characters);
            const pos = this.characters.findIndex(char => char === id);
            //console.log('Posicion encontrada:', pos);

            if (pos === -1) {
                console.log('No se han encontrado personajes');
                return false;
            }

            this.characters.splice(pos, 1); // Elimino el personaje con splice

            const data = JSON.stringify(this.characters, null, 2);
            await fs.writeFile(path, data); // Guardo los cambios una vez realizados

            console.log('Personaje eliminado correctamente.');
            return true;
        } catch (error) {
            console.error('Error al eliminar el personaje:', error);
            return false;
        }
    }

    async updateChar(id, newData){
        try {
            // Busco mis personajes para tenerlos a mano
            await this.getChar()

            const index = this.characters.findIndex(char => char.id === id);
            if (index === -1) {
                console.log('No se ha encontrado el personaje deseado',error);
                return false
            }

            this.characters[index] = {
                ...this.characters[index],
                ...newData
            };

            // Guardo los cambios una vez realizados
            const data = JSON.stringify(this.characters, null, 2);
            await fs.writeFile(path, data);
            
            console.log('Datos del personaje modificados correctamente');
            return true;
        } catch (error) {
            console.error('Error en el metodo updateChar en el metodo', error);
            return false
        }
    }
}

export default CharacterManager;