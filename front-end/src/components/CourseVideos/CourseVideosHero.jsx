import React from 'react';

import VRPersonImg from "../../assets/images/videos/person.webp";

const CourseVideosHero = () => {
  return (
    <section 
      className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden px-6 pb-20 "
      style={{
        // تطبيق درجات الـ Background من الصورة التي أرسلتها
        background: 'linear-gradient(90deg, #DEDEDE 0%, #FFFFFF 52%, #DFDFDF 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-around">
        
        {/* الجزء الأيسر: النصوص */}
        <div className="flex flex-col  font-semibold text-center md:text-center z-10">
          <h1 className="flex flex-col  leading-none">
            <span className="text-black  text-6xl md:text-8xl  tracking-tighter">
              Our
            </span>
            <span className="gradient-text text-5xl md:text-8xl  -mt-2 tracking-tight ">
              Course videos
            </span>
          </h1>
          
          <div className="mt-2">
            <h2 className="text-black text-4xl  md:text-6xl tracking-tight ">
              Choose your path
            </h2>
            <p className="text-black  text-3xl md:text-5xl font-extralight tracking-tight">
              to success.
            </p>
          </div>
        </div>

        {/* الجزء الأيمن: الصورة */}
        <div className="relative w-full max-w-[500px] flex justify-around md:max-w-[400px]">
          <img 
            src={VRPersonImg} 
            alt="Person with VR headset and course thumbnails" 
            className="w-full h-auto drop-shadow-2xl object-contain"
          />
          
         
        </div>

      </div>
    </section>
  );
};

export default CourseVideosHero;