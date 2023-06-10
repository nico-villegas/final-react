import {createContext, useState} from 'react'

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const total = cart.reduce((prev, curr) => prev + (curr.precio * curr.quantity),0)

    const totalQuantity = cart.reduce((prev, curr) => prev + curr.quantity , 0)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, total, totalQuantity, addItem, removeItem, clearCart }}>
            { children }
        </CartContext.Provider>
    )
}

