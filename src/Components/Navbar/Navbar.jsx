import "./Navbar.css"
import logo from "../../assets/logo.webp"
import cart_icon from "../../assets/cart_icon.png"
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContextValue'
const Navbar = () => {
    const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='navbar'>
        <Link className="nav-logo" to="/" aria-label="ShopEase home">
            <img src={logo} alt="" height="50px" />
            <p>ShopEase</p>
        </Link>
        <ul className='nav-menu'>
            <li><NavLink end to="/">Home</NavLink></li>
            <li><NavLink to="/mens">Men</NavLink></li>
            <li><NavLink to="/womens">Women</NavLink></li>
            <li><NavLink to="/kids">Kids</NavLink></li>
        </ul>
        <div className="nav-login-cart">
           <Link to="/login"> <button>Login</button></Link>
            <Link className="nav-cart-link" aria-label={`Shopping cart, ${getTotalCartItems()} items`} to="/cart"><img src={cart_icon} alt="" height="40px" /><span className="nav-cart-count">{getTotalCartItems()}</span></Link>
        </div>
    </div>
  )
}

export default Navbar
