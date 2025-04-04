<<<<<<< HEAD
import chalk from "chalk";
import express from "express";
import ProductManager from "./classes/ProductManager.js";

const port = 5000;
const admin = new ProductManager();
const app = express();
let html = '';


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
    let products = [];
    try {
        products = await admin.getProducts();
        body = '<h1>Los productos de la api</h1>'
        console.log(typeof products);
        console.log(Array.isArray(products));
        
        let html = `<h1>Lista de productos</h1>`;
        products.forEach(prod =>{
            html += `<p>
            <strong>${prod.title}</strong>:
            ${prod.description} - $${prod.price} (${prod.stock}) - ID: ${prod.id}
            </p>`
        })
        
        res.send(html)
    } catch (error) {
        console.log(chalk.red('Ha ocurrido un error al intentar obtener tus productos, intente de nuevo'));
        console.error(error);
        res.status(500).send('Error al obtener productos');
    }
})

app.get('/api/products/:id', async (req, res) =>{
    const id = req.params.id;
    let html = ``;
    try {
        let product = await admin.getProductById(id);
        console.log(chalk.bgCyan('Estas en: Ruta Api de Productos ID'));
        html = `<h1>Busqueda de productos por ID</h1>`;
        if (product) {
            html += `
            <h1>Producto encontrado</h1>
            <p>
            <strong>
            ${product.title}
            </strong>:
            ${product.description} - $${product.price} (${product.stock}) - ID: ${product.id}
            </p>
            `;
            //<pre>${JSON.stringify(product, null, 2)}</pre>
        } else {
            html += `
            <h1>Producto no encontrado</h1>
            `;
            console.error("Ocurrio un error buscando el id del producto");
        }
        res.send(html);
    } catch (error) {
        hmtl += `
        <h1>Producto no encontrado</h1>
        `;
        console.error("Ocurrio un error buscando el id del producto");
        console.error("Error al obtener un producto por ID", error);
        html += `
        <h1>Error al buscar el producto requerido</h1>
        `;
        res.send(html);
    }
})

app.use(express.json());
app.post('/api/products', async (req, res) =>{
    console.log(chalk.bgGrey('Estas en: Ruta Api POST de Productos'));
    try {
        const nuevoProducto = req.body;
        
        //Valido que los campos requeridos se cumplen
        if (!nuevoProducto.name || !nuevoProducto.price) {
            return res.status(400).send('Campos incompletos en el Name y Price');
        }

        // Agrego el producto
        const nuevoID = await admin.addProduct(nuevoProducto);

        if (!nuevoID) {
            return res.status(500).send('No se ha podido guardar el producto');
        }

        res.status(201).send({
            mensaje: 'Producto agregado exitosamente',
            id: nuevoID,
            producto: { ...nuevoProducto, id: nuevoID }
        });
    } catch (error) {
        console.error('Error al agregar producto', error);
        res.status(500).send('Error interno del servidor')
        
    }
    
})

app.listen(port, () => {
    console.log(chalk.cyan("Status del servidor web: Corriendo en el puerto 5000"));
})
=======
const {Alumno} = require('./clases/Alumno.js');

const a1 = new Alumno();
a1.setNombre('Manuel');

let nombre = a1.mostrarNombre();
console.log(`Hola ${nombre}`);

const edadAlumno = new Alumno();
edadAlumno.setEdad('21');

let edad = edadAlumno.retornarEdad();
console.log(`Tenés ${edad} años`);

const materias = new Alumno();
let materiasAlumno = materias.mostrarMaterias();
console.log(`Cursas estas materias: ${materiasAlumno}`);

const agregarMateria = new Alumno();
agregarMateria.setMateria('Materia nueva');

let addMateria = agregarMateria.setMateria();
console.log(`Agregaste esta materia ${addMateria}`);
>>>>>>> 50f867054c8472a47242deea8e7455128891cefd

