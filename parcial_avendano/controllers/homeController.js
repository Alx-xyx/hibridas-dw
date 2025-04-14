//? Importo lo necesario

import chalk  from "chalk";

export const getHome = async(req, res) =>{
    console.log(chalk.bgGreen('Te encuentras en la ruta: Raiz'));
    try {
        let html = `
        <!DOCTYPE html>
        <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Mi Proyecto</title>
                <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">
                <link rel="stylesheet" href="../public/estilos.css">
            </head>
            <body class='container' id='main_title'>
                <h1>Bienvenido al listado de Honkai Star Rail</h1>
                <a href="/characters">
                    <button type="button">Ver los personajes</button>
                </a>
                <a href="/favCharacters">
                    <button type="button">Ver tus personajes favoritos</button>
                </a>
            </body>
        </html>
        `
        res.send(html);
    } catch (error) {
        console.error(chalk.bgRed('Ha ocurrido un error al tratar de obtener la ruta'));
        console.error(error);
    }
}