import React from 'react';

import InstructorImg from "../../assets/images/home/Leader.webp";
import StudentMaleImg from "../../assets/images/certificate/student_male.webp";
import StudentFemaleImg from "../../assets/images/certificate/student_female.webp";


const HeroCertificationsSection = () => {
  return (
      <>
      
    <section className="relative z-0 -mt-[1px] w-full bg-black  min-h-[600px] flex flex-col items-center justify-end overflow-hidden pt-20"
    
      style={{
          background: `
          radial-gradient(ellipse 90% 80% at -5% 15%, #BF7000 0%, #7A4500 30%, #1a0a00 55%, #000 75%),
          radial-gradient(ellipse 50% 35% at 25% 85%, #C87800 0%, #5C3300 45%, transparent 70%)
        `,
          backgroundBlendMode: 'screen',
        }}>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D0A300] opacity-20 blur-[150px] rounded-full z-10"></div>
            
      
      {/* تأثير الإضاءة البرتقالية خلف المدرب */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D0A300] opacity-20 blur-[150px] rounded-full"></div>
      
   

      {/* حاوية الصور المتداخلة */}
      <div className="relative w-full max-w-6xl flex justify-center items-end h-full px-4">
            
        
        {/* الطالبة على اليسار */}
        <div className="relative z-10 -mr-20 mb-5 w-1/3 md:w-1/4 transform scale-90 md:scale-100">
          <img 
            src={StudentFemaleImg} 
            alt="Student with Certificate" 
            className="w-full h-auto grayscale-[30%] opacity-80"
          />
        </div>

        {/* المدرب في المنتصف (الطبقة الأعلى) */}
        <div className="relative z-30 w-1/2 md:w-1/3">
          {/* النص المكتوب فوق المدرب */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-40 text-center -mt-40 pointer-events-none">
            <h2 className="text-white text-5xl font-[lexend]  md:text-7xl font-semibold tracking-tighter mb-2 drop-shadow-lg">
              Our
            </h2>
            <h2 className="gradient-text text-5xl md:text-7xl font-semibold font-[lexend] tracking-tighter pr-2 drop-shadow-lg">
              Certifications
            </h2>
            <p className="text-white text-xl md:text-3xl font-semibold font-[lexend]  tracking-tighter mt-2 opacity-90">
              reflect confidence
            </p>
          </div>
          
          <img 
            src={InstructorImg} 
            alt="Abdullah Al-Nasr" 
            className="w-full h-auto relative z-30"
          />
        </div>

        {/* الطالب على اليمين */}
        <div className="relative z-10 -ml-24 mb-5 w-1/3 md:w-1/3 transform scale-90 md:scale-100">
          <img 
            src={StudentMaleImg} 
            alt="Student with Certificate" 
            className="w-full h-auto grayscale-[30%] opacity-80"
          />
        </div>
        
      </div>

    </section>
    </>
  );
};

export default HeroCertificationsSection;




// import React from 'react';

// import InstructorImg from "../../assets/images/home/Leader.webp";
// import StudentMaleImg from "../../assets/images/certificate/student_male.webp";
// import StudentFemaleImg from "../../assets/images/certificate/student_female.webp";

// const HeroCertificationsSection = () => {
//   return (
//     <section
//       className="relative z-0 -mt-[1px] w-full bg-black min-h-[600px] flex flex-col items-center justify-end overflow-hidden pt-20"
//       style={{
//         background: `
//           radial-gradient(ellipse 90% 80% at -5% 15%, #BF7000 0%, #7A4500 30%, #1a0a00 55%, #000 75%),
//           radial-gradient(ellipse 50% 35% at 25% 85%, #C87800 0%, #5C3300 45%, transparent 70%)
//         `,
//         backgroundBlendMode: 'screen',
//       }}
//     >
//       {/* 🟠 الإضاءة */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D0A300] opacity-20 blur-[150px] rounded-full z-10"></div>

//       {/* 🖤 Overlay على كل حاجة */}
//       <div className="absolute inset-0 bg-black/60 z-20"></div>

//       {/* المحتوى */}
//       <div className="relative w-full max-w-6xl flex justify-center items-end h-full px-4 z-30">
        
//         {/* الطالبة */}
//         <div className="relative z-30 -mr-20 mb-5 w-1/3 md:w-1/4 transform scale-90 md:scale-100">
//           <img 
//             src={StudentFemaleImg} 
//             alt="Student with Certificate" 
//             className="w-full h-auto grayscale-[30%] opacity-80"
//           />
//         </div>

//         {/* المدرب */}
//         <div className="relative w-1/2 md:w-1/3 z-30">
          
//           {/* ✨ النص (أعلى حاجة) */}
//           <div className="absolute inset-0 flex flex-col items-center justify-center z-50 text-center -mt-40 pointer-events-none">
//             <h2 className="text-white text-5xl md:text-7xl font-semibold tracking-tighter mb-2 drop-shadow-lg">
//               Our
//             </h2>
//             <h2 className="gradient-text text-5xl md:text-7xl font-semibold tracking-tighter pr-2 drop-shadow-lg">
//               Certifications
//             </h2>
//             <p className="text-white text-xl md:text-3xl font-semibold tracking-tighter mt-2 opacity-90">
//               reflect confidence
//             </p>
//           </div>

//           <img 
//             src={InstructorImg} 
//             alt="Instructor" 
//             className="w-full h-auto relative z-30"
//           />
//         </div>

//         {/* الطالب */}
//         <div className="relative z-30 -ml-24 mb-5 w-1/3 md:w-1/3 transform scale-90 md:scale-100">
//           <img 
//             src={StudentMaleImg} 
//             alt="Student with Certificate" 
//             className="w-full h-auto grayscale-[30%] opacity-80"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroCertificationsSection;