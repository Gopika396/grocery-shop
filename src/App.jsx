import React, { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";

import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Delivery from "./components/Delivery";
import About from "./components/About";


function Navbar({ cartCount }) {

  const location = useLocation();

  return (

    <nav className="grocerly-navbar">

      <div className="container">

        <div className="navbar-inner">

          <Link
            to="/"
            className="grocerly-logo"
          >

            <span className="logo-icon">
              <i className="bi bi-shop"></i>
            </span>

            Grocerly

          </Link>


          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#grocerlyNav"
            aria-controls="grocerlyNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >

            <i className="bi bi-list"></i>

          </button>


          <div
            className="collapse navbar-collapse"
            id="grocerlyNav"
          >

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">

                <Link
                  to="/"
                  className={
                    location.pathname === "/grocery-shop/" ||
                    location.pathname === "/grocery-shop"
                      ? "nav-link selected"
                      : "nav-link"
                  }
                >
                  Home
                </Link>

              </li>


              <li className="nav-item">

                <Link
                  to="/products"
                  className={
                    location.pathname.includes("/products")
                      ? "nav-link selected"
                      : "nav-link"
                  }
                >
                  Shop
                </Link>

              </li>


              <li className="nav-item">

                <Link
                  to="/delivery"
                  className={
                    location.pathname.includes("/delivery")
                      ? "nav-link selected"
                      : "nav-link"
                  }
                >
                  Delivery
                </Link>

              </li>


              <li className="nav-item">

                <Link
                  to="/about"
                  className={
                    location.pathname.includes("/about")
                      ? "nav-link selected"
                      : "nav-link"
                  }
                >
                  About
                </Link>

              </li>


              <li className="nav-item">

                <Link
                  to="/cart"
                  className="cart-link"
                >

                  <i className="bi bi-bag"></i>

                  <span>
                    Cart
                  </span>

                  <b>
                    {cartCount}
                  </b>

                </Link>

              </li>

            </ul>

          </div>

        </div>

      </div>

    </nav>

  );

}


function Footer() {

  return (

    <footer className="grocerly-footer">

      <div className="container">

        <div className="footer-top">

          <div className="footer-brand-area">

            <h2>
              <i className="bi bi-shop"></i>
              Grocerly
            </h2>

            <p>
              Everyday groceries made simple,
              fresh and convenient.
            </p>


            <div className="footer-social">

              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#">
                <i className="bi bi-whatsapp"></i>
              </a>

              <a href="#">
                <i className="bi bi-twitter-x"></i>
              </a>

            </div>

          </div>


          <div>

            <h5>
              Explore
            </h5>

            <ul>

              <li>
                <Link to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/products">
                  Shop
                </Link>
              </li>

              <li>
                <Link to="/delivery">
                  Delivery
                </Link>
              </li>

              <li>
                <Link to="/about">
                  About Us
                </Link>
              </li>

            </ul>

          </div>


          <div>

            <h5>
              Categories
            </h5>

            <ul>

              <li>
                Fruits
              </li>

              <li>
                Vegetables
              </li>

              <li>
                Dairy
              </li>

              <li>
                Snacks
              </li>

            </ul>

          </div>


          <div>

            <h5>
              Get In Touch
            </h5>

            <div className="footer-contact">

              <p>
                <i className="bi bi-geo-alt"></i>
                Bengaluru, India
              </p>

              <p>
                <i className="bi bi-telephone"></i>
                +91 91234 56789
              </p>

              <p>
                <i className="bi bi-envelope"></i>
                hello@grocerly.com
              </p>

            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 Grocerly. All Rights Reserved.
          </p>

          <p>
            Good food starts here.
          </p>

        </div>

      </div>

    </footer>

  );

}


function App() {

  const [cart, setCart] = useState([]);


  const addToCart = (product) => {

    setCart((currentCart) => {

      const existing =
        currentCart.find(
          (item) =>
            item.id === product.id
        );


      if (existing) {

        return currentCart.map(
          (item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity:
                    item.quantity + 1
                }
              : item
        );

      }


      return [
        ...currentCart,
        {
          ...product,
          quantity: 1
        }
      ];

    });

  };


  const updateQuantity = (
    id,
    change
  ) => {

    setCart((currentCart) =>

      currentCart

        .map((item) =>

          item.id === id
            ? {
                ...item,
                quantity:
                  item.quantity + change
              }
            : item

        )

        .filter(
          (item) =>
            item.quantity > 0
        )

    );

  };


  const removeFromCart = (id) => {

    setCart((currentCart) =>
      currentCart.filter(
        (item) =>
          item.id !== id
      )
    );

  };


  const clearCart = () => {

    setCart([]);

  };


  const cartCount =
    cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );


  return (

    <BrowserRouter basename="/grocery-shop">

      <Navbar
        cartCount={cartCount}
      />

      <main>

        <Routes>

          <Route
            path="/"
            element={
              <Home
                addToCart={addToCart}
              />
            }
          />


          <Route
            path="/products"
            element={
              <Product
                addToCart={addToCart}
              />
            }
          />


          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                updateQuantity={
                  updateQuantity
                }
                removeFromCart={
                  removeFromCart
                }
                clearCart={
                  clearCart
                }
              />
            }
          />


          <Route
            path="/delivery"
            element={
              <Delivery />
            }
          />


          <Route
            path="/about"
            element={
              <About />
            }
          />

        </Routes>

      </main>

      <Footer />

    </BrowserRouter>

  );

}


export default App;