import './Navbar.css';
import logo from './LogoC.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink  } from 'react-router-dom'

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
                <NavLink to='/category/tratamientos' class className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tratamientos</NavLink>
                <NavLink to='/category/productos' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Productos</NavLink>
                <NavLink to='/category/servicios'className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Servicios</NavLink>
                    <li className='seccion'><CartWidget/></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
