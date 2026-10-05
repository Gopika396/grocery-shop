import React from "react";


function Delivery() {

  return (

    <div className="delivery-page">

      {/* HEADER */}

      <section className="delivery-hero">

        <div className="container">

          <div className="delivery-hero-grid">

            <div
              data-aos="fade-right"
            >

              <span>
                ONLINE DELIVERY
              </span>

              <h1>
                From our shelf
                <br />
                to your doorstep.
              </h1>

              <p>
                Simple ordering, careful packing
                and quick local delivery.
              </p>

              <a
                href="/products"
                className="yellow-button"
              >
                Order Groceries
                <i className="bi bi-arrow-right"></i>
              </a>

            </div>


            <div
              className="delivery-card"
              data-aos="flip-left"
            >

              <div className="delivery-card-icon">
                <i className="bi bi-bicycle"></i>
              </div>

              <span>
                AVERAGE DELIVERY
              </span>

              <strong>
                15 min
              </strong>

              <p>
                Fast local delivery
                without the rush.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* STEPS */}

      <section className="delivery-steps">

        <div className="container">

          <div
            className="delivery-heading"
            data-aos="fade-up"
          >

            <span>
              HOW IT WORKS
            </span>

            <h2>
              Three steps.
              <br />
              That's it.
            </h2>

          </div>


          <div className="steps-row">

            <div
              className="delivery-step"
              data-aos="fade-up"
            >

              <div className="step-number">
                01
              </div>

              <i className="bi bi-basket"></i>

              <h4>
                Choose
              </h4>

              <p>
                Browse our grocery collection
                and add what you need.
              </p>

            </div>


            <div
              className="delivery-step"
              data-aos="fade-up"
              data-aos-delay="150"
            >

              <div className="step-number">
                02
              </div>

              <i className="bi bi-credit-card"></i>

              <h4>
                Order
              </h4>

              <p>
                Review your basket and
                place your grocery order.
              </p>

            </div>


            <div
              className="delivery-step"
              data-aos="fade-up"
              data-aos-delay="300"
            >

              <div className="step-number">
                03
              </div>

              <i className="bi bi-house-heart"></i>

              <h4>
                Receive
              </h4>

              <p>
                Our delivery team brings
                everything to your door.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* DELIVERY AREAS */}

      <section className="delivery-area-section">

        <div className="container">

          <div className="area-box">

            <div
              data-aos="fade-right"
            >

              <span>
                DELIVERY AREA
              </span>

              <h2>
                Freshness around
                <br />
                your neighbourhood.
              </h2>

              <p>
                We currently deliver across selected
                areas of Bengaluru with more locations
                coming soon.
              </p>

            </div>


            <div
              className="area-list"
              data-aos="fade-left"
            >

              <div>
                <i className="bi bi-geo-alt-fill"></i>
                BTM Layout
              </div>

              <div>
                <i className="bi bi-geo-alt-fill"></i>
                Jayanagar
              </div>

              <div>
                <i className="bi bi-geo-alt-fill"></i>
                Koramangala
              </div>

              <div>
                <i className="bi bi-geo-alt-fill"></i>
                HSR Layout
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* DELIVERY INFO */}

      <section className="delivery-info">

        <div className="container">

          <div className="row g-4">

            <div
              className="col-md-4"
              data-aos="zoom-in"
            >

              <div className="info-block">

                <i className="bi bi-clock"></i>

                <h4>
                  Flexible timing
                </h4>

                <p>
                  Choose a convenient delivery
                  window for your order.
                </p>

              </div>

            </div>


            <div
              className="col-md-4"
              data-aos="zoom-in"
              data-aos-delay="150"
            >

              <div className="info-block">

                <i className="bi bi-box-seam"></i>

                <h4>
                  Careful packing
                </h4>

                <p>
                  Your groceries are packed
                  carefully before leaving.
                </p>

              </div>

            </div>


            <div
              className="col-md-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >

              <div className="info-block">

                <i className="bi bi-headset"></i>

                <h4>
                  Helpful support
                </h4>

                <p>
                  Need help? Our team is ready
                  to assist with your order.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}


export default Delivery;