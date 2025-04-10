import express from "express";
import { getCharacters } from "../controllers/characterController.js";

//! Creo la constante que me habilita el uso de rutas
const router = express.Router();

//* Ruta para obtener todos los personajes

router.get("/", getCharacters);

export default router;