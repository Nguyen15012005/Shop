import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  // Tạo biến trạng thái người dùng
  const [menu, setMenu] = useState("shops")
  const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <Link style={{textDecoration: 'none'}} to='/' onClick={() => setMenu("shops")}>
                <img style={{width: "80px", marginRight: "-18px"}} src={logo} alt="Logo" />
            </Link> 
            <Link style={{textDecoration: 'none'}} to='/' onClick={() => setMenu("shops")}>
                <p>Luxurious</p>
            </Link> 
        </div>
        <ul className="nav-menu">
            <li onClick={() => setMenu("shops")}>
                <Link style={{textDecoration: 'none'}} to='/'>Home</Link> 
                {menu === "shops" && <hr />}
            </li>
            <li onClick={() => setMenu("mens")}>
                <Link style={{textDecoration: 'none'}} to='/mens'>Perfume</Link> 
                {menu === "mens" && <hr />}
            </li>
            <li onClick={() => setMenu("womens")}>
                <Link style={{textDecoration: 'none'}} to='/womens'>Watch</Link> 
                {menu === "womens" && <hr />}
            </li>
            <li onClick={() => setMenu("kids")}>
                <Link style={{textDecoration: 'none'}} to='/kids'>Accessory</Link> 
                {menu === "kids" && <hr />}
            </li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  );
}

export default Navbar;
