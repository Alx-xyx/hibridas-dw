import express from "express";
import { getCharacters, addCharacter, deleteCharacter, updateChar, getCharById } from "../controllers/characterController.js";

//! Creo la constante que me habilita el uso de rutas
const router = express.Router();

//* Rutas y metodos para obtener todos los personajes

router
    .get("/characters", getCharacters)
    .get('/characters/:id', getCharById)
    .post('/characters/add', addCharacter)
    .delete('/characters/delete', deleteCharacter)
    .put('/characters/change/:id', updateChar);

export default router;