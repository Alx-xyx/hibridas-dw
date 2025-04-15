import express from "express";
import { getFavs, addFavs, deleteFavs } from "../controllers/favCharacterController.js";

//! Creo la constante que me habilita al uso de rutas
const router = express.Router();

//* Rutas y metodos para obtener mis personajes favs;

router
    .get('/favCharacters', getFavs) 
    .post('/favCharacters/add', addFavs)
    .delete('/favCharacters/delete/:id', deleteFavs);

export default router