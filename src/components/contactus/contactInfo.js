import BgWrapper from "@/layouts/bgWrapper";
import React from "react";

export default function ContactInfo() {
  return (
    <BgWrapper bgclassName="ContactAdreSec">
      <div className="row">
        <div className="col-lg-3 col-md-4 m-auto col-sm-6 PerContactD">
          <div className="AddressDiv">
            <div className="AddressI">
              <i className="fa-solid fa-location-dot"></i>
            </div>

            <div>
              <p>Address</p>
              <span>25-27 Rd No 1, Dhaka 1230</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 m-auto col-sm-6 PerContactD">
          <div className="AddressDiv">
            <div className="AddressI">
              <i className="fa-solid fa-phone"></i>
            </div>

            <div>
              <p>Phone</p>
              <span>
                +017 45098343 <br />
                +017 45098343
              </span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 m-auto col-sm-6 PerContactD">
          <div className="AddressDiv">
            <div className="AddressI">
              <i className="fa-solid fa-envelope"></i>
            </div>

            <div>
              <p>Email</p>
              <span>Zaytuna@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 m-auto col-sm-6 PerContactD">
          <div className="AddressDiv">
            <div className="AddressI">
              <i className="fa-solid fa-location-dot"></i>
            </div>

            <div>
              <p>Openint Hour</p>
              <span>10:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </BgWrapper>
  );
}
