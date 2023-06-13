import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div className='container-carrito-vacio'>
                <h1>No hay productos en el carrito</h1>
                <Link to='/' className='btn'>Productos</Link>
            </div>
        )
    }

    return (
        <div className='cart d-flex flex-column align-items-center'>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total: ${total}</h3>
            <div className='d-flex flex-row justify-content-around'>
                <button onClick={() => clearCart()} className='btn-checkout btn' >Limpiar carrito</button>
                <Link className='btn-checkout btn' to='/checkout'>Comprar carrito</Link>
            </div>
        </div>
    )
}

export default Cart
