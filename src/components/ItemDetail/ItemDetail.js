import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import{IoArrowBackOutline} from 'react-icons/io5'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, name, category, img, price, stock, description}) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem, getProductQuantity } = useContext(CartContext)
    const quantityAdded = getProductQuantity(id)

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito')
        console.log(quantity)
        setQuantity(quantity)
        addItem({id, name, price, quantity})
        console.log(addItem({id, name, price, quantity}))
    }

    return (
        <div className='ItemDetail'>
            <div className='divDetail'>
                <Link to= '/'> <IoArrowBackOutline className='IoArrowBackOutline' style={{color: '#faa227'}} /> </Link>
                <div className='colImg'>
                <img className='img' src={img} />
                </div>
                <div className='colInfo'>
                    <h4 className='categoria'>{category}</h4>
                <h3 className='tipografia'>{name}</h3>
                <p className='stock'>Stock disponible {stock} </p>
                <h6 className='precio tipografia'>${price} </h6>
                { quantity > 0 ? <h6 className='thanks'> Gracias por su compra!</h6> : null }
                { quantity > 0 ? <Link to='/cart' className='ir'><button>Ir al carrito</button></Link> : <ItemCount stock={stock} onAdd={handleOnAdd} initial={quantityAdded} />}
                </div>
            </div>
            <div>
                <p className='description'>{description} </p>
            </div>
        </div>
        )
    }

    export default ItemDetail