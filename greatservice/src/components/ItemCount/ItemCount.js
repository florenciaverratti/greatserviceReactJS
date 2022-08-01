import { useState} from 'react' 
import './ItemCount.css'
import{FiShoppingCart} from 'react-icons/fi'

const Counter = ({ stock=0, initial=1, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }     
    }
    return(
        <>
            <button onClick={decrement} disabled={quantity === initial ? true : null}>-</button>
            <h5 className='contador'> {quantity} </h5>
            <button  onClick={increment}  disabled={quantity === stock ? true : null}>+</button>
            <FiShoppingCart className='FiShoppingCart carrito' onClick={() => onAdd(quantity)} />
        </>  
    ) 
}

export default Counter