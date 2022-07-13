import './Navbar.css'
import logo from './LogoC.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="logo">
                    <img src={logo} className="logoimg" alt="logotipo"/>  
            </div>
            <div className="secciones">
                <ul>
                    <li> <a> link 1</a> </li>
                    <li> <a> link 2</a> </li>
                    <li> <a> link 3</a> </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;