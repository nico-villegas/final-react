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
                <div className='card-img'>
                    <img src={img} className='img-detail' alt={alt} />
                </div>
                <div className='card-content'>
                    <h5>{nombre}</h5>
                    <p className="card-text">Categoria: {category}</p>
                    <p className="card-text"> {descripcion}</p>
                    <p className="card-text">Precio: ${precio}</p>
                </div>
                <div className='card-count'>
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className='Option'>Finalizar compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail