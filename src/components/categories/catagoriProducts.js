import Lodding from "@/lib/lodding";
import ProductCard from "@/lib/productCard";
import React from "react";
import { useSelector } from "react-redux";

export default function CatagoriProducts(props) {
  const isItemAvilable = props.isItemAvilable;
  const lodding = props.lodding;

  const products = useSelector((state) => state.PriceProducts.products);

  var categoriProduct = "";
  if (products !== undefined) {
    if (products.length > 0) {
      {
        categoriProduct = products.map((item) => (
          <div
            className="DuleProduct col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-md-4 col-sm-4 Mobile50"
            key={item.id}
          >
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              disCount={item.cost}
              sold={item.sold}
              star={item.reviews.average_rating}
              img={
                item.images != null ? item.images[0].large_image_url : comimg
              }
            />
          </div>
        ));
      }
    }
  }

  return (
    <div className="tab-content tab-content-Cate">
      <div className="row">
        {!lodding && categoriProduct}
        {lodding && <Lodding />}
        {isItemAvilable && (
          <p className="text-center text-bold">No Item Available</p>
        )}
      </div>
    </div>
  );
}
