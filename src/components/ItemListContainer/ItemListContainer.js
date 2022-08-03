import {useEffect, useState} from 'react'
import { getProduct,getProductsByCategory  } from "../../asyncMock"
import './ItemListContainer.css'
import  ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting}) => {

    const [products,setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProduct
        
        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    useEffect(() => {
        const onResize = () => console.log('cambio el tamaño de ventana')

        window.addEventListener('resize', onResize)

        return () => window.removeEventListener('resize', onResize)
    }, [])

    if(loading) {
        return <h1 className='item'>Cargando productos...</h1>
    }

    return (
        <>
            <h1 className="item">{greeting}</h1>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer