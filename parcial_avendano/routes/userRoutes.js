import express from "express"
import { addUser, deleteUser, getUserByID, getUsers, updateUser } from "../controllers/userController.js";

//! Creo la constante que me habilita el uso de las rutas
const router = express.Router();

//* Rutas y metodos para obtener mis usuarios
router
    .get('/users', getUsers)
    .get('/users/:id', getUserByID)
    .post('/users/add', addUser)
    .delete('/users/delete/:id', deleteUser)
    .put('/users/change/:id', updateUser)

export default router