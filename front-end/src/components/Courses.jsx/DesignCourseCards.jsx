import React from 'react';

import Icon1 from "../../assets/images/course/Mask group.svg";
import Icon2 from "../../assets/images/course/Mask group (1).svg";

import SuccessIllustration from "../../assets/images/course/Group.svg"; 
import LikeIcon from "../../assets/images/course/encouragement 1.svg"; 
import GoldButton from '../common/GoldButton';

const DesignCourseCards = () => {
  const cards = [
    {
      id: 1,
      icon: Icon1,
      title: "I’m not here to teach you just a tool (Tools).",
      description:
        "I’m here to give you the ‘code’ that makes your designs worth hundreds of dollars. In this course, I’ll share with you all the professional secrets I’ve learned in the field — so you can skip years of trial and error.”",
      iconClass: "-top-84" 
    },
    {
      id: 2,
      icon: Icon2,
      title: "Join the elite community of creative designers.",
      description:
        "We take pride in our graduates who started their journey with us and today, they are part of some of some of the biggest advertising and marketing agencies across the Arab world.",
      iconClass: "-top-60" 
    },
  ];

  return (
    <div className="flex flex-col gap-60 py-90 px-6 bg-white font-['Lexend'] mx-auto">
      {/* الجزء الخاص بك - بدون أي تعديل */}
      {cards.map((card) => (
        <div key={card.id} className="relative group">
          <img
            src={card.icon}
            alt={card.title}
            className={`w-160 h-100 absolute right-10 z-0 ${card.iconClass}`}
          />

          <h3 className="text-[1.2rem] md:text-[2rem] font-semibold bg-gradient-to-r from-[#1a1a1a] via-[#737373] to-[#d4d4d4] bg-clip-text text-transparent mb-5 ml-48 leading-tight pr-32">
            {card.title.split('(')[0]}
            <span className=" text-gray-400 font-normal">
              {card.title.includes('(')
                ? `(${card.title.split('(')[1]}`
                : ''}
            </span>
          </h3>

          <div className="relative w-full max-w-6xl mx-auto">
            <div className="p-[2px] rounded-2xl gradient-border shadow-[0_20px_60px_rgba(0,0,0,0.12)] shadow-xl shadow-gray-100">
              <div className="bg-white rounded-[14px] pl-10 pt-10 pb-10 pr-[20%]">
                <p className="text-gray-900 text-[2rem] leading-[1.3] tracking-tighter font-semibold">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/*  Success Story Section */}
      <div className="flex flex-col items-center mt-[-150px] text-center max-w-4xl mx-auto">
        {/* Illustration */}
        <div className="relative mb-[-40px] z-10">
          <img 
            src={SuccessIllustration} 
            alt="Success Story" 
            className="w-[450px] h-auto"
          />
        </div>
        <div className="relative w-full flex flex-col items-center">

        {/* أيقونات اللايك - الصورة اللي معاك */}
    <img 
      src={LikeIcon} // استبدل هذا بمسار الصورة اللي معاك
      alt="Likes"
      className="absolute right-[4%] top-[-73px] w-24 h-auto z-20" 
    />

        {/* Text Container */}
        <div className="flex flex-col items-center">
          {/* Gold Pill Text */}


          <GoldButton className='text-white px-12 py-4 z-10 mt-10 '>
             Don’t just watch others
          </GoldButton>

          {/* Subtext */}
          <div className="mt-0  mb-[-250px]">
            <h2 className="text-black text-[4rem] font-semibold leading-tight tracking-tight">
              succeed... Be the next <br /> success story.
            </h2>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignCourseCards;