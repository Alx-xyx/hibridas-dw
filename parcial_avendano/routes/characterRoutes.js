import express from "express";
import { getCharacters, addCharacter, deleteCharacter, updateChar, getCharById } from "../controllers/characterController.js";
//! Importo desde mi modelo el schema que quiero utilizar
import { Character } from "../models/characterSchema.js";

//! Creo la constante que me habilita el uso de rutas
const router = express.Router();

//* Rutas y metodos para obtener todos los personajes

router
    .get("/", getCharacters)
    .get('/:id', getCharById)
    .post('/add', addCharacter)
    .delete('/delete/:id', deleteCharacter)
    .put('/change/:id', updateChar);

export default router;