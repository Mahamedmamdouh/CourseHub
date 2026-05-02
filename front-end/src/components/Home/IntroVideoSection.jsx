import { Play } from 'lucide-react'
import React from 'react'


export default function IntroVideoSection() {

   return (
    <div className="flex items-center justify-center min-h-screen bg-white p-10">
      {/* الحاوية الخارجية مع تأثير الإضاءة الخلفية */}
      <div className="relative group max-w-7xl w-full">
        
        {/* طبقة التوهج (Glow Effect) */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-red-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        
        {/* جسم المشغل الأساسي */}
        <div className="relative bg-black rounded-2xl overflow-hidden aspect-video flex items-center justify-center border border-gray-800">
          
          {/* زر التشغيل في المنتصف */}
          <div className="relative flex items-center justify-center w-20 h-20 bg-white rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.4)]">
             {/* الدائرة الخضراء الصغيرة المحيطة بالزر */}
            <div className="absolute inset-0 rounded-full border-2 border-green-400 opacity-50 scale-125 animate-ping-out"></div>
            <Play size={32} fill="black" className="ml-1" />
          </div>

          {/* شريط التحكم السفلي (شكل توضيحي) */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-2">
            {/* شريط التقدم */}
            <div className="w-full h-1 bg-gray-600 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
            </div>
            
            <div className="flex justify-between items-center text-white text-xs opacity-80 mt-2">
                <div className="flex gap-4">
                    <span>00:00 / 02:30</span>
                </div>
                <div className="font-mono">Academy Overview.mp4</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}




