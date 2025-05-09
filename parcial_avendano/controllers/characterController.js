//? Importo el modelo que necesito para trabajar
import chalk from "chalk";
import { Character } from "../models/characterSchema.js"

export const getCharacters = async(req, res) =>{
    console.log(chalk.bgGreen('Te encuentras en la ruta: Characters'));
    try {
        const characters = await Character.find();
        res.status(200).json(characters);
        console.log(chalk.greenBright('Se han obtenido los personajes exitosamente', characters));
    } catch (error) {
        console.error(chalk.redBright('Ha ocurrido un error al intentar obtener a los personajes. Error en el Controller'));
        console.error(error);
        res.status(500).send('Error en el controller al obtener personajes')
    }
}

export const getCharById = async(req, res) =>{
    const id = req.params.id;
    try {
        const characterById = await Character.find(id);
        if (characterById) {
            console.log(chalk.greenBright('Se han obtenido el personaje por ID'));
            res.status(200).json(characterById);
        } else{
            res.status(404).json({
                msg: "No se ha encontrado el usuario"
            })
            console.error(chalk.redBright('No se ha obtenido el personaje por ID'));
        }
    } catch (error) {
        console.error(chalk.redBright('Error en el controlador de getCharById', error));
        res.status(500).json({
            msg: "Error interno al tratar de obtener el personaje"
        })
    }
}

export const addCharacter = async (req, res) =>{
    const characterData = req.body;
    console.log({characterData});
    try {
        const nuevoPersonaje = new Character(characterData)
        await nuevoPersonaje.save()
        console.log(chalk.greenBright('Se ha agregado el personaje de manera correcta'));
        res.status(201).json({
            msg: 'Personaje agregado',
            id: nuevoPersonaje.id
            })
    } catch (error) {
        console.error(chalk.redBright('Error en el controller al agregar personaje',error));
        res.status(500).json({
            msg: 'Error interno al agregar el personaje'
        })
    }
}

export const deleteCharacter = async(req, res) =>{
    const id = req.params.id;
    try {
        console.log('ID para eliminar:', id);
        const deletedCharacter = await Character.findOneAndDelete({id});
        if (deletedCharacter) {
            console.log(chalk.greenBright('Personaje eliminado por ID de manera correcta'));
            res.json({
                msg: 'Personaje eliminado correctamente de la seccion de personajes'
            })
        } else {
            console.log(chalk.redBright('Error al eliminar por ID un personaje'));
            res.status(404).json({
                msg: 'No se encontró el personaje solicitado'
            })
        }
    } catch (error) {
        console.error(chalk.redBright('Error en el controller al eliminar un personaje por ID', error));
        res.status(500).json({
            msg: 'Error al eliminar el personaje'
        })
    }
}

export const updateChar = async(req, res) =>{
    // Saco el id y demas informacion por parametro
    const id = req.params.id;
    const newData = req.body;
    try {
        const updatedCharacter = await Character.findOneAndReplace({id}, newData, {new: true});
        if (updatedCharacter) {
            console.log(chalk.greenBright('Personaje actualizado de manera exitosa'));
            res.json({
                msg: 'Personaje actualizado correctamente' 
            });
        } else {
            res.status(404).json({
                msg: 'Personaje no encontrado' 
            });
        }
    } catch (error) {
        console.error(chalk.redBright('Error en el controlador al actualizar un personaje:', error));
        res.status(500).json({
            msg: 'Error interno del servidor' 
        });
    }
}