import './Item.css'
import ButtonDetalle from '../ButtonDetalle/ButtonDetalle'

const Item = ({ product }) => {
    
    const handleOnAdd = (quantity) => {
        console.log('cantidad de items agregados', quantity)
    }
    
    return (
        <div className="container-card divInline">
            <div className="card" >
                <img src={product.img} />
                <div className="contenido-card">
                    <h3>{product.name}</h3>
                    <h6 className='precio'>${product.price} </h6>
                    <ButtonDetalle/>
                    <p>Stock disponible {product.stock} </p>
                </div>
            </div>
        </div>
    )
}
/*

import { useState } from 'react'
const [show, setShow] = useState(true)
<ItemCount show={show} stock={product.stock} initial={1} onAdd={handleOnAdd} />   

<p>{product.stock} </p>
<p> {product.description} </p>
        category: 'Tratamientos',
        
 */
export default Item
