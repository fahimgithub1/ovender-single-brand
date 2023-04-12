import React from "react";

export default function CartCalculation(props) {
  const cartData = props.cartdata.data;

  return (
    <div className="cart-total-panel mt-3 mt-md-4 mt-lg-5 ">
      <h3 className="title">Cart Total</h3>
      <div className="panel-body">
        <div className="row">
          <div className="col-md-6">
            <h4 className="sub-title">Choose Shipping Mode:</h4>
            <div className="shipping-mode">
              <div className="form-check">
                <input
                  className="form-check-input shipping-check"
                  type="radio"
                  name="shippingMode"
                  id="storePickup"
                  readOnly
                  checked
                />

                <span className="sub-input">
                  <i className="fa-regular fa-check"></i>
                </span>

                <label className="form-check-label" htmlFor="storePickup">
                  Store pickup (in 20 minutes) - FREE
                </label>
              </div>

              {/* <div className="form-check">
                <input
                  className="form-check-input shipping-check"
                  type="radio"
                  name="shippingMode"
                  id="homeDelivery"
                />{" "}
                <span className="sub-input">
                  <i className="fa-regular fa-check"></i>
                </span>
                <label className="form-check-label" htmlFor="homeDelivery">
                  Delivery at home (2 - 4 day) - Tk 2.00{" "}
                  <span>1206 Sussex Court, Killeen, TX - 76541</span>
                </label>
              </div> */}
            </div>
          </div>

          <div className="col-md-6">
            <div className="calculate-area">
              <ul>
                <li>
                  Sub Total{" "}
                  <span className="price-txt">
                    Tk{" "}
                    <span className="sub-total">
                      {Number(cartData.sub_total)}
                    </span>
                  </span>
                </li>

                <li>
                  Shipping{" "}
                  <span className="price-txt" id="shippingFee">
                    <span className="text-success">Free</span>
                  </span>
                </li>

                <li className="total-price-wrap">
                  Total{" "}
                  <span className="price-txt">
                    Tk <span id="totalPrice">{Number(cartData.sub_total)}</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
