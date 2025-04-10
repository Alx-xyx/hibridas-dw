import chalk from "chalk";
import express from "express";
import characterRoutes from "./routes/characterRoutes.js";
import homeRoutes from "./routes/homeRoute.js"

// Constantes necesarias para el funcionamiento de mi servidor como puertos, app, etc
const port = 2727;
const app = express();

app.get('/', homeRoutes)

app.get('/characters', characterRoutes)

//* Ruta para mostrar solo los personajes favoritos, esta lista funciona por separado a la lista de personajes.
app.get('/favorites', async (req, res) =>{
    try {
        
    } catch (error) {
        
    }
});

//* Ruta para agregar personajes a favoritos, la idea es hacerlo por el id
app.post('/favorites', async(req, res) =>{
    try {
        
    } catch (error) {
        
    }
})

//* Ruta para eliminar por id a mis favoritos
app.delete('/favorites', async(req, res) =>{
    try {
        
    } catch (error) {
        
    }
})

//! Como no se me ocurre otra entidad mas interesante, hago una entidad usarios la cual me servirá mucho mas a futuro que cualquier otra cosa

//* Metodo para obtener los usuarios que existen en el sitio
app.get('/users', async(req, res) =>{
    try {
        
    } catch (error) {
        
    }
})

//* Metodo para crear un nuevo usuario
app.post('/users', async(req, res) =>{
    try {
        
    } catch (error) {
        
    }
})


app.listen(port, () =>{
    console.log(chalk.cyanBright('Status del servidor: Corriendo en el puerto 2727'));
})