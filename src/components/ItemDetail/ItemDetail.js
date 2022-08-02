import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import{IoArrowBackOutline} from 'react-icons/io5'

const ItemDetail = ({ id, name, category, img, price, stock, description}) => {
        
    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito: ', quantity)
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
                <ItemCount stock={stock}  onAdd={handleOnAdd}/>
                </div>
            </div>
            <div>
                <p className='description'>{description} </p>
            </div>
        </div>
        )
    }

    export default ItemDetail