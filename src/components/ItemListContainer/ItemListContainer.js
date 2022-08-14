import './ItemListContainer.css'
import {useEffect, useState} from 'react'
import { getProduct,getProductsByCategory  } from "../../asyncMock"
import  ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting}) => {

    const [products,setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState('Primer titulo')
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
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
        setTimeout(() => {
            setTitle('Segundo titulo')
        }, 2000)
    }, [])

    if(loading) {
        return <h1 className='item'>Cargando productos...</h1>
    }
    if(products.length === 0) {
        return categoryId ? <h1>No hay productos en nuestra categoria {categoryId}</h1> : <h1>No hay productos disponibles</h1>
    }
    
    return (
        <>
        
            <h1 className="item up">{` ${categoryId || ''}`}</h1>
            <h2>{title}</h2>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer