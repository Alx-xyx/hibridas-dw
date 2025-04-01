import chalk from "chalk";
import express from "express";
import ProductManager from "./classes/ProductManager.js";

const port = 5000;
const admin = new ProductManager();
const app = express();
const body = ``;

app.get('/', (req, res)=>{
    console.log(chalk.green('Estas en: Ruta Raiz'));
    res.send('Home')
})

app.get('/products', (req, res) =>{
    const productos = {id: 1, name: 'Mouse', price: 23000};
    // Retornamos el JSON
    res.json(productos);

});

// Metodos GET
app.get('/api/products', async (req, res) =>{
    console.log(chalk.bgMagenta('Estas en: Ruta Api de Productos'));
    res.send('Api Products');
    let products = [];
    try {
        products = await admin.getProducts();
        body = '<h1>Los productos de la api</h1>'
        console.log(products);
    } catch (error) {
        console.log(chalk.red('Ha ocurrido un error al intentar obtener tus productos, intente de nuevo'));
        console.error(error);
    }
})

app.post('/products', (req, res) =>{
    console.log(chalk.yellow('Post recibido del usuario'));
    res.json({id:2})
    
})

app.listen(port, () => {
    console.log(chalk.cyan("Status del servidor web: Corriendo en el puerto 5000"));
})

