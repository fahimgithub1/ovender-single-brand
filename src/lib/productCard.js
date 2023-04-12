import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  useAddToCartMutation,
  useAddToWishListMutation,
} from "@/pages/api/cardOrderSlice";

export default function ProductCard(props) {
  const [timer, setTimer] = useState(null);

  const src = props.img;
  const porductID = props.id;
  const product_id = props.id;
  const quantity = 1;

  const [addToCart] = useAddToCartMutation();
  const [addToWishList] = useAddToWishListMutation();

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

  const refresh = () => window.location.reload(true);

  const addCartItemsHandler = (e) => {
    e.preventDefault();
    // dispatch(addItems({ productInfo, quantity }));
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
        refresh();
      }, 1000)
    );
  };

  const addWishItemsHandler = (e) => {
    e.preventDefault();

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
        refresh();
      }, 1000)
    );
  };

  const disCountPrice = (
    <>
      <p>{Number(props.price) - Number("props.disCount")}</p>
      <span className="ManPrice">{props.price}</span>
    </>
  );

  return (
    <div className="ProductCard ProductCard1">
      <Link href={`/Product/${porductID}`} className="d-block">
        <div className="ImageBox">
          {src === "" ? (
            <img src="/images/prduct.jpg" alt="" />
          ) : (
            <img src={props.img} alt="" />
          )}
        </div>

        <div className="textPart">
          <p className="Pname">{props.name}</p>
          <div className="price">
            {Number("props.disCount") < Number(props.price) &&
            Number("props.disCount") != 0 ? (
              Math.floor(disCountPrice)
            ) : (
              <>
                <p className="mb-2">{Math.floor(props.price)}</p>
              </>
            )}

            <ul>
              <li>
                {" "}
                <i className="fas fa-star"></i>{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-star"></i>{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-star"></i>{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-star"></i>{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-star"></i>{" "}
              </li>
              ({props.star})
            </ul>
          </div>
          <div className="float-right sold">{props.sold} sold</div>
        </div>

        <div className="ProductBtn">
          <button
            onClick={(e) => {
              addCartItemsHandler(e);
            }}
            className="btn1"
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </button>

          <button
            onClick={(e) => {
              addWishItemsHandler(e);
            }}
            className=""
          >
            <i className="fa-sharp fa-regular fa-heart"></i>
          </button>
        </div>
      </Link>
    </div>
  );
}
