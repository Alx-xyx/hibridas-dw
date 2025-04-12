// Constantes y variables
import fs from "fs/promises";
const path = "./data/favCharacters.json";

//* Class

class FavCharacterManager{
    // Declaro mi variable favChars como un array vacio
    favChars = [];
    
    constructor(favChars = []){
        this.favChars = favChars;
    }

    //? Carga del json (datos) mas actual
    async loadFavs(){
        try {
            const data = await fs.readFile(path, 'utf-8');
            this.favChars = JSON.parse(data);
        } catch (error) {
            console.error('No se han podido obtener los personajes. Error en el modelo');
            console.error(error);
        }
    }


    //? Obtencion de favoritos
    async getFavs(){
        return this.favChars;
    }

    //? Agregado de cambios (en caso de que hayan)

    async saveFavs(){
        try {
            await fs.writeFile(path, JSON.stringify(this.favChars, null, 2));
        } catch (error) {
            console.error('No se han podido guardar los personajes favoritos. Error en el modelo');
            console.error(error);
        }
    }

    //? Agregado de un personaje fav al json

    async addFav(id){
        if(!this.favChars.indexOf(id)){
            this.favChars.push(id);
            await this.saveFavs();
            return true;
        }
        return false;
    }

    //? Eliminando un personaje fav del json

    async deleteFav(id){
        const index = this.favChars.indexOf(id);
        if(index !== -1){
            this.favChars.splice(index, 1);
            await this.saveFavs();
            return true;
        }
        return false;
    }
}

export default FavCharacterManager;