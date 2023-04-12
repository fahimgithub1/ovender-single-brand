import Link from "next/link";
import React from "react";

export default function ShockingProductCard(props) {
  return (
    <div className="item">
      <div className={`ProductCard text-center ${props.ProCardClass}`}>
        <Link href={`/Product/${props.id}`} className="d-block text-center">
          <div className="ImageBox">
            <img src="/images/prduct.jpg" alt="" />
          </div>
          <div className="textPart">
            <p>Tk {props.price - props.disCount}</p>
            <span className="ManPrice">Tk {props.price}</span>

            <div>
              <div className="progress">
                <div className="progres-bar">{props.sold}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
