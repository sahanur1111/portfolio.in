import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className="navbar-link" data-nav-link>
            About
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/resume" className="navbar-link" data-nav-link>
            Resume
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/portfolio" className="navbar-link" data-nav-link>
            Projects
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/contact" className="navbar-link" data-nav-link>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
