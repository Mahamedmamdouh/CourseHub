
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import MentorCard from "./../common/MentorCard";

import P1 from "../../assets/images/home/Person1.png";
import C1 from "../../assets/images/home/Card1.png";
import P2 from "../../assets/images/home/Person2.png";
import C2 from "../../assets/images/home/Card2.png";
import P3 from "../../assets/images/home/Person3.png";
import C3 from "../../assets/images/home/Card3.png";
import P4 from "../../assets/images/home/Person4.png";
import C4 from "../../assets/images/home/Card4.png";
import P5 from "../../assets/images/home/Person5.png";
import C5 from "../../assets/images/home/Card5.png";
import P6 from "../../assets/images/home/Person6.png";
import C6 from "../../assets/images/home/Card6.png";
import P7 from "../../assets/images/home/Person7.png";
import C7 from "../../assets/images/home/Card7.png";
import P8 from "../../assets/images/home/Person8.png";
import C8 from "../../assets/images/home/Card8.png";
import P9 from "../../assets/images/home/Person9.png";
import C9 from "../../assets/images/home/Card9.png";

export default function MentorSection() {
  const teamData = [
    { id: 1, name: "Khalid Al-Dahmani", title: "Content Marketing Manager", description: "I started to guide my team more effectively after implementing the course methodology.", mainImage: P1, portfolioImage: C1 },
    { id: 2, name: "Khalid Al-Dahmani", title: "Content Marketing Manager", description: "I started to guide my team more effectively after implementing the course methodology.", mainImage: P2, portfolioImage: C2 },
    { id: 3, name: "Khalid Al-Dahmani", title: "Content Marketing Manager", description: "I started to guide my team more effectively after implementing the course methodology.", mainImage: P3, portfolioImage: C3 },
    { id: 4, name: "Khalid Al-Dahmani", title: "Content Marketing Manager", description: "I started to guide my team more effectively after implementing the course methodology.", mainImage: P4, portfolioImage: C4 },
    { id: 5, name: "Khalid Al-Dahmani", title: "Content Marketing Manager", description: "I started to guide my team more effectively after implementing the course methodology.", mainImage: P5, portfolioImage: C5 },
    { id: 6, name: "Khalid Al-Dahmani", title: "Content Marketing Manager", description: "I started to guide my team more effectively after implementing the course methodology.", mainImage: P6, portfolioImage: C6 },
    { id: 7, name: "Khalid Al-Dahmani", title: "Content Marketing Manager", description: "I started to guide my team more effectively after implementing the course methodology.", mainImage: P7, portfolioImage: C7 },
    { id: 8, name: "Khalid Al-Dahmani", title: "Content Marketing Manager", description: "I started to guide my team more effectively after implementing the course methodology.", mainImage: P8, portfolioImage: C8 },
    { id: 9, name: "Khalid Al-Dahmani", title: "Content Marketing Manager", description: "I started to guide my team more effectively after implementing the course methodology.", mainImage: P9, portfolioImage: C9 },
  ];

  return (
    <div className="bg-white py-24 overflow-hidden">

      {/* Title */}
      <div className="max-w-3xl mx-auto text-center mb-24">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight gradient-text">
          Our group of departments rivals the highest quality and international design agencies.
        </h2>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="w-full  pb-10"
      >
        {teamData.map((emp, i) => (
          <SwiperSlide key={i} className="flex justify-center pt-35">
            {({ isActive }) => (
              <MentorCard employee={emp} isActive={isActive} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}