import fs from "fs/promises";
const path = './data/appUsers.json';

class AppUsersManager {
    // Hago que mi variable users sea un array vacio
    users = []
    constructor(users = []) {
        this.users = users
    };

    randomID(){
        // Genero un ID random 
        return crypto.randomUUID();
    }

    //? Obtencion de usuarios

    async getUsers(){
        try {
            const data = await fs.readFile(path);
            this.users = JSON.parse(data);
            return this.users;
        } catch (error) {
            console.error('Error en el metodo getUsers en el modelo', error);
        }
    }

    //? Agregado de usuarios al JSON
    async addUser(user) {
        await this.getUsers();
        user.id = this.randomID();
        this.users.push(user);
        const data = JSON.stringify(this.users, null, 2);
        try {
            await fs.writeFile(path, data);
            return user.id;
        } catch (error) {
            console.error('Error en el metodo addUser en el modelo', error);
        }
    }

    //? Obtencion de usuario mediante ID
    async getUserByID(id){
        const users = await this.getUsers();
        const user = users.find(u=> u.id == id);
        return user ? user : undefined;
    }

    //? Borrado de usuario (por ID)
    async deleteUser(id){
        await this.getUsers();
        const pos = this.users.findIndex(u=> u.id == id);
        this.users.splice(pos, 1);
        const data = JSON.stringify(this.users, null, 2);
        try {
            await fs.writeFile(path, data);
            return true ? pos != -1 : false;
        } catch (error) {
            console.error('Error en el metodo deleteUser en el modelo'. error);
        }
    }

    async updateUser(id, user){
        // Espero a obtener mis usuarios para luego leerlos y ver que quiero cambiar
        await this.getUsers();
        const pos = this.users.findIndex(u=> u.id == id);
        if (pos === -1) {
            return false
        }

        if (user.name) {
            this.users[pos].name = user.name;
        }

        if (user.email) {
            this.users[pos].email = user.email;
        }

        const data = JSON.stringify(this.users, null, 2);
        try {
            await fs.writeFile(path, data);
            return true;
        } catch (error) {
            console.error('Error en el metodo updateUser en el modelo', error);
        }
    }
}

export default AppUsersManager;