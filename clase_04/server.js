// Importamos el modulo que quremos usar
import http from "http";
import ProductManager from "./02_AVENDANO_ALVARO/classes/ProductManager.js";
const admin = new ProductManager();

const port = 3000;

const server = http.createServer((req, res) =>{
    // El estado 200 indica que esta todo bien. El content-type indica con el tipo de dato con el que se procesa esa informacion
    const url = req.url;
    console.log(req.url);
    let body = '';
    let status = 0;

    if (url == '/') {
        try {
            body = '<h1>Bienvenido</h1>';
            status = 200;
        } catch (error) {
            console.error("Error en la pagina principal");
        }
    } else if (url == '/products'){
        try {
            body = '<h1>Lista de productos</h1>';
            const list = admin.getProducts();
            console.log(list);
            status = 200;
        } catch (error) {
            console.error("Error en la obtencion de productos");
        }
    } else if (url == '/login') {
        try {
            body = '<h1>Login</h1>';
            status = 200
        } catch (error) {
            console.error("Error en el login");
        }
    } else {
        status = 404;
        body = '<h1>Error en pagina</h1>'
    }
    
    res.writeHead(status, {"content-type":'text/html'});
    res.end(body);
    console.log('Un cliente ha establecido conexión');
    
});

server.listen(port, ()=>{
    console.log(`Servidor web corriendo en el puerto ${port}`);
    
})