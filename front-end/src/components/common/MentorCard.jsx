import React from "react";

const MentorCard = ({ employee, isActive }) => {
  return (
   <div
  className={`relative w-[300px] h-[500px] flex flex-col items-center justify-end pb-10 transition-all duration-700
  ${isActive 
    ? "scale-110 z-20 opacity-100 drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]" 
    : "scale-90  opacity-60 "}`}

    
>
      {/* صورة الشخص */}
      <div className="absolute -top-28 z-0 w-full flex justify-center">
        <img
          src={employee.mainImage}
          alt={employee.name}
          className="w-[220px] h-auto object-contain pointer-events-none"
          style={{
            filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.2))",
          }}
        />
      </div>

      {/* الكارد */}
      <div className="relative z-10 bg-black text-white rounded-[25px] overflow-hidden shadow-2xl w-full h-[320px] flex flex-col">
        
        {/* صورة البورتفوليو */}
        <div className="h-1/2 w-full overflow-hidden">
          <img
            src={employee.portfolioImage}
            alt="Work"
            className="w-full h-full object-cover"
          />
        </div>

        {/* المحتوى */}
        <div className="p-4 flex flex-col justify-center flex-grow text-left">
          <h3 className="text-sm font-bold truncate">
            {employee.name}
          </h3>

          <p className="text-[10px] text-gray-400 mb-1">
            {employee.title}
          </p>

          <p className="text-[11px] text-gray-300 leading-snug line-clamp-3">
            {employee.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;

















