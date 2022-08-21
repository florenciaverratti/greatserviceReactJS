import './ItemListContainer.css' 
import  ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore'
import { fetcher } from '../../utils/fetcher'
import { useAsync } from '../../hooks/useAsync'

const ItemListContainer = ({ greeting}) => {

    const { categoryId } = useParams()
    const { isLoading, data, error } = useAsync(fetcher(getProducts, categoryId), [categoryId])

    if(isLoading) {
        return <h1 className='item'>Cargando productos...</h1>
    }
    if(error) {
        return categoryId ? <h1 className='item'>No hay productos en nuestra categoria {categoryId}</h1> : <h1 className='item'>No hay productos disponibles</h1>
    }

    if(data.length === 0) {
        return categoryId ? <h1 className='item'>No hay productos en nuestra categoria {categoryId}</h1> : <h1 className='item'>No hay productos disponibles</h1>
    }
    return (
        <>
            <h1 className='item'>{greeting}</h1>
            <h1 className="item up">{` ${categoryId || ''}`}</h1>
            <ItemList products={data} />
        </>
    )
}

export default ItemListContainer