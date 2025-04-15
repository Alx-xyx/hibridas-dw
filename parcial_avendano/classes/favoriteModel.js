// Constantes y variables
import fs from "fs/promises";

//* Class
class FavCharacterManager{

    path = "./data/favCharacters.json";

    // Declaro mi variable favChars como un array vacio
    favChars = [];
    
    constructor(favChars = []){
        this.favChars = favChars;
    }

    //? Carga del json (datos) mas actual
    async loadFavs(){
        try {
            const data = await fs.readFile(this.path, 'utf-8');
            this.favChars = JSON.parse(data);
        } catch (error) {
            console.error('No se han podido obtener los personajes. Error en el modelo');
            console.error(error);
            this.favChars = [];
        }
    }


    //? Obtencion de favoritos
    async getFavs(){
        return this.favChars;
    }

    //? Agregado de cambios (en caso de que hayan)
    async saveFavs(){
        try {
            console.log("Guardando cambios en el archivo...");
        await fs.writeFile(this.path, JSON.stringify(this.favChars, null, 2));
        console.log("Archivo guardado correctamente");
        } catch (error) {
            console.error('No se han podido guardar los personajes favoritos. Error en el modelo');
            console.error(error);
        }
    }

    //? Agregado de un personaje fav al json
    async addFav(newCharId) {
        try {
            await this.loadFavs(); // Cargo los favoritos actuales
            if (this.favChars.includes(newCharId)) {
                return false; // Si ya existe, no se agrega
            }
            this.favChars.push(newCharId); // Se agrega el nuevo id al array
            await this.saveFavs(); // Se guarda los cambios
            return true;
        } catch (error) {
            console.error("Error al agregar favorito:", error);
            return false;
        }
    }
    
    async deleteFav(id) {
        try {
            await this.loadFavs(); // Traigo los favoritos actuales
            console.log("Favoritos cargados:", this.favChars); // Verifico si realmente se cargan
            
            const pos = this.favChars.findIndex(char => char === id); // Busco la posicion de este personaje favorito mediante ID
            console.log("Posición encontrada:", pos); // Verifico si es correcta esa posicion
    
            if (pos === -1) {
                console.log("El personaje no está en los favoritos");
                return false; // Si no se encuentra el id, retorna false
            }
    
            this.favChars.splice(pos, 1); // Con splice, saco el favorito
            console.log("Favoritos después de la eliminación:", this.favChars); // Verifico que realmente se elimino
    
            // Guardo los cambios en el archivo una vez mas
            await this.saveFavs();
            console.log("Favoritos guardados correctamente");
    
            return true;
        } catch (error) {
            console.error('Error al eliminar favorito:', error);
            return false;
        }
    }
}

export default FavCharacterManager;