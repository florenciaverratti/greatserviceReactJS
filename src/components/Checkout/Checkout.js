import { useContext, useState } from "react"
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, Timestamp,  getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase/index'


const Checkout = () => {
    const [purchased, setPurchased] = useState(0)
    const { cart, clearCart, total } = useContext(CartContext)
    const [orderN, setOrderN] = useState("")
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(0);
    const [mail, setMail] = useState("");

    if (purchased === 1){
        return(  
            <div>
                <h1 className="item">Gracias por su compra {name}!</h1>
            </div>)
    }
    
    const createOrder = async () => {
        try {
            const objOrder = {
                //tirar los inputs
                buyer: {
                    name: name,
                    phone: phone,
                    email: mail
                },
                items: cart,
                total,
                date: Timestamp.fromDate(new Date())
            }

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            
            const { docs } = productsAddedFromFirestore

            const outOfStock = []

            const batch = writeBatch(db)

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAdded = cart.find(prod => prod.id === doc.id)
                const prodQuaantity = productAdded?.quantity

                if(stockDb >= prodQuaantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuaantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                batch.commit()
                console.log(orderAdded.id)
                clearCart()
                setOrderN(createOrder.id)
                setPurchased(1)
            } else {
                console.log('Hay productos fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            console.log('se termino la ejecucion de la funcion createOrder')
        }

    }

    return (
        <div>
            <h1 className="item">Ya casi termina!</h1>
            <h2 className="item">Complete el formulario con sus datos</h2>
            <form>
                <label>Name: 
                    <input type="text" onChange={(e) => {setName(e.target.value);}}/>
                </label>
                <label>Email:
                    <input type="text" onChange={(e) => {setMail(e.target.value);}}/>
                </label>
                <label>Phone:
                    <input type="number" onChange={(e) => {setPhone(e.target.value);}}/>
                </label>
            </form>
            <button type="submit" className="Button" onClick={createOrder}>Finalizar compra</button>
        </div>
    )
}

export default Checkout