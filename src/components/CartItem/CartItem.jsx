import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({ id, nombre, precio, quantity}) => {
    const { removeItem } = useContext(CartContext)

    const totalProducts = quantity * precio
    
    return (
        <div>
            <div className="card">
                <div>
                    <h5 className="card-title">{nombre}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">Cantidad: {quantity}</p>
                    <p className="card-text">Precio: ${precio}</p>
                </div>
                <div>
                    <p className="card-text">SubTotal: {totalProducts}</p>
                </div>
                <div className='btn'>
                    <button onClick={() => removeItem(id)} className='btn'>X</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
