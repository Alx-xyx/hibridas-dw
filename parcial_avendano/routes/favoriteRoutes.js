import express from "express";
import { getFavs, addFavs, deleteFavs, updateFavChar } from "../controllers/favCharacterController.js";

//! Creo la constante que me habilita al uso de rutas
const router = express.Router();

//* Rutas y metodos para obtener mis personajes favs;

router
    .get('/', getFavs)
    .post('/add', addFavs)
    .delete('/delete/:id', deleteFavs)
    .put('/change/:id', updateFavChar);

export default router