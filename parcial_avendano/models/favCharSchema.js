import mongoose from "mongoose";

const favCharSchema = new mongoose.Schema({
    id: Number,
    name: String
})

export const FavCharacter = mongoose.model('FavCharacter', favCharSchema, 'favChars')