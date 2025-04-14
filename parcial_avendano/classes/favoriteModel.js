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
            await this.loadFavs(); // Cargar los favoritos actuales
            if (this.favChars.includes(newCharId)) {
                return false; // Si ya existe, no lo agregues
            }
            this.favChars.push(newCharId); // Agregar el nuevo id al array
            await this.saveFavs(); // Guardar los cambios
            return true;
        } catch (error) {
            console.error("Error al agregar favorito:", error);
            return false;
        }
    }
    
    async deleteFav(id) {
        try {
            await this.loadFavs(); // Cargar los favoritos actuales
            console.log("Favoritos cargados:", this.favChars); // Verificar si los favoritos se cargan correctamente
            
            const pos = this.favChars.findIndex(char => char === id); // Buscar la posición del favorito
            console.log("Posición encontrada:", pos); // Verificar si la posición es correcta
    
            if (pos === -1) {
                console.log("El personaje no está en los favoritos");
                return false; // Si no se encuentra el id, retorna false
            }
    
            this.favChars.splice(pos, 1); // Eliminar el favorito
            console.log("Favoritos después de la eliminación:", this.favChars); // Verificar que el favorito fue eliminado
    
            // Guardar los cambios en el archivo
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