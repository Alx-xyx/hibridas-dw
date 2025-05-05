import AppUsersManager from "../classes/userModel.js";

const appUserModel = new AppUsersManager;
//import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secret_key = process.env.SECRET_KEY;
const salt = 10;

export const auth = async(req, res) =>{
    const {email, password} = req.body;
}

export const getUsers = async(req, res) =>{
    const users = await appUserModel.getUsers();
    res.status(200).json(users);
}

export const getUserByID = async(req, res) =>{
    const id = req.params.id;
    const user = await appUserModel.getUserByID(id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({
            msg: "No se ha encontrado el usuario."
        })
    }
}

export const addUser = async(req, res) =>{
    const user = req.body;
    console.log({
        user
    });
    const id = await appUserModel.addUser(user);
    res.json({
        id
    })
}

export const deleteUser = async(req, res) =>{
    const id = req.params.id;
    const status = await appUserModel.deleteUser(id);
    if (status) {
        res.json({
            msg: 'Usuario eliminado con exito'
        })
    } else {
        res.status(404).json({
            msg: 'Usuario no encontrado'
        })
    }
}

export const updateUser = async(req, res) =>{
    // Pido el ID y el email por parametro
    const id = req.params.id;
    const newEmail = req.body;
    const status = await appUserModel.updateUser(id, newEmail);

    if (status) {
        res.json({
            msg: "Usuario actualizado con exito"
        })
    } else {
        res.json({
            msg: "No se encontro el usuario"
        })
    }
}

