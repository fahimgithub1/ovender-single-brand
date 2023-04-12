import React from "react";
import CatagoriProducts from "./catagoriProducts";
import CatagoriSortby from "./catagoriSortby";
import CategorisLeft from "./categorisLeft";
import { useDispatch, useSelector } from "react-redux";
import { useGetFilterProductsQuery } from "@/pages/api/apiSlices";
import { setProduct, setQuentity } from "@/store/slices/filterWithPrice";

export default function MainBody(props) {
  const dispatch = useDispatch();

  let isItemAvilable = true;
  const reduxData = useSelector((state) => {
    return state.PriceProducts.price;
  });
  const price = reduxData.price;

  const productParameters = props.productParameters;
  const { data: CatagorisProduct, lodding } = useGetFilterProductsQuery({
    productParameters,
    price,
  });

  let quantity = 0;
  if (CatagorisProduct != undefined) {
    dispatch(setQuentity(quantity));

    if (CatagorisProduct.data.length > 0) {
      dispatch(setProduct(CatagorisProduct.data));
      quantity = CatagorisProduct.data.length;
      dispatch(setQuentity(quantity));

      isItemAvilable = false;
    }
  }

  return (
    <div className="row mt-2 mt-lg-5 mt-md-3">
      <CategorisLeft categori={props.categori} />
      <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 AllProduct">
        <CatagoriSortby />
        <CatagoriProducts isItemAvilable={isItemAvilable} lodding={lodding} />
      </div>
    </div>
  );
}
