// // // // import React, { useState } from 'react';

// // // // import icon from "../../assets/images/course/Icon5.svg"
// // // // import LeaderProfile from "../../assets/images/course/Profile.png"

// // // // const faqs = [
// // // //   {
// // // //     question: "How long does it take to become a designer capable of selling my services?",
// // // //     answer: "Once you complete the program and apply the practical projects with me, you'll be able to execute designs that clients actually request. The course is designed to take you to the 'work-ready' stage in the shortest possible time, because we focus on application, not just theoretical explanation."
// // // //   },
// // // //   {
// // // //     question: "Will I learn the new AI technologies in Photoshop?",
// // // //     answer: "Absolutely! Photoshop today is strongly powered by AI. In this course, I'll show you how to use these technologies to complete work that used to take hours in just minutes."
// // // //   },
// // // //   {
// // // //     question: "What’s the difference between what I’ll learn in Photoshop and ready-made design apps like Canva?",
// // // //     answer: "Apps like Canva are for hobbyists who rely on repeated ready-made templates. Photoshop is for professionals who create the templates themselves!VIP clients in the Gulf look for a designer who creates a unique identity that no one else has. That's what you'll learn: how to create from scratch and have your own signature style that no ready-made tool can replicate."
// // // //   },
// // // //   {
// // // //     question: "Where will I get high-quality images and resources for my designs?",
// // // //     answer: "That's one of the course secrets! I'll reveal the best high-quality sources (free and paid) used by top designers to get 4K images and professional assets. You won't need random searching anymore — you'll know exactly where to find materials that impress your clients."
// // // //   },
// // // //   {
// // // //     question: "What if a new Photoshop update is released after I purchase the course?",
// // // //     answer: "Your subscription with us is a long-term investment. The course is updated regularly to keep up with the latest features released by Adobe. As soon as you subscribe, you'll receive new updates for free, so your skills always stay up-to-date and at the highest level."
// // // //   }

// // // // ];
// // // // const FAQSection = () => {
// // // //   const [openIndex, setOpenIndex] = useState(0);

// // // //   return (
// // // //     <section className="bg-black text-white py-20 px-6 md:px-16 font-lexend overflow-hidden relative">
// // // //       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
// // // //         {/* الجزء الأيسر: الأسئلة */}
// // // //         <div className="z-10">
// // // //           <h2 className="text-4xl font-semibold font-[lexend] mb-12">Your question</h2>
          
// // // //           <div className="space-y-6">
// // // //             {faqs.map((faq, index) => (
// // // //               <div key={index} className="border-b border-gray-800 pb-4">
// // // //                 <button
// // // //                   onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
// // // //                   className="w-full text-left flex justify-between items-center py-2 focus:outline-none"
// // // //                 >
// // // //                   <span className="text-lg md:text-xl font-[lexend] font-medium pr-4">{faq.question}</span>
// // // //                   <span className="text-2xl">{openIndex === index ? '-' : '+'}</span>
// // // //                 </button>
                
// // // //                 <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-height-auto mt-4' : 'max-height-0'}`}>
// // // //                   {openIndex === index && (
// // // //                     <div className="animate-fadeIn">
// // // //                       <p className="text-[#44FF00] text-2xl font-[lexend] font-light mb-2 ">Answer</p>
// // // //                       <p className="text-gray-400 leading-relaxed text-sm md:text-base">
// // // //                         {faq.answer}
// // // //                       </p>
// // // //                     </div>
// // // //                   )}
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* الجزء الأيمن: الصور */}
// // // //         <div className="relative flex justify-center items-center h-full min-h-[500px]">
// // // //           {/* الـ Circle الخلفية */}
// // // //           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-[1px] border-gray-700 opacity-20 pointer-events-none"></div>
          
// // // //           {/* الـ SVG (أيقونة المحادثة) */}
// // // //           <div className="absolute top-10 right-10 md:right-20 w-48 md:w-64 opacity-40 z-0">
// // // //              <img src={icon} alt="Chat Icon" className="w-full h-auto grayscale" />
// // // //           </div>

// // // //           {/* الصورة الشخصية */}
// // // //           <div className="relative z-10 mt-auto">
// // // //             <img 
// // // //               src={LeaderProfile} 
// // // //               alt="Instructor" 
// // // //               className="w-full min-w-5xl object-contain"
// // // //             />
// // // //             {/* التدرج الأسود في أسفل الصورة لدمجها مع الخلفية */}
// // // //             <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
// // // //           </div>
// // // //         </div>

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default FAQSection;


// // // import React from 'react';
// // // import icon from "../../assets/images/course/Icon5.svg"
// // // import LeaderProfile from "../../assets/images/course/Profile.png"

// // // const faqs = [
// // //   {
// // //     question: "How long does it take to become a designer capable of selling my services?",
// // //     answer: "Once you complete the program and apply the practical projects with me, you'll be able to execute designs that clients actually request. The course is designed to take you to the 'work-ready' stage in the shortest possible time, because we focus on application, not just theoretical explanation."
// // //   },
// // //   {
// // //     question: "Will I learn the new AI technologies in Photoshop?",
// // //     answer: "Absolutely! Photoshop today is strongly powered by AI. In this course, I'll show you how to use these technologies to complete work that used to take hours in just minutes."
// // //   },
// // //   {
// // //     question: "What's the difference between what I'll learn in Photoshop and ready-made design apps like Canva?",
// // //     answer: "Apps like Canva are for hobbyists who rely on repeated ready-made templates. Photoshop is for professionals who create the templates themselves! VIP clients in the Gulf look for a designer who creates a unique identity that no one else has. That's what you'll learn: how to create from scratch and have your own signature style that no ready-made tool can replicate."
// // //   },
// // //   {
// // //     question: "Where will I get high-quality images and resources for my designs?",
// // //     answer: "That's one of the course secrets! I'll reveal the best high-quality sources (free and paid) used by top designers to get 4K images and professional assets. You won't need random searching anymore — you'll know exactly where to find materials that impress your clients."
// // //   },
// // //   {
// // //     question: "What if a new Photoshop update is released after I purchase the course?",
// // //     answer: "Your subscription with us is a long-term investment. The course is updated regularly to keep up with the latest features released by Adobe. As soon as you subscribe, you'll receive new updates for free, so your skills always stay up-to-date and at the highest level."
// // //   }
// // // ];

// // // const FAQSection = () => {
// // //   return (
// // //     <section className="bg-black text-white py-20 px-6 md:px-16 font-lexend overflow-hidden relative">
// // //       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

// // //         {/* Left: Questions - all expanded */}
// // //         <div className="z-10">
// // //           <h2 className="text-4xl font-semibold font-[lexend] mb-12">Your question</h2>

// // //           <div className="space-y-6">
// // //             {faqs.map((faq, index) => (
// // //               <div key={index} className="border-b border-gray-800 pb-6">
// // //                 <div className="flex justify-between items-start py-2">
// // //                   <span className="text-lg md:text-xl font-[lexend] font-medium pr-4">{faq.question}</span>
// // //                   <span className="text-2xl text-gray-500 shrink-0">-</span>
// // //                 </div>
// // //                 <div className="mt-3">
// // //                   <p className="text-[#44FF00] text-2xl font-[lexend] font-light mb-2">Answer</p>
// // //                   <p className="text-gray-400 leading-relaxed text-sm md:text-base">
// // //                     {faq.answer}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Right: Image */}
// // //         <div className="relative flex justify-center items-center h-full min-h-[500px]">
// // //           {/* Background circle */}
// // //           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-[1px] border-gray-700 opacity-20 pointer-events-none"></div>

// // //           {/* Chat icon */}
// // //           <div className="absolute top-10 right-10 md:right-20 w-48 md:w-64 opacity-40 z-0">
// // //             <img src={icon} alt="Chat Icon" className="w-full h-auto grayscale" />
// // //           </div>

// // //           {/* Profile image */}
// // //           <div className="relative z-10 mt-auto">
// // //             <img
// // //               src={LeaderProfile}
// // //               alt="Instructor"
// // //               className="w-full min-w-5xl object-contain"
// // //             />
// // //             <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
// // //           </div>
// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default FAQSection;


// // import React, { useState } from 'react';
// // import icon from "../../assets/images/course/Icon5.svg"
// // import LeaderProfile from "../../assets/images/course/Profile.png"

// // const faqs = [
// //   {
// //     question: "How long does it take to become a designer capable of selling my services?",
// //     answer: "Once you complete the program and apply the practical projects with me, you'll be able to execute designs that clients actually request. The course is designed to take you to the 'work-ready' stage in the shortest possible time, because we focus on application, not just theoretical explanation."
// //   },
// //   {
// //     question: "Will I learn the new AI technologies in Photoshop?",
// //     answer: "Absolutely! Photoshop today is strongly powered by AI. In this course, I'll show you how to use these technologies to complete work that used to take hours in just minutes."
// //   },
// //   {
// //     question: "What's the difference between what I'll learn in Photoshop and ready-made design apps like Canva?",
// //     answer: "Apps like Canva are for hobbyists who rely on repeated ready-made templates. Photoshop is for professionals who create the templates themselves! VIP clients in the Gulf look for a designer who creates a unique identity that no one else has. That's what you'll learn: how to create from scratch and have your own signature style that no ready-made tool can replicate."
// //   },
// //   {
// //     question: "Where will I get high-quality images and resources for my designs?",
// //     answer: "That's one of the course secrets! I'll reveal the best high-quality sources (free and paid) used by top designers to get 4K images and professional assets. You won't need random searching anymore — you'll know exactly where to find materials that impress your clients."
// //   },
// //   {
// //     question: "What if a new Photoshop update is released after I purchase the course?",
// //     answer: "Your subscription with us is a long-term investment. The course is updated regularly to keep up with the latest features released by Adobe. As soon as you subscribe, you'll receive new updates for free, so your skills always stay up-to-date and at the highest level."
// //   }
// // ];

// // const FAQSection = () => {
// //   const [openIndex, setOpenIndex] = useState(0);

// //   return (
// //     <section className="bg-black text-white py-20 px-6 md:px-16 font-lexend overflow-hidden relative">
// //       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

// //         {/* Left: Questions */}
// //         <div className="z-10">
// //           <h2 className="text-4xl font-semibold font-[lexend] mb-12">Your question</h2>

// //           <div className="space-y-0">
// //             {faqs.map((faq, index) => (
// //               <div
// //                 key={index}
// //                 className={`pb-4 mb-4 border-b-2 ${
// //                   openIndex === index ? 'border-yellow-400' : 'border-gray-800'
// //                 } transition-colors duration-300`}
// //               >
// //                 <button
// //                   onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
// //                   className="w-full text-left flex justify-between items-center py-2 focus:outline-none"
// //                 >
// //                   <span className="text-lg md:text-xl font-[lexend] font-medium pr-4">
// //                     {faq.question}
// //                   </span>
// //                   <span className="text-2xl shrink-0 text-yellow-400">
// //                     {openIndex === index ? '−' : '+'}
// //                   </span>
// //                 </button>

// //                 <div
// //                   className={`overflow-hidden transition-all duration-300 ${
// //                     openIndex === index ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
// //                   }`}
// //                 >
// //                   <p className="text-[#44FF00] text-2xl font-[lexend] font-light mb-2">Answer</p>
// //                   <p className="text-gray-400 leading-relaxed text-sm md:text-base">
// //                     {faq.answer}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Right: Image — غير style marginTop للتحكم في موضع الصورة */}
// //         <div className="relative flex justify-center items-center h-full min-h-[500px]">
// //           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-[1px] border-gray-700 opacity-20 pointer-events-none"></div>

// //           <div className="absolute top-10 right-10 md:right-20 w-48 md:w-64 opacity-40 z-0">
// //             <img src={icon} alt="Chat Icon" className="w-full h-auto grayscale" />
// //           </div>

// //           {/* ⬇️ غير marginTop هنا للتحكم في الصورة */}
// //           <div className="relative z-10" style={{ marginTop: '0px',width: '160%' }}>
// //             <img
// //               src={LeaderProfile}
// //               alt="Instructor"
// //               className="w-full object-contain"
// //             />
// //             <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default FAQSection;



// import React, { useState } from 'react';
// import icon from "../../assets/images/course/Icon5.svg"
// import LeaderProfile from "../../assets/images/course/Profile.png"

// const faqs = [
//   {
//     question: "How long does it take to become a designer capable of selling my services?",
//     answer: "Once you complete the program and apply the practical projects with me, you'll be able to execute designs that clients actually request. The course is designed to take you to the 'work-ready' stage in the shortest possible time, because we focus on application, not just theoretical explanation."
//   },
//   {
//     question: "Will I learn the new AI technologies in Photoshop?",
//     answer: "Absolutely! Photoshop today is strongly powered by AI. In this course, I'll show you how to use these technologies to complete work that used to take hours in just minutes."
//   },
//   {
//     question: "What's the difference between what I'll learn in Photoshop and ready-made design apps like Canva?",
//     answer: "Apps like Canva are for hobbyists who rely on repeated ready-made templates. Photoshop is for professionals who create the templates themselves! VIP clients in the Gulf look for a designer who creates a unique identity that no one else has. That's what you'll learn: how to create from scratch and have your own signature style that no ready-made tool can replicate."
//   },
//   {
//     question: "Where will I get high-quality images and resources for my designs?",
//     answer: "That's one of the course secrets! I'll reveal the best high-quality sources (free and paid) used by top designers to get 4K images and professional assets. You won't need random searching anymore — you'll know exactly where to find materials that impress your clients."
//   },
//   {
//     question: "What if a new Photoshop update is released after I purchase the course?",
//     answer: "Your subscription with us is a long-term investment. The course is updated regularly to keep up with the latest features released by Adobe. As soon as you subscribe, you'll receive new updates for free, so your skills always stay up-to-date and at the highest level."
//   }
// ];

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(0);

//   return (
//     <section className="bg-black text-white py-20 px-6 md:px-16 font-lexend overflow-hidden relative min-h-[900px]">

//       {/* الصورة absolute على الـ section كلها */}
//       <div className="absolute top-0 right-0 h-full w-[100%] z-0 pointer-events-none">
//         {/* Chat icon */}
//         <div className="absolute top-15 right-30 w-80 md:w-100 z-0">
//           <img src={icon} alt="Chat Icon" className="w-full h-auto " />
//         </div>

//         {/* الصورة تملأ من النص لأقصى اليمين */}
//         <img
//           src={LeaderProfile}
//           alt="Instructor"
//         className="absolute bottom-0 top-60 right-0 w-[120%] md:w-[800px] md:h-[100%]  object-cover object-bottom"
         
//         />

//         {/* fade من الأسفل */}
//         <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent z-10"></div>
//         {/* fade من اليسار عشان تندمج مع الـ FAQ */}
//         <div className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-black to-transparent z-10"></div>
//       </div>

//       {/* المحتوى */}
//       <div className="relative z-10 max-w-7xl mx-auto">

//         {/* FAQ — نص الشاشة على اليسار بس */}
//         <div className="w-full md:w-[50%]">
//           <h2 className="text-4xl font-semibold font-[lexend] mb-12">Your question</h2>

//           <div className="space-y-0">
//             {faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className={`pb-4 mb-4 border-b-2 ${
//                   openIndex === index ? 'border-yellow-400' : 'border-gray-800'
//                 } transition-colors duration-300`}
//               >
//                 <button
//                   onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
//                   className="w-full text-left flex justify-between items-center py-2 focus:outline-none"
//                 >
//                   <span className="text-lg md:text-xl font-[lexend] font-medium pr-4">
//                     {faq.question}
//                   </span>
//                   <span className="text-2xl shrink-0 text-yellow-400">
//                     {openIndex === index ? '−' : '+'}
//                   </span>
//                 </button>

//                 <div
//                   className={`overflow-hidden transition-all duration-300 ${
//                     openIndex === index ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
//                   }`}
//                 >
//                   <p className="text-[#44FF00] text-2xl font-[lexend] font-light mb-2">Answer</p>
//                   <p className="text-gray-400 leading-relaxed text-sm md:text-base">
//                     {faq.answer}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FAQSection;


import React, { useState } from 'react';
import icon from "../../assets/images/course/Icon5.svg";
import LeaderProfile from "../../assets/images/course/Profile.webp";

const faqs = [
  {
    question: "How long does it take to become a designer capable of selling my services?",
    answer:
      "Once you complete the program and apply the practical projects with me, you'll be able to execute designs that clients actually request. The course is designed to take you to the 'work-ready' stage in the shortest possible time, because we focus on application, not just theoretical explanation."
  },
  {
    question: "Will I learn the new AI technologies in Photoshop?",
    answer:
      "Absolutely! Photoshop today is strongly powered by AI. In this course, I'll show you how to use these technologies to complete work that used to take hours in just minutes."
  },
  {
    question: "What's the difference between what I'll learn in Photoshop and ready-made design apps like Canva?",
    answer:
      "Apps like Canva are for hobbyists who rely on repeated ready-made templates. Photoshop is for professionals who create the templates themselves! VIP clients in the Gulf look for a designer who creates a unique identity that no one else has."
  },
  {
    question: "Where will I get high-quality images and resources for my designs?",
    answer:
      "I'll show you the best free and paid sources used by top designers to get professional assets without wasting time searching."
  },
  {
    question: "What if a new Photoshop update is released after I purchase the course?",
    answer:
      "You'll get lifetime updates so your skills stay always up-to-date."
  },
  {
    question: "What if a new Photoshop update is released after I purchase the course?",
    answer:
      "You'll get lifetime updates so your skills stay always up-to-date."
  },
  {
    question: "What if a new Photoshop update is released after I purchase the course?",
    answer:
      "You'll get lifetime updates so your skills stay always up-to-date."
  },
  {
    question: "What if a new Photoshop update is released after I purchase the course?",
    answer:
      "You'll get lifetime updates so your skills stay always up-to-date."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 font-lexend overflow-hidden relative min-h-[900px]">

      {/* Right side image container */}
      <div className="absolute top-0 right-0 h-full w-[70%] z-0 pointer-events-none">

        {/* icon */}
        <div className="absolute top-2 right-12 w-72 md:w-100">
          <img src={icon} alt="icon" className="w-full h-auto" />
        </div>

        {/* Instructor Image (MAIN FIX HERE) */}
      <div className="absolute bottom-0 top-25 right-5" style={{ width: '750px' }}>
  <img
    src={LeaderProfile}
    alt="Instructor"
    className="w-full h-auto object-contain object-bottom"
  />
  </div>

        {/* gradients */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="w-full md:w-[50%]">
          <h2 className="text-4xl font-semibold mb-12">Your question</h2>

          <div>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-b-2 mb-4 pb-4 ${
                  openIndex === index ? "border-yellow-400" : "border-gray-800"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-lg md:text-xl font-medium pr-4">
                    {faq.question}
                  </span>

                  <span className="text-yellow-400 text-2xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openIndex === index
                      ? "max-h-96 opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#44FF00] text-2xl mb-2">Answer</p>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;