import { setShortMethod } from "@/store/slices/filterWithPrice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CatagoriSortby() {
  let shortOption = ''

  const dispatch = useDispatch();

  const totalItems = useSelector((state) => {
    return state.PriceProducts.quantity;
  });

  return (
    <div className="CtagorisFilter">
      <div className="ShortIcon">
        <span className="DisNoneinPhone">{totalItems} Items Available</span>
        <span className="CatagoriFilter showInphone">Filter</span>
      </div>

      <div className="ShortBy">
        <div>
          <span>Short By </span>
          <select
            onChange={(e) => {
              // setShortOption();
              shortOption = e.target.value
              dispatch(setShortMethod(shortOption));
            }}
          >
            <option value="Default">Default</option>
            <option value="A - Z">A - Z</option>
            <option value="Z - A">Z - A</option>
            <option value="Lowest">Lowest</option>
            <option value="Height">Height</option>
            {/* <option value="Pupoler Product">Pupoler Product</option> */}
          </select>
        </div>
      </div>
    </div>
  );
}
