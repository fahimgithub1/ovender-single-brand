import React, { useState } from "react";

export default function AddPaymentMethod(props) {
  const [showCreditCard, setShowCreditCard] = useState(false);
  const [showPayPal, setShowPayPal] = useState(false);
  const [showGoogle, setShowGoogle] = useState(false);

  const CreditCardHandle = () =>{
    if(showCreditCard){
      setShowCreditCard(false)
    }else{
      setShowCreditCard(true)
    }
    setShowPayPal(false)
    setShowGoogle(false)
  }

  const PaypalHandle = () =>{
    if(showPayPal){
      setShowPayPal(false)
    }else{
      setShowPayPal(true)
    }
    setShowCreditCard(false)
    setShowGoogle(false)
  }

  const GoogleHandle = () =>{
    if(showGoogle){
      setShowGoogle(false)
    }else{
      setShowGoogle(true)
    }
    setShowCreditCard(false)
    setShowPayPal(false)
  }

  return (
    <div className="phaymentInfoFrom d-block">
      <form>
        {/* <!-- cradit card --> */}
        <div>
          <div>
            <h3 onClick={CreditCardHandle}>
              {" "}
              <i className="fa-solid fa-check"></i>Credit Card
            </h3>
          </div>

          {showCreditCard && <div className="d-flex flex-wrap">
            <div>
              <label>Card Number</label>
              <input
                type="text"
                id="creditCardNumber"
                placeholder="XXXX XXXX XXXX XXXX"
              />
            </div>

            <div>
              <label>Expiry date</label>
              <input type="text" id="datepicker" placeholder="MM/YYYY" />
            </div>

            <div>
              <label>Security code</label>
              <input type="number" id="securityCode" placeholder="e.g. 123" />
            </div>

            <div>
              <label>Enter card holder name</label>
              <input type="text" placeholder="Card holder" />
            </div>
          </div>}
        </div>

        {/* <!-- PayPal --> */}
        <div>
          <div>
            <h3 onClick={PaypalHandle}>
              <i class="fa-solid fa-check"></i>PayPal
            </h3>
          </div>

          {showPayPal && <div  className="mb-lg-4">
            <label>Email or phone no. that used in paypal</label>
            <input
              type="email"
              name="paypal-id"
              id="paypalId"
              placeholder="Email or mobile number"
              required
            />
          </div>}
        </div>

        {/* <!-- Google --> */}
        <div>
          <div>
            <h3 onClick={GoogleHandle}>
              <i class="fa-solid fa-check"></i>Google Pay
            </h3>
          </div>

          {showGoogle && <div>
            <label>Email or phone no. that used in google payl</label>
            <input
              type="email"
              name="google-Pay-id"
              id="googlePayId"
              placeholder="Email or mobile number"
              required
            />
          </div>}
        </div>

        <div className="AddresSubmit">
          <p id="Adressadded">Save Account</p>
          <p className="CalcleAdd" onClick={props.onAddPaymentMethod}>
            Cencle
          </p>
        </div>
      </form>
    </div>
  );
}
