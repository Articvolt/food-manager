import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Food Manager</h1>
        <div className="nav-links">
          <Link to="/" className="nav-item">Accueil</Link>
          <Link to="/card" className="nav-item">Création d'un nouveau menu</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
