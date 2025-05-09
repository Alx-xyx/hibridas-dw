import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
});

export const User = mongoose.model('User', userSchema, 'Users')