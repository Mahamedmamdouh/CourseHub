export default function TestimonialsCard({name, role, feedback, image, isLight}) {
  return (

    // 👇 ده الـ gradient border
    <div className="gradient-border p-[2px] rounded-[40px]">

      {/* 👇 ده الكارد نفسه */}
      <div className={`p-6 rounded-[38px] shadow-lg flex flex-col justify-between 
        ${isLight 
          ? 'bg-white text-gray-800' 
          : 'bg-black text-white'}`}>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <img 
            src={image} 
            alt={name} 
            className={`w-12 h-12 rounded-full object-cover border-2 
              ${isLight ? 'border-gray-500' : 'border-white'}`} 
          />
          <div>
            <h4 className="font-bold text-lg leading-tight">{name}</h4>
            <p className={`text-sm ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
              {role}
            </p>
          </div>
        </div>

        <hr className={`mb-4 opacity-30 
          ${isLight ? 'border-gray-500' : 'border-white'}`} />

        {/* Feedback */}
        <p className="text-sm leading-relaxed mb-2 font-light"
          style={{ fontFamily: "Lexend" }}>
          "{feedback}"
        </p>

        {/* Stars */}
        <div className="flex text-yellow-500 text-lg">
          {"★★★★★"}
        </div>

      </div>
    </div>
  );
};