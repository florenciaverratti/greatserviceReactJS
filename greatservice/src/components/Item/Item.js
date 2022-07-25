import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
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
                    <h6 className='precio'>${product.price} </h6>
                    <ItemCount show={show} stock={product.stock} initial={1} onAdd={handleOnAdd} />   
                    <ButtonDetalle/>
                    <p>Stock disponible {product.stock} </p>
                </div>
            </div>
        </div>
    )
}
/*
        
                    
                    <p>{product.stock} </p>
                    <p> {product.description} </p>
        category: 'Tratamientos',
        
 */
export default Item
