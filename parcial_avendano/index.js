import chalk from "chalk";
import express from "express";
import Manager from "./classes/manager.js";

// Constantes necesarias para el funcionamiento de mi servidor como puertos, app, etc
const port = 2727;
const admin = new Manager();
const app = express();
let html = ``;

app.get('/', (req, res) =>{
    console.log(chalk.bgGreen('Te encuentras en la ruta: Raiz'));
    try {
        html += `
        <h1>Bienvenido al listado de Honkai Star Rail</h1>
        <a href="/characters">
            <button type="button">Ver los personajes</button>
        </a>
        `
    } catch (error) {
        console.error(chalk.bgRed('Ha ocurrido un error al tratar de obtener la ruta'));
        console.error(error);
    }
    res.send(html);
})

app.get('/characters', async (req, res) =>{
    console.log(chalk.bgGreen('Te encuentras en la ruta: Characters'));
    let characters = [];
    try {
        characters = await admin.getChar();
        html += '<h1>Personajes de Honkai Star Rail</h1>'
        // console.log(typeof characters);
        // console.log(Array.isArray(characters));
        html += `
            <a href="/">
                <button>Volver</button>
            </a>
        `;
        html += `<p>Lista de personajes</p>`
        characters.forEach(char => {
            html += 
            `
            <p>
                <strong>${char.name}</strong>:<br>
                Elemento: ${char.elemento}<br>
                Via: ${char.path}<br>
                Faccion: ${char.faction}<br>
                Descripccion: ${char.desc}<br>
            </p>
            `
        });
        res.send(html);
    } catch (error) {
        console.error('Ha ocurrido un error al intentar obtener a los personajes');
        console.error(error);
        res.status(500).send('Error al obtener productos')
    }
    html = '';
})

app.listen(port, () =>{
    console.log(chalk.cyanBright('Status del servidor: Corriendo en el puerto 2727'));
    
})