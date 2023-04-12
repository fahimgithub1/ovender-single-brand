import BgWrapper from "@/layouts/bgWrapper";
import SectionTitle from "@/lib/sectionTitle";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import PopulerCard from "./populerCard";

const productInfo = [
  {
    id: 1,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 2,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 3,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 4,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 5,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 6,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 7,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 8,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
];

export default function MostPopuler() {
  return (
    <BgWrapper bgClass="MostPopularSection">
      <SectionTitle title="Most Popular" />

      <Swiper
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
        grabCursor={true}
        slidesPerView="auto"
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {productInfo.map((item) => (
          <SwiperSlide key={item.id}>
            <PopulerCard
              ProductClass= "MostPopularCard"
              key={item.id}
              id={item.id}
              name={item.name}
              star={item.star}
              img={item.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </BgWrapper>
  );
}
