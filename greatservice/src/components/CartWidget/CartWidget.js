import{FiShoppingCart} from 'react-icons/fi'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='divInline'>
            <FiShoppingCart className='FiShoppingCart'/>
            <a> 10 </a> 
        </div>
    )
}

export default CartWidget