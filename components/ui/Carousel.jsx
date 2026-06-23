"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Pagination, Mousewheel } from "swiper/modules"

// Import required styles
import "swiper/css"
import "swiper/css/pagination"

export function Carousel() {
  return (
    <Swiper
      modules={[FreeMode, Pagination, Mousewheel]}
      slidesPerView={1.5}
      spaceBetween={12}
      loop={true}
      freeMode={true}
      pagination={{
        el: ".swiper-pagination",
        type: "progressbar",
        clickable: true,
      }}
      mousewheel={{
        forceToAxis: true,
      }}
      className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>

      {/* Pagination element must be placed outside the slides but inside Swiper */}
      <div className="swiper-pagination"></div>
    </Swiper>
  )
}
