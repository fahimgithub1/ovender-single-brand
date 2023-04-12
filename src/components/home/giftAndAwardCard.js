import Link from "next/link";
import React from "react";

export default function GiftAndAwardCard(props) {
  return (
    <div className="item">
      <div className="CartCard text-center">
        <Link href={`/rewardsAndGift/${props.name}`} className="d-block text-center">
          <img src="/images/globe_cart.png" alt="" />
          <p>{props.name}</p>
        </Link>
      </div>
    </div>
  );
}
