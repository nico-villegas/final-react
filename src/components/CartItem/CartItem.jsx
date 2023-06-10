import './CartItem.css'
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({ id, nombre, precio, quantity}) => {
    const { removeItem } = useContext(CartContext)

    const totalProducts = quantity * precio
    
    return (
        <div className='card-item'>
            <div className="card d-flex flex-row justify-content-around align-items-center">
                <div>
                    <h5 className="card-title">{nombre}</h5>
                </div>
                <div className="card-body d-flex flex-row justify-content-around align-items-center">
                    <p className="card-text">Cantidad: {quantity}</p>
                    <p className="card-text">Precio: ${precio}</p>
                </div>
                <div>
                    <p className="card-text">SubTotal: ${totalProducts}</p>
                </div>
                <div className='btn-cart btn bg-danger d-flex align-items-center justify-content-center'>
                    <button onClick={() => removeItem(id)} className='btn'>X</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
