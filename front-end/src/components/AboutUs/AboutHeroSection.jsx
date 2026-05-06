 import React from 'react'
import heroWebp from "../../assets/images/about/AboutCover.webp";

export default function AboutHeroSection() {
  return (
    <div className="p-px  -mt-[2px] rounded-b-[127px] overflow-hidden gradient-border">
      <section className="relative w-full  h-[500px] md:h-[850px]  rounded-b-[126px] flex items-center bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroWebp}
            alt="About Us Cover"
         
            className="w-full h-full object-cover object-center md:object-top" 
          />
       
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-2xl text-center md:text-left absolute -bottom-10 left-50">
           
            <h1 className="text-5xl pr-2 md:text-9xl font-semibold font-[lexend] tracking-tighter gradient-text mb-2 drop-shadow-lg">
             connect with us
            </h1>
            <p className="mb-0 text-white text-center tracking-tighter font-[lexend] text-lg md:text-4xl  max-w-lg font-semibold">
              
            </p>
          </div>
        </div>
      </section>
    </div>

  )
}