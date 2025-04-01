import chalk from "chalk";
import express from "express";

const port = 5000;

const app = express();

app.get('/', (req, res)=>{
    console.log(chalk.green('Estas en: Ruta Raiz'));
    res.send('Home')
    
})

app.get('/products', (req, res) =>{
    const productos = {id: 1, name: 'Mouse', price: 23000};
    // Retornamos el JSON
    res.json(productos);

});

app.post('/products', (req, res) =>{
    console.log(chalk.yellow('Post recibido del usuario'));
    res.json({id:2})
    
})

app.listen(port, () => {
    console.log(chalk.cyan("Status del servidor web: Corriendo en el puerto 5000"));
})

