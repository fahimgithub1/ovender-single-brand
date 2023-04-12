import React from "react";

export default function ProductCounting(props) {
  return (
    <form>
      <div className="row g-xl-4 g-3">
        <div className="col-lg-8 col-md-12 col-sm-4">
          <div className="quantity-wrap">
            <label>QTY</label>
            <div className="product-count">
              <div className="quantity rapper-quantity">
                <input
                  type="number"
                  min="1"
                  max="100"
                  step="1"
                  value={props.quantity}
                  readOnly
                />

                <div className="quantity-nav">
                  {props.quantity >= 2 ? (
                    <div
                      className="quantity-button quantity-down"
                      onClick={() => props.quanityHandler("minus")}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </div>
                  ) : (
                    <div className="quantity-button quantity-down disable">
                      <i className="fa-solid fa-minus"></i>
                    </div>
                  )}

                  {props.quantity <= 7 ? (
                    <div
                      className="quantity-button quantity-up"
                      onClick={() => props.quanityHandler("plus")}
                      disable={false}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  ) : (
                    <div className="quantity-button disable" disable={false}>
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
