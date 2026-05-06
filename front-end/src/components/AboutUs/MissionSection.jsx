

import React from "react";
import BgImage from "../../assets/images/about/Cover.webp";
import GoldButton from "../common/GoldButton";

export default function MissionSection() {
  return (
   
  
    <div className="w-full h-screen relative mt-40">
      
     
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <GoldButton className="text-black text-2xl md:text-3xl font-bold px-8 py-2">
          Our mission
        </GoldButton>
      </div>

      
      <div
        className="relative w-full h-[300px] md:h-[80vh] overflow-hidden flex items-center justify-center shadow-2xl">
              <img
    src={BgImage}
    alt=""
    className="absolute inset-0 w-full h-full object-cover"
  />
        {/* Overlay لتغميق الصورة */}
        <div className="absolute inset-0 bg-black/70 z-0 "></div>

        {/* الحاوية النصية مع البوردر الملون */}
        <div className="relative z-10 w-full max-w-7xl mx-6 md:mx-12 mb-12">
          
          {/* العنصر المسؤول عن البوردر الملون فقط */}
          <div 
            className="absolute inset-0 rounded-[40px] p-[2px] pointer-events-none"
            style={{
              background: "linear-gradient(90deg, #ff00ff, #00ffff, #00ff00, #ff0000)",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          ></div>

          {/* محتوى النص بداخل البوردر */}
          <div className="px-8 py-20 md:pr-60 md:py-25">
            <p className="text-white  text-xl md:text-4xl leading-tight font-semibold font-[lexend] tracking-tight">
              Our mission is for <span className="text-cyan-400">ANS Courses</span> to become the premier standard of
              quality in the Gulf, where not just students graduate, but creative
              partners emerge to lead the identity of major brands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}