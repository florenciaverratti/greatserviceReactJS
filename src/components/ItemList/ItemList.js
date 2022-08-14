import Item from "../Item/Item"
import './ItemList.css'
import { memo } from 'react'

const ItemList = ({products}) => {
    return (
        <div className="divFlex" >
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default memo(ItemList)