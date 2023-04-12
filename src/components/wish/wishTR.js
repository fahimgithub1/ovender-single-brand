import { useRemoveWishlistMutation } from "@/pages/api/cardOrderSlice";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function WishTR(props) {
  const [timer, setTimer] = useState(null);
  const [RemoveWishList] = useRemoveWishlistMutation();

  const isBrowser = typeof window !== "undefined";
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(isBrowser ? localStorage.getItem("token") : null);
  }, []);

  const handlemDeleteItems = (id) => {
    const product_id = id;
    console.log(product_id);
    RemoveWishList({ product_id, token })
      .unwrap()
      .then((Response) => {
        console.log(Response.massage);
        console.log(Response.data);
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
    <tr className="text-start">
      <td>
        <div className="product-img">
          <img src={props.img} alt="Image" />
        </div>
      </td>

      <td className="text-start">
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
        <button
          className="cart-delete"
          onClick={() => {
            handlemDeleteItems(props.id);
          }}
        >
          <i className="fa-solid fa-delete-left"></i>
        </button>
      </td>
    </tr>
  );
}
