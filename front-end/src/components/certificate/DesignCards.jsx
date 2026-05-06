import React from 'react'

import SuccessIllustration from "../../assets/images/course/Group.svg"; 
import LikeIcon from "../../assets/images/course/encouragement 1.svg"; 
import GoldButton from '../common/GoldButton';

export default function DesignCards() {
  return (
      <>
      
      {/*  Success Story Section */}
        <div className="flex flex-col my-20 items-center text-center max-w-4xl mx-auto">
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
      className="absolute right-[17%] top-[-73px] w-24 h-auto z-20" 
    />

        {/* Text Container */}
        <div className="flex flex-col items-center">
          {/* Gold Pill Text */}


          <GoldButton className='text-white px-12 py-4 z-10 mt-10 '>
             Don’t just watch others
          </GoldButton>

          {/* Subtext */}
          <div className="mt-0 ">
            <h2 className="text-black text-[4rem] font-semibold leading-tight tracking-tight">
              succeed... Be the next <br /> success story.
            </h2>
          </div>
          </div>
        </div>
      </div>
      

      
      
    
      </>

  )
}
