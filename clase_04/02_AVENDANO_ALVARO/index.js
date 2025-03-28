// Importo la clase ProductManager, como lo exporté como default no son necesarias las llaves
import ProductManager from "./classes/ProductManager.js";

// Para generar id's de manera aleatoria para nuestros productos hacemos lo siguiente
const admin = new ProductManager();

 const guardar = async() =>{
    try {
        await admin.addProduct(
            {
            title:'Redmi 13 Pro', 
            description:'Celular Xiaomi Redmi 13 pro', 
            price:400.000, 
            stock: 15 + " unidades"}
        ).then(res =>{
            console.log(res);
            
        }).catch( error => {
            console.error(error);
            
        });
    
        await admin.addProduct(
            {
            title:'Mouse Redragon', 
            description:'Mouse gamer blanco Redragon Cobra', 
            price:75.000, 
            stock: 36 + " unidades"}
        ).then(res =>{
            console.log(res);
        }).catch(error => {
            console.error(error);
        })
    } catch (error) {
        console.error('No se ha logrado agregar los productos. Revisar el index.js');
        console.error(error);
        
    }    
 } 
guardar();



