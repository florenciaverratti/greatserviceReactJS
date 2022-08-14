import './CartContainer.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

const Cart= () => {
    const { cart, clearCart, getTotal} = useContext(CartContext)  

    const total = getTotal()

    return(
        <>
        <div>
            <h1 className='item'>Todos tus productos seleccionados</h1>
        </div>
            <div className='ItemCart'>
            <button onClick={() => clearCart()} className="ButtonOpcion">Borrar todo</button>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3 className='total'>Total: ${total}</h3>
            <button className="ButtonOpcion">Comprar</button>
            </div>

        </>
    )
}

export default Cart