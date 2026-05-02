import React from "react";
import { ArrowRight } from "lucide-react";
import LeaderImage from "../../assets/images/home/Leader.webp";

const LeaderSection = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-10 pb-10 px-4 font-sans">
      {/* Header */}
      <div className="text-center mb-2">
        <h3 className="text-black text-xl font-bold mb-2">
          Who is the leader?
        </h3>

        <h1 className="text-5xl md:text-6xl font-black italic gradient-text">
          Meet Your Mentor
        </h1>
      </div>

      {/* Image */}
      <div className="relative ">
        <img
          src={LeaderImage}
          alt="Abdullah ElNasr"
          className="w-72 md:w-80 object-contain"
        />

        {/* Name tag */}
        <div
          className="mb-12 text-[10px] absolute bottom-9 left-1/2 -translate-x-1/2 flex "
          style={{ transform: " skewX(-14deg)" }}
        >
          <span
            className="font-bold uppercase italic px-3 py-1 text-white gold-button"
            style={{ display: "inline-block" }}
          >
            Abdullah
          </span>
          <span className="inline-block border border-white px-3 py-1 relative overflow-hidden">
            {/* الميل (الشكل بس) */}
            <span
              className="absolute inset-0 bg-transparent"
              style={{ transform: "skewX(4deg)" }}
            />

            {/* النص بدون ميل */}
            <span className="relative italic uppercase text-white">
              El-Nasr
            </span>
          </span>
        </div>
      </div>

      {/* Card */}
      <div
        className="w-full max-w-3xl -translate-y-21 rounded-[60px] py-2 px-8 text-center relative overflow-hidden"
        style={{
          background: `
      radial-gradient(ellipse 70% 60% at 45% 75%, #E07800 0%, #B05A00 30%, #3D1A00 65%, #000000 100%)
    `,
          boxShadow: "inset 0 0 80px rgba(0,0,0,0.6)",
        }}
      >
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "150px 150px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 ">
          <h2 className="gradient-text text-3xl md:text-4xl font-bold mb-4 translate-y-0">
            Abdullah ElNasr
          </h2>

          <p
            className="text-white text-sm md:text-base italic mb-8"
            style={{ fontFamily: "Lexend" }}
          >
            A vision that began in the heart of the market
          </p>

          <div
            className="text-left border-l-2 border-yellow-600 pl-6 space-y-6 tracking-tight "
            style={{ fontFamily: "Lexend" }}
          >
            <p className="text-white text-sm md:text-base leading-relaxed font-semibold">
              For eight years, my passion has been more than just designing
              beautiful images; it's understanding the business psychology
              behind every pixel. After workهng with major agencies and brands,
              I've realized that Arab designers possess talent, but they need a
              clear professional roadmap to place them where they deserve to be.
            </p>

            <p className="text-white text-sm md:text-base leading-relaxed font-semibold tracking-tight">
              ANS Courses is the culmination of my journey... I designed it to
              be the practical professional guide that saves you years of trial
              and error, so that you can be the next success story.
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-end mb-5">
            <button className="flex items-center gap-2 bg-gradient-to-r from-gray-300 to-white text-black px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition">
              Learn more
              <div className="bg-black rounded-full p-1">
                <ArrowRight size={16} className="text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderSection;
