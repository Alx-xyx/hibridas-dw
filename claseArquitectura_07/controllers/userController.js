import UsersManager from "../models/UsersManager.js";

const userModel = new UsersManager();

const getUsers = async(req, res) =>{
    const users = await userModel.getUsers();
    res.status(200).json(users);
}

const getUserById = async(req, res) =>{
    const id = request.params.id;
    const user = await userModel.getUserById(id);
    if ( user) {
        res.status(200).json( user );
    } else {
        res.status(404).json({msg: 'No se encontro el usuario'});
    }
}

const addUser = async(req,res) =>{
    const user = req.body;
    console.log({user});
    const id = await userModel.addUser(user);
    res.json( { id} );
}

const updateUser = async(req,res) =>{
}

const deleteUser = async (req, res) =>{
    const id = request.params.id;
    const status = await userModel.deleteUserById(id);
    if ( status) {
        response.json( {msg: 'Usuarios eliminado'} );
    } else {
        response.status(404).json({msg: 'No se encontro el usuario'});
    }
}

export default {getUsers, getUserById, addUser, deleteUser, updateUser}