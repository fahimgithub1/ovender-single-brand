import React from "react";
// import CategoriFilerPrice from "./categoriFilerPrice";
import PriceRangeSlider from "./priceRangeSlider";

export default function CategorisLeft(props) {
  const categori= props.categori;

  return (
    <div className="col-xl-3 col-lg-3 col-md-0 col-sm-0 Catagori">
      <div className="Catagori2">
        <h5>Filter Products By</h5>
        
        <div className="Catagori3">
          <span className="TaiterSpan">CATEGORY</span>
          <a href="#" className="categoriMainName">{categori.name}</a>
        </div>

        <PriceRangeSlider categori={categori}  />

        <div className="Catagori3">
          <span className="TaiterSpan">PRODUCT TYPE</span>
          <a href="#">Unassigned (1)</a>
          <a href="#">Hair Brushs (1)</a>
          <a href="#">Razor (1)</a>
        </div>

        <div className="Catagori3">
          <span className="TaiterSpan">BRAND NAME</span>
          <a href="#">
            <input type="checkbox" /> Unassigned (1)
          </a>
          <a href="#">
            <input type="checkbox" /> Hair Brushs (1)
          </a>
          <a href="#">
            <input type="checkbox" /> Razor (1)
          </a>
        </div>

        <div className="Catagori3">
          <span className="TaiterSpan">Shop Type</span>
          <a href="#">
            <input type="checkbox" /> Ovendar Mall
          </a>
          <a href="#">
            <input type="checkbox" /> Ovendar Preferred{" "}
          </a>
          <a href="#">
            <input type="checkbox" /> Ovendar Preferred+
          </a>
        </div>

        <div className="Catagori3">
          <span className="TaiterSpan">Payment Option</span>
          <a href="#">
            <input type="checkbox" /> Installment
          </a>
          <a href="#">
            <input type="checkbox" /> Cash On Delivery{" "}
          </a>
        </div>

        <div className="Catagori3">
          <button>Clean All</button>
        </div>
      </div>
    </div>
  );
}
