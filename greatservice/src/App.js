import {useState}  from 'react'
import Navbar from './components/Navbar/Navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

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
        <ItemDetailContainer show={show} setShow={setShow}/>
      </header>
    </div>
  );
}

export default App;
