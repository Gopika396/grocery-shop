import React from "react";

import { Link } from "react-router-dom";

import mango from "../assets/images/mango.jpg";
import dragonfruit from "../assets/images/dragonfruit.jpg";
import paneer from "../assets/images/paneer.jpg";
import yogurt from "../assets/images/yogurt.jpg";
import heroMarket from "../assets/images/hero-market.jpg";
import broccoli from "../assets/images/broccoli.jpg";


function Home({ addToCart }) {

  const products = [

    {
      id: 1,
      name: "Alphonso Mangoes",
      category: "Fruits",
      price: 160,
      unit: "1 kg",
      image: mango
    },

    {
      id: 2,
      name: "Dragon Fruit",
      category: "Fruits",
      price: 140,
      unit: "2 pcs",
      image: dragonfruit
    },

    {
      id: 6,
      name: "Fresh Paneer",
      category: "Dairy",
      price: 125,
      unit: "250 g",
      image: paneer
    },

    {
      id: 10,
      name: "Creamy Yogurt",
      category: "Dairy",
      price: 70,
      unit: "400 g",
      image: yogurt
    }

  ];


  return (

    <div>

      {/* HERO */}

      <section className="second-hero">

        <div className="container">

          <div className="hero-grid">

            <div
              className="hero-copy"
              data-aos="fade-right"
            >

              <span className="mini-label">
                YOUR NEIGHBOURHOOD GROCER
              </span>

              <h1>
                Groceries
                <br />

                <span>without</span>
                <br />

                the hassle.
              </h1>

              <p>
                Pick what you need, place your order,
                and let us bring everyday essentials
                straight to your door.
              </p>


              <div className="hero-actions">

                <Link
                  to="/products"
                  className="yellow-button"
                >
                  Start Shopping
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

                <Link
                  to="/delivery"
                  className="text-button"
                >
                  How delivery works
                </Link>

              </div>


              <div className="hero-mini-info">

                <div>
                  <strong>
                    15 min
                  </strong>

                  <small>
                    Fast delivery
                  </small>
                </div>

                <div>
                  <strong>
                    100+
                  </strong>

                  <small>
                    Daily products
                  </small>
                </div>

                <div>
                  <strong>
                    4.9/5
                  </strong>

                  <small>
                    Customer rating
                  </small>
                </div>

              </div>

            </div>


            <div
              className="hero-visual"
              data-aos="zoom-in"
            >

              <img
                src={heroMarket}
                alt="Fresh groceries"
              />


              <div className="floating-price">

                <i className="bi bi-lightning-charge-fill"></i>

                <div>

                  <small>
                    TODAY'S DEAL
                  </small>

                  <strong>
                    20% OFF
                  </strong>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CATEGORY STRIP */}

      <section className="category-strip">

        <div className="container">

          <div className="category-row">

            <div
              className="category-tile"
              data-aos="fade-up"
            >

              <div className="category-circle fruits">
                <i className="bi bi-apple"></i>
              </div>

              <div>
                <strong>
                  Fruits
                </strong>

                <small>
                  25+ items
                </small>
              </div>

            </div>


            <div
              className="category-tile"
              data-aos="fade-up"
              data-aos-delay="100"
            >

              <div className="category-circle vegetables">
                <i className="bi bi-flower1"></i>
              </div>

              <div>
                <strong>
                  Vegetables
                </strong>

                <small>
                  30+ items
                </small>
              </div>

            </div>


            <div
              className="category-tile"
              data-aos="fade-up"
              data-aos-delay="200"
            >

              <div className="category-circle dairy">
                <i className="bi bi-cup-straw"></i>
              </div>

              <div>
                <strong>
                  Dairy
                </strong>

                <small>
                  18+ items
                </small>
              </div>

            </div>


            <div
              className="category-tile"
              data-aos="fade-up"
              data-aos-delay="300"
            >

              <div className="category-circle snacks">
                <i className="bi bi-cookie"></i>
              </div>

              <div>
                <strong>
                  Snacks
                </strong>

                <small>
                  20+ items
                </small>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* INTRO */}

      <section className="intro-section">

        <div className="container">

          <div className="intro-layout">

            <div
              className="intro-title"
              data-aos="fade-right"
            >

              <span>
                WHY GROCERLY?
              </span>

              <h2>
                Your pantry,
                <br />
                our priority.
              </h2>

            </div>


            <div
              className="intro-text"
              data-aos="fade-left"
            >

              <p>
                We make everyday grocery shopping
                easier by bringing useful products,
                simple ordering and reliable delivery
                together in one place.
              </p>

              <Link
                to="/about"
                className="dark-link"
              >
                Discover our story
                <i className="bi bi-arrow-right"></i>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* DEAL */}

      <section className="deal-section">

        <div className="container">

          <div
            className="deal-box"
            data-aos="flip-up"
          >

            <div className="deal-number">
              01
            </div>

            <div className="deal-content">

              <span>
                WEEKLY PICK
              </span>

              <h2>
                Fresh choices.
                <br />
                Friendly prices.
              </h2>

              <p>
                Save more on selected everyday
                essentials this week.
              </p>

              <Link
                to="/products"
                className="dark-button"
              >
                See the deals
              </Link>

            </div>


            <div className="deal-image">

              <img
                src={broccoli}
                alt="Fresh vegetables"
              />

            </div>

          </div>

        </div>

      </section>


      {/* PRODUCTS */}

      <section className="home-products">

        <div className="container">

          <div className="product-heading-row">

            <div data-aos="fade-right">

              <span>
                POPULAR TODAY
              </span>

              <h2>
                Things people
                <br />
                are buying.
              </h2>

            </div>


            <Link
              to="/products"
              className="outline-button"
              data-aos="fade-left"
            >
              View everything
              <i className="bi bi-arrow-up-right"></i>
            </Link>

          </div>


          <div className="row g-4">

            {products.map(
              (product, index) => (

                <div
                  className="col-sm-6 col-lg-3"
                  key={product.id}
                  data-aos="fade-up"
                  data-aos-delay={
                    index * 100
                  }
                >

                  <div className="simple-product">

                    <div className="simple-product-image">

                      <span>
                        Fresh
                      </span>

                      <img
                        src={product.image}
                        alt={product.name}
                      />

                    </div>


                    <div className="simple-product-info">

                      <small>
                        {product.category}
                      </small>

                      <h5>
                        {product.name}
                      </h5>

                      <div>

                        <strong>
                          ₹{product.price}
                        </strong>

                        <button
                          onClick={() =>
                            addToCart(product)
                          }
                        >
                          +
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* STATS */}

      <section className="stats-section">

        <div className="container">

          <div
            className="stats-grid"
            data-aos="fade-up"
          >

            <div>
              <strong>
                5K+
              </strong>

              <span>
                Happy customers
              </span>
            </div>

            <div>
              <strong>
                100+
              </strong>

              <span>
                Grocery essentials
              </span>
            </div>

            <div>
              <strong>
                15 min
              </strong>

              <span>
                Average delivery
              </span>
            </div>

            <div>
              <strong>
                7 days
              </strong>

              <span>
                Open every week
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* NEWSLETTER */}

      <section className="simple-newsletter">

        <div className="container">

          <div
            className="newsletter-layout"
            data-aos="zoom-in"
          >

            <div>

              <span>
                GROCERLY NOTES
              </span>

              <h2>
                Deals worth knowing about.
              </h2>

            </div>


            <form
              onSubmit={(e) =>
                e.preventDefault()
              }
            >

              <input
                type="email"
                placeholder="Your email address"
              />

              <button>
                Join
              </button>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
}


export default Home;