import chalk from "chalk";
import { User } from "../models/userSchema.js";

//import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secret_key = process.env.SECRET_KEY;
const salt = 10;

export const auth = async(req, res) =>{
    const {email, password} = req.body;
}

export const getUsers = async(req, res) =>{
    const users = await User.find();
    res.status(200).json(users);
}

export const getUserByID = async(req, res) =>{
    const id = req.params.id;
    const user = await User.findById(id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({
            msg: "No se ha encontrado el usuario."
        })
    }
}

export const addUser = async(req, res) =>{
    const userData = req.body;
    console.log({userData});
    try {
        const nuevoUsuario = new User(userData)
        await nuevoUsuario.save()
        console.log(chalk.greenBright('Se ha agregado el personaje de manera correcta'));
        res.status(201).json({
            msg: 'Usuario agregado',
            id: nuevoUsuario.id
            })
    } catch (error) {
        console.error(chalk.redBright('Error en el controller al agregar personaje',error));
        res.status(500).json({
            msg: 'Error interno al agregar el personaje'
        })
    }
}

export const deleteUser = async(req, res) =>{
    const id = req.params.id;
    try {
        console.log('ID a eliminar: ', id);
        const deletedUser = await User.findOneAndDelete({id});
        if (deleteUser) {
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

export const updateUser = async(req, res) =>{
    // Pido el ID y el email por parametro
    const id = req.params.id;
    const newData = req.body;
    try {
        const updatedUser = await User.findOneAndReplace({id}, newData, {new: true});
        if (updatedUser) {
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

