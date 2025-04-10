import express from "express";
import { getHome } from '../controllers/homeController.js';

//! Creo la constante que me habilita el uso de rutas

const router = express.Router();

//* Ruta para obtener mi home

router.get("/", getHome);

export default router;  