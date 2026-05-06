import React from "react";
import GoldTexture from "../../assets/images/common/goldTexture.webp";
import GoldButton from "../common/GoldButton";

const FeedbackForm = () => {
  return (
    <section className="py-20  bg-white flex flex-col items-center px-4 font-[Lexend]">
    
      <GoldButton className="text-white tracking-tight mb-10">  "Secure Your Spot in the World of Professionals"</GoldButton>

      <h3 className="text-3xl md:text-4xl font-bold text-black font-[lexend] mb-12">Feedback Form</h3>

      {/* الحاوية الرئيسية بحدود ملونة (Gradient Border) */}
      <div className="relative p-[2px] max-w-6xl rounded-[40px] bg-gradient-to-r from-pink-500 via-red-500 via-yellow-500 via-green-400 to-blue-500 w-full max-w-3xl">
        <div className="bg-white rounded-[38px] p-8 md:p-16 flex flex-col gap-8">
          
          {/* حقل الاسم */}
          <div className="flex flex-col gap-2">
            <label className="text-xl font-semibold">Name <span className="text-yellow-500">*</span></label>
            <input 
              type="text" 
              className="w-full bg-gray-50 border-none rounded-lg p-4 focus:ring-2 focus:ring-yellow-500 outline-none"
            />
          </div>

          {/* حقل الموبايل */}
          <div className="flex flex-col gap-2">
            <label className="text-xl font-semibold">Phone <span className="text-yellow-500">*</span></label>
            <input 
              type="tel" 
              className="w-full bg-gray-50 border-none rounded-lg p-4 focus:ring-2 focus:ring-yellow-500 outline-none"
            />
          </div>

          {/* حقل الإيميل */}
          <div className="flex flex-col gap-2">
            <label className="text-xl font-semibold">Email <span className="text-yellow-500">*</span></label>
            <input 
              type="email" 
              placeholder="Username@gmail.com"
              className="w-full bg-gray-50 border-none rounded-lg p-4 focus:ring-2 focus:ring-yellow-500 outline-none placeholder:text-gray-300"
            />
          </div>

          {/* قسم الأسئلة المتكررة */}
          <div className="flex flex-col gap-4">
            <label className="text-xl font-semibold">Frequently Asked Questions (Choose) <span className="text-yellow-500">*</span></label>
            <div className="bg-gray-50 p-6 rounded-lg flex flex-col gap-4 text-gray-700">
              <div>
                <p className="text-yellow-600 font-medium">What is your current level in design?</p>
                <p className="text-sm italic">( Beginner – Intermediate – Professional )</p>
              </div>
              <div>
                <p className="text-yellow-600 font-medium">What is your goal from the course?</p>
                <ul className="list-none space-y-1">
                  <li>( I want to work as a freelancer and increase my income )</li>
                  <li>( I want to get a job at a major company )</li>
                  <li>( I want to develop my personal design skills )</li>
                </ul>
              </div>
            </div>
          </div>

          {/* حقل الرسالة */}
          <div className="flex flex-col gap-2">
            <label className="text-xl font-semibold">Message <span className="text-yellow-500">*</span></label>
            <textarea 
              rows="6"
              className="w-full bg-gray-50 border-none rounded-lg p-4 focus:ring-2 focus:ring-yellow-500 outline-none"
            ></textarea>
          </div>

          {/* زر الإرسال */}
          <div className="mt-4">
            <button className="px-10 py-3 border-2 border-black rounded-full text-black font-semibold hover:bg-black hover:text-white transition-all duration-300">
              Send message
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;