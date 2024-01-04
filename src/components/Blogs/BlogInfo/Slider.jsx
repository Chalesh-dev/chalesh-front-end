import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import BlogCard from "../BlogCard";

const Slider = ({ data }) => {
  return (
    <div className="slider--custom">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper--container overflow-visible"
      >
        {data.map(
          (item, index) => (
            <SwiperSlide key={index} className="mx-2">
              <BlogCard
                href="/"
                articleImg="/images/articles/art1.png"
                userImg="/images/articles/userImg.png"
                userName="Mark Humphries"
                title="Why does the brain have a reward prediction error?"
                summary="So all we’ve learnt is that if you incentivise a global talent pool
        of scientists to churn out papers as fast as they can, while also
        teaching, marking, tutoring, sitting on committees, reviewing,
        interviewing, and endless others “ings”, then those papers are not,
        unsurprisingly, deeply thought, long-nurtured disruptive ideas."
                min_read="10"
                created_at="Feb 11, 2019"
                likeNum="20"
                commentNum="154"
              />
            </SwiperSlide>
          ),
          []
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
