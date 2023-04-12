import React from "react";

export default function CategorisHeros(props) {
  return (
    <div className="AllProductImg row mt-3">
      <div>
        <img
          // src="http://ovendar.com.bd/public/lib/images/sliders/1635415659_Ovender Design6__4pcs-04.jpg"
          src= {props.image_url}
          alt=""
        />
      </div>
    </div>
  );
}
