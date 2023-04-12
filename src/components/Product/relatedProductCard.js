import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "@/store/slices/cartItems";
import { addWishItems } from "@/store/slices/wishItems";

export default function RelatedProductCard(props) {
  const src = props.img;
  const porductID = props.id;
  const quantity = 1;
  const dispatch = useDispatch();
  const productInfo = props;

  const date = useSelector((state) => {
    return state.cartItems;
  });

  const addCartItemsHandler = (e) => {
    e.preventDefault();
    dispatch(addItems({ productInfo, quantity }));
  };

  const addWishItemsHandler = (e) => {
    e.preventDefault();
    dispatch(addWishItems({ productInfo, quantity }));
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
          <div className="price pb-2">
            {
              // Number("props.disCount") < Number(props.price) &&
              // Number("props.disCount") != 0 ? (
              //   Math.floor(disCountPrice)
              // ) : (
              //   <>
              //     <p className="mb-2">{Math.floor(props.price)}</p>
              //   </>
              // )
              // props.price
              <div className="mb-1" dangerouslySetInnerHTML={{ __html: props.price }} />
            }

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
          <button className="w-100">view</button>
        </div>
      </Link>
    </div>
  );
}
