import { useGetProductsWithPriceQuery } from "@/pages/api/apiSlices";
import { FilterWithPrice } from "@/store/slices/filterWithPrice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function CategoriFilerPrice(props) {
  const category_id = props.categori.id;

  const [lowPrice, setLowPrice] = useState(0);
  const [heightPrice, setHeightPrice] = useState(1000);

  const price = String(lowPrice) + "," + String(heightPrice);

  const filterInfo = {
    price,
    category_id,
  };

  const handleLowPrice = (e) => {
    setLowPrice(e.target.value);
  };

  const handleHeighPrice = (e) => {
    setHeightPrice(e.target.value);
  };

  const dispatch = useDispatch();

  const { data: product } = useGetProductsWithPriceQuery(filterInfo);

  if (product !== undefined) {
    dispatch(FilterWithPrice({ product }));
  }

  return (
    <div className="Catagori3">
      <span className="TaiterSpan">Price</span>
      <div className="priceLabel">
        {" "}
        <span className="pricelavel1"></span>{" "}
        <span className="pricelavel2"></span>
      </div>
      <div className="priceInput">
        <span>TK </span>
        <input
          className="ms-2 me-2"
          type="text"
          value={lowPrice}
          onChange={handleLowPrice}
        />{" "}
        - <span> TK </span>{" "}
        <input
          className="ms-2 me-2"
          type="text"
          value={heightPrice}
          onChange={handleHeighPrice}
        />
      </div>
    </div>
  );
}
