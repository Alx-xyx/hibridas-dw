// Constantes y variables:
import fs from "fs/promises"; // Constante para referirse al fileSystem
const path = './products.json'; // Indico donde debe llevarse a cabo las lecturas y las escrituras

// Clases:
class ProductManager{
    products = [];
    // Creo un constructor para inicializar los valores al crearse una nueva instancia de la clase
    // Esto hace que al crear la instancia de la clase, el array está vacio.
    constructor(products = []){
        this.products = products;
    }

    // Metodos:

    randomID(){
        const id = crypto.randomUUID;
        return id;
    }
    //* Agregar producto *//

    // Para añadir un producto hago que mi data pueda quedar registrada como un archivo json
    // Luego utilizo el writeFile para escribir data.
    // Por ultimo se pushea al array de productos el producto.
    async addProduct(product){
        // Antes de agregar informacion es vital leer y fijarnos antes si hay informacion para que no se solape.
        await this.getProducts();
        product.id = this.randomID();
        this.products.push(product);

        const data = JSON.stringify(this.products, null, 2);
        try {
            await fs.writeFile(path, data);
            return product.id
        } catch (error) {
            console.error('Ha ocurrido un error en el guardado de sus productos');
            console.error(error);
        }
    };

    //* Obtener productos *//

    // Obtiene los productos y los retorna
    async getProducts(){
        try {
            const data = await fs.readFile(path);
            console.log('La informacion ha sido obtenida desde el Path. Se procede a decodificar para su lectura');
            this.products = JSON.parse(data);
        } catch (error) {
            console.error('No se ha podido obtener los productos');
            console.error(error);
        }
    };

    //* Obtener producto por ID *//

    // Analiza con un find que busca un item el cual tenga el mismo item.id que sea provisto.
    // En caso de encontrarlo retorna el producto, caso contrario no devuelve nada.
    getProductById(){
        const product = this.products.find(item => item.id == id);
        return product ? product : {};
    };
}

const key = '1234';

// Uso el export default ya que solo tengo una sola clase para compartir con los demas modulos.
// Esto solo se puede hacer con ES6
export default ProductManager;