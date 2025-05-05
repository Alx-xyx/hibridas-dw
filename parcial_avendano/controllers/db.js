//! Importo mongoose para ser usado
import dotenv from 'dotenv';
import mongoose from "mongoose";
import chalk from "chalk";

dotenv.config();

//* Defino mi constante que manejara la base de datos
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(chalk.greenBright('Conexion exitosa a MongoDB'));
    } catch (error) {
        console.error(chalk.redBright('Conexion fallida a MongoDB'));
        console.error(error);
    }
}
