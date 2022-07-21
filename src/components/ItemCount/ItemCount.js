import { useState, useEffect } from 'react' 

const Counter = ({show, stock, initial, onAdd})=> {
    const [count, setCount] = useState(0)

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
        <div>
            <button onClick={decrement}>-</button>
            <h4> {count} </h4>
            <button  onClick={increment} className='botonIncrement' disabled={count === stock ? true : null}>+</button>
            <button style={{width: '80%' }} onClick={() => onAdd(count)} >Agregar al carrito</button>
        </div>  
    ) 
}

export default Counter