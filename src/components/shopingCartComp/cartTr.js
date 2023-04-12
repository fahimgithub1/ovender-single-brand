import { useRemovespecificCartMutation } from "@/pages/api/cardOrderSlice";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function CartTr(props) {
  const [timer, setTimer] = useState(null);

  const itemId = props.id;
  const [quantity, setQuantity] = useState(props.quantity);

  const handlemInusItems = (event) => {
    event.preventDefault();
    // dispatch(removeItems({ itemId, quantity }));
    if (quantity > 1) {
      setQuantity(Number(quantity) - 1);
    }

    if (quantity >= 2) {
      props.raw.qty[itemId] = Number(quantity) - 1;
      console.log(props.raw);
    }
  };

  const handlemAddItems = () => {
    event.preventDefault();
    // dispatch(addItemsCart(itemId));
    if (quantity < 8) {
      setQuantity(Number(quantity) + 1);
    }

    if (quantity <= 7) {
      props.raw.qty[itemId] = Number(quantity) + 1;
      console.log(props.raw);
    }
  };

  const isBrowser = typeof window !== "undefined";
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(isBrowser ? localStorage.getItem("token") : null);
  }, []);

  const [RemoveSpecificCart] = useRemovespecificCartMutation();

  const handlemDeleteItems = () => {
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
  };

  // const handlemUpdateItems = () => {
  //   console.log(RemoveSpecificCart);
  //   if (RemoveSpecificCart) {
  //     removeItem();
  //   }
  // };

  return (
    <tr>
      <td>
        <div className="product-img">
          <img src={props.img} alt="Image" />
        </div>
      </td>

      <td>
        {/* <Link href={`/product/${item.id}`} className="product-name"> */}
        <Link href={`/product/`} className="product-name">
          {props.name}
        </Link>
      </td>

      <td>
        <span className="price-txt">
          Tk <span className="main-price">{Math.floor(props.price)}</span>
        </span>
      </td>

      <td>
        <div className="product-count cart-product-count">
          <div className="quantity rapper-quantity">
            <input
              type="number"
              min="1"
              max="100"
              step="1"
              value={quantity}
              readOnly
            />
            <div className="quantity-nav">
              <div
                className="quantity-button quantity-down"
                onClick={handlemInusItems}
              >
                <i className="fa-solid fa-minus"></i>
              </div>
              <div
                className="quantity-button quantity-up"
                onClick={handlemAddItems}
              >
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </td>

      <td>
        <span className="price-txt">
          Tk <span className="total-price">{Math.floor(props.total)}</span>
        </span>
      </td>

      <td>
        <button className="cart-delete" onClick={handlemDeleteItems}>
          <i className="fa-solid fa-delete-left"></i>
        </button>
      </td>
    </tr>
  );
}
