import HerosWrapper from "@/layouts/herosWrapper";
import { useGetSliderQuery } from "@/pages/api/apiSlices";
import React from "react";

export default function Heros() {
  const { data: slider } = useGetSliderQuery();

  let sliderContaint = "";

  if (slider !== undefined) {
    sliderContaint = (
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="1000">
          <img src={slider[0].image_url} className="d-block w-100" alt="..." />
        </div>

        <div className="carousel-item" data-bs-interval="2000">
          <img src={slider[1].image_url} className="d-block w-100" alt="..." />
        </div>

        <div className="carousel-item" data-bs-interval="3000">
          <img src={slider[2].image_url} className="d-block w-100" alt="..." />
        </div>
      </div>
    );

    
  }

  let rightSideSlider = "";

  if (slider !== undefined) {
    rightSideSlider = (
      <div className="col-lg-4 col-md-4 herosRight">
        <div>
          <img src={slider[2].image_url} alt="" />
        </div>
        <div>
          <img src={slider[1].image_url} alt="" />
        </div>
      </div>
    );

    {
      slider.slice(1, 3).map((item) => (
        <div className="carousel-item" data-bs-interval="2000">
          <img src={item.image_url} className="d-block w-100" alt="..." />
        </div>
      ));
    }
  }

  return (
    <HerosWrapper>
      <div className="row">
        <div className="col-lg-8 col-md-8 herosLeft">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            {sliderContaint}
            <div className="carousel-inner">
              
              {/* <div className="carousel-item" data-bs-interval="2000">
                <img
                  src={slider.data[1].image_url}
                  className="d-block w-100"
                  alt="..."
                />
              </div>

              <div className="carousel-item " data-bs-interval="3000">
                <img
                  src={slider.data[0].image_url}
                  className="d-block w-100"
                  alt="..."
                />
              </div> */}
            </div>
          </div>
        </div>

        {rightSideSlider}
      </div>
    </HerosWrapper>
  );
}
