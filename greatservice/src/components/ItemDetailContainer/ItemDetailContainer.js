import { useState, useEffect} from 'react'
import { getDetail } from "../../asyncMock"
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({show,setShow})=> {
    
        const [products,setProducts] = useState([])
        const [loading, setLoading] = useState(true)
        
        useEffect(() => {
            getDetail().then(response => {
                setProducts(response)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })  
        }, [])
    
        if(loading) {
            return <h1 className='item'> Espere</h1>
        }
    
        return (
            <>
            <ItemDetail products={products} key={products.id}/>
            </>
        )
    
}
export default ItemDetailContainer