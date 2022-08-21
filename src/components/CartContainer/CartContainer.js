import './CartContainer.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart= () => {
    const { cart, clearCart, total } = useContext(CartContext)  
    return(
        <>
        <div>
            <h1 className='item'>Todos tus productos seleccionados</h1>
        </div>
            <div className='ItemCart'>
            <button onClick={() => clearCart()} className="ButtonOpcion">Borrar todo</button>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3 className='total'>Total: ${total}</h3>
            <Link to='/checkout' className='ButtonOpcion'>
            <button>Continuar compra</button>
            </Link>
            </div>

        </>
    )
}

export default Cart