import chalk from "chalk";
import express from "express";
//import { ProductManger } from "./ProductManager.js";
import ProductManger from "./ProductManager.js";
import UsersManager from "./UsersManager.js";

const port = 5000;
const app = express();

app.use(express.json());
const productModel = new ProductManger();
const userModel = new UsersManager();

app.get('/', (request, response) =>{
    console.log('Ruta Raíz');
    response.send('Home');
})

app.get('/api/products', async (requets, response ) => {
    const lista = await productModel.getProducts();
    response.json( lista );
})


app.post('/api/products', async (request, response) =>{
    const product = request.body;
    const id = await productModel.addProduct(product);
    response.json({id});
})


// Rutas para los usuarios
app.get('/api/users', async (request, response) => {
    const users = await userModel.getUsers();
    console.log(users);
    response.json( users );
})

app.get('/api/users/:id', async (request, response) => {
    const id = request.params.id;
    const user = await userModel.getUserById(id);
    if ( user) {
        response.json( user );
    } else {
        response.status(404).json({msg: 'No se encontro el usuario'});
    }
})

app.post('/api/users', async (request, response) => {
    const user = request.body;
    console.log({user});
    const id = await userModel.addUser(user);
    response.json( { id} );
})


app.delete('/api/users/:id', async (request, response) => {
    const id = request.params.id;
    const status = await userModel.deleteUserById(id);
    if ( status) {
        response.json( {msg: 'Usuarios eliminado'} );
    } else {
        response.status(404).json({msg: 'No se encontro el usuario'});
    }
})

app.put('/api/users/:id', async (request, response)=>{

})

app.listen( port, () => {
    console.log(   chalk.green(`Servidor Web en el puerto ${port}`)  );    
})