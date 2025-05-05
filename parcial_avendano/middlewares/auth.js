import jsonwebtoken, { decode } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret_key = process.env.SECRET_KEY;

//! Validaciones

const validationToken = (req, res, next) => {
    const auth = req.headers.autorization;
    if (!auth) {
        res.status(401).json({
            msg: 'No ha pasado la barrera de seguridad'
        })
    }
    const token = auth.split(' ')[1];
    jsonwebtoken.verify(token, secret_key, (error, decoded) =>{
        if (error) {
            res.status(403).json({
                msg: 'Token Invalido :('
            })
        }
        console.log({
            decoded
        });
        res.body.userId = decoded.id;
    })
    next()
}

export {validationToken}