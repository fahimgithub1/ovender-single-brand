import BgWrapper from "@/layouts/bgWrapper";
import SectionTitle from "@/lib/sectionTitle";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import CategorisCard from "./CategorisCard";
import { useGetAllCategorisQuery } from "@/pages/api/apiSlices";
import Lodding from "@/lib/lodding";


export default function Categoris() {
  const { data: Categories, error, isLoading } = useGetAllCategorisQuery();

  let cateDiv = '';
  let cateDiv2 = '';

  if(Categories !== undefined){
    cateDiv = Categories.data.slice(0, 10).map((item) => (
      <SwiperSlide key={item.id}>
        <CategorisCard
          name={item.name}
          slug={item.slug}
          img={item.category_icon_path}
        />
      </SwiperSlide>
    )) ;
  }else{
    
  } 

  if(Categories !== undefined){
    cateDiv2 = Categories.data.slice(10, 20).map((item) => (
      <SwiperSlide key={item.id}>
        <CategorisCard
          name={item.name}
          slug={item.slug}
          img={item.category_icon_path}
        />
      </SwiperSlide>
    )) ;
  }else{
    
  } 

  return (
    <BgWrapper>
      <SectionTitle title="Categories" />

      <Swiper
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
        grabCursor={true}
        slidesPerView="auto"
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 10,
          },
        }}
      >
        
        {cateDiv}
        {error && <p>data not found !!</p>}
        {/* {isLoading && <Lodding />} */}
      </Swiper>

      <Swiper
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
        grabCursor={true}
        slidesPerView="auto"
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 10,
          },
        }}
      >
        
        {cateDiv2}
        {error && <p>data not found !!</p>}
        {isLoading && <Lodding />}
      </Swiper>
    </BgWrapper>
  );
}
