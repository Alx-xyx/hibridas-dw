import usersRouter from "./usersRouter.js";

function routerAPI(app){
    //Definimos cada ruta
    app.use('/api/users', usersRouter);
}

export default routerAPI;