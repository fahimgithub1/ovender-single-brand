import React, { useState } from "react";
import FillupForm from "./fillupForm";
import SaveAddres from "./saveAddres";

export default function ShopingForm(props) {
  const [showCreditCard, setShowCreditCard] = useState(false);
  const [showPayPal, setShowPayPal] = useState(false);
  const [showGoogle, setShowGoogle] = useState(false);
  const [willAddAddress, setWillAddAddress] = useState(false);

  let addressInput = {
    address1 : "",
    country_name : "",
    city : "",
    postcode : "",
    phone : ""
  }

  const CreditCard = () => {
    if (showCreditCard) {
      setShowCreditCard(false);
    } else {
      setShowCreditCard(true);
    }
    setShowPayPal(false);
    setShowGoogle(false);
  };

  const PayPal = () => {
    if (showPayPal) {
      setShowPayPal(false);
    } else {
      setShowPayPal(true);
    }
    setShowCreditCard(false);
    setShowGoogle(false);
  };

  const Googleh = () => {
    if (showGoogle) {
      setShowGoogle(false);
    } else {
      setShowGoogle(true);
    }
    setShowCreditCard(false);
    setShowPayPal(false);
  };

  const handleAddAddress = () => {
    if (willAddAddress) {
      setWillAddAddress(false);
    } else {
      setWillAddAddress(true);
    }
  };

  const handleClose = () => {
    if (willAddAddress) {
      setWillAddAddress(false);
    } else {
      setWillAddAddress(true);
    }
  };

  const cartData = props.cartdata.data;

  const orderPlace = () => {
    props.onOrderCompliteView()
    console.log(addressInput)
  }

  return (
    <div className="single-tab mt-3 mt-md-4 mt-lg-5" id="checkOutTab">
      <div className="row">
        <div className="col-xl-8 col-lg-7 col-md-7">
          <div className="billing-details">
            <h3 className="title">Billing Details</h3>
            {!willAddAddress && <SaveAddres />}

            {!willAddAddress && (
              <button className="newAddress" onClick={handleAddAddress}>
                <i className="fa-regular fa-plus"></i> Add New Address
              </button>
            )}

            {willAddAddress && (
              <button className="newAddress" onClick={handleAddAddress}>
                Select From Save
              </button>
            )}

            {willAddAddress && <FillupForm onFromClose={handleClose} />}
          </div>
        </div>

        <div className="col-xl-4 col-lg-5 col-md-5">
          <div className="payment-method">
            <div className="total-clone">
              <ul>
                <li>
                  Sub Total{" "}
                  <span className="price-txt">
                    TK
                    <span className="sub-total-2">
                      {" "}
                      {Number(cartData.sub_total)}
                    </span>
                  </span>
                </li>

                <li>
                  Shipping{" "}
                  <span className="price-txt" id="shippingFee2">
                    <span className="text-success">Free</span>
                  </span>
                </li>

                <li>
                  Tax & Vat{" "}
                  <span className="price-txt" id="shippingFee2">
                    TK<span className="text-success"> 0</span>
                  </span>
                </li>

                <li className="total-price-wrap">
                  Total{" "}
                  <span className="price-txt">
                    TK
                    <span id="totalPrice2"> {Number(cartData.sub_total)}</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="payment-option">
              {/*  */}
              <div className="single-payment-card">
                <div className="panel-header" onClick={CreditCard}>
                  <div className="left-wrap">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="credit-card"
                        type="checkbox"
                        disabled
                      />
                      <span className="sub-input">
                        <i className="fa-solid fa-check"></i>
                      </span>
                    </div>
                    <span className="type">Credit Card</span>
                  </div>

                  <span className="icon">
                    <i className="fa-solid fa-credit-card fa-2x"></i>
                  </span>
                </div>

                {showCreditCard && (
                  <div className="panel-body">
                    <form className="credit-card-form">
                      <div className="row g-lg-4 g-3">
                        <div className="col-12">
                          <div className="input-box card-number">
                            <span className="symbol">
                              <img
                                src="assets/images/visa.png"
                                alt="Card Type"
                              />{" "}
                            </span>
                            <label>Card Number</label>
                            <input
                              type="text"
                              id="creditCardNumber"
                              placeholder="XXXX XXXX XXXX XXXX"
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-box">
                            <label>Expiry date</label>{" "}
                            <input
                              type="text"
                              id="datepicker"
                              placeholder="MM/YYYY"
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-box">
                            <label>Security code</label>{" "}
                            <input
                              type="number"
                              id="securityCode"
                              placeholder="e.g. 123"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-box">
                            <label>Enter card holder name</label>{" "}
                            <input
                              type="text"
                              id="cardHolderName"
                              placeholder="Card holder"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              <div className="single-payment-card">
                <div className="panel-header" onClick={PayPal}>
                  <div className="left-wrap">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="paypal"
                        type="checkbox"
                        disabled
                      />
                      <span className="sub-input">
                        <i className="fa-solid fa-check"></i>
                      </span>
                    </div>
                    <span className="type">PayPal</span>
                  </div>
                  <span className="icon">
                    <i className="fa-brands fa-cc-paypal fa-3x"></i>
                  </span>
                </div>

                {showPayPal && (
                  <div className="panel-body">
                    <form className="paypal-form">
                      <div className="row g-lg-4 g-3">
                        <div className="col-12">
                          <label>Email or phone no. that used in paypal</label>
                          <input
                            type="email"
                            name="paypal-id"
                            id="paypalId"
                            placeholder="Email or mobile number"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            id="confirmPaypal"
                            className="def-btn"
                          >
                            Confirm Paypal
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              <div className="single-payment-card">
                <div className="panel-header" onClick={Googleh}>
                  <div className="left-wrap">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="google-pay"
                        type="checkbox"
                        disabled
                      />
                      <span className="sub-input">
                        <i className="fa-solid fa-check"></i>
                      </span>
                    </div>
                    <span className="type">Google Pay</span>
                  </div>
                  <span className="icon">
                    <i className="fa-brands fa-google-pay fa-3x"></i>
                  </span>
                </div>

                {showGoogle && (
                  <div className="panel-body">
                    <form className="google-pay-form">
                      <div className="row g-lg-4 g-3">
                        <div className="col-12">
                          <label>
                            Email or phone no. that used in google pay
                          </label>{" "}
                          <input
                            type="email"
                            name="google-Pay-id"
                            id="googlePayId"
                            placeholder="Email or mobile number"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            id="confirmGooglePay"
                            className="def-btn"
                          >
                            Confirm Google Pay
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              <div className="single-payment-card">
                <div className="panel-header">
                  <div className="left-wrap">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="cash"
                        type="checkbox"
                        disabled
                      />
                      <span className="sub-input">
                        <i className="fa-solid fa-check"></i>
                      </span>
                    </div>
                    <span className="type">Cash on delivery</span>
                  </div>
                  <span className="icon">
                    <i className="fa-solid fa-money-bill-1-wave fa-2x"></i>
                  </span>
                </div>
              </div>
            </div>

            <button
              className="def-btn palce-order tab-next-btn PalceOrder"
              id="palceOrder"
              onClick={orderPlace}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
