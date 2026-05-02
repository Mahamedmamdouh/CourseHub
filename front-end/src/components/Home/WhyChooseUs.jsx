import React, { useState, useEffect } from 'react';

export default function WhyChooseUs() {
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowStars((prev) => !prev);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 bg-white max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 flex items-baseline gap-2">
        <span className="text-gray-300">Why</span>
        <span className="text-gray-700">choose us?</span>
      </h2>

      <div className="relative p-0.5 rounded-3xl bg-gradient-to-r from-purple-400 via-blue-500 via-red-500 to-green-400 mr-10 shadow-lg">
        <div className="bg-white rounded-[22px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 max-h-[260px]">
          
          {/* النص */}
          <div className="flex-1">
            <p className="text-5xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              Because we focus on real results... We equip you to be 
              a sought-after, confident, and influential designer in the 
              market.
            </p>
          </div>

          {/* الأنيميشن */}
          <div className="w-40 h-40 md:w-52 md:h-52 border border-gray-100 rounded-2xl flex items-center justify-center p-6 bg-gray-50/30 relative shadow-inner">

            {/* النجوم */}
            <div className="absolute inset-0 pointer-events-none">
              <span className="absolute top-4 left-4 text-amber-400 text-3xl">✦</span>
              <span className="absolute bottom-6 right-6 text-amber-400 text-3xl">✦</span>
              <span className="absolute top-8 right-12 text-cyan-400 text-2xl">✦</span>
              <span className="absolute bottom-10 left-8 text-cyan-400 text-2xl">✦</span>
            </div>

            <div className="relative w-32 h-32">

              {/* 3 */}
              <div
                className={`absolute top-0 left-2 transition-all duration-500 ${
                  showStars ? 'opacity-0 translate-y-2' : 'opacity-100'
                }`}
                style={{ transitionDelay: '0ms' }}
              >
                <div className="text-indigo-700 font-bold text-2xl bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center border-2 border-indigo-700 shadow-md">
                  3
                </div>
              </div>

              {/* 2 */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                  showStars ? 'opacity-0 translate-y-2' : 'opacity-100'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <div className="text-cyan-600 font-bold text-2xl bg-cyan-50 rounded-full w-12 h-12 flex items-center justify-center border-2 border-cyan-500 shadow-md">
                  2
                </div>
              </div>

              {/* 1 */}
              <div
                className={`absolute bottom-0 right-4 transition-all duration-500 ${
                  showStars ? 'opacity-0 translate-y-2' : 'opacity-100'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="text-rose-600 font-bold text-2xl bg-rose-100 rounded-full w-12 h-12 flex items-center justify-center border-2 border-rose-600 shadow-md">
                  1
                </div>
              </div>

              {/* الدوائر (تظهر بنفس الترتيب) */}

              {/* circle 3 */}
              <div
                className={`absolute top-0 left-2 transition-all duration-500 ${
                  showStars ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: '0ms' }}
              >
                <div className="bg-indigo-50 rounded-full w-12 h-12 border-2 border-indigo-700/50 shadow-inner"></div>
              </div>

              {/* circle 2 */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                  showStars ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <div className="bg-cyan-50 rounded-full w-12 h-12 border-2 border-cyan-500/50 shadow-inner"></div>
              </div>

              {/* circle 1 */}
              <div
                className={`absolute bottom-0 right-4 transition-all duration-500 ${
                  showStars ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="bg-rose-50 rounded-full w-12 h-12 border-2 border-rose-600/50 shadow-inner"></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}