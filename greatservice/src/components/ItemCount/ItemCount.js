import { useState, useEffect } from 'react' 
import './ItemCount.css'
import{FiShoppingCart} from 'react-icons/fi'

const Counter = ({show, stock, initial, onAdd})=> {
    const [count, setCount] = useState(initial)

    useEffect(() => {
        console.log('function callback useEffect')
        return () => console.log('el componente va a desmontarse')
    }, [show])

    const decrement =()=>{
        if(count > initial){
            setCount(count - 1)
        }
    }
    
    const increment =()=>{
        if(count < stock){
        setCount(count + 1)
        }
    }
    return(
        <>
            <button onClick={decrement} disabled={count === initial ? true : null}>-</button>
            <h5 className='contador'> {count} </h5>
            <button  onClick={increment}  disabled={count === stock ? true : null}>+</button>
            <FiShoppingCart className='FiShoppingCart carrito' onClick={() => onAdd(count)} />
        </>  
    ) 
}

export default Counter