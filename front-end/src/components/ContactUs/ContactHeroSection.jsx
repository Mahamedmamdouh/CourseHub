 import React from 'react'
import heroWebp from "../../assets/images/contact/coverContact.webp";

export default function ContactHeroSection() {
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-4 w-full">
          <div className="max-w-2xl text-center md:text-left absolute -top-30 -left-20">
           
            <h1 className="text-5xl pr-2 md:text-9xl font-semibold font-[lexend] tracking-tighter gradient-text mb-2 drop-shadow-lg">
             Ready to
            </h1>
            <p className="mb-1 mx-1 text-black text-center tracking-tighter font-[lexend] text-lg md:text-7xl  max-w-lg font-semibold">
              connect with us
            </p>
            <p className="mx-3 gradient-text-hero text-center tracking-tight font-[lexend] text-lg md:text-3xl  max-w-lg font-light">
              Let’s talk about your next project
            </p>
          </div>
        </div>
      </section>
    </div>

  )
}