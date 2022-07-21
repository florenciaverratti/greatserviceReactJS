import { getProduct } from "../../asyncMock"
import {useEffect, useState} from 'react'

const ItemListContainer = ({style, greeting,show, setShow}) => {

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
        <h1 style={style}>{greeting}</h1>
        <ul>{productosTransformados} </ul>
        </>
    )
}

export default ItemListContainer