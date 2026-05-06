import React from 'react';
import { CheckCircle2 } from 'lucide-react';
// استبدل المسارات بالصور الحقيقية لديك
import Pillar1 from "../../assets/images/instructor/card1.webp";
import Pillar2 from "../../assets/images/instructor/card2.png";
import Pillar3 from "../../assets/images/instructor/card3.webp";

const features = [
  {
    id: 1,
    title: "1 - The first pillar",
    subtitle: "Psychology of Strategic Design",
    description: "At ELNASR COURSES, you won't just design to dazzle the eyes, but to convince the minds. You'll learn how to connect art and logic. You'll move from saying 'This is beautiful' to 'This achieves the brand's goal.'",
    image: Pillar1,
    highlight: false
  },
  {
    id: 2,
    title: "2 - The Second Pillar",
    subtitle: "Professional work philosophy",
    description: "You will master the workflow from the moment the idea is conceived until final delivery, ensuring your projects are executed with technical precision and professional organization befitting leading companies.",
    image: Pillar2,
    highlight: true // الكارت الأوسط
  },
  {
    id: 3,
    title: "3 - The third pillar",
    subtitle: "The language of business and the art of persuasion",
    description: "Great design doesn't sell itself, so you'll master the art of persuading the client. Business proficiency begins with your ability to transform your artistic vision into an irresistible business solution.",
    image: Pillar3,
    highlight: false
  }
];

const UniqueExperience = () => {
      const highlightText = (text, target) => {
    if (!text) return text;
    const parts = text.split(new RegExp(`(${target})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === target.toLowerCase() ? (
            <span key={i} className="text-[#D0A300] font-bold">{part}</span>
          ) : (
            part
          )
        )}
      </span>
    );
  };
  return (

    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* العنوان العلوي */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="gradient-text">
              What makes the learning experience with <br /> Abdullah Al-Nasr unique?
            </span>
          </h2>
        </div>

        {/* شبكة الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {features.map((item) => (
            <div 
              key={item.id}
              className={`relative group transition-all duration-500 ${
                item.highlight ? 'md:scale-110 z-10' : 'md:scale-100 z-0'
              }`}
            >
              {/* الإطار الملون (Gradient Border) */}
              <div className="absolute -inset-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-red-500 rounded-[35px] opacity-100"></div>

              {/* محتوى الكارت */}
              <div className="relative bg-black rounded-[33px] overflow-hidden h-full flex flex-col">
                
                {/* الجزء العلوي: الصورة */}
                <div className="h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.subtitle} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* الجزء السفلي: النص */}
                <div className="p-8 flex-grow">
                  <h4 className="text-white text-sm font-medium mb-1 ">
                    {item.title}
                  </h4>
                  <h3 className="text-white text-xl font-bold mb-4 leading-tight">
                    {item.subtitle}
                  </h3>
                  
                  <div className="flex gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 w-5 h-5 mt-1" />
                    <p className="text-gray-300 text-sm leading-relaxed font-light">
                       {highlightText(item.description, "ELNASR COURSES")}
                    </p>
                  </div>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueExperience;