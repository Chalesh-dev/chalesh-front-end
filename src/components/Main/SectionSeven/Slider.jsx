// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Card from "./Card";
import Link from "next/link";
import Image from "next/image";

const Slider = ({ data }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      scrollbar={{ draggable: true }}
      modules={[Autoplay, Pagination, Navigation]}
      speed={3000}
      // breakpoints={{
      //   0: {
      //     slidesPerView: 1,
      //     spaceBetween: 20,
      //   },
      //   1024: {
      //     slidesPerView: 1,
      //     spaceBetween: 30,
      //   },
      //   1280: {
      //     slidesPerView: 3,
      //     spaceBetween: 40,
      //   },
      // }}
      className="h-[327px] w-full"
    >
      {data.map((item, index) => (
        <SwiperSlide
          key={index}
          className="w-[1153px] h-[327px] rounded-[2rem] border-[0.1rem] border-[#312E81] hover:bg-[#262458] transition duration-500 hover:shadow-md shadow-gray-200 group overflow-hidden"
        >
          <Link
            href={item.href}
            className="flex w-full h-[100%] md:flex-row flex-col-reverse items-center md:justify-center justify-evenly gap-3 p-5"
          >
            <p className="md:w-[70%] w-full md:p-5 p-2 flex items-center text-white sm:text-lg text-sm">
              {item.text}
            </p>
            <div className="md:w-[30%] w-full md:h-full h-[180px] flex md:flex-col flex-row gap-3 text-white justify-center items-center">
              <Image
                src={item.img}
                width={180}
                height={180}
                alt="text"
                className="sm:w-[180px] sm:h-[180px] w-[130px] h-[130px] rounded-full"
              />
              <span className="sm:text-lg text-sm">Lora Sfill, Front-end</span>
            </div>
          </Link>
          {/* <Card href={item.href} text={item.text} img={item.img} /> */}
        </SwiperSlide>
      ))}
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
