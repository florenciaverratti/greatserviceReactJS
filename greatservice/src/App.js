import {useState}  from 'react'
import Navbar from './components/Navbar/Navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'

function App() {
  const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log('cantidad de items agregados', quantity)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ItemListContainer show={show} setShow={setShow} greeting="Hola coders"/>
      </header>
    </div>
  );
}

export default App;
