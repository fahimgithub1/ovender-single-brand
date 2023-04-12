import React from "react";

export default function OrderComplited() {
  return (
    <div className="single-tab" id="orderCompletedTab">
      <div className="check-icon text-center mb-2">
        <i className="fa-regular fa-circle-check fa-4x orderSucessColors"></i>
      </div>
      <div className="order-complete-msg text-center">
        <h2>Your Order Has Been Completed</h2>
      </div>
    </div>
  );
}
