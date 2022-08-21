import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartItem = ({ id, name,img, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <div className='divDetail'>        
            <div className='colInfo'>
                <h4 className='tipografia'>{name}</h4>
                <p className='tipografia cant'>Cantidad: {quantity} </p>
                <h6 className='tipografia precio' >Precio x Unidad: ${price}</h6>
                <h6 className='tipografia precio'> Subtotal: ${price * quantity}</h6>
            </div>
        <button className='ButtonOpcion' onClick={() => handleRemove(id)}>Eliminar</button>
        </div>
    )
}

export default CartItem 