import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import UpdateAddresFrom from "./updateAddresFrom";

export default function Account() {
  const [isUpdateAccount, setIsUpdateAccount] = useState(false);

  const accountInfo = useSelector((state) => state.customerInfo.customer);

  const toogle = () => {
    if (isUpdateAccount) {
      setIsUpdateAccount(false);
    } else {
      setIsUpdateAccount(true);
    }
  };

  const accountInfoDiv = (
    <>
      <div className="UnderAll">
        <h5>Account Information</h5>

        <div className="UlDivMyAcount row">
          {accountInfo != undefined ? (
            <ul className="col-6">
              <li className="tititle">Contact Information</li>
              <li>
                {accountInfo.first_name} {accountInfo.last_name}
              </li>
              <li>{accountInfo.email}</li>
            </ul>
          ) : (
            ""
          )}

          <ul className="col-6">
            <li className="tititle">Newsletters</li>
            <li>You aren't subscribed to our newsletter.</li>
          </ul>
        </div>
      </div>

      <div className="UnderAll UnderAll2">
        <h5>Address Book</h5>
        <div className="UlDivMyAcount row">
          <ul className="col-6">
            <li className="tititle">Default Billing Address</li>
            <li>You have not set a default billing address.</li>
          </ul>

          <ul className="col-6">
            <li className="tititle">Default Shipping Address</li>
            <li>You have not set a default shipping address.</li>
          </ul>
        </div>
      </div>
    </>
  );

  return (
    <div
      className="tab-pane fade show active"
      id="Account"
      role="tabpanel"
      aria-labelledby="nav-Account"
      tabIndex="0"
    >
      <div className="AddressAddbtn">
        <h5>MY ACCOUNT</h5>
        <button id="AddAdressBtnO" onClick={toogle}>
          Update Profile
        </button>
      </div>

      {!isUpdateAccount && accountInfoDiv}
      {isUpdateAccount && (
        <UpdateAddresFrom accountInfo={accountInfo} onTootle={toogle} />
      )}
    </div>
  );
}
