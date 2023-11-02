import React, { useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
        Plywoodhub
      </Link>
      <Link to="/cart" className="manamde">
        <ShoppingCartIcon className="shoppingcarticon" />
      </Link>

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink className="navi" to="/shop">
            ავეჯი
          </NavLink>
        </li>
        <li>
          <NavLink className="navi" to="/panel">
            დეკორატიული პანელები
          </NavLink>
        </li>
        <li>
          <NavLink className="navi tt" to="/AboutUs">
            ჩვენს შესახებ
          </NavLink>
        </li>
        <li></li>
      </ul>
      <Link to="/cart" className="mere">
        <ShoppingCartIcon className="shoppingcarticon" />
      </Link>
    </nav>
  );
}
