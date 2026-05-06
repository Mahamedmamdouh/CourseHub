// import React from 'react';
// import InstructorImg from "../../assets/images/instructor/chair.webp"; // استبدله بالمسار الصحيح
// import TargetImg from "../../assets/images/instructor/goal.webp"; // صورة الهدف والهدف الذهبي

// const JourneyAndGoal = () => {
//   return (
//     <section className="py-40 px-6 bg-white font-[Lexend]">
//       <div className="max-w-7xl mx-auto space-y-32">
        
//         {/* --- القسم الأول: الرحلة (The Journey) --- */}
//         <div className="relative">
//           {/* العنوان العلوي الذهبي */}
//           <div className="text-center mb-50">
//             <h2 className="text-2xl md:text-5xl font-bold gradient-text leading-tight max-w-3xl mx-auto tracking-tight">
//               The journey from silent pixels to a language of influence and <br/> investment
//             </h2>
//           </div>

//           {/* الكارت الأسود */}
//           <div className="relative max-w-6xl mx-auto">
//             {/* حدود ذهبية مزدوجة (Outer Border) */}
//             <div className="relative top-0 rounded-[40px] border-2 border-[#D0A300] p-1">
//               <div className="bg-black   rounded-[35px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 min-h-[400px]">
                
//                 {/* المحتوى النصي */}
//                 <div className="w-full  font-[lexend] font-semibold md:text-[20px] tracking-tighter md:w-[62%] z-10  md:text-left">
//                   <p className="text-white text-center text-sm md:text-[18px] mb-6 ">
//                     Abdullah Al-Nasr began his journey like any passionate designer, delving into the details of tools and software. But he realized early on that the market wasn't looking for "illustrators," but rather "solutions" that make an impact and deliver results.
//                   </p>
//                   <p className="text-white text-center text-sm md:text-[18px]  mb-6 ">
//                     Throughout his journey building identities for major brands in the Gulf market, Abdullah developed a unique methodology that blends design aesthetics with the language of business.
//                   </p>
//                   <p className="text-white text-center text-sm md:text-[18px]">
//                     This methodology is what he shares with you today through ANS Courses, teaching you how to transform your design from silent pixels into a language of influence, and from an artistic skill into a profitable investment trusted by businesses.
//                   </p>
//                 </div>

//                 {/* مساحة للصورة المتداخلة */}
//                 <div className="w-full md:w-1/3 h-40 md:h-full"></div>
//               </div>
//             </div>

//             {/* صورة الشخص (Overlapping) */}
//             <img 
//               src={InstructorImg} 
//               alt="Abdullah Al-Nasr" 
//               className="absolute -top-42 -right-6 md:right-2 w-[300px] md:w-[450px] rounded-br-[50px] z-20 pointer-events-none drop-shadow-2xl"
//             />
//           </div>
//         </div>

//         {/* --- القسم الثاني: هدفي (My Goal) --- */}
//         <div className="relative max-w-4xl mx-auto flex flex-col items-center">
          
//           {/* السهم المتعرج العلوي */}
//           <div className="mb-17">
//              <svg width="200" height="200" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M70 10C70 10 20 40 50 80C80 120 30 140 30 140" stroke="#333" strokeWidth="4" strokeLinecap="round"/>
//                 <path d="M20 130L30 145L45 135" stroke="#333" strokeWidth="4" strokeLinecap="square"/>
//              </svg>
//           </div>

//           <div className="relative w-full">
//             {/* عنوان MY GOAL الذهبي */}
//             <div className="text-center absolute -top-21 left-1/2 -translate-x-1/2 z-30 w-full">
//                <h3 className="text-5xl top-5 md:text-8xl  font-extrabold   gradient-text uppercase tracking-tighter ">
//                  MY GOAL
//                </h3>
//             </div>

//             {/* كارت الهدف مع الحدود */}
//            <div className="relative w-full flex justify-center">

//   {/* البوردر الأصفر */}
//   <div className="relative z-10 w-full max-w-4xl min-h-[300px] border-4 border-[#D0A300] rounded-[30px] pt-16 ">
    
//     {/* الكارد الأسود */}
//     <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[100%] min-h-[350px] z-0 bg-black rounded-[25px] p-10 md:p-14 text-center">
      
//       <p className="text-white text-xl md:text-4xl font-semibold tracking-tighter">
//         is not to produce designers who know how to move a mouse, but to create creative leaders who know how to move the market with their designs. — Abdullah ELNasr
//       </p>

//       {/* الصورة */}
//       <div className="absolute -left-55 -top-47 w-40 md:w-100">
//         <img src={TargetImg} className="w-full h-auto drop-shadow-xl" />
//       </div>

//     </div>
//   </div>

// </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default JourneyAndGoal;




import React from 'react';
import InstructorImg from "../../assets/images/instructor/chair.webp"; // استبدله بالمسار الصحيح
import TargetImg from "../../assets/images/instructor/goal.webp"; // صورة الهدف والهدف الذهبي

const JourneyAndGoal = () => {
  return (
    <section className="py-40 px-6 bg-white font-[Lexend]">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* --- القسم الأول: الرحلة (The Journey) --- */}
        <div className="relative">
          {/* العنوان العلوي الذهبي */}
          <div className="text-center mb-50">
            <h2 className="text-2xl md:text-5xl font-bold gradient-text leading-tight max-w-3xl mx-auto tracking-tight">
              The journey from silent pixels to a language of influence and <br/> investment
            </h2>
          </div>

          {/* الكارت الأسود */}
          <div className="relative max-w-6xl mx-auto">
            {/* حدود ذهبية مزدوجة (Outer Border) */}
            <div className="relative top-0 rounded-[40px] border-2 border-[#D0A300] p-1">
              <div className="bg-black   rounded-[35px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 min-h-[400px]">
                
                {/* المحتوى النصي */}
                <div className="w-full  font-[lexend] font-semibold md:text-[20px] tracking-tighter md:w-[62%] z-10  md:text-left">
                  <p className="text-white text-center text-sm md:text-[18px] mb-6 ">
                    Abdullah Al-Nasr began his journey like any passionate designer, delving into the details of tools and software. But he realized early on that the market wasn't looking for "illustrators," but rather "solutions" that make an impact and deliver results.
                  </p>
                  <p className="text-white text-center text-sm md:text-[18px]  mb-6 ">
                    Throughout his journey building identities for major brands in the Gulf market, Abdullah developed a unique methodology that blends design aesthetics with the language of business.
                  </p>
                  <p className="text-white text-center text-sm md:text-[18px]">
                    This methodology is what he shares with you today through ANS Courses, teaching you how to transform your design from silent pixels into a language of influence, and from an artistic skill into a profitable investment trusted by businesses.
                  </p>
                </div>

                {/* مساحة للصورة المتداخلة */}
                <div className="w-full md:w-1/3 h-40 md:h-full"></div>
              </div>
            </div>

            {/* صورة الشخص (Overlapping) */}
            <img 
              src={InstructorImg} 
              alt="Abdullah Al-Nasr" 
              className="absolute -top-42 -right-6 md:right-2 w-[300px] md:w-[450px] rounded-br-[50px] z-20 pointer-events-none drop-shadow-2xl"
            />
          </div>
        </div>

        {/* --- القسم الثاني: هدفي (My Goal) --- */}
        <div className="relative max-w-4xl mx-auto flex flex-col items-center">
          
          {/* السهم المتعرج العلوي */}
          <div className="mb-20 py-1">
             <svg width="200" height="200" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M70 10C70 10 20 40 50 80C80 120 30 140 30 140" stroke="#333" strokeWidth="4" strokeLinecap="round"/>
                <path d="M20 130L30 145L45 135" stroke="#333" strokeWidth="4" strokeLinecap="square"/>
             </svg>
          </div>

          <div className="relative w-full">
            {/* عنوان MY GOAL الذهبي */}
            <div className="text-center absolute -top-23 left-1/2 -translate-x-[52%] z-30 w-full">
               <h3 className="text-5xl top-5 md:text-8xl font-extrabold gradient-text uppercase tracking-tighter ">
                 MY GOAL
               </h3>
            </div>

            {/* كارت الهدف مع الحدود */}
   <div className="relative bottom-22 w-full flex justify-center py-32 bg-white"> 

  {/* الحاوية السوداء الأساسية */}
  <div className="relative z-10 w-full max-w-4xl min-h-[430px] bg-black rounded-[40px] px-15 pt-20  pb-0 text-center shadow-2xl flex items-center justify-center">
    
    {/* الإطار الأصفر (البوردر) - موضوع فوق الخلفية السوداء */}
    {/* قمنا برفعه للأعلى قليلاً بـ -top-10 ليتخطى الحافة العلوية */}
    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[100%] h-[95%] border-4 border-[#D0A300] rounded-[45px] z-0 pointer-events-none"></div>

    {/* المحتوى النصي */}
    <div className="relative bottom-20 z-20">
      <p className="text-white text-xl md:text-5xl font-semibold tracking-tighter">
         is not to produce designers who know how to move a mouse, but to create creative leaders who know how to move the market with their designs. — Abdullah ELNasr
       </p>
    </div>


  

    {/* الصورة (التارجت) */}
   <div className="absolute -left-55 -top-45 w-40 md:w-100">
         <img src={TargetImg} className="w-full h-auto drop-shadow-xl" />
      </div>

  </div>

</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default JourneyAndGoal;