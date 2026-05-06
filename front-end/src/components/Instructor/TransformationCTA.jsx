import React from 'react';

const TransformationCTA = () => {
  return (
    <section className="py-24 bg-white px-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        
        {/* السؤال التحفيزي الرئيسي */}
        <h2 className="text-3xl md:text-5xl font-semibold text-black tracking-tight leading-[1.1] font-[lexend]">
          "Are you ready to be the next creative partner the <br /> market is looking for ?"
        </h2>

        {/* الجملة الختامية - رحلة التحول */}
        <div className="mt-4">
          <p className="text-2xl md:text-5xl font-semibold text-black tracking-tighter leading-tight font-[lexend]">
            Join Abdullah ELNasr's <br className="hidden md:block" /> transformation journey
          </p>
        </div>

      </div>
    </section>
  );
};

export default TransformationCTA;