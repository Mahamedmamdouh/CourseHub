import React from 'react'

export default function WhyHasOurPlatform () {

    return (
    <div className="flex items-center justify-center min-h-screen bg-white p-6">
      <div className="max-w-3xl text-center space-y-8 font-sans">
        
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight ">
          <span className="gradient-text text-5xl ">
            Why has our platform become the number one destination for elite designers in the Gulf and the Arab world?
          </span>
        </h1>

        {/* First Paragraph */}
        <div className="space-y-4">
          <p className="text-zinc-800 text-2xl md:text-xl font-bold max-w-xl mx-auto leading-relaxed">
            Because we don't just offer a training course; we give you the secret formula for professional and financial success.
          </p>
          <div className="flex justify-center">
             <span className="text-black text-2xl">★</span>
          </div>
        </div>

        {/* Second Paragraph */}
        <div className="space-y-4">
          <p className="text-zinc-800 text-lg md:text-xl font-bold max-w-xl mx-auto leading-relaxed">
            We develop professional designers who are ready to enter the market with confidence and turn their skills into real, sustainable income.
          </p>
          <div className="flex justify-center">
             <span className="text-yellow-400 text-2xl">★</span>
          </div>
        </div>

        {/* Third Paragraph */}
        <div className="space-y-4">
          <p className="text-zinc-800 text-lg md:text-xl font-bold max-w-xl mx-auto leading-relaxed">
            Through clear steps and a practical approach that reflects the reality of the market, we put you directly on the path to professionalism and distinction.
          </p>
          <div className="flex justify-center">
             <span className="text-black text-2xl">★</span>
          </div>
        </div>

      </div>
    </div>
  );
  
}
