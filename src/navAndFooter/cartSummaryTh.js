import { useRemovespecificCartMutation } from "@/pages/api/cardOrderSlice";
import React, { useEffect, useState } from "react";
// import { removeItemsSummary } from "@/store/slices/cartItems";
import { useDispatch } from "react-redux";

export default function CartSummaryTh(props) {
  const itemId = props.id;
  // const dispatch = useDispatch();
  
  const [timer, setTimer] = useState(null);

  const isBrowser = typeof window !== "undefined";
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(isBrowser ? localStorage.getItem("token") : null);
  }, []);

  const [RemoveSpecificCart] = useRemovespecificCartMutation();

  const deletHandle = (event) => {
    event.preventDefault();
    // dispatch(removeItemsSummary(productId));
    RemoveSpecificCart({ cart_item_id: itemId, token })
      .unwrap()
      .then((response) => {
        console.log(response.massage);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.massage);
      });
      
    setTimer(
      setTimeout(() => {
        window.location.reload(true);
      }, 1000)
    );
  }

  return (
    <div className="CartSummaryProduct row">
      <div className="col-3">
        <img
          src={props.src}
          alt="product image"
        />
      </div>

      <div className="col-9">
        <span className="CartProductTitle">
          {" "}
          {props.name}
        </span>
        <form className="CartNavForm">
          <div className="CartProductQuantity">
            <label>Qty: </label>
            <span>{props.cartQuantity}</span>
          </div>

          <div className="CartProductQuantity">
            <button onClick={deletHandle}>
              <i className="fa-solid fa-delete-left"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
