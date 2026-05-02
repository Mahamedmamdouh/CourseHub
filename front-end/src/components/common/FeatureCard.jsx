import React from 'react';

const FeatureCard = ({ image, title, points, isReversed, icon }) => {
  return (
    <div
      className={`flex flex-col ${
        isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center justify-center gap-6 md:gap-10 w-full mb-10 px-4`}
    >
      
      {/* الكارد */}
      <div className="flex flex-col md:flex-row bg-black rounded-[3rem] overflow-hidden shadow-xl w-full ">
        
        {/* الصورة */}
        <div
          className={`w-full md:w-[40%] h-60 md:h-auto flex items-center justify-center ${
            isReversed ? 'md:order-2' : 'md:order-1'
          }`}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-[3rem]"
          />
        </div>

        {/* المحتوى */}
        <div
          className={`w-full md:w-[60%] p-6 md:p-10 flex flex-col justify-center ${
            isReversed ? 'md:order-1 ' : 'md:order-2'
          }`}
        >
          <h3 className="text-white font-semibold text-xl md:text-2xl mb-5 font-[lexend] leading-tight">
            {title}
          </h3>

          <ul className={`space-y-4 w-full`}>
            {points.map((point, index) => (
              <li
                key={index}
                className={`flex items-start gap-3`}
              >
                {/* علامة الصح */}
                <div className="bg-[#4ADE80] rounded-full p-1 mt-1 flex-shrink-0">
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>

                <p className="text-gray-100 text-[15px] md:text-[17px] font-medium leading-snug">
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* الأيقونة الذهبية */}
      <div className="hidden lg:flex w-45 h-45 flex-shrink-0 items-center justify-center">
        <img
          src={icon}
          alt="icon"
          className="w-full h-full object-cover "
          style={{
            filter: 'drop-shadow(0px 10px 30px rgba(212, 175, 55, 0.25))',
          }}
        />
      </div>
    </div>
  );
};

export default FeatureCard;