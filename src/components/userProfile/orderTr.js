import React from "react";

export default function OrderTr(props) {
  return (
    <div className="table-responsive ORderResponsive">
      <div className="TableSpan">
        Data : {props.date} <br /> Order #{props.orderId}
      </div>

      <table className="table table-borderless Oderable">
        <tr>
          <td className="col-1">
            <div className="product-img">
              <img
                src={props.img}
                alt="Image"
              />
            </div>
          </td>

          <td>
            <a href="shop-details.html" className="product-name">
              {props.name}
            </a>
          </td>

          <td>
            <span className="price-txt">
              Tk <span className="main-price">{props.price}</span>
            </span>
          </td>

          <td>
            <div className="product-count cart-product-count">
              <div className="quantity rapper-quantity orederQuantity">
                <span>Qty:</span> {props.quantity}
              </div>
            </div>
          </td>

          <td>
            <span className="price-txt">{props.status}</span>
          </td>
        </tr>
      </table>
    </div>
  );
}
