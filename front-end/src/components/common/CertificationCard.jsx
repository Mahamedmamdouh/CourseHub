import React from 'react'
import Logo2 from "../../assets/images/home/Logo2.webp"
export default function CertificationCard({ name, title, image, isReversed }) {

  return (
    <div className="bg-white rounded-3xl p-4 shadow-xl flex flex-col h-full min-h-[500px]">
      
      {/* Container اللي بيتحكم في الترتيب */}
      <div className={`flex flex-col h-full ${isReversed ? 'flex-col-reverse' : 'flex-col'}`}>
        
        {/* الجزء الخاص بالنصوص */}
        <div className="p-4 relative">
          {/* الوسام الصغير في الركن */}
          <img src={Logo2} alt="badge" className="absolute top-1 right-0 w-20 h-22" />
          
          <h4 className="text-3xl font-semibold uppercase">Certifications</h4>
          <p className="text-gray-400 font-semibold text-xl uppercase"
           style={{fontFamily:"lexand , sans-serif"}}>{name}</p>
          <p className="text-xs font-bold text-black mt-1 uppercase">{title}</p>
          
        
          <p className="text-[10px] text-gray-400 mt-2 leading-tight"
          style={{fontFamily:"lexand"}}>
  vision that fits my ambitions perfectly. I have new ideas and great that I know
  I will achieve here. It is a wonderful thing when you work in a healthy environment
  that always strives for success. It is not a slogan, but a fact. One name for success
</p>
          <div className="flex text-yellow-500 mt-2 text-xs">★★★★★</div>
        </div>

        {/* الجزء الخاص بصورة الطالب والشهادة الخلفية */}
        <div className="relative mt-auto overflow-hidden rounded-2xl flex-grow">
          {/* الصورة اللي فيها جرافيك "Course Graphic" */}
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover rounded-2xl" 
          />
          
          {/* تأثير الـ Overlay الأسود اللي تحت */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

