import './Item.css'
import ItemCount from '../ItemCount 2/ItemCount'
import ButtonDetalle from '../ButtonDetalle/ButtonDetalle'
import { useState } from 'react'

const Item = ({ product }) => {
    const [show, setShow] = useState(true)
    
    const handleOnAdd = (quantity) => {
        console.log('cantidad de items agregados', quantity)
    }

    return (
        <div className="container-card divInline">
            <div className="card" key={product.id}>
                <img src={product.img} />
                <div className="contenido-card">
                    <h3>{product.name}</h3>
                    <p>{product.price} </p>
                    <ItemCount/>
                </div>
            </div>
        </div>
    )
}
/*
        
                    <ItemCount show={show} stock={10} initial={1} onAdd={handleOnAdd} />    
                    <p>{product.stock} </p>
                    <p> {product.description} </p>
        category: 'Tratamientos',
        
 */
export default Item


