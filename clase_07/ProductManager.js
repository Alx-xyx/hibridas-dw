import fs from "fs/promises";
const path = './products.json';

class ProductManger{
    products = [];
    constructor(products=[]){
        this.products = products
    }
    randomID(){
        return crypto.randomUUID();
    }
    // { name: 'TV 32', description: 'TV LG 32', image: 'foto.jpg', price: 54000}
    async addProduct(product){
        // Antes de agregar leemos el json, y agregamos la información
        await this.getProducts();
        product.id = this.randomID();
        this.products.push( product);
        
        // formateamos los datos de los productos
        const data = JSON.stringify( this.products, null, 2);
        try {
            await fs.writeFile( path, data );
            return product.id;
        } catch (error) {
            console.error(error);
        }
    }
    async getProducts(){
        try {
            const data = await fs.readFile(path);
            this.products = JSON.parse( data);
            return this.products;
        } catch (error) {
            console.error(error);
        }
    }

    async getProductById(id){
        const products = await this.getProducts();
        const product = products.find(  item => item.id == id  );
        return product ? product : {};
    }
}

//export { ProductManger };
export default ProductManger;