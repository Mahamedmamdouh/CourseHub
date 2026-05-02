import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import Sl1 from "../../assets/images/home/Sl2.webp"
import Sl2 from "../../assets/images/home/Sl1.webp"

// استيراد ستايلات Swiper
import 'swiper/css';

const CustomerSlider = () => {
  // بيانات تجريبية للشعارات
  const logos = [
    { id: 1, src: Sl1, alt: 'Zarikler' },
    { id: 2, src: Sl2, alt: 'Amazon' },
    { id: 3, src: Sl1, alt: 'Zarikler' },
    { id: 4, src: Sl2, alt: 'Amazon' },
    { id: 5, src: Sl1, alt: 'Zarikler' },
    { id: 6, src: Sl2, alt: 'Amazon' },
    { id: 7, src: Sl1, alt: 'Zarikler' },
    { id: 8, src: Sl2, alt: 'Amazon' },
  ];
  

  return (
    <div className="w-full py-12 bg-white flex flex-col items-center overflow-hidden">
      {/* العنوان مع التنسيق الذهبي */}
      <div className="flex flex-col items-center mb-10">
        
        <h2 className="text-4xl md:text-6xl font-bold leading-tight gradient-text mb-4 tracking-tight"
    style={{ fontFamily: "'Lexend', sans-serif" }}>
          Our Customers
        </h2>
      </div>

      {/* سلايدر الشعارات */}
      <div className="w-full max-w-8xl">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={2}
          loop={true}
          speed={3000} // سرعة الحركة (3 ثوانٍ لدورة ناعمة)
          autoplay={{
            delay: 0, // لا يوجد تأخير لبدء الحركة التالية
            disableOnInteraction: false,
          }}
        loopedSlides={logos.length}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          
          }}
          className="flex items-center"
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.id} className="flex justify-center items-center py-4">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerSlider;