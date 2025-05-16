import React from "react";
import '../App.css'

function Card({nombre, descripcion, foto, precio, objeto
}) {
    return(
        <div className="card">
            <h4>{nombre}</h4>
            <img src="{foto}" alt="producto" />
            <p>${precio + 11}</p>
            <p>Stock {objeto.cantidad}</p>
            <p>{descripcion}</p>
            <button type="button">Ver</button>
        </div>
    )
}

export default Card;