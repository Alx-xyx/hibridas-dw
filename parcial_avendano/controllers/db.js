//! Importo mongoose para ser usado
import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
import chalk from "chalk";

const dburi = process.env.MONGODB_URI;

//* Defino mi constante que manejara la base de datos
export const connectDB = async () => {
    try {
        await mongoose.connect(dburi);
        
        const db = mongoose.connection;
        db.on('error', (error) => {
            console.error(chalk.redBright('Ha ocurrido un error al conectarse con la base de datos'), {error} ) 
        });

        db.once('open', () => {
            console.log(chalk.greenBright('Conexion con la Db Correcta'))
        });
        console.log(chalk.bgGreenBright('Conexion exitosa a MongoDB'));

    } catch (error) {
        console.error(chalk.redBright('Conexion fallida a MongoDB'));
        console.error(error);
    }
}
