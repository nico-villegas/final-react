import React, { useContext, useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, nombre, precio, descripcion, stock, img, alt, category }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio
        }

        addItem(item, quantity)
    }


    return (
        <div className="card-detail card">
            <div className="card-body">
                <img src={img} alt={alt} />
                <div className='card-content d-flex flex-column justify-content-evenly'>
                    <h5 className="card-title">{nombre}</h5>
                    <div className='container-card-text d-flex flex-column align-items-start'>
                        <p className="card-text"> {descripcion}</p>
                        <p className="card-text">Categoria: {category}</p>
                        <p className="card-text">Precio: ${precio}</p>
                    </div>
                </div>
                <div className='card-count d-flex align-items-center justify-content-center'>
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className='btn-finalizar d-flex align-items-center justify-content-center'>Finalizar compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail