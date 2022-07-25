import Item from "../Item/Item"
import './ItemList.css'
const ItemList = ({ products }) => {
    return (
        <div className="divFlex">
            {products.map(product => (
                <Item product={product}/>
            ))}
        </div>
    )
}

export default ItemList