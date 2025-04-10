//? Importo lo necesario

import chalk  from "chalk";

let html = ``;

export const getHome = async(req, res) =>{
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
}