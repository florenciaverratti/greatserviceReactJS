import './ItemDetailContainer.css'
import { useState, useEffect} from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({addItem})=> {
        const [product,setProduct] = useState({})
        const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <h1 className='item'>Cargando...</h1>
    }

       /*  useEffect(()=>{
            const onResize = () => console.log('buenas')
            window.addEventListener('resize', onResize)
            return ()=> window.removeEventListener('resize', onResize)
        },[]) */

        return (
            <>
            <ItemDetail {...product} addItem={addItem}/>
            </>
        )
    
}
export default ItemDetailContainer