import React from "react";

export default function TopRight() {
  return (
    <div className="col-lg-3 col-md-0 col-sm-0">
      <div className="delivary">
        <div>
          <h5>
            <i className="fa-solid fa-truck"></i> Delivery Charge:{" "}
          </h5>
          <ul>
            <li>
              <i className="fa fa-location-dot"></i>
              Inside Dhaka : Taka 60 (1-5 Days)
            </li>
            <li>
              <i className="fa-solid fa-location-arrow"></i>
              Outside Dhaka : Taka 150 (1-7 Days)
            </li>
            <li>
              <i className="fa fa-hand-holding"></i>
              Cash on Delivery available
            </li>
          </ul>
        </div>

        <div>
          <h5>
            <i className="fa-solid fa-person-walking-arrow-loop-left"></i>{" "}
            Return & Warranty:{" "}
          </h5>
          <ul>
            <li>
              <i className="fa fa-lock"></i>7 Days Returns Change of mind is not
              applicable
            </li>
            <li>
              <i className="fa-solid fa-shield-halved"></i>
              Warranty not available
            </li>
            <li>
              <i className="fa fa-hand-holding"></i>
              Cash on Delivery available
            </li>
          </ul>
        </div>
      </div>

      <div className="delivary delivary2">
        <div>
          <span>Sold by</span>
          <h5>FRESHED Fashion</h5>
        </div>

        <div className="PdpSellerInfoPc">
          <div>
            <span>Positive Seller Ratings</span>
            <h5>92%</h5>
          </div>
          <div>
            <span>Ship on Time</span>
            <h5>100%</h5>
          </div>
          <div>
            <span>Chat Response Rate</span>
            <h5>80%</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
