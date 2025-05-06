import mongoose from "mongoose";

const favCharSchema = new mongoose.Schema({
    id: String,
    name: String
})

export const FavCharacter = mongoose.model('FavCharacter', favCharSchema, 'favChars')