// import React from "react";
// import GoldTexture from "../../assets/images/common/goldTexture.webp";

// const InstructorOurImpact = () => {
//   return (
//     <section className="py-20 bg-white text-center px-6 font-[Lexend]">
//       {/* العنوان الرئيسي الذهبي */}
//       <h2 className="text-4xl md:text-5xl w-5xl font-semibold  gradient-text mb-16 leading-tight">
//           A tangible impact on the creative market

      
//       </h2>

    

//       {/* سكشن Experience 8 - تصميم بالكامل بالكود */}
//       <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 mb-28">
//         {/* اللوجو المصمم بـ SVG */}
//         <div className="relative w-full max-w-[900px]">
//         <svg viewBox="0 0 1000 600" className="w-full h-auto">
//   <defs>
//     {/* التدرج الذهبي المطابق لـ --gold-gradient */}
//     <linearGradient
//       id="realGoldGradient" // اسم المعرف الجديد
//       x1="0%"
//       y1="0%"
//       x2="100%"
//       y2="0%"
//     >
//       <stop offset="0%" style={{ stopColor: "#bd8800", stopOpacity: 1 }} />
//       <stop offset="50%" style={{ stopColor: "#ffd100", stopOpacity: 1 }} />
//       <stop offset="100%" style={{ stopColor: "#9c6b00", stopOpacity: 1 }} />
//     </linearGradient>

//     {/* إذا كنت تريد إضافة التكستشر (الصورة) فوق اللون كما في الـ CSS */}
//     <pattern id="goldPattern" patternUnits="userSpaceOnUse" width="1000" height="600">
//       <image 
//         href={GoldTexture} 
//         width="1000" height="600" 
//         preserveAspectRatio="xMidYMid slice" 
//         opacity="0.5" // للدمج بين الصورة واللون
//       />
//     </pattern>
//   </defs>

//   {/* المربع الأسود مع تفريغ الرقم 8 */}
//   <rect x="250" y="50" width="500" height="700" fill="black" />

//   {/* كلمة EXPERIENCE */}
//   {/* كلمة EXPERIENCE العمودية */}
//     <text
//     fill="white"
//     fontSize="78"
//     fontWeight="900"
//     fontFamily="inter, sans-serif"
//     style={{ letterSpacing: "0.01em" }}
//     /* الدوران حول نقطة قريبة من النص لضمان بقائه داخل الإطار */
//     transform="matrix(0, -1, 1, 0, 305, 606)"
//   >
//     EXPERIENCE
//   </text>

//   {/* الرقم 8 المقسم (أبيض) */}
//   <g clipPath="inset(0 50% 0 0)">
//     <text x="518" y="600" fontSize="773" fontWeight="bold" fill="white">8</text>
//   </g>

//   {/* الرقم 8 المقسم (ذهبي) - هنا التعديل الأساسي */}
//   <g clipPath="inset(0 0 0 50%)">
//     <text
//       x="518"
//       y="600"
//       fontSize="773"
//       fontWeight="bold"
//       fill="url(#realGoldGradient)" // استدعاء التدرج الجديد
//     >
//       8
//     </text>
//     {/* اختياري: طبقة إضافية للتكستشر ليعطي نفس شكل الـ CSS بالضبط */}
//     <text
//       x="518"
//       y="600"
//       fontSize="773"
//       fontWeight="bold"
//       fill="url(#goldPattern)"
//       style={{ mixBlendMode: "overlay" }}
//     >
//       8
//     </text>
//   </g>
// </svg>

//           {/* النص الصغير تحت اللوجو */}
//           <p className="text-left text-[20px] font-[lexend] text-black mt-2 font-light leading-tight max-w-[800px] ml-40">
//             At ANS Courses we don't make promises... we offer a path backed by
//             numbers and results.
//           </p>
//         </div>

//         {/* النص الجانبي للوجو */}
//         <div className="text-left">
//           <h4 className="text-5xl md:text-[64px] font-sans font-bold text-black font-[inter] leading-[1.1]">
//            Years of experience leading major visual identities
//           </h4>
//         </div>
//       </div>


//          {/* إحصائيات علوية */}
//    <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-32 mb-20">
//           {/* الاحصائية الأولى */}
//           <div className="flex items-center gap-4 border-b-2 border-gray-100 pb-3 relative min-w-[300px]">
//              <div className="absolute bottom-[-2px] left-0 w-1/2 border-b-2 border-[#D0A300]"></div>
//              <h3 className="text-8xl font-bold gradient-text">300+</h3>
//              <p className="text-black text-[32px] min-w-[300px] leading-tight font-light">
//               Students seeking to shift their focus from hobby to commercial career
//              </p>
//           </div>

//           {/* الاحصائية الثانية */}
//           <div className="flex items-center gap-4 border-b-2 border-gray-100 pb-3 relative min-w-[300px]">
//              <div className="absolute bottom-[-2px] left-0 w-1/2 border-b-2 border-[#D0A300]"></div>
//              <h3 className="text-8xl font-bold gradient-text">1050+</h3>
//              <p className="text-black font-[lexend] text-[32px] min-w-[300px] leading-tight font-light">
//                A project that was built and developed
//              </p>
//           </div>
//         </div>

//         {/* إحصائية الـ 24 ساعة الضخمة */}
//         <div className="flex flex-col items-center text-center mt-10">
//           <div className=" pb-2 relative inline-block mb-4">
             
//              <h3 className="text-[140px] font-bold gradient-text leading-[0.8]">
//                24
//              </h3>
//           </div>
//           <p className="text-black font-[lexend] text-[32px]  border-b-2 border-[#D0A300] font-light mt-0">
//             support available 24/7
//           </p>
//         </div>

  
//     </section>
//   );
// };

// export default InstructorOurImpact;


import React from "react";
import GoldTexture from "../../assets/images/common/goldTexture.webp";

const InstructorOurImpact = () => {
  return (
    <section className="py-24 bg-white text-center px-6 font-[Lexend] overflow-hidden">
      {/* العنوان الرئيسي الذهبي - ضبط الحجم والـ Max Width */}
      <h2 className="text-4xl md:text-6xl max-w-4xl mx-auto font-bold gradient-text mb-20 leading-tight tracking-tight">
        A tangible impact on the creative market
      </h2>

      {/* سكشن Experience 8 */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 mb-32">
        
        {/* اللوجو المصمم بـ SVG - تحسين الـ ViewBox والأبعاد */}
        <div className="relative w-full lg:w-3/5">
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

    
        </div>

        {/* النص الجانبي للوجو - حجم ضخم ومتناسق */}
        <div className="w-full lg:w-2/5 text-left">
          <h4 className="text-4xl md:text-5xl font-[inter] font-sans font-bold text-black ">
            Years of experience leading major visual identities
          </h4>
        </div>
      </div>

      {/* الإحصائيات - استخدام Grid لضبط المسافات */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-24">
        {/* الاحصائية الأولى */}
        <div className="flex flex-col md:flex-row items-center gap-6 border-b-2 border-gray-100 pb-8 relative group">
          <div className="absolute bottom-[-2px] left-0 w-60 border-b-4 border-[#D0A300] "></div>
          <h3 className="text-7xl md:text-8xl font-bold gradient-text ">300+</h3>
          <p className="text-black text-xl md:text-2xl text-left leading-tight font-light">
            Students seeking to shift their focus from hobby to commercial career
          </p>
        </div>

        {/* الاحصائية الثانية */}
        <div className="flex flex-col md:flex-row items-center gap-6 border-b-2 border-gray-100 pb-8 relative group">
          <div className="absolute bottom-[-2px] left-0 w-75 border-b-4 border-[#D0A300]"></div>
          <h3 className="text-7xl md:text-8xl font-bold gradient-text shrink-0">1050+</h3>
          <p className="text-black text-xl md:text-2xl text-left leading-tight font-light">
            A project that was built and developed
          </p>
        </div>
      </div>

      {/* إحصائية الـ 24 ساعة الضخمة */}
      <div className="flex flex-col items-center text-center py-10">
        <div className="relative inline-block">
          <h3 className="text-[120px] md:text-[200px] font-black gradient-text leading-[0.8] ">
            24
          </h3>
        </div>
        <div className="mt-4 inline-block border-b-4 border-[#D0A300] pb-2">
          <p className="text-black text-xl md:text-3xl text-left leading-tight font-light">
            support available 24/7
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstructorOurImpact;


