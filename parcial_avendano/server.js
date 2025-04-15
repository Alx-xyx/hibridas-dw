import chalk from "chalk";
import express from "express";
import dotenv from "dotenv";
import favCharactersRoutes from "./routes/favoriteRoutes.js";
import characterRoutes from "./routes/characterRoutes.js";
import homeRoutes from "./routes/homeRoute.js"
import path from "path"
// Este es un parseador para el body ya que si intento leer algo desde el body, por ejemplo, info de un formulario, no lo puedo hacer sin este middleware
import bodyParser from "body-parser";

dotenv.config();

// Constantes necesarias para el funcionamiento de mi servidor como puertos, app, etc
const port = process.env.PORT;
const app = express();
const _nombreDirectorio = path.resolve();

// Hago uso de mi middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

// Este app use me deja acceder a todo lo que tengo en la carpeta de node_modules
app.use('/bootstrap', express.static(path.join(_nombreDirectorio, 'node_modules/bootstrap/dist')));

// Este app use me deja usar todos aquellos estilos personalizados que tenga en mi carpeta public
app.use(express.static(path.join(_nombreDirectorio, 'public')));

app.use('/', homeRoutes);
app.use('/', characterRoutes);
app.use('/', favCharactersRoutes)


app.listen(port, () =>{
    console.log(chalk.cyanBright('Status del servidor: Corriendo en el puerto 2727'));
})