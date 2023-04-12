import React from "react";
import Acount from "./account";
import AccountInfo from "./accountInfo";
import AddresBook from "./addresBook";
import Orders from "./orders";
import PaymentMethod from "./paymentMethod";
import WishList from "./wishList";

export default function RightSide() {
  return (
    <div
      className="col-xl-10 col-lg-9 col-md-9 col-sm-12 MenuDaitels tab-content col-10"
      id="nav-tabContent"
    >
      {/* <!-- MY ACCOUNT--> */}
      <Acount />

      {/* <!-- MY ORDERS --> */}
      <Orders />

      {/* <!-- MY Wishlist --> */}
      <WishList />

      {/* <!-- Address Book -->/ */}
      <AddresBook/>

      {/* <!-- EDIT ACCOUNT INFORMATION --> */}
      <AccountInfo />

      {/* <!-- Phayment Mathod--> */}
      <PaymentMethod />
    </div>
  );
}
