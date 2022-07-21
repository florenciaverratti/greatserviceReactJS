import { getProduct } from "../../asyncMock"
import {useEffect, useState} from 'react'
import './ItemListContainer.css'
const ItemListContainer = ({ greeting,show, setShow}) => {

    const [product,setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        getProduct().then(resolve =>{
            setProducts(resolve)
        })

    },[])

    const productosTransformados = product.map(product =>(
        <li key={product.id}> {product.name} </li>
    ))

    return (
        <>
        <h1 className="item">{greeting}</h1>
        {/* <ul>{productosTransformados} </ul> */}
        </>
    )
}

export default ItemListContainer