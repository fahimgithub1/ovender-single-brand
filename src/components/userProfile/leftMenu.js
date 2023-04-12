import React from "react";

export default function LeftMenu() {
  return (
    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-12 UserMenu">
      <div className="nav tablist" id="nav-tab" role="tablist">
        {/* <!-- 11111111 --> */}
        <button
          className="nav-link active text-white mb-2"
          id="nav-Account"
          data-bs-toggle="tab"
          data-bs-target="#Account"
          type="button"
          role="tab"
          aria-controls="Account"
          aria-selected="true"
        >
          My Account
        </button>

        {/* <!-- 2222222222 --> */}
        <button
          className="nav-link text-white mb-2"
          id="nav-Orders"
          data-bs-toggle="tab"
          data-bs-target="#Orders"
          type="button"
          role="tab"
          aria-controls="Orders"
          aria-selected="false"
        >
          My Orders
        </button>

        {/* <!-- 333333333333333 --> */}
        <button
          className="nav-link text-white mb-2"
          id="nav-Wish-List"
          data-bs-toggle="tab"
          data-bs-target="#Wish-List"
          type="button"
          role="tab"
          aria-controls="Wish-List"
          aria-selected="false"
        >
          My Wish List
        </button>

        {/* <!-- 4444444444444444 --> */}
        <button
          className="nav-link text-white mb-2"
          id="nav-Address-Book"
          data-bs-toggle="tab"
          data-bs-target="#Address-Book"
          type="button"
          role="tab"
          aria-controls="Address-Book"
          aria-selected="false"
        >
          Address Book
        </button>

        {/* <!-- 66666666666 --> */}
        <button
          className="nav-link text-white mb-2"
          id="nav-Account-Information"
          data-bs-toggle="tab"
          data-bs-target="#Account-Information"
          type="button"
          role="tab"
          aria-controls="Account-Information"
          aria-selected="false"
        >
          Account Information
        </button>

        {/* <!-- /777777777 --> */}
        <button
          className="nav-link text-white mb-2"
          id="nav-Payment-Methods"
          data-bs-toggle="tab"
          data-bs-target="#Payment-Methods"
          type="button"
          role="tab"
          aria-controls="Payment-Methods"
          aria-selected="false"
        >
          Stored Payment Methods
        </button>
      </div>
    </div>
  );
}
