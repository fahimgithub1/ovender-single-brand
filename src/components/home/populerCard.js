import Link from "next/link";
import React from "react";

export default function PopulerCard(props) {
  return (
    <div className={`ProductCard ProductCard1 ${props.ProductClass}`}>
      <Link href={`/Product/${props.id}`} className="d-block">
        <div className="ImageBox">
          <img src="/images/prduct.jpg" alt="" />
        </div>

        <div className="textPart">
          <p className="Pname">
            {props.name}
          </p>
          
          <div className="price">
            <ul>
              <li>
                <i className="fas fa-star"></i>{" "}
              </li>
              <li>
                <i className="fas fa-star"></i>{" "}
              </li>
              <li>
                <i className="fas fa-star"></i>{" "}
              </li>
              <li>
                <i className="fas fa-star"></i>{" "}
              </li>
              <li>
                <i className="fas fa-star"></i>{" "}
              </li>
              ({props.star})
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
}
