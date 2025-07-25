import { NavLink } from "react-router-dom";

function Navbar() {
    return (
   <nav className="navbar navbar-expand-lg navbar-custom">
  <div className="container-fluid">
    <NavLink className="navbar-brand"  to="/">Location Des Voitures</NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item" >
          <a className="nav-link" href="#">Our Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        
    )
}

export default Navbar;