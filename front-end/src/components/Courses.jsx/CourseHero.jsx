// import React from 'react';
// import GoldButton from '../common/GoldButton';

// const CourseHero = () => {
//   return (
//     <section className="flex flex-col items-center px-4 py-12 font-['Lexend'] bg-white">

//       {/* 1. Headline - Start your transformation journey here */}
//       <div className="relative mb-4">
//         <GoldButton>
//           <h1 className='text-6xl'>
//             Start Your Transformation Journey Here
//           </h1>
//         </GoldButton>
//       </div>

//       {/* 2. Sub-headline */}
//       <p className="text-center text-sm md:text-base mb-10 tracking-wide leading-relaxed">
//         <span className="text-red-600 font-semibold">More than just</span> a course...
//         <span className="text-cyan-500 italic"> it's your new professional future.</span>
//       </p>

//       {/* 3. Video Container with Gradient Border */}
//       <div className="relative w-full max-w-5xl p-[3px] rounded-[2rem] overflow-hidden group"
//            style={{
//              background: 'linear-gradient(to right, #ff0000, #ff00ff, #00ffff, #00ff00)'
//            }}>
//         <div className="bg-black rounded-[1.9rem] overflow-hidden relative aspect-video flex items-center justify-center">
//           {/* Placeholder for the Image/Video shown in Screenshot 2026-04-30 104254.png */}
//           <img
//             src=""
//             alt="Course Preview"
//             className="w-full h-full object-cover opacity-80"
//           />

//           {/* Play Button */}
//           <button className="absolute z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
//             <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-purple-600 border-b-[10px] border-b-transparent ml-1"></div>
//           </button>
//         </div>
//       </div>

//       {/* 4. Description Box with Rainbow Gradient Border */}
//       <div className="mt-12 w-full max-w-3xl p-[2px] rounded-[2.5rem]"
//            style={{
//              background: 'linear-gradient(45deg, #00ff00, #00ffff, #ff00ff, #ff0000)'
//            }}>
//         <div className="bg-white rounded-[2.4rem] p-8 md:p-10 text-center shadow-sm">
//           <p className="text-black text-lg md:text-xl font-medium leading-snug">
//             "We know you don't just want to learn Photoshop; you want a clear path to reach elite clients in the Gulf.
//             <span className="block mt-4 font-bold">
//               'Forget traditional learning methods.' At ANS Academy, our curriculum is derived from the heart of real projects in the GCC countries. We are saving you years of trial and error to give you the exact expertise the Gulf market needs right now."
//             </span>
//           </p>
//         </div>
//       </div>

//     </section>
//   );
// };

// export default CourseHero;

import React from "react";
import GoldButton from "../common/GoldButton";
import { Play } from "lucide-react";

import backGroundImage from "../../assets/images/course/DSC_1754 1.webp";

const CourseHero = () => {
  return (
    <section className="flex flex-col items-center px-4 py-12 font-['Lexend'] bg-white">
      {/* 1. Headline */}
      <div className="relative mb-4">
        <GoldButton>
          <h1 className="text-5xl font-semibold">
            Start Your Transformation Journey Here
          </h1>
        </GoldButton>
      </div>

      {/* 2. Sub-headline */}

      <p
        className="text-center text-sm md:text-xl mb-10 tracking-wide leading-relaxed font-['Lexend']"
        style={{
          background:
            "linear-gradient(90deg, #FF0000 0%, #00FFFF 60%, #F600FF 71%, #00CC88 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",

          filter: "drop-shadow(0px 0px 4px rgba(246, 0, 255, 0.3))",
        }}
      >
        <span className="font-semibold">More than just</span> a course...{" "}
        <span className="italic">it's your new professional future.</span>
      </p>

      {/* 3. Video Section (UPDATED) */}
      <div className="relative w-full max-w-7xl group">
        {/* Glow border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-red-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-700"></div>

        {/* Video container */}
        <div className="relative bg-black rounded-2xl overflow-hidden aspect-video flex items-center justify-center border border-gray-800">
          {/* Thumbnail Image */}
          <img
            src={backGroundImage}
            alt="Course Preview"
            className="w-full h-full object-cover opacity-80"
          />
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative flex items-center justify-center w-20 h-20 bg-white rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              {/* Pulse effect */}
              <div className="absolute inset-0 rounded-full border-2 border-green-400 opacity-80 scale-125 animate-ping"></div>

              <Play size={32} fill="black" className="ml-1" />
            </div>
          </div>

          {/* Dark overlay for better contrast */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>

      {/* 4. Description Box */}
      <div
        className="mt-12 w-full max-w-6xl p-[2px] rounded-[2.5rem]"
        style={{
          background:
            "linear-gradient(45deg, #00ff00, #00ffff, #ff00ff, #ff0000)",
        }}
      >
    <div className="bg-white rounded-[2.4rem] p-6 md:p-8 text-start mx-auto justify-center shadow-sm">
  <p className="text-black text-lg md:text-4xl font-semibold font-[lexend] leading-snug tracking-tighter text-justify" 
     style={{ textJustify: 'inter-word' }}>
    "We know you don't just want to learn Photoshop; you want a clear
    path to reach elite clients in the Gulf. 'Forget traditional
    learning methods.' At ANS Academy, our curriculum is derived from
    the heart of real projects in the GCC countries. We are saving you
    years of trial and error to give you the exact expertise the Gulf
    market needs right now."
  </p>
</div>
      </div>
    </section>
  );
};

export default CourseHero;
