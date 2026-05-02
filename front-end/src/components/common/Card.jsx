export default function Card({ title, desc, img }) {
  return (
    <div className="bg-[#000] max-w-sm rounded-[30px] overflow-hidden flex flex-col h-full text-white shadow-2xl">
      
      {/* Image Container with Gradient Border */}
      <div className="p-[1.5px] rounded-t-[30px] bg-gradient-to-r from-blue-400 via-green-400 to-purple-500">
        <div className="overflow-hidden rounded-t-[28px]">
          <img
            className="w-full h-56 object-cover"
            src={img}
            alt={title}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow bg-black">
        <h5 className="mb-3 text-xl font-bold text-center tracking-tight">
          {title}
        </h5>

        <div className="flex items-start gap-3">
          {/* Checkmark Icon */}
          <div className="mt-1 flex-shrink-0">
             <div className="w-4 h-4 bg-lime-500 rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                </svg>
             </div>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            {desc}
          </p>
        </div>
      </div>

    </div>
  );
}