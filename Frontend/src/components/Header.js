import {Link} from "react-router-dom";
import "./Styles/Header.css";
import logo from "../logo.avif";
const Header=()=>{
    return (
        <div className="Website">
        <div className="LogoContainer">
        <img src={logo} alt="HOME" />
        </div>
        <div className="Navbar">
        <ul className="nav-items">
        <li className="a1">
        <Link to="/">Home</Link>
        </li>
        <li className="b1">
          <Link to="/Menu">Menu</Link>
        </li>
        <li className="c1">
          <Link to="/Tables">Tables</Link>
        </li>
        <li className="c1">
          <Link to="/Kitchen">Kitchen</Link>
        </li>
          </ul>
        </div>
        </div>
    )
}
export default Header;