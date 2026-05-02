import React from "react";

const GoldButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`gold-button font-["lexend"] py-3  px-10 rounded-full text-white font-bold text-5xl  
            tracking-tight transition-all duration-300 shadow-[0_15px_35px_rgba(181,132,43,0.25)] 
                  hover:shadow-[0_20px_40px_rgba(181,132,43,0.4)]
                  border-t border-white/40 hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};

export default GoldButton;
