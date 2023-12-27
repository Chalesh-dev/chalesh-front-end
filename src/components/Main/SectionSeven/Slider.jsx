// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Card from "./Card";

const Slider = ({ data, className }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="min-h-[400px] h-[400px]"
    >
      {data.map((item, index) => (
        <SwiperSlide
          key={index}
          className={`${className} rounded-[2rem] border-[0.1rem] border-[#312E81] hover:bg-[#262458] transition duration-500 hover:shadow-md shadow-gray-200 group overflow-hidden`}
        >
          <Card href={item.href} text={item.text} img={item.img} />
        </SwiperSlide>
      ))}

      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
    </Swiper>
  );
};

export default Slider;

// import React from "react";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import Card from "./Card";

// // import required modules
// import { Autoplay, Pagination } from "swiper/modules";

// const Slide = ({ className = "", data, sliderClass = "" }) => {
//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination]}
//         loop={true}
//         className={`${sliderClass} w-full`}
//         // slidesPerView={4}
//         // breakpoints={{
//         //     640: {
//         //       slidesPerView: 1,
//         //     },
//         //     768: {
//         //       slidesPerView: 1,
//         //     },
//         //     1280: {
//         //       slidesPerView: 1,
//         //     },
//         //   }}
//         // loop={true}
//         // autoplay={{
//         //   delay: 5000,
//         //   speed: 2000,
//         //   // disableOnInteraction: true,
//         // }}
//         // modules={[Autoplay, Pagination]}
//         // spaceBetween={30}
//         // className={`w-full ${sliderClass}`}
//         // grabCursor={true}
//         // speed={1200}
//         // centeredSlides={true}
//       >
//         {data.map((item, index) => (
//           <SwiperSlide
//             key={index}
//             className={`${className} rounded-[2rem] border-[0.1rem] border-[#312E81] hover:bg-[#262458] transition duration-500 hover:shadow-md shadow-gray-200 group overflow-hidden`}
//           >
//             <Card href={item.href} text={item.text} img={item.img} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// };

// export default CustomSlider;
