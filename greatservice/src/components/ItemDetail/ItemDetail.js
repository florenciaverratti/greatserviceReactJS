import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'

const ItemDetail = ({ products }) => {
    const [show, setShow] = useState(true)
    const handleOnAdd = (quantity) => {
        console.log('cantidad de items agregados', quantity)
    }
    return (
        <div className='ItemDetail'>
            <div className='divDetail'>
                <div className='colImg'>
                <img className='img' src={products.img} />
                </div>
                <div className='colInfo'>
                    <h4 className='categoria'>{products.category}</h4>
                <h3 className='tipografia'>{products.name}</h3>
                <p className='stock'>Stock disponible {products.stock} </p>
                <h6 className='precio tipografia'>${products.price} </h6>
                <ItemCount show={show} stock={products.stock} initial={1} onAdd={handleOnAdd}/>
                </div>
            </div>
            <div>
                <p className='description'>{products.description} </p>
            </div>
        </div>
        )
    }

    export default ItemDetail