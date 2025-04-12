import express from "express";
import { getFavs } from "../controllers/favCharacterController.js";

//! Creo la constante que me habilita al uso de rutas
const router = express.Router();

//* Ruta para obtener mis personajes favs;

router.get('/', getFavs);

export default router