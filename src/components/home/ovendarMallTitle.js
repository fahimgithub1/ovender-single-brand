import Link from "next/link";
import React from "react";

const rewardpage = "Oven Mall"

export default function OvendarMallTitle() {
  return (
    <div className="sectionTitle TitleOvemderMall">
      <div className="TimeTitle">
        <h2>ovender mall</h2>

        <div>
          <ul>
            <li>100% Authentic</li>
            <li>15 Days Return</li>
            <li>Free Shipping</li>
          </ul>
        </div>
      </div>

      <Link href={`/rewardsAndGift/${rewardpage}`} className="seaAll">
        See All
      </Link>
    </div>
  );
}
