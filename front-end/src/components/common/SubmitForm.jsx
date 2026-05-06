// import React from 'react'

// import S1 from "../../assets/images/home/student1.webp"
// import S2 from "../../assets/images/home/student2.webp"
// import S3 from "../../assets/images/home/student3.webp"

// export default function SubmitForm() {
//   return (
//     <div className="w-full flex flex-col items-center justify-center">
      
//       {/* الفورم */}
//       <div className="mt-15 flex items-center gap-3 bg-gray-100 px-3 py-3 rounded-full shadow-inner w-full max-w-4xl">
//         <input
//           type="email"
//           placeholder="Enter Your Email"
//           className="flex-1 bg-transparent px-4 py-2 outline-none text-sm"
//         />

//         <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90">
//           Get Early Access
//         </button>
//       </div>

//       {/* avatars + text */}
//       <div className="flex items-center justify-center gap-3 mt-4">
        
//         <div className="flex -space-x-3">
//           <img src={S1} className="w-8 h-8 rounded-full border-2 border-white" />
//           <img src={S2} className="w-8 h-8 rounded-full border-2 border-white" />
//           <img src={S3} className="w-8 h-8 rounded-full border-2 border-white" />
//         </div>

//         <p className="text-sm text-center">
//           <span className="font-bold text-xl">3 </span>
//           <span className="font-semibold gradient-text-hero">
//             Students already Access
//           </span>
//         </p>
//       </div>

//     </div>
//   );
// }


import React from 'react'
import S1 from "../../assets/images/home/student1.webp"
import S2 from "../../assets/images/home/student2.webp"
import S3 from "../../assets/images/home/student3.webp"

// استقبل الـ children هنا
export default function SubmitForm({ children }) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      
      {/* الفورم */}
      <div className="mt-15 flex items-center gap-3 bg-gray-100 px-3 py-3 rounded-full shadow-inner w-full max-w-4xl">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="flex-1 bg-transparent px-4 py-2 outline-none text-sm"
        />
        <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-all">
          Get Early Access
        </button>
      </div>

      {/* avatars + text */}
      <div className="flex items-center justify-center gap-3 mt-4">
        <div className="flex -space-x-3">
          <img src={S1} alt="student" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
          <img src={S2} alt="student" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
          <img src={S3} alt="student" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
        </div>

        <p className="text-sm text-center">
          <span className="font-bold text-xl">3 </span>
          <span className="font-semibold gradient-text-hero">
            Students already Access
          </span>
        </p>
      </div>

      {/* هنا هيظهر الزرار أو أي حاجة تانية تبعتها من بره */}
      {children && (
        <div className="mt-8 w-full flex justify-center">
          {children}
        </div>
      )}

    </div>
  );
}