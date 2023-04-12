import BgWrapper from "@/layouts/bgWrapper";
import React from "react";
import ShockingTitle from "./shockingTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import ShockingProductCard from "@/lib/shockingProductCard";

const productInfo = [
  {
    id: 1,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "free shipping",
  },
  {
    id: 2,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "campaign",
  },
  {
    id: 3,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Oven Mall",
  },
  {
    id: 4,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Oven Mart",
  },
  {
    id: 5,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Gift Card",
  },
  {
    id: 6,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Gift Item",
  },
  {
    id: 7,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Global Collection",
  },
  {
    id: 8,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Tourse & Tickets",
  },
  {
    id: 9,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Digital Sheba",
  },
  {
    id: 10,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Daily Rewards",
  },
  {
    id: 11,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Daily Rewards",
  },
  {
    id: 12,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Daily Rewards",
  },
  {
    id: 13,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Daily Rewards",
  },
  {
    id: 14,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Digital Sheba",
  },
  {
    id: 15,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Digital Sheba",
  },
  {
    id: 16,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Digital Sheba",
  },
  {
    id: 17,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Digital Sheba",
  },
  {
    id: 18,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Digital Sheba",
  },
  {
    id: 19,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Digital Sheba",
  },
  {
    id: 20,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Digital Sheba",
  },
  {
    id: 22,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Digital Sheba",
  },
  {
    id: 23,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Digital Sheba",
  },
  {
    id: 24,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Digital Sheba",
  },
  {
    id: 25,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Tourse & Tickets",
  },
  {
    id: 26,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Tourse & Tickets",
  },
  {
    id: 27,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Global Collection",
  },
  {
    id: 28,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Global Collection",
  },
  {
    id: 29,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Global Collection",
  },
  {
    id: 30,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Global Collection",
  },
  {
    id: 31,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Global Collection",
  },
  {
    id: 32,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "free shipping",
  },
  {
    id: 34,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "free shipping",
  },
  {
    id: 35,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "campaign",
  },
  {
    id: 36,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "free shipping",
  },
  {
    id: 37,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "free shipping",
  },
  {
    id: 38,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "Global Collection",
  },
  {
    id: 39,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "free shipping",
  },
  {
    id: 40,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
    rewards: "free shipping",
  },
];

export default function ShockingSale() {
  return (
    <BgWrapper>
      <ShockingTitle />

      <Swiper
        freeMode={true}
        modules={[FreeMode]}
        // loop={true}
        // autoplay={true}
        className="mySwiper"
        grabCursor={true}
        slidesPerView="auto"
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 7,
          },
        }}
      >
        {productInfo.map((item) => (
          <SwiperSlide key={item.id}>
            <ShockingProductCard
              key={item.id}
              id={item.id}
              price={item.price}
              disCount={item.disCount}
              sold={item.sold}
              img={item.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </BgWrapper>
  );
}
