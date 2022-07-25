import { useState, useEffect } from 'react'
import './ItemCount.css'
const Counter = ({ show, stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial)

    useEffect(() => {
        console.log('function callback useEffect')

        return () => console.log('el componente va a desmontarse')
    }, [show])

    const decrement = () => {
        if(count > initial) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    return(
        <div>
            <button className='button' onClick={decrement} disabled={count === initial ? true : null}>-</button>
            <h4 className='contador'> {count} </h4>
            <button className='button'  onClick={increment}  disabled={count === stock ? true : null}>+</button>
            <button className='button'  style={{width: '80%' }} onClick={() => onAdd(count)} >Agregar al carrito</button>
        </div>  
    ) 
}

export default Counter