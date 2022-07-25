import './Navbar.css';
import logo from './LogoC.png';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="logo">
                    <img src={logo} className="logoimg" alt="logotipo"/>  
            </div>
            <div className="secciones">
                <ul>
                    <li className='seccion'> <a className='seccion'> Tinturas</a> </li>
                    <li className='seccion'> <a className='seccion'> Tratamientos</a> </li>
                    <li className='seccion'> <a className='seccion'> Materiales</a> </li>
                    <li className='seccion'><CartWidget/></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
