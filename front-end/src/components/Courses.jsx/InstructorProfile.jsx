import React from 'react';
import GoldBackGround from "../../assets/images/common/goldTexture.webp";
import Profile from "../../assets/images/course/profileCourse.webp";


/* Icon Image */


import Icon1 from "../../assets/images/course/Icon1.webp"
import Icon2 from "../../assets/images/course/Icon2.webp"
import Icon3 from "../../assets/images/course/Icon3.webp"
import Icon4 from "../../assets/images/course/Icon4.webp"

const InstructorProfile = () => {
  const achievements = [
    {
      icon: Icon1, 
      title: "Visual Identity Expert",
      description: "Over 8 years of experience at the heart of leading creative agencies in Saudi Arabia and Egypt."
    },
    {
      icon: Icon2,
      title: "Creator of the \"Design your Income\" methodology",
      description: "Empowered hundreds of designers to achieve exceptional financial and professional breakthroughs."
    },
    {
      icon: Icon3,
      title: "Mentor of professionals",
      description: "Supervised and guided 500+ designers who have now become the first choice for major companies."
    },
    {
      icon: Icon4,
      title: "Market Psychology Expert",
      description: "Combines artistic creativity with business strategy to ensure designs that never get rejected."
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white font-['Lexend'] min-h-screen">
      
      {/* الحاوية الرئيسية */}
      <div className="relative max-w-5xl w-full flex flex-col items-center">
        
        {/* قسم الهيدر والصورة */}
        <div className="relative h-[650px] w-full flex justify-cente px-6">
          
          {/* الخلفية الذهبية المنحنية */}
          <div 
            className="absolute h-[430px] inset-x-4  bottom-0 z-1 rounded-[50px]"
            style={{
              backgroundImage: `url(${GoldBackGround})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          {/* صورة المحاضر - مرفوعة للأعلى لتتخطى حدود الخلفية */}
          <img 
            src={Profile} 
            alt="Instructor" 
            className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-2xl"
          />
        </div>

        {/* قسم المعلومات - يستخدم الكلاس الأصلي مع "خدعة" إخفاء التوب */}
        <div className="absolute w-[980px] px-8 py-20 bottom-10 space-y-8 gold-border-card fix-radius">

         

          {achievements.map((item, index) => (
            <div key={index}  className={`flex gap-5 items-center group relative z-20 ${
      index === achievements.length - 1 ? "pb-0 border-0" : "gradient-border-underline pb-6"
    }`}>
              
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
               <img
  src={item.icon}
  alt={item.title}
  className="w-15 h-15 mb-5"
/>
              </div>

    <div className="flex flex-col flex-grow ">
  
  <h3 className="font-semibold text-[36px] gradient-text-black leading-tight tracking-tighter mb-2">
    {item.title}: {item.description}
  </h3>

</div>
            </div>
          ))}
        </div>
      </div>

      {/* نص الاقتباس السفلي */}
      <div className="max-w-2xl text-center mt-6 px-6">
        <p className="gradient-text-black text-[20px] leading-relaxed font-[lexend] tracking-tighter">
          "I am not here to just teach you a tool (Tools), but to give you the 'Code' that 
          makes your designs worth hundreds of dollars. In this course, I will share with 
          you all the trade secrets I've learned in the field, so you can save yourself years 
          of trial and error."
        </p>
      </div>
    </div>
  );
};

export default InstructorProfile;