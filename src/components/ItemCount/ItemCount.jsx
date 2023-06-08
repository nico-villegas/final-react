import './ItemCount.css'
import React from 'react'
import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd  }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => (quantity < stock) ? setQuantity(quantity + 1) : alert('No hay mas productos en stock')

    const decrement = () => (quantity > 1) ? setQuantity(quantity - 1) : alert('No se agregaron productos para eliminar')



    return (
        <div className='contein-count d-md-flex  align-items-center flex-column '>
            <div className='row'>
                <div className='col d-flex justify-content-center align-items-center'>
                    <button type="button" className="btn btn-sm" onClick={increment}>+</button>
                </div>
                <div className='col d-flex justify-content-center align-items-center'>
                    <h4 className='m-0'>{quantity}</h4>
                </div>
                <div className='col d-flex justify-content-center align-items-center'>
                    <button type="button" className="btn btn-sm" onClick={decrement}>-</button>
                </div>
            </div>
            <div className='col d-flex justify-content-center align-items-center'>
                <button type='button' className="btn btn-sm d-flex justify-content-center align-items-center" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount