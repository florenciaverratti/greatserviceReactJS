const Button = ({handleClick, style, children})=> {
    return <button onClick={handleClick} style={style}> {children} </button>
}

export default Button