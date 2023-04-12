import React from "react";

export default function ShopingListWrapper(props) {
  return (
    <div className="single-tab active " id="cartTab">
      <div className="table-wrap revel-table">
        {props.children}
      </div>
    </div>
  );
}
