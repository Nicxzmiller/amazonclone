import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="grid-container">
          <!--    header-->
          <header className="header">
              <div className="brand">
                  <button onClick="openMenu()">
                      &#9776;
                  </button>
                  <a href="index.html">Amazonclone</a>
              </div>
              <div className="header-links">
                  <a href="cart.html">Cart</a>
                  <a href="signin.html">Sign in</a>
              </div>
          </header>
          <!--        sidebar-->
          <aside className="sidebar">
              <h3>Shopping Categories</h3>
              <button className="sidebar-close-button" onClick="closeMenu()">X</button>
              <ul>
                  <li>
                      <a href="index.html">Pants</a>
                  </li>
                  <li>
                      <a href="index.html">Shirts</a>
                  </li>
              </ul>
          </aside>
          <!--    Content-->
          <main className="main">
              <div className="content">
                  <ul className="products">
                      <li>
                          <div className="product">
                              <img className="product-image" src="./images/d1.jpg" alt="product"/>
                                  <div className="product-name">
                                      <a href="product.html">Slim Shirt</a></div>
                                  <div className="product-brand">Nike</div>
                                  <div className="product-price">£60</div>
                                  <div className="product-rating">4.5 Starts (10 Reviews)</div>
                          </div>
                      </li>
                      <li>
                          <div className="product">
                              <img className="product-image" src="./images/d1.jpg" alt="product"/>
                                  <div className="product-name">
                                      <a href="product.html">Slim Shirt</a></div>
                                  <div className="product-brand">Nike</div>
                                  <div className="product-price">£60</div>
                                  <div className="product-rating">4.5 Starts (10 Reviews)</div>
                          </div>
                      </li>
                      <li>
                          <div className="product">
                              <img className="product-image" src="./images/d1.jpg" alt="product"/>
                                  <div className="product-name">
                                      <a href="product.html">Slim Shirt</a></div>
                                  <div className="product-brand">Nike</div>
                                  <div className="product-price">£60</div>
                                  <div className="product-rating">4.5 Starts (10 Reviews)</div>
                          </div>
                      </li>
                      <li>
                          <div className="product">
                              <img className="product-image" src="./images/d1.jpg" alt="product"/>
                                  <div className="product-name">
                                      <a href="product.html">Slim Shirt</a></div>
                                  <div className="product-brand">Nike</div>
                                  <div className="product-price">£60</div>
                                  <div className="product-rating">4.5 Starts (10 Reviews)</div>
                          </div>
                      </li>
                      <li>
                          <div className="product">
                              <img className="product-image" src="./images/d1.jpg" alt="product"/>
                                  <div className="product-name">
                                      <a href="product.html">Slim Shirt</a></div>
                                  <div className="product-brand">Nike</div>
                                  <div className="product-price">£60</div>
                                  <div className="product-rating">4.5 Starts (10 Reviews)</div>
                          </div>
                      </li>
                      <li>
                          <div className="product">
                              <img className="product-image" src="./images/d1.jpg" alt="product"/>
                                  <div className="product-name">
                                      <a href="product.html">Slim Shirt</a></div>
                                  <div className="product-brand">Nike</div>
                                  <div className="product-price">£60</div>
                                  <div className="product-rating">4.5 Starts (10 Reviews)</div>
                          </div>
                      </li>
                      <li>
                          <div className="product">
                              <img className="product-image" src="./images/d1.jpg" alt="product"/>
                                  <div className="product-name">
                                      <a href="product.html">Slim Shirt</a></div>
                                  <div className="product-brand">Nike</div>
                                  <div className="product-price">£60</div>
                                  <div className="product-rating">4.5 Starts (10 Reviews)</div>
                          </div>
                      </li>

                  </ul>
              </div>
          </main>
          <!--    Footer-->
          <footer className="footer">
              <a href="">Conditions of use</a>
              <a href="">Privacy Notice</a>
              <a href="">Interest-based Ads</a>
              All Rights Reserved
          </footer>
      </div>
  );
}

export default App;
