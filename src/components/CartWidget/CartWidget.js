import{FiShoppingCart} from 'react-icons/fi'
import './CartWidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)
    const quantity = getQuantity()
    const totalQuantity = getQuantity()
    
    if(totalQuantity === 0) {
        return (
            <>
            <FiShoppingCart className='FiShoppingCart cartOculto'/>
            <a className='cartOculto'> {quantity}</a> 
            </>
        )
    }

    return(
        <Link to='/cart' className="CartWidget">
            <FiShoppingCart className='FiShoppingCart'/>
            <a className='a'> {quantity}</a> 
        </Link>
    )
}

export default CartWidget
