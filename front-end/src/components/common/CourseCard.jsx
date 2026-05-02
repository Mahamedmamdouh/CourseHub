import React from "react";

export default function CourseCard({ image, title }) {
  return (
    // الحاوية الخارجية مع الحدود المتدرجة وتأثير الـ hover
    <div className="rounded-3xl shadow-lg p-[2px] w-full max-w-[360px] hover:scale-105 transition duration-300 gradient-border group">
        <div className="bg-white rounded-3xl p-4 w-full transition duration-300">
      
      {/* Image and Play Button Container */}
      <div className="relative overflow-hidden rounded-2xl aspect-[16/10]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition duration-300" // تأثير تكبير بسيط عند التمرير
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center  transition duration-300 cursor-pointer">
          <div className="w-16 h-16 bg-[rgb(38,89,101)] backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white">
            <svg 
              className="w-8 h-8 text-white fill-current translate-x-[2px]" // translate-x-px لضبط الأيقونة بصرياً
              viewBox="0 0 24 24"
            >
              <path d="M7 6v12l10-6z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4">
        {/* Meta */}
        <div className="flex gap-4 text-gray-400 text-sm mb-2">
          <span>⏱ 1 Minute</span>
          <span>👥 150 Students</span>
        </div>

        <h3 className="font-bold text-lg leading-snug">
          We will learn photomanipulation integration
        </h3>

        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
          Master Python by building 100 projects in 100 days. Learn data science,
          automation, build websites, games and apps!
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          
          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-400 text-sm">
            ★★★★☆
            <span className="text-gray-500 text-xs ml-1">
              (120 review)
            </span>
          </div>

          {/* Button */}
          <span className="text-black font-medium text-sm cursor-pointer flex items-center gap-1">
            Enroll Course →
          </span>
        </div>
      </div>
    </div>
    </div>
  );
}