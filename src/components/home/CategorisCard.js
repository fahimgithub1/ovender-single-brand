import Link from "next/link";
import React from "react";

export default function CategorisCard(props) {
  const categoiesID = props.slug
  return (
    <div className="caragorisCard text-center">
      <Link href={`/categories/${categoiesID}`} className="d-block text-center">
        {/* {props.img == "" ? (
          <img src={props.img} alt="" />
        ) : (
          <img src="/images/categoris.png" alt="" />
        )} */}
        <img src={props.img} alt="" />
        <p>{props.name}</p>
      </Link>
    </div>
  );
}
