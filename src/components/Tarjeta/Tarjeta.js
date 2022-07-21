import './Tarjeta.css'; 
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';

const Tarjeta = (props)=> {
    const [show, setShow] = useState(true)

    const handleOnAdd = (quantity) => {
        console.log('cantidad de items agregados', quantity)
    }
    return (
        <div className="container-card" style={{size: '18rem'}}>
            <div className="card" >
                <img src=""/>
                <div className="contenido-card">
                    <h3></h3>
                    <p></p>
                    <ItemCount sshow={show} stock={10} initial={1} onAdd={handleOnAdd} />
                </div>
            </div>
        </div>
    )
}
export default Tarjeta