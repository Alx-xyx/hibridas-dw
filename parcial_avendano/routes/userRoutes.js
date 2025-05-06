import express from "express"
import { addUser, deleteUser, getUserByID, getUsers, updateUser } from "../controllers/userController.js";

//! Creo la constante que me habilita el uso de las rutas
const router = express.Router();

//* Rutas y metodos para obtener mis usuarios
router
    .get('/', getUsers)
    .get('/:id', getUserByID)
    .post('/add', addUser)
    .delete('/delete/:id', deleteUser)
    .put('/change/:id', updateUser)

export default router