import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.scss";

export default function slider() {
  return (
    <div>
      <>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          pagination: true
        }}
        modules={[ Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://wowin.ua/image/cache/catalog/easyphoto/240/P6/amore_37-702x467.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://wowin.ua/image/cache/catalog/easyphoto/227/P2/etna_85-702x467.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://wowin.ua/image/cache/catalog/easyphoto/182/P5/amore_9-702x467.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://wowin.ua/image/cache/catalog/easyphoto/62/P2/eldorado_sunshine-702x467.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://wowin.ua/image/cache/catalog/easyphoto/334/_MG_1138-702x467.jpg" alt="" /></SwiperSlide>
      </Swiper>
      </>
    </div>
  )
}


