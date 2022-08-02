import { useEffect, useState, useRef} from "react"

//const useMyRef = (initialValue) => useState({current: initialValue})[0]

const Animation= () => {
    const [background,setbackground] = useState('pink')
    const divRef = useRef(null)   

useEffect(()=>{
    const onScroll = () =>{
        
        const div= divRef.current
        
        //const div= document.getElementById('scroll-color')
        //console.log(div.getBoundingClientRect());
        const {y} = div.getBoundingClientRect()
        const backgroundColor= y < 0 ? 'orange' : 'pink'
        setbackground(backgroundColor)
    }
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
},[])

    return(
        //useRef remplaza ids
        <div ref={useRef} 
        //id='scroll-color'
        style={{ background , height: '180vh'}}>
            <h1>Scroll para color</h1>
        </div>
    )
}

export default Animation