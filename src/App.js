
import './App.css';
import {useState}  from 'react'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'
import Tarjeta from './components/Tarjeta/Tarjeta';

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ItemListContainer style={{color: '#c77400'}} show={show} setShow={setShow} greeting="Hola coders"/>
        <Tarjeta/>
      </header>
    </div>
  );
}

export default App;
