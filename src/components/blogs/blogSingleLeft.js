import React from "react";

export default function BlogSingleLeft(props) {
  return (
    <div className="col-lg-9 col-md-8 BlogSingle">
      <img
        src={props.src}
        // src="http://ovendar.com.bd/public/lib/images/blog/1655986381_1-w.jpg"
        alt=""
      />

      <p>{props.helight}</p>

      <h3>{props.title}</h3>

      <p>
        {props.para}
      </p>
    </div>
  );
}
