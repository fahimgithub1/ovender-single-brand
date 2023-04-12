import BgWrapper from "@/layouts/bgWrapper";
import React from "react";

export default function ProductDiscription(props) {
  const discition = props.singleProduct.data;

  return (
    <BgWrapper>
      <h2 className="sectionTitle">Product Description</h2>

      <div className="ProductDatiles">
        <p>
          {discition.description}
        </p>
      </div>
    </BgWrapper>
  );
}
