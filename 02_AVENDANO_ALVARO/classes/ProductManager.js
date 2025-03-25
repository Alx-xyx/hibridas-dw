// Constantes y variables:
import fs from "fs"; // Constante para referirse al fileSystem
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

    //* Agregar producto *//

    // Para añadir un producto hago que mi data pueda quedar registrada como un archivo json
    // Luego utilizo el writeFile para escribir data.
    // Por ultimo se pushea al array de productos el producto.
    addProduct(product){

        // Creo una variable para inicializar mi json de productos sin nada
        let existingProducts = [];

        // Necesito validar que mi archivo efectivamente exista y tenga contenido, caso contrario me devuelve un undefined
        if (fs.existsSync(path)) {
            
            // Constante fileData el cual lee la data de mi archivo usando el path
            const fileData = fs.readFileSync(path, 'utf-8');

            // Hago uso de un TryCatch para atajar en caso de que la lectura de mi JSON salga mal, obligando al programa a
            // utilizar un arreglo vacio. En caso de que en mi fileData haya informacion, voy a parsearla.
            try {
                existingProducts = fileData ? JSON.parse(fileData) : [];
            } catch (error) {
                console.error('Hubo un error al intentar leer el archivo JSON. Inicializando el arreglo nuevamente vacio');
                existingProducts = [];
            }
        };

        // En caso de haber productos ahora no se sobreescriben si no que directamente se suman a los que existen
        existingProducts.push(product);

        fs.writeFileSync(path, JSON.stringify(existingProducts, null, 2))

        this.products = existingProducts;

        //! Codigo viejo
        // // Para poder mantener una lectura constante de las cosas (porque si no se sobre-escriben y no es funcional, hago lo siguiente)
        // const existingProducts = JSON.parse(fs.readFileSync(path, 'utf-8'));
        // // Teniendo esto, basicamnete hace una lectura previa de lo que haya en mi json y lo guarda en una variable llamada "existingProducts"
        // // En caso de haber productos, no los sobre-escribe si no que directamente los va a sumar a lo que existe
        // existingProducts.push(product);
        // const data = JSON.stringify(product, null, 2);
        // fs.writeFile(path, data, function(){
        // })
        // // En vez de pushear a los mismos productos, se los pusheo a mi variable
        // this.products = existingProducts;
    };

    //* Obtener productos *//

    // Obtiene los productos y los retorna
    getProducts(){
        return this.products
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