import BgWrapper from "@/layouts/bgWrapper";
import React from "react";

export default function ShopRatting(props) {
  const singleProduct = props.singleProduct.data.reviews;

  return (
    <BgWrapper>
      <div className="row">
        <div className="ShopBtn col-lg-3 col-md-4 col-sm-12">
          <p>ovender</p>
          <button>chat now</button>

          <button>view shop</button>
        </div>

        <div className="ShopRating col-lg-7 col-md-8 col-sm-12">
          <div>
            <ul>
              <li>
                Rating{" "}
                <span>
                  {singleProduct.average_rating === 0
                    ? 5
                    : singleProduct.average_rating}
                </span>
              </li>

              <li>
                Response Rate{" "}
                <span>
                  {singleProduct.percentage ? 100 : singleProduct.percentage}%
                </span>
              </li>

              <li>
                Joined{" "}
                <span>
                  {singleProduct.total_rating === 0
                    ? 10
                    : singleProduct.total_rating}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                Rating <span>2.6k</span>
              </li>
              <li>
                Response Rate <span>2.6k</span>
              </li>
              <li>
                Joined <span>2.6k</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BgWrapper>
  );
}
