import React, { useState } from "react";

function Cart({
  cart,
  updateQuantity,
  removeFromCart,
  clearCart
}) {

  const [ordered, setOrdered] = useState(false);


  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  const deliveryFee =
    subtotal === 0
      ? 0
      : subtotal >= 500
        ? 0
        : 40;


  const total =
    subtotal + deliveryFee;


  const placeOrder = () => {

    if (cart.length === 0) {
      return;
    }

    setOrdered(true);

  };


  if (ordered) {

    return (

      <section className="cart-page">

        <div className="container">

          <div
            className="order-complete"
            data-aos="zoom-in"
          >

            <div className="success-icon">
              <i className="bi bi-check2"></i>
            </div>

            <span>
              ORDER CONFIRMED
            </span>

            <h1>
              Your groceries
              <br />
              are on the way!
            </h1>

            <p>
              Thank you for shopping with
              Grocerly. Your order has been
              successfully placed.
            </p>

            <div className="delivery-message">

              <i className="bi bi-truck"></i>

              <div>

                <strong>
                  Fast delivery
                </strong>

                <span>
                  Your groceries will reach
                  you shortly.
                </span>

              </div>

            </div>

            <button
              onClick={() => {
                clearCart();
                setOrdered(false);
              }}
              className="continue-shopping"
            >
              Continue Shopping
            </button>

          </div>

        </div>

      </section>

    );

  }


  return (

    <section className="cart-page">

      <div className="container">

        <div
          className="cart-heading"
          data-aos="fade-down"
        >

          <div>

            <span>
              YOUR BAG
            </span>

            <h1>
              Ready to check out?
            </h1>

          </div>

          <div className="cart-item-count">

            <i className="bi bi-bag"></i>

            {cart.length} items

          </div>

        </div>


        {cart.length === 0 ? (

          <div
            className="empty-cart"
            data-aos="zoom-in"
          >

            <div className="empty-cart-icon">

              <i className="bi bi-bag-x"></i>

            </div>

            <span>
              YOUR BAG IS EMPTY
            </span>

            <h2>
              Nothing here yet.
            </h2>

            <p>
              Add some fresh groceries and
              they will appear here.
            </p>

          </div>

        ) : (

          <div className="cart-layout">

            <div className="cart-items">

              <div
                className="cart-list-header"
                data-aos="fade-right"
              >

                <span>
                  ITEMS
                </span>

                <button
                  onClick={clearCart}
                >
                  Clear bag
                </button>

              </div>


              {cart.map((item, index) => (

                <div
                  className="cart-item"
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >

                  <div className="cart-item-image">

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                  </div>


                  <div className="cart-item-info">

                    <small>
                      {item.category}
                    </small>

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      {item.unit}
                    </p>

                  </div>


                  <div className="quantity-box">

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          -1
                        )
                      }
                    >
                      −
                    </button>

                    <strong>
                      {item.quantity}
                    </strong>

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          1
                        )
                      }
                    >
                      +
                    </button>

                  </div>


                  <div className="cart-item-total">

                    <strong>
                      ₹
                      {item.price *
                        item.quantity}
                    </strong>

                    <button
                      onClick={() =>
                        removeFromCart(
                          item.id
                        )
                      }
                      className="remove-item"
                    >
                      <i className="bi bi-trash3"></i>
                    </button>

                  </div>

                </div>

              ))}

            </div>


            <aside
              className="checkout-card"
              data-aos="fade-left"
            >

              <span>
                ORDER SUMMARY
              </span>

              <h2>
                Your total
              </h2>


              <div className="summary-line">

                <span>
                  Subtotal
                </span>

                <strong>
                  ₹{subtotal}
                </strong>

              </div>


              <div className="summary-line">

                <span>
                  Delivery
                </span>

                <strong>

                  {deliveryFee === 0
                    ? "FREE"
                    : `₹${deliveryFee}`}

                </strong>

              </div>


              {subtotal > 0 &&
                subtotal < 500 && (

                <div className="free-delivery-note">

                  <i className="bi bi-truck"></i>

                  Add ₹
                  {500 - subtotal}
                  {" "}more for free delivery.

                </div>

              )}


              {subtotal >= 500 && (

                <div className="free-delivery-note">

                  <i className="bi bi-check-circle"></i>

                  You unlocked free delivery!

                </div>

              )}


              <div className="summary-total">

                <span>
                  Total
                </span>

                <strong>
                  ₹{total}
                </strong>

              </div>


              <button
                className="checkout-button"
                onClick={placeOrder}
              >

                Place Order

                <i className="bi bi-arrow-right"></i>

              </button>


              <p className="secure-note">

                <i className="bi bi-shield-check"></i>

                Safe and secure checkout

              </p>

            </aside>

          </div>

        )}

      </div>

    </section>

  );
}

export default Cart;