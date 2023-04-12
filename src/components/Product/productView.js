import React from "react";
import ImageView from "./imageView";
import TopMid from "./topMid";
import TopRight from "./topRight";

export default function ProductView(props) {
  return (
    <section className="MainBodyTop HerosSection sectionMarginBot productPages">
      <div className="container">
        <div className="row">

          <ImageView images={props.singleProduct.data.images} />

          <TopMid singleProduct={props} />

          <TopRight />
        </div>
      </div>
    </section>
  );
}
