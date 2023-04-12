import { useGetFilterProductsQuery, useGetProductsWithPriceQuery } from "@/pages/api/apiSlices";
import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { useDispatch } from "react-redux";
import { FilterWithPrice } from "@/store/slices/filterWithPrice";

function PriceRangeSlider(props) {
  const dispatch = useDispatch();

  let category_id = 0;
  if(props.categori !== ''){
    category_id = props.categori.id
  }

  const [value, setValue] = useState({ min: 0, max: 10000 });
  const minValue = 0;
  const maxValue = 10000;

  // let price1 = "";
  const [filterInfo, setFilterInfo] = useState({ price: "0, 10000", category_id });

  const complitedChange = () => {
    const price2 = String(value.min) + "," + String(value.max);

    const filterInfo3 = {
      category_id,
      price: price2,
    };

    setFilterInfo(filterInfo3);
  };

  let productParameters = {
    categorID : filterInfo.category_id
  };
  let price = filterInfo.price;
  let quantity = 0;
  const { data: FilterData } = useGetFilterProductsQuery({
    productParameters,
    price,
  });

  if(FilterData !== undefined){
    quantity = FilterData.data.length;
  }

  dispatch(FilterWithPrice({ filterInfo, quantity }));

  return (
    <div className="mt-4 pt-2 mb-3">
      <InputRange
        maxValue={maxValue}
        minValue={minValue}
        value={value}
        onChange={(value) => setValue(value)}
        onChangeComplete={complitedChange}
      />
    </div>
  );
}

export default PriceRangeSlider;
