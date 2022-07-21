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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ9DMNFHxwZcfPXJrJeBMITxPMP3FMZk_ixXzTfzt4G_C-G058"/>
                <div className="contenido-card">
                    <h3>Colorista</h3>
                    <p>Podemos crear la identidad corporativa de tu empresa. Diseño , Maquetación de folletos, Catálogos, Papelería y mucho más.</p>
                    <ItemCount sshow={show} stock={10} initial={1} onAdd={handleOnAdd} />
                </div>
            </div>
        </div>
    )
}
export default Tarjeta