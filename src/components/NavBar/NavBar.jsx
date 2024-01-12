import CartWidget from "../CartWidget/CartWidget"
import Button from "../Button/Button"
import chilli from "../NavBar/assets/chilli.png"
import {Link} from "react-router-dom"


const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <img src={chilli} alt="" />
          <Link to="/" className="navbar-brand">Chilli Music</Link>
  
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto"> 
              <li className="nav-item">
              <Link to="/category/earbuds" className="custom-btn">Earbuds</Link>
              </li>
              <li className="nav-item">
              <Link to="/category/accesories" className="custom-btn">Accesories</Link>
              </li>
              <li className="nav-item">
              <Link to="/category/speakers" className="custom-btn">Speakers</Link>
              </li>
            </ul>
          </div>
  
          <CartWidget />
        </div>
      </nav>
    );
  };
  
  export default NavBar;