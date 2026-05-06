import React from 'react'
import backGroundImage from "../../assets/images/instructor/video.webp"
import { Play } from 'lucide-react'

export default function VideoIntroSection() {
  return (
    <section className="py-10 -mt-45 px-6 flex flex-col items-center">
      {/* Title Section */}
      <div className="text-center mb-12 max-w-3xl">
        <h2 className="text-2xl md:text-5xl font-semibold leading-tight gradient-text tracking-tight">
       
            Why is Abdullah Al-Nasr number one in the Arab world in the field of graphic design?
       
        </h2>
      </div>

      {/* Video Container Area */}
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
    </section>
  )
}