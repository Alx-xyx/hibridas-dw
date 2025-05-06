import express from "express";
import { connectDB } from "./controllers/db.js"; 
import mongoose from "mongoose";
import dotenv from "dotenv";
import favCharactersRoutes from "./routes/favoriteRoutes.js";
import characterRoutes from "./routes/characterRoutes.js";
import homeRoutes from "./routes/homeRoute.js"
import userRoutes from "./routes/userRoutes.js";
import chalk from "chalk";

dotenv.config();

//* Conexion con mongoDB
connectDB();

// Constantes necesarias para el funcionamiento de mi servidor como puertos, app, etc
const port = process.env.PORT;
const app = express();

// Hago uso de mi middleware
app.use(express.json())

app.use('/api', homeRoutes);
app.use('/api/characters', characterRoutes);
app.use('/api/favorites', favCharactersRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () =>{
    console.log(chalk.bgCyanBright('Status del servidor: Corriendo en el puerto 2727'));
})