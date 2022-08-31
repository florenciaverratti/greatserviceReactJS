import './Checkout.css'

import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'
import { useContext, useState } from "react"

import { CartContext } from '../../context/CartContext'
import { db } from '../../services/firebase/index'

const Checkout = () => {
    const [mensaje, setmensaje] = useState(0)
    const { cart, clearCart, total } = useContext(CartContext)
    const [orderN, setOrderN] = useState("")
    const [nombre, setnombre] = useState("");
    const [celular, setcelular] = useState(0);
    const [mail, setMail] = useState("");

    if (mensaje === 1){
        return(  
            <div>
                <h1 classnombre="item">Gracias por su compra {nombre}!</h1>
            </div>)
    }
    
    const crearOden = async () => {
        try {
            const orden = {
                comprador: {
                    nombre: nombre,
                    celular: celular,
                    email: mail
                },
                items: cart,
                total,
                date: Timestamp.fromDate(new Date())
            }

            const ids = cart.map(prod => prod.id)

            const productosReferidos = collection(db, 'products')

            const productosDeFirestore = await getDocs(query(productosReferidos, where(documentId(), 'in', ids)))
            
            const { docs } = productosDeFirestore

            const outOfStock = []

            const batch = writeBatch(db)

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productoAgregado = cart.find(prod => prod.id === doc.id)
                const prodQuaantity = productoAgregado?.quantity

                if(stockDb >= prodQuaantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuaantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                const ordenReferida = collection(db, 'orders')
                const agregarOrden = await addDoc(ordenReferida, orden)
                batch.commit()
                console.log(agregarOrden.id)
                clearCart()
                setOrderN(crearOden.id)
                setmensaje(1)
            } else {
                console.log('Hay productos fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            console.log('se termino la ejecucion de la funcion crearOden')
        }

    }

    return (
        <div >
            <h1 classnombre="item">Ya casi termina!</h1>
            <form classnombre='ItemDetail'>
            <h2 classnombre="tipografiaC">Complete el formulario con sus datos</h2>
                <label classnombre='tipografiaC'>Nombre: 
                    <input classnombre='input' placeholder='Florencia' type="text" onChange={(e) => {setnombre(e.target.value);}}/>
                </label>
                <label classnombre='tipografiaC'>Email:
                    <input classnombre='input' placeholder='flor@mail.com' type="text" onChange={(e) => {setMail(e.target.value);}}/>
                </label>
                <label classnombre='tipografiaC'>Celular:
                    <input classnombre='input' placeholder='+54911 2345-6789' type="number" onChange={(e) => {setcelular(e.target.value);}}/>
                </label>
            </form>
            <button type="submit" classnombre="Button" onClick={crearOden}>Finalizar compra</button>
        </div>
    )
}

export default Checkout