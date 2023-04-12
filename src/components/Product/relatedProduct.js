import SectionWrapper from "@/layouts/sectionWrapper";
import SectionTitle from "@/lib/sectionTitle";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import ProductCard from "@/lib/productCard";
import { useGetRelatedProductsQuery } from "@/pages/api/apiSlices";
import RelatedProductCard from "./relatedProductCard";

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

export default function RelatedProduct(props) {
 const id = props.id;
  const {
    data: relatedProduct,
    lodding,
    error,
  } = useGetRelatedProductsQuery(id);

  let RelatedPRoductDiv = "";

  if (relatedProduct !== undefined) {
    // if(relatedProduct.data.length > 0){
      RelatedPRoductDiv = relatedProduct.map((item, index) => (
        <SwiperSlide key={index}>
          <RelatedProductCard
            key={item.details.id}
            id={item.details.id}
            name={item.details.name}
            price={item.details.priceHTML}
            // disCount={item.details.disCount}
            sold={item.details.sold}
            star={item.details.rating}
            img={item.details.image}
          />
        </SwiperSlide>
      ));
    // }
  }

  return (
    <SectionWrapper sectionClass="RelatedProductSec">
      <SectionTitle title="Related Products" />

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
        {RelatedPRoductDiv}
      </Swiper>
    </SectionWrapper>
  );
}
