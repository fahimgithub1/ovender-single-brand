import React from "react";
import WishTR from "./wishTR";

export default function WishTable(props) {
  const wishData = props.wishData;

  return (
    <div className="table-responsive">
      <table className="table table-borderless text-start">
        <thead>
          <tr className="text-start">
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {wishData.data.map((item) => (
            <WishTR
              key={item.id}
              id={item.product.id}
              img={item.product.images[0].url}
              name={item.product.name}
              price={item.product.price}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
