import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import GroupImage from "../../assets/images/home/GroupImage.png";
import P1 from "../../assets/images/home/Project1.png";
import P2 from "../../assets/images/home/Project2.png";
import P3 from "../../assets/images/home/Project3.png";
import P4 from "../../assets/images/home/Project4.png";
import P5 from "../../assets/images/home/Project5.png";

const projects = [P1, P2, P3, P4, P5];



export default function TraineesProjects() {
  return (
    <div className="bg-white py-10 overflow-hidden flex flex-col items-center">
      {/* Title */}
      <h2 className="font-bold gradient-text text-6xl  tracking-wide">
        Trainees Projects
      </h2>

      {/* Group Image */}
      <div className="w-full max-w-3xl px-4 mt-10 ">
        <img
          src={GroupImage}
          alt="Trainees Group"
          className="w-full object-contain"
        />
      </div>

      {/* Swiper Slider */}
      <div className="w-full mb-12">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={600}
          spaceBetween={10}
        >
          {projects.map((img, i) => (
            <SwiperSlide key={i} className="flex justify-center py-6">
              {({ isActive, isPrev, isNext }) => {
                
                const rotate = isActive ? 0 : isPrev ? -30 : isNext ? 30 : 0;

                return (
                  <div
                    className="w-[400px] h-[180px] rounded-xl overflow-hidden shadow-2xl border border-gray-200"
                    style={{
                      transform: `perspective(800px) rotateY(${rotate}deg) rotateX(${isActive ? 0 : 6}deg) scale(${isActive ? 1.1 : 0.9})`,
                      transition: "transform 0.6s ease",
                      opacity: isActive ? 1 : 0.6,
                    }}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              }}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Text */}
      <div className="text-center px-8   ">
        <p className="text-7xl  font-bold text-black leading-snug">
          More than just a course, <br />
          it's your professional
          <br />
          future.
        </p>
      </div>
    </div>
  );
}
