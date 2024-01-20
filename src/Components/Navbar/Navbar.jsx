import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
          <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Men");
            }}
          >
            <Link to="/mens"> Men</Link> {menu === "Men" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Women");
            }}
          >
            <Link to="/womens">Women</Link> {menu === "Women" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Kids");
            }}
          >
            <Link to="/kids">Kids</Link>
            {menu === "Kids" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link to="/login">
            <button type="button">Login</button>
          </Link>
          <Link to="/cart">
            <img src={cart_icon} alt="cart-logo" />
          </Link>
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
