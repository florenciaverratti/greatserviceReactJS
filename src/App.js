import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout'
import CartContainer from './components/CartContainer/CartContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import { UserContextProvider} from './context/UserContext'
import { NotificationProvider} from './notification/Notification'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NotificationProvider>
        <UserContextProvider>
          <CartContextProvider>
            <BrowserRouter>
              <Navbar/>
              <Routes>
                <Route path='/' element={<ItemListContainer greeting="Todos nuestros productos" />}/>
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<CartContainer/>} />
                <Route path='/checkout' element={<Checkout />}/>
                <Route path='*' element={<h1 className="item">PAGE NOT FOUND 404</h1>} />
              </Routes>
            </BrowserRouter> 
          </CartContextProvider>
        </UserContextProvider>
      </NotificationProvider>
      </header>
    </div>
  )
}

export default App;
