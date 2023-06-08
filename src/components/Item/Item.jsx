import React from 'react'
import "./Item.css";
import { Link } from 'react-router-dom';


const Item = ({ id, nombre, precio, stock, img, alt }) => {
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt={alt} />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">Precio: ${precio}</p>
                <p className="card-text">Cantidad disponible: {stock}</p>
            </div>
            <div className='btn'>
                <Link to={`/item/${id}`} type='button' className="btn-ver-mas btn btn-primary btn-sm"> Ver detalle </Link>
            </div>
        </div>
    )
}

export default Item
