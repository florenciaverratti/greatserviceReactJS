const ButtonDetalle= ({ product }) => {
    const handleClick = (description) => {
        console.log(description)
    }

    return(
        <button onClick={handleClick}> Ver más</button>
    )
}
export default ButtonDetalle