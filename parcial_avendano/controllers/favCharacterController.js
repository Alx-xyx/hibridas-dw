import chalk from "chalk";
import {FavCharacter} from '../models/favCharSchema.js';

export const getFavs = async (req, res) => {
    console.log(chalk.bgGreen('Te encuentras en la ruta: Fav Characters'));
    try {
        const favCharacters = await FavCharacter.find();
        res.json(favCharacters);
        console.log(chalk.greenBright('Se han obtenido los personajes favoritos exitosamente', favCharacters));
    } catch (error) {
        console.error(chalk.redBright('Ha ocurrido un error al intentar obtener a los personajes favoritos. Error en el Controller'));
        console.error(error);
        res.status(500).send('Error en el controller al obtener personajes')
    }
}

export const addFavs = async (req, res) => {
    const favCharData = req.body;
    console.log(favCharData);
    try {
        const newFavChar = new favChar(favCharData);
        await newFavChar.save();
        console.log(chalk.greenBright('Se ha agregado un nuevo personaje favorito de manera exitosa'));
        res.status(201).json({
            msg: 'Personaje favorito agregado',
            id: newFavChar.id
        });
    } catch (error) {
        console.error(chalk.redBright('Error en el controller al agregar un nuevo personaje favorito', error));
        res.status(500).json({
            msg: 'Error interno al agregar un personaje favorito'
        })
    }
    
}

export const deleteFavs = async(req, res) =>{
    const id = req.params.id;
    try {
        console.log('ID a eliminar: ', id);
        const deletedFavCharacter = await favChar.findOneAndDelete({id});
        if (deletedFavCharacter) {
            console.log(chalk.greenBright('Personaje favorito eliminado por ID de manera exitosa'));
            res.json({
                msg: 'Personaje favorito eliminado correctamente de tu lista de favoritos'
            });
        } else {
            console.log(chalk.redBright('Error al elimnar un personaje favorito por ID'));
            res.status(404).json({
                msg: 'No se encontro el personaje favorito solicitado'
            })
        }
    } catch (error) {
        console.error(chalk.redBright('Error en el controller al eliminar un personaje favorito por ID', error));
        res.status(500).json({
            msg: 'Error al eliminar el personaje favorito'
        })
    }
}

export const updateFavChar = async(req, res) => {
    const id = req.params.id;
    const newFavData = req.body;
    try {
        const updatedFavCharacter = await favChar.findOneAndReplace({id}, newFavData, {new: true});
        if (updatedFavCharacter) {
            console.log(chalk.greenBright('Personaje favorito actualizado de manera exitosa'));
            res.json({
                msg: 'Personaje favorito actualizado correctamente'
            })
        } else {
            res.status(404).json({
                msg: 'Personaje favorito no encontrado'
            })
        };
    } catch (error) {
        console.error(chalk.redBright('Error en el controlador al actualizar un personaje favorito', error));
        res.status(500).json({
            msg: 'Error interno del servidor'
        })
    }
}