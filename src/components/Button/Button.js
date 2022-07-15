const Button = (props)=> {
    return <button style={{color: props.color}} onClick={props.handleClick}> {props.children} </button>
}

export default Button