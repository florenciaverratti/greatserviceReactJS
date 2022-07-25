import {useEffect, useState} from 'react'
import { getProduct } from "../../asyncMock"
import './ItemListContainer.css'
import  ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting,show, setShow}) => {

    const [products,setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getProduct().then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [])

    if(loading) {
        return <h1 className='item'>Cargando productos...</h1>
    }

    return (
        <>
        <h1 className="item">{greeting}</h1>
        <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer