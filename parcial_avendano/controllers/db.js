//! Importo mongoose para ser usado
import mongoose from "mongoose";
import chalk from "chalk";

//* Defino el controller

export const connectDB = async () => {
    try {
        await mongoose.connect('uri', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(chalk.greenBright('Conexion exitosa a MongoDB'));
    } catch (error) {
        console.error(chalk.redBright('Conexion fallida a MongoDB'));
        console.error(error);
    }
}
