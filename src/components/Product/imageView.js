import Link from "next/link";
import React from "react";
import SmalImagBlox from "./smalImagBlox";
import ReactImageMagnify from "react-image-magnify";

const watchImg687 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6O3yPSboyC931ngvDI0RDfDfZFMqc1PtsnsAvk6t7&s";
const watchImg1200 =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&w=1000&q=80";

export default function ImageView(props) {
  const frist_img = props.images[0];

  return (
    <div className="col-lg-5 col-md-5 col-sm-5">
      <div className="fluid__image-container">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: frist_img.url,
            },
            largeImage: {
              src: frist_img.url,
              width: 1200,
              height: 1800,
            },
            shouldUsePositiveSpaceLens: true,
          }}
        />
      </div>

      <div className="SmallImg d-flex">
        {props.images.map((item) => {
          <SmalImagBlox key={item.id} smalHref={item.small_image_url} />;
        })}
      </div>
    </div>
  );
}
