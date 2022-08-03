import './Item.css'
import {Link} from 'react-router-dom'

const Item = ({ id, name, img, price, stock}) => {
    
    const handleClick = (e) => {
        e.stopPropagation()
        console.log('click en item')
    }

    return (
        <div className="container-card divInline" onClick={handleClick}>
            <div className="card" >
                <img src={img} alt={name} />
                <div className="contenido-card">
                    <h3>{name}</h3>
                    <h6 className='precio'>${price} </h6>
                    <button>
                    <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
                    </button>
                    <p>Stock disponible {stock} </p>
                </div>
            </div>
        </div>
    )
}
export default Item
