import mongoose from "mongoose";

//? Creo el Schema que utilizarà mi base de datos
const characterSchema = new mongoose.Schema({
    id: Object,
    name: String,
    elemento: String,
    path: String,
    faction: String,
    img: String,
    desc: String
})

//? Exporto mi constante personaje, el cual usa como modelo mi characterSchema
export const Character = mongoose.model('Character', characterSchema, 'Characters');