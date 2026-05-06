import React from "react";
import GoldTexture from "../../assets/images/common/goldTexture.webp";

const ImpactSection = () => {
  return (
    <section className="py-20 bg-white text-center px-6 font-[Lexend]">
      {/* العنوان الرئيسي الذهبي */}
      <h2 className="text-4xl md:text-8xl w-4xl font-bold  gradient-text mb-16 leading-tight">
          Our Impact in Numbers
      
      </h2>

      {/* إحصائيات علوية */}
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
  
  <div className="text-left pt-6">
    <h3 className="text-8xl font-light font-[lexend] gradient-text mb-3 border-b-2 border-[#D0A300] pb-2 w-fit">
      100%
    </h3>
    <p className="text-black text-2xl max-w-lg font-[lexend] font-light">
      Content that is constantly updated to reflect actual market needs.
    </p>
  </div>

  <div className="text-left pt-6">
    <h3 className="text-8xl font-light font-[lexend] gradient-text mb-3 border-b-2 border-[#D0A300] pb-2 w-fit">
      500+
    </h3>
    <p className="text-black text-2xl font-[lexend] font-light">
      Designers who developed their career paths in the Gulf.
    </p>
  </div>

</div>

      {/* سكشن Experience 8 - تصميم بالكامل بالكود */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 mb-28">
        {/* اللوجو المصمم بـ SVG */}
        <div className="relative w-full max-w-[900px]">
        <svg viewBox="0 0 1000 600" className="w-full h-auto">
  <defs>
    {/* التدرج الذهبي المطابق لـ --gold-gradient */}
    <linearGradient
      id="realGoldGradient" // اسم المعرف الجديد
      x1="0%"
      y1="0%"
      x2="100%"
      y2="0%"
    >
      <stop offset="0%" style={{ stopColor: "#bd8800", stopOpacity: 1 }} />
      <stop offset="50%" style={{ stopColor: "#ffd100", stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: "#9c6b00", stopOpacity: 1 }} />
    </linearGradient>

    {/* إذا كنت تريد إضافة التكستشر (الصورة) فوق اللون كما في الـ CSS */}
    <pattern id="goldPattern" patternUnits="userSpaceOnUse" width="1000" height="600">
      <image 
        href={GoldTexture} 
        width="1000" height="600" 
        preserveAspectRatio="xMidYMid slice" 
        opacity="0.5" // للدمج بين الصورة واللون
      />
    </pattern>
  </defs>

  {/* المربع الأسود مع تفريغ الرقم 8 */}
  <rect x="250" y="50" width="500" height="700" fill="black" />

  {/* كلمة EXPERIENCE */}
  {/* كلمة EXPERIENCE العمودية */}
    <text
    fill="white"
    fontSize="78"
    fontWeight="900"
    fontFamily="inter, sans-serif"
    style={{ letterSpacing: "0.01em" }}
    /* الدوران حول نقطة قريبة من النص لضمان بقائه داخل الإطار */
    transform="matrix(0, -1, 1, 0, 305, 606)"
  >
    EXPERIENCE
  </text>

  {/* الرقم 8 المقسم (أبيض) */}
  <g clipPath="inset(0 50% 0 0)">
    <text x="518" y="600" fontSize="773" fontWeight="bold" fill="white">8</text>
  </g>

  {/* الرقم 8 المقسم (ذهبي) - هنا التعديل الأساسي */}
  <g clipPath="inset(0 0 0 50%)">
    <text
      x="518"
      y="600"
      fontSize="773"
      fontWeight="bold"
      fill="url(#realGoldGradient)" // استدعاء التدرج الجديد
    >
      8
    </text>
    {/* اختياري: طبقة إضافية للتكستشر ليعطي نفس شكل الـ CSS بالضبط */}
    <text
      x="518"
      y="600"
      fontSize="773"
      fontWeight="bold"
      fill="url(#goldPattern)"
      style={{ mixBlendMode: "overlay" }}
    >
      8
    </text>
  </g>
</svg>

          {/* النص الصغير تحت اللوجو */}
          <p className="text-left text-[20px] font-[lexend] text-black mt-2 font-light leading-tight max-w-[400px] ml-40">
            At ANS Courses we don't make promises... we offer a path backed by
            numbers and results.
          </p>
        </div>

        {/* النص الجانبي للوجو */}
        <div className="text-left">
          <h4 className="text-5xl md:text-[64px] font-sans font-bold text-black font-[inter] leading-[1.1]">
            Years of  Experience
          </h4>
        </div>
      </div>

      {/* الجملة الختامية الذهبية */}
      <div className="max-w-4xl mx-auto border-t border-gray-50 pt-12">
        <p className="text-3xl md:text-6xl font-bold leading-tight gradient-text">
          Our group of departments rivals the highest quality and international
          design agencies.
        </p>
      </div>
    </section>
  );
};

export default ImpactSection;
