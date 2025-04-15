import express from "express";
import { getCharacters, addCharacter, deleteCharacter } from "../controllers/characterController.js";

//! Creo la constante que me habilita el uso de rutas
const router = express.Router();

//* Rutas y metodos para obtener todos los personajes

router
    .get("/characters", getCharacters)
    .post('/characters/add', addCharacter)
    .delete('/characters/delete', deleteCharacter);

export default router;