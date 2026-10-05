import React, { useState } from "react";

import cookies from "../assets/images/cookies.jpg";
import dragonfruit from "../assets/images/dragonfruit.jpg";
import granola from "../assets/images/granola.jpg";
import mango from "../assets/images/mango.jpg";
import nachos from "../assets/images/nachos.jpg";
import noodles from "../assets/images/noodles.jpg";
import paneer from "../assets/images/paneer.jpg";
import pasta from "../assets/images/pasta.jpg";
import pomegranate from "../assets/images/pomegranate.jpg";
import popcorn from "../assets/images/popcorn.jpg";
import yogurt from "../assets/images/yogurt.jpg";
import heroMarket from "../assets/images/hero-market.jpg";


function Product({ addToCart }) {

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
      id: 3,
      name: "Pomegranate",
      category: "Fruits",
      price: 130,
      unit: "1 kg",
      image: pomegranate
    },

    {
      id: 4,
      name: "Crunchy Granola",
      category: "Breakfast",
      price: 220,
      unit: "500 g",
      image: granola
    },

    {
      id: 5,
      name: "Instant Noodles",
      category: "Pantry",
      price: 95,
      unit: "5 packs",
      image: noodles
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
      id: 7,
      name: "Italian Pasta",
      category: "Pantry",
      price: 110,
      unit: "500 g",
      image: pasta
    },

    {
      id: 8,
      name: "Salted Nachos",
      category: "Snacks",
      price: 85,
      unit: "150 g",
      image: nachos
    },

    {
      id: 9,
      name: "Butter Popcorn",
      category: "Snacks",
      price: 75,
      unit: "100 g",
      image: popcorn
    },

    {
      id: 10,
      name: "Creamy Yogurt",
      category: "Dairy",
      price: 70,
      unit: "400 g",
      image: yogurt
    },

    {
      id: 11,
      name: "Chocolate Cookies",
      category: "Snacks",
      price: 90,
      unit: "200 g",
      image: cookies
    },

    {
      id: 12,
      name: "Market Special",
      category: "Fresh Picks",
      price: 180,
      unit: "1 pack",
      image: heroMarket
    }

  ];


  const [category, setCategory] =
    useState("All");

  const [search, setSearch] =
    useState("");

  const [currentPage, setCurrentPage] =
    useState(1);


  const productsPerPage = 4;


  const filteredProducts =
    products.filter((product) => {

      const categoryMatch =
        category === "All" ||
        product.category === category;

      const searchMatch =
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      return (
        categoryMatch &&
        searchMatch
      );

    });


  const totalPages =
    Math.ceil(
      filteredProducts.length /
      productsPerPage
    );


  const startIndex =
    (currentPage - 1) *
    productsPerPage;


  const visibleProducts =
    filteredProducts.slice(
      startIndex,
      startIndex + productsPerPage
    );


  const changeCategory = (value) => {

    setCategory(value);
    setCurrentPage(1);

  };


  const changeSearch = (value) => {

    setSearch(value);
    setCurrentPage(1);

  };


  return (

    <section className="market-page">

      <div className="container">


        <div
          className="market-heading"
          data-aos="fade-down"
        >

          <div>

            <span className="market-label">
              GROCERY MARKET
            </span>

            <h1>
              Shop the market.
            </h1>

            <p>
              Fresh picks and everyday essentials
              for your kitchen.
            </p>

          </div>


          <div className="market-search">

            <i className="bi bi-search"></i>

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                changeSearch(e.target.value)
              }
            />

          </div>

        </div>



        <div
          className="market-filters"
          data-aos="fade-up"
        >

          <button
            className={
              category === "All"
                ? "market-filter active"
                : "market-filter"
            }
            onClick={() =>
              changeCategory("All")
            }
          >
            All
          </button>


          <button
            className={
              category === "Fruits"
                ? "market-filter active"
                : "market-filter"
            }
            onClick={() =>
              changeCategory("Fruits")
            }
          >
            Fruits
          </button>


          <button
            className={
              category === "Breakfast"
                ? "market-filter active"
                : "market-filter"
            }
            onClick={() =>
              changeCategory("Breakfast")
            }
          >
            Breakfast
          </button>


          <button
            className={
              category === "Pantry"
                ? "market-filter active"
                : "market-filter"
            }
            onClick={() =>
              changeCategory("Pantry")
            }
          >
            Pantry
          </button>


          <button
            className={
              category === "Dairy"
                ? "market-filter active"
                : "market-filter"
            }
            onClick={() =>
              changeCategory("Dairy")
            }
          >
            Dairy
          </button>


          <button
            className={
              category === "Snacks"
                ? "market-filter active"
                : "market-filter"
            }
            onClick={() =>
              changeCategory("Snacks")
            }
          >
            Snacks
          </button>

        </div>



        <div
          className="market-result"
          data-aos="fade-right"
        >

          <span>
            Showing {filteredProducts.length} products
          </span>

          <span>
            Freshly stocked today
          </span>

        </div>



        <div className="market-grid">

          {visibleProducts.map(
            (product, index) => (

              <div
                className="market-card"
                key={product.id}
                data-aos="zoom-in"
                data-aos-delay={index * 80}
              >

                <div className="market-card-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <span>
                    {product.category}
                  </span>

                </div>


                <div className="market-card-body">

                  <h3>
                    {product.name}
                  </h3>

                  <p>
                    {product.unit}
                  </p>


                  <div className="market-card-bottom">

                    <strong>
                      ₹{product.price}
                    </strong>

                    <button
                      onClick={() =>
                        addToCart(product)
                      }
                    >
                      Add
                      <i className="bi bi-plus"></i>
                    </button>

                  </div>

                </div>

              </div>

            )
          )}

        </div>



        {visibleProducts.length === 0 && (

          <div
            className="market-empty"
            data-aos="zoom-in"
          >

            <i className="bi bi-search"></i>

            <h3>
              No products found
            </h3>

            <p>
              Try another search or category.
            </p>

          </div>

        )}



        {totalPages > 1 && (

          <div
            className="market-pagination"
            data-aos="fade-up"
          >

            <button
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage(
                  currentPage - 1
                )
              }
            >
              <i className="bi bi-arrow-left"></i>
            </button>


            {Array.from(
              { length: totalPages },
              (_, index) => (

                <button
                  key={index + 1}
                  className={
                    currentPage === index + 1
                      ? "page-number active"
                      : "page-number"
                  }
                  onClick={() =>
                    setCurrentPage(
                      index + 1
                    )
                  }
                >
                  {index + 1}
                </button>

              )
            )}


            <button
              disabled={
                currentPage === totalPages
              }
              onClick={() =>
                setCurrentPage(
                  currentPage + 1
                )
              }
            >
              <i className="bi bi-arrow-right"></i>
            </button>

          </div>

        )}

      </div>

    </section>

  );

}


export default Product;