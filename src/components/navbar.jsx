// import React, { useState, useEffect } from "react";
import './navbar.css';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <header>
//       <div className="container">
//       <input type="checkbox" name="" id="check" />

//         <div className="logo-container">
//           <h3 className="logo">PlywoodHub</h3>
//         </div>

//         <div className="nav-btn">
//           <div className="conts">
//             <div className="nav-btn">
//               <div className="burger-menu" onClick={toggleDropdown}>
//                 <div className={`bar ${isDropdownOpen ? 'open' : ''}`}></div>
//                 <div className={`bar ${isDropdownOpen ? 'open' : ''}`}></div>
//                 <div className={`bar ${isDropdownOpen ? 'open' : ''}`}></div>
//               </div>
//             </div>
//             <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
//               <ul>
//                 <li>
//                   <a href="/">Home</a>
//                 </li>
//                 <li>
//                   <a href="/shop">Shop</a>
//                 </li>
//                 <li>
//                   <a href="#">Decorative Panels</a>
//                 </li>
//                 <li>
//                   <a href="#">About Us</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="nav-links">
//             <ul>
//               <li className="nav-link" style={{ '--i': '.6s' }}>
//                 <Link to="/">მთავარი</Link>
//               </li>
//               <li className="nav-link" style={{ '--i': '.85s' }}>
//                 <Link to='/shop'>ავეჯი</Link>
//               </li>
//               <li className="nav-link" style={{ '--i': '1.1s' }}>
//                 <a href="#">დეკორატიული პანელები</a>
//               </li>
//               <li className="nav-link" style={{ '--i': '1.35s' }}>
//                 <a href="#">ჩვენს შესახებ</a>
//               </li>
//             </ul>
//           </div>
//           <Link className="parent" to='/cart'>    
//             <ShoppingCartIcon className="shoppingcarticon1" />
//           </Link>
//         </div>
//         <div className="hamburger-menu-container">
//           <Link to='/cart' >
//             <ShoppingCartIcon className="shoppingcarticon" />
//           </Link>
//           <div className="hamburger-menu">
//             <div></div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;import React, { useState } from 'react';
import React, { useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Navbar () {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
      PlywoodHub
      </Link>
      <Link to='/cart' className='manamde' >
        <ShoppingCartIcon className="shoppingcarticon" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink className='navi' to="/shop">ავეჯი</NavLink>
        </li>
        <li>
          <NavLink className='navi' to="/services">დეკორატიული პანელები</NavLink>
        </li>
        <li>
          <NavLink className='navi tt' to="/contact">ჩვენს შესახებ</NavLink>
        </li>
      </ul>
      <Link to='/cart' className='mere' >
        <ShoppingCartIcon className="shoppingcarticon" />
      </Link>
    </nav>
  );
}