import './CartItem.css'
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({ id, nombre, precio, quantity }) => {
    const { removeItem } = useContext(CartContext)

    const totalProducts = quantity * precio

    return (
        <div className='card-item d-flex align-items-center'>
            <div className="card d-flex flex-row justify-content-around align-items-center">
                <div className='container-card-title d-flex justify-content-center'>
                    <h5 className="card-title">{nombre}</h5>
                </div>
                <div className="card-body d-flex flex-row justify-content-around align-items-center">
                    <p className="card-text">Cantidad: {quantity}</p>
                    <p className="card-text">Precio: ${precio}</p>
                </div>
                <div>
                    <p className="card-text">SubTotal: ${totalProducts}</p>
                </div>
                <div className='container-btn-card  d-flex align-items-center justify-content-center'>
                    <div className='btn-card bg-danger'>
                        <button id='btn-x' onClick={() => removeItem(id)} className='btn'>X</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
