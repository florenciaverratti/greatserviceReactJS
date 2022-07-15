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
                    <li> <a> Tinturas</a> </li>
                    <li> <a> Tratamientos</a> </li>
                    <li> <a> Materiales</a> </li>
                    <li><CartWidget/></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar