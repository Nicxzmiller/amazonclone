import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import SigninScreen from "./Screens/SigninScreen";
import {useSelector} from "react-redux";
import RegisterScreen from "./Screens/RegisterScreen";
import ProductsScreen from "./Screens/ProductsScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import OrderScreen from "./Screens/OrderScreen";
import ProfileScreen from "./Screens/ProfileScreen";

function App() {

    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;

    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    };

    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    };

  return (
      <BrowserRouter>
          <div className="grid-container">
              <header className="header">
                  <div className="brand">
                      <button onClick={openMenu}>
                          &#9776;
                      </button>
                      <Link to="/">Amazonclone</Link>
                  </div>
                  <div className="header-links">
                      <a href="cart.html">Cart</a>
                      {
                          userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                              <Link to="/signin">
                                  Sign in
                              </Link>
                      }
                  </div>
              </header>
              <aside className="sidebar">
                  <h3>Shopping Categories</h3>
                  <button className="sidebar-close-button" onClick={closeMenu}>X</button>
                  <ul>
                      <li>
                          <a href="index.html">Pants</a>
                      </li>
                      <li>
                          <a href="index.html">Shirts</a>
                      </li>
                  </ul>
              </aside>

              <main className="main">
                  <div className="content">
                      <Route path="/profile" component={ProfileScreen} />
                      <Route path="/order/:id" component={OrderScreen} />
                      <Route path="/products" component={ProductsScreen} />
                      <Route path="/payment" component={PaymentScreen} />
                      <Route path="/shipping" component={ShippingScreen} />
                      <Route path="/placeorder" component={PlaceOrderScreen} />
                      <Route path="/signin" component={SigninScreen} />
                      <Route path="/register" component={RegisterScreen} />
                      <Route path="/product/:id" component={ProductScreen} />
                      <Route path="/cart/:id?" component={CartScreen} />
                      <Route exact={true} path="/" component={HomeScreen} />
                  </div>
              </main>

              <footer className="footer">
                  <a href="">Conditions of use</a>
                  <a href="">Privacy Notice</a>
                  <a href="">Interest-based Ads</a>
                  All Rights Reserved
              </footer>
          </div>
      </BrowserRouter>
  );
}

export default App;
