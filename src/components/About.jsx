import React from "react";

import mango from "../assets/images/mango.jpg";


function About() {

  return (

    <div className="about-page">

      {/* HERO */}

      <section className="about-hero">

        <div className="container">

          <div
            className="about-hero-content"
            data-aos="fade-up"
          >

            <span>
              ABOUT GROCERLY
            </span>

            <h1>
              Small shop feeling.
              <br />
              Big grocery choice.
            </h1>

            <p>
              Grocerly was created to make everyday
              grocery shopping feel easier, friendlier
              and less complicated.
            </p>

          </div>

        </div>

      </section>


      {/* STORY */}

      <section className="story-section">

        <div className="container">

          <div className="story-grid">

            <div
              className="story-image"
              data-aos="fade-right"
            >

              <img
                src={mango}
                alt="Fresh groceries"
              />

              <div className="story-year">
                <strong>
                  2026
                </strong>

                <span>
                  Grocerly
                  <br />
                  begins
                </span>

              </div>

            </div>


            <div
              className="story-content"
              data-aos="fade-left"
            >

              <span>
                OUR STORY
              </span>

              <h2>
                Built around
                everyday needs.
              </h2>

              <p>
                Grocery shopping should not feel like
                a complicated task. We wanted to create
                a simple place where people could find
                the products they regularly need.
              </p>

              <p>
                From fresh produce to pantry essentials,
                our goal is to make selecting, ordering
                and receiving groceries straightforward.
              </p>


              <div className="story-points">

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Simple shopping
                </div>

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Fresh products
                </div>

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Local delivery
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* VALUES */}

      <section className="values-section">

        <div className="container">

          <div
            className="values-heading"
            data-aos="fade-up"
          >

            <span>
              WHAT MATTERS TO US
            </span>

            <h2>
              Our everyday values.
            </h2>

          </div>


          <div className="values-grid">

            <div
              className="value-card first"
              data-aos="fade-up"
            >

              <div className="value-icon">
                <i className="bi bi-heart"></i>
              </div>

              <span>
                01
              </span>

              <h3>
                Freshness
              </h3>

              <p>
                We focus on bringing useful,
                quality grocery products to
                everyday shoppers.
              </p>

            </div>


            <div
              className="value-card second"
              data-aos="fade-up"
              data-aos-delay="150"
            >

              <div className="value-icon">
                <i className="bi bi-lightning"></i>
              </div>

              <span>
                02
              </span>

              <h3>
                Convenience
              </h3>

              <p>
                Less searching, simpler ordering
                and easy delivery for your routine.
              </p>

            </div>


            <div
              className="value-card third"
              data-aos="fade-up"
              data-aos-delay="300"
            >

              <div className="value-icon">
                <i className="bi bi-people"></i>
              </div>

              <span>
                03
              </span>

              <h3>
                Community
              </h3>

              <p>
                We want Grocerly to feel like
                your friendly local grocery stop.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* NUMBERS */}

      <section className="about-numbers">

        <div className="container">

          <div
            className="about-number-grid"
            data-aos="zoom-in"
          >

            <div>
              <strong>
                5,000+
              </strong>

              <span>
                Customers
              </span>
            </div>

            <div>
              <strong>
                100+
              </strong>

              <span>
                Products
              </span>
            </div>

            <div>
              <strong>
                15 min
              </strong>

              <span>
                Delivery
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* FINAL MESSAGE */}

      <section className="about-final">

        <div className="container">

          <div
            className="about-final-box"
            data-aos="flip-up"
          >

            <i className="bi bi-basket3"></i>

            <h2>
              Good groceries.
              <br />
              Good days.
            </h2>

            <p>
              Thanks for making Grocerly
              part of your everyday routine.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}


export default About;