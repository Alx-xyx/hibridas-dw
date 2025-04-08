import chalk from "chalk";
import express from "express";
//import { ProductManger } from "./ProductManager.js";
import routerAPI from "./routes/index.js";


const port = 5000;
const app = express();

app.use(express.json());

app.get('/', (request, response) =>{
    console.log('Ruta Raíz');
    response.send('Home');
})

//LLamamos a nuestras rutas

routerAPI(app);


app.listen( port, () => {
    console.log(chalk.green(`Servidor Web en el puerto ${port}`)  );    
})