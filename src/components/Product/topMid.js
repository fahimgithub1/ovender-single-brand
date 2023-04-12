import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToCartAndWish from "./addToCartAndWish";
import ProductCounting from "./productCounting";
import ProductShare from "./productShare";

export default function TopMid(props) {
  const productInfo = props.singleProduct.singleProduct.data;
  let inStock = productInfo.in_stock;
  const [quantity, setQuantity] = useState(1);

  // let addtoChartInfo = {
  //   quantity: quantity,
  //   // itemId: producId
  //   itemId: 1,
  // };

  const dispatch = useDispatch();

  // const addCartHandler = (payload) =>{
  //   console.log("addCartHandler() Clicked = " + payload);
  //   dispatch(addItems(payload))
  // }

  // const removeCartHandler = (payload) =>{
  //   console.log("removeItems() Clicked = " + payload);
  //   dispatch(removeItems(payload))
  // }


  // for incrment and disciment producnt
  const quanityHandler = (props) => {
    if (props === "plus" && quantity < 8) {
      setQuantity(quantity + 1);
    } else if (props === "minus" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="col-lg-4 col-md-7 col-sm-6 product-view-area">
      <div className="part-txt">
        <h2 className="main-product-title">{productInfo.name}</h2>
        <p>{productInfo.short_description}</p>

        <div className="review">
          <span className="star">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </span>
          <span className="rating-amount">
            ({productInfo.reviews.average_rating}) Reviews
          </span>
        </div>

        <p className="price">{productInfo.price}</p>

        <ul className="short-details">
          <li>
            Availability: 
            {inStock === true ? (
              <span> In stock</span>
            ) : (
              <span> Out of stock</span>
            )}
          </li>
        </ul>

        {/* stop for now */}
        <div className="VariantColor">
          {/* stop for now */}
          {/* <div className="ProductColor">
            <span>Color:</span>

            <div className="BtnsDiv">
              <button className="ColorBtn1"></button>
              <button className="ColorBtn2"></button>
              <button className="ColorBtn3"></button>
            </div>
          </div> */}

          {/* stop for now */}
          <div className="Variant">
            {/* <span>Variant:</span>

            <div className="VariantImgs">
              {productInfo.images.slice(0, 4).map((item) => (
                <div className="VarImg" key={item.id}>
                  <img src={item.url} alt="" />

              <div className="VarImg">
                <img src="/images/prduct.jpg" alt="" />
              </div>
              <div className="VarImg">
                <img src="/images/prduct.jpg" alt="" />
              </div>
              <div className="VarImg">
                <img src="/images/prduct.jpg" alt="" />
              </div>
            </div> */}

            {/* <div className="VariantImgs">
              <div className="TextVariant">
                <span>Variant1</span>
              </div>
              <div className="TextVariant">
                <span>Variant2</span>
              </div>
              <div className="TextVariant">
                <span>Variant3</span>
              </div>
              <div className="TextVariant">
                <span>Variant1</span>
              </div>
              <div className="TextVariant">
                <span>Variant2</span>
              </div>
              <div className="TextVariant">
                <span>Variant3</span>
              </div>
            </div> */}
          </div>
        </div>

        <ProductCounting quanityHandler={quanityHandler} quantity={quantity} />
        <AddToCartAndWish productInfo={productInfo}  quantity={quantity} />
        <ProductShare />
      </div>
    </div>
  );
}
