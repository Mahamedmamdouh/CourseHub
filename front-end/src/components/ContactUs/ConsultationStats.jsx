import React from "react";
// افترضت هنا أسماء الملفات، غيرها لأسماء الملفات الحقيقية عندك
import AnalysisIcon from "../../assets/images/contact/people-chart 1.svg";
import QuestionsIcon from "../../assets/images/contact/q-and-a 1.svg";
import BusinessPlanIcon from "../../assets/images/contact/strategy 1.svg";

const ConsultationStats = () => {
  const features = [
    {
      id: 1,
      title: "Analysis of your current miswak",
      icon: AnalysisIcon,
    },
    {
      id: 2,
      title: "A comprehensive answer to all your questions about the job market",
      icon: QuestionsIcon,
    },
    {
      id: 3,
      title: "Develop a clear business plan to generate profits.",
      icon: BusinessPlanIcon,
    },
  ];

  return (
    <section className="py-20 bg-white font-[Lexend] px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* العنوان الرئيسي الذهبي */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-[64px] font-semibold leading-tight max-w-5xl mx-auto gradient-text">
            Start your journey of change and get your free consultation now.
          </h2>
        </div>

        {/* كروت المميزات - الـ Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center group">
              {/* الإطار المتدرج */}
              <div className="w-75 h-75 rounded-[35px]  p-[1.5px] mb-2 flex items-center justify-center ">
                <div className="bg-white w-full h-full  flex items-center justify-center overflow-hidden p-6">
                  <img 
                    src={feature.icon} 
                    alt={feature.title} 
                    className="w-full h-full object-contain transition-transform group-hover:scale-110" 
                  />
                </div>
              </div>
              <p className="text-black text-[32px] leading-tight font-[lexend] font-normal max-w-[280px]">
                {feature.title}
              </p>
            </div>
          ))}
        </div>

        {/* قسم الإحصائيات (1,200 و 500+) */}
        <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-32 mb-20">
          {/* الاحصائية الأولى */}
          <div className="flex items-center gap-4 border-b-2 border-gray-100 pb-3 relative min-w-[300px]">
             <div className="absolute bottom-[-2px] left-0 w-1/2 border-b-2 border-[#D0A300]"></div>
             <h3 className="text-8xl font-bold gradient-text">1,200</h3>
             <p className="text-black text-[32px] min-w-[300px] leading-tight font-light">
               projects completed by our students
             </p>
          </div>

          {/* الاحصائية الثانية */}
          <div className="flex items-center gap-4 border-b-2 border-gray-100 pb-3 relative min-w-[300px]">
             <div className="absolute bottom-[-2px] left-0 w-1/2 border-b-2 border-[#D0A300]"></div>
             <h3 className="text-8xl font-bold gradient-text">500+</h3>
             <p className="text-black font-[lexend] text-[32px] min-w-[300px] leading-tight font-light">
               students from the Gulf countries
             </p>
          </div>
        </div>

        {/* إحصائية الـ 24 ساعة الضخمة */}
        <div className="flex flex-col items-center text-center mt-10">
          <div className=" pb-2 relative inline-block mb-4">
             
             <h3 className="text-[140px] font-bold gradient-text leading-[0.8]">
               24
             </h3>
          </div>
          <p className="text-black font-[lexend] text-[32px]  border-b-2 border-[#D0A300] font-light mt-0">
            support available 24/7
          </p>
        </div>

      </div>
    </section>
  );
};

export default ConsultationStats;