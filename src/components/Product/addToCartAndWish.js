import React, { useEffect, useState } from "react";
import {
  useAddToCartMutation,
  useAddToWishListMutation,
} from "@/pages/api/cardOrderSlice";

export default function AddToCartAndWish(props) {
  const [timer, setTimer] = useState(null);

  const [addToCart] = useAddToCartMutation();
  const [addToWishList] = useAddToWishListMutation();

  const quantity = props.quantity;
  const isCartDisavle = props.productInfo.in_stock;
  const product_id = props.productInfo.id;

  const isBrowser = typeof window !== "undefined";
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(isBrowser ? localStorage.getItem("token") : null);
  }, []);

  const AddCartInfo = {
    product_id,
    quantity: quantity,
    token,
  };

  // const dispatch = useDispatch();

  const addCartItemsHandler = () => {
    addToCart(AddCartInfo)
      .unwrap()
      .then((response) => {
        console.log(response.massage);
      })
      .catch((error) => {
        console.log(error.massage);
      });
      
      setTimer(
        setTimeout(() => {
          window.location.reload(true);
        }, 1000)
      );
  };

  const addWishItemsHandler = () => {
    addToWishList({ product_id, token })
      .unwrap()
      .then((response) => {
        console.log(response.massage);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

      setTimer(
        setTimeout(() => {
          window.location.reload(true);
        }, 1000)
      );
  };

  return (
    <div className="btn-box">
      {isCartDisavle ? (
        <button id="addToCart" onClick={addCartItemsHandler}>
          <span>
            <i className="fa fa-cart-shopping"></i>
          </span>{" "}
          add to cart
        </button>
      ) : (
        <button
          className="bg-secondary border border-0"
          id="addToCart"
          disabled={true}
        >
          <span>
            <i className="fa fa-cart-shopping"></i>
          </span>{" "}
          add to cart
        </button>
      )}

      <button id="addToWishList" onClick={addWishItemsHandler}>
        <span>
          <i className="fa fa-heart"></i>
        </span>{" "}
        add to wishlist
      </button>
    </div>
  );
}
