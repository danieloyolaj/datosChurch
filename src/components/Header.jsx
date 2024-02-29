import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className='container'>
        <div className="header-container">
            <div className="logo-container">
                <Link to='/' className='logo'>
                    <img src={Logo} alt="Logo" />
                </Link>
                <span>Meetings Data</span>
                <div className="nav-container">
                    <nav className="navigation">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/meetings">Meetings</NavLink></li>
                            <li><NavLink to="/activities">Activities</NavLink></li>
                            <li><NavLink to="/datos">Estadísticas</NavLink></li>
                            <li><NavLink to="/login">Log in</NavLink></li>
                            <li><NavLink to="/logout">Log out</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header