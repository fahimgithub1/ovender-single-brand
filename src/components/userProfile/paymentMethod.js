import React, { useState } from "react";
import AddPaymentMethod from "./addPaymentMethod";
import PaymentAcountList from "./paymentAcountList";

export default function PaymentMethod() {
  const [showMethodFrom, setShowMethodFrom] = useState(false);

  const addPaymentMethod = () =>{
    if(showMethodFrom){
      setShowMethodFrom(false)
    }else{
      setShowMethodFrom(true)
    }
  }

  return (
    <div
      className="tab-pane fade"
      id="Payment-Methods"
      role="tabpanel"
      aria-labelledby="nav-Payment-Methods"
      tabIndex="0"
    >
      <div className="AddressAddbtn">
        <h5>Payment Methods</h5>
        <button id="addaccoutnByn" onClick={addPaymentMethod}>
          <i className="fa-solid fa-plus"></i>
          Add New Account
        </button>
      </div>

      {/* <!-- account from start --> */}
      {showMethodFrom && <AddPaymentMethod onAddPaymentMethod={addPaymentMethod} />}
      {/* <!-- account from end --> */}

      {/* <!-- saved acount start --> */}
      {!showMethodFrom && <PaymentAcountList />}
      {/* <!-- saved acount end --> */}
    </div>
  );
}
