
import { Play, Users, Clock, CheckCircle2, Star, ArrowRight } from 'lucide-react'
import React from 'react'

export default function FreeLectureSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6 md:p-10">
      
      {/* Header Section */}
<div className="text-center mb-14">
 <h2 className="text-4xl md:text-6xl font-bold leading-tight gradient-text mb-4 tracking-tight"
 style={{ fontFamily: "'Lexend', sans-serif" }}>Free Lecture</h2>
        <p className="text-black text-2xl md:text-2xl font-semibold max-w-xl mx-auto tracking-tight leading-relaxed">
        "Take your seat now in a free lecture, where we open the doors to our backstage to show you the methodology by which we transform silent ideas into market-leading visual identities, and discover the secret of the gap that separates the amateur designer from the global professional."
        </p>
 </div>

      {/* Main Card */}
      <div className="max-w-4xl w-full bg-white rounded-[2rem] p-4 shadow-xl border border-gray-100">
        
        {/* Video Container with Rainbow Border */}
        <div className="relative p-[3px] bg-gradient-to-tr from-purple-500 via-blue-500 via-green-500 via-yellow-500 to-red-500 rounded-[1.8rem] overflow-hidden aspect-video">
          <div className="w-full h-full bg-black rounded-[1.7rem] flex items-center justify-center relative overflow-hidden">
            
            {/* Play Button */}
            <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                  <div className="absolute inset-0 rounded-full border-2 border-green-400 opacity-50 scale-125 animate-ping-out"></div>
                  <Play size={30} fill="black" className="ml-1" />
                </div>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="mt-6 px-4 pb-4">
          
          {/* Stats */}
          <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>1 Minute</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={16} />
              <span>1,600 Students</span>
            </div>
          </div>

          {/* Title and Description */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="text-green-500" size={24} fill="#ecfdf5" />
              <h3 className="text-2xl font-bold text-gray-900">Free Session</h3>
            </div>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg">
              Master Python by building 100 projects in 100 days. 
              Learn data science, automation, build websites games and apps!
            </p>
          </div>

          {/* Footer: Rating and Button */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-50">
            <div className="flex items-center gap-2">
              <div className="flex text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-gray-900 font-bold ml-1">(850,000 Review)</span>
            </div>

            <button className="flex items-center gap-2 text-gray-900 font-bold hover:gap-3 transition-all border-b-2 border-black pb-1 group">
              Enroll Course 
              <div className="bg-black text-white rounded-full p-1 group-hover:translate-x-1 transition-transform">
                <ArrowRight size={14} />
              </div>
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}


