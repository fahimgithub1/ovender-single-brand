import React from "react";
import MyWishTr from "./myWishTr";


export default function WishList() {
  return (
    <div
      className="tab-pane fade"
      id="Wish-List"
      role="tabpanel"
      aria-labelledby="nav-Wish-List"
      tabIndex="0"
    >
      <h5>MY Wishlist </h5>

      <div className="OrderList">
        <MyWishTr />
      </div>
    </div>
  );
}
