import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='nav'>
      <div className='nav-logo'>🚗 Location Des Voitures</div>
      <ul className='nav-menu'>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cars" className={({ isActive }) => isActive ? "active" : ""}>
            Cars List
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            À propos
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>
            Se connecter
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
