// Importamos el modulo que quremos usar
import http from "http";
import ProductManager from "./02_AVENDANO_ALVARO/classes/ProductManager.js";
const admin = new ProductManager();
const port = 3000;

const server = http.createServer(async(req, res) =>{
    // El estado 200 indica que esta todo bien. El content-type indica con el tipo de dato con el que se procesa esa informacion
    const url = req.url;
    let body = '';
    let status = 200;
    console.log(req.url);

    if (url == '/') {
        try {
            body = '<h1>Bienvenido</h1>';
            status = 200;
        } catch (error) {
            console.error("Error en la pagina principal");
        }
    } else if (url == '/products'){
        let list = [];
        try {
            list = await admin.getProducts();
            console.log(list);
            body = `<h1>Lista de productos</h1><pre>${JSON.stringify(list, null, 2)}</pre>`;
            status = 200;
        } catch (error) {
            console.error("Error en la obtencion de productos", error);
            status = 500;
            body = `<h1>Error en la obtencion de productos, intentar de nuevo</h1>`;
        }
    } else if (url == '/login') {
        try {
            body = '<h1>Login</h1>';
            status = 200
        } catch (error) {
            console.error("Error en el login");
        }
        //! En caso de que mi URL comience de esta manera pasará lo siguiente:
    } else if(url.startsWith('/products/')){
        const id = url.split('/')[2];
        try {
            const product = await admin.getProductById(id);
            console.log(product);
            if (product) {
                body = `
                <h1>Producto encontrado</h1>
                <pre>${JSON.stringify(product, null, 2)}</pre>
                `;
                status = 200;
            } else {
                status = 404;
                body = `
                <h1>Producto no encontrado</h1>
                `;
                console.error("Ocurrio un error buscando el id del producto");
            }
        } catch (error) {
            console.error("Error al obtener un producto por ID", error);
            status = 500;
            body = `
                <h1>Error al buscar el producto requerido</h1>
            `;
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