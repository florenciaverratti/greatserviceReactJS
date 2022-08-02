import './ItemDetailContainer.css'
import { useState, useEffect} from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ()=> {
        const [product,setProduct] = useState({})
        
        const { productId } = useParams()
        
        useEffect(() => {
            getProductById(productId).then(response => {
                setProduct(response)
            })
        }, [productId])

        useEffect(()=>{
            const onResize = () => console.log('buenas')
            window.addEventListener('resize', onResize)
            return ()=> window.removeEventListener('resize', onResize)
        },[])

        return (
            <>
            <ItemDetail {...product}/>
            </>
        )
    
}
export default ItemDetailContainer