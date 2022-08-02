import { useEffect, useState } from "react"

const MercadoLibre = () => {
    const [products, setProducts]= useState([])
    const [input, setInput]= useState('')

    const handleSearch =(e)=>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + input)
        .then(response => {
            return response.json()
        }).then(res => setProducts(res.results))
    }

    const handleKeyDown =(e) =>{
        setInput(e.target.value)
    }
    
    return(
    <>
    <h1>MercadoLibre</h1>
        <form onSubmit={handleSearch}>
            <input value={input} 
            //onChange={(e) => setInput(e.target.value)}
            onkeydown={handleKeyDown}
            />
        </form>

    <button type="submit"> Buscar</button>
    
    {products.map(prod => {
        return(
            <div key={prod.id}>
                <h3>{prod.title} </h3>
                <img src={prod.thumbnail} alt={prod.title} />
            </div>
        )
    })}
    </>)
}

export default MercadoLibre