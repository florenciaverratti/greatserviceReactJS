import './Navbar.css';
import logo from './LogoC.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="logo">
                <Link to='/'>
                    <img src={logo} className="logoimg" alt="logotipo"/>  
                </Link>
            </div>
            <div className="secciones">
                <ul>
                <Link to='/category/tratamientos' className='seccion'>Tratamientos</Link>
                <Link to='/category/productos'className='seccion'>Productos</Link>
                <Link to='/category/servicios'className='seccion'>Servicios</Link>
                    <li className='seccion'><CartWidget/></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
