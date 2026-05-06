import React from "react";
import Adobe from "../../assets/images/home/Adobe.webp";
import heroWebp from "../../assets/images/instructor/cover-websitebar2 2.webp";
export default function InstructorHeroSection() {
  return (
    <div className="p-px -mt-[2px] rounded-b-[120px] gradient-border">
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
        <div className="relative z-10 max-w-7xl ml-12 mb-30 px-0 w-full">
          <div className="max-w-4xl ">
            {/* Heading */}
            <h2
              className="font-[lexend] font-semibold tracking-tighter leading-tight drop-shadow-lg"
            >
            <span className="text-white text-[40px]">
                Those with the tools design; those with the <br />
                 strategy lead Abdullah Al-Nasr | We <br />
                 create the creative partner the <br />
                 market is waiting for.
              </span>
              <br />
              <span className="gradient-text text-[64px] mt-5 ">Abdullah ElNasr</span>
                     
            </h2>

            {/* Icons Section */}
            <div className="absolute top-65 -left-5 flex items-center p-0 rounded-xl w-fit">
              <img
                src={Adobe}
                alt="Adobe"
                className="w-54.75 h-36.5 object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
