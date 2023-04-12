import React from "react";

export default function PaymentAcountList() {
  return (
    <div className="OrderList">
      <h6>Account</h6>

      <div className="PaymentAccountsDiv">
        <div className="ImageAndNumber">
          <img src="./Images/Bkash.png" alt="" />
          <span>01825*****64</span>
        </div>

        <div className="PaymentDelet">
          <i className="fa-solid fa-delete-left"></i>
        </div>
      </div>
    </div>
  );
}
