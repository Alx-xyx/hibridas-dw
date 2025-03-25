// Importo la clase ProductManager, como lo exporté como default no son necesarias las llaves
import crypto from 'crypto';
import ProductManager from "./classes/ProductManager.js";

// Para generar id's de manera aleatoria para nuestros productos hacemos lo siguiente
const id = crypto.randomUUID();
const admin = new ProductManager();

admin.addProduct(
    {id,
    title:'Redmi 13 Pro', 
    description:'Celular Xiaomi Redmi 13 pro', 
    price:400.000, 
    stock: 15 + " unidades"}
);

admin.addProduct(
    {id: crypto.randomUUID(),
    title:'Mouse Redragon', 
    description:'Mouse gamer blanco Redragon Cobra', 
    price:75.000, 
    stock: 36 + " unidades"}
);

console.log('Los datos han sido obtenidos correctamente');
console.log(admin.getProducts());




