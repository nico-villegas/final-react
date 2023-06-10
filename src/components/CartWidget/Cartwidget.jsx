import './CartWidget.css'
import { useContext } from 'react'
import { GrCart } from "react-icons/gr";
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cartwidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className='cart-widget btn d-flex align-items-center justify-content-center'>
            { totalQuantity }
            <GrCart />
        </Link>
    )
}

export default Cartwidget