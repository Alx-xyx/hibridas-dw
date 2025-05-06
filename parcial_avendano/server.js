import express from "express";
import { connectDB } from "./controllers/db.js"; 
import mongoose from "mongoose";
import dotenv from "dotenv";
import favCharactersRoutes from "./routes/favoriteRoutes.js";
import characterRoutes from "./routes/characterRoutes.js";
import homeRoutes from "./routes/homeRoute.js"
import userRoutes from "./routes/userRoutes.js";
import chalk from "chalk";

// Este es un parseador para el body ya que si intento leer algo desde el body, por ejemplo, info de un formulario, no lo puedo hacer sin este middleware
import bodyParser from "body-parser";
dotenv.config();

//* Conexion con mongoDB
connectDB();

// Constantes necesarias para el funcionamiento de mi servidor como puertos, app, etc
const port = process.env.PORT;
const app = express();

// Hago uso de mi middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

// Este app use me deja usar todos aquellos estilos personalizados que tenga en mi carpeta public
//app.use(express.static(path.join(_nombreDirectorio, 'public')));

app.use('/api', homeRoutes);
app.use('/api/characters', characterRoutes);
app.use('/api/favorites', favCharactersRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () =>{
    console.log(chalk.cyanBright('Status del servidor: Corriendo en el puerto 2727'));
})