import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({products}) => {
    
    const handleClick = () => {
        console.log('click en itemlist')
    }
    return (
        <div className="divFlex" onClick={handleClick}>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList