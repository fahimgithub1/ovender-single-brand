import BgWrapper from "@/layouts/bgWrapper";
import SectionTitle from "@/lib/sectionTitle";
import { useCreateProductReviewMutation } from "@/pages/api/apiSlices";
import React, { useState } from "react";

export default function Review(props) {
  
  const [reviewText, setReviewText] = useState("sfdf");

  const [createProductReview] = useCreateProductReviewMutation();

  const [oneStar, setOneStar] = useState(false);
  const [towStar, setTowStar] = useState(false);
  const [threeStar, setThreeStar] = useState(false);
  const [fourStar, setFourStar] = useState(false);
  const [fiveStar, setFiveStar] = useState(false);

  const [rating, setReting] = useState(0)

  const handelOneStar = () => {
    setOneStar(true);
    setTowStar(false);
    setThreeStar(false);
    setFourStar(false);
    setFiveStar(false);

    setReting(1)
  };

  const handelTowStar = () => {
    setOneStar(true);
    setTowStar(true);
    setThreeStar(false);
    setFourStar(false);
    setFiveStar(false);

    setReting(2)
  };

  const handelThreeStar = () => {
    setOneStar(true);
    setTowStar(true);
    setThreeStar(true);
    setFourStar(false);
    setFiveStar(false);

    setReting(3)
  };

  const handelFourStar = () => {
    setOneStar(true);
    setTowStar(true);
    setThreeStar(true);
    setFourStar(true);
    setFiveStar(false);

    setReting(4)
  };

  const handelFiveStar = () => {
    setOneStar(true);
    setTowStar(true);
    setThreeStar(true);
    setFourStar(true);
    setFiveStar(true);

    setReting(5)
  };

  const onReviewSubmit = (event) => {
    event.preventDefault();

    let review = {
      product_id: props.id,
      comment: reviewText,
      rating: rating,
      name: 'fahim',
      title: "sfsf"
    }
    createProductReview(review)
      .unwrap()
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <BgWrapper>
      <SectionTitle title="Product Ratings" />

      <div className="YourReview">
        <h4>Your Review:</h4>
        <div>
          <form onSubmit={onReviewSubmit}>
            <textarea
              placeholder="write your review111"
              onChange={(e) => {
                setReviewText(e.target.value);
              }}
            ></textarea>
            <br />

            <ul>
              <li>
                <i
                  className={
                    oneStar
                      ? "fontWidth-900 fa fa-star"
                      : "fa fa-star fontWidth-200"
                  }
                  onClick={handelOneStar}
                ></i>
              </li>

              <li>
                <i
                  className={
                    towStar
                      ? "fontWidth-900 fa fa-star"
                      : "fa fa-star fontWidth-200"
                  }
                  onClick={handelTowStar}
                ></i>
              </li>

              <li>
                <i
                  className={
                    threeStar
                      ? "fontWidth-900 fa fa-star"
                      : "fa fa-star fontWidth-200"
                  }
                  onClick={handelThreeStar}
                ></i>
              </li>

              <li>
                <i
                  className={
                    fourStar
                      ? "fontWidth-900 fa fa-star"
                      : "fa fa-star fontWidth-200"
                  }
                  onClick={handelFourStar}
                ></i>
              </li>

              <li>
                <i
                  className={
                    fiveStar
                      ? "fontWidth-900 fa fa-star"
                      : "fa fa-star fontWidth-200"
                  }
                  onClick={handelFiveStar}
                ></i>
              </li>
            </ul>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </BgWrapper>
  );
}
