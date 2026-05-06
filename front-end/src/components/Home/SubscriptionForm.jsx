import S1 from "../../assets/images/home/student1.webp"
import S2 from "../../assets/images/home/student2.webp"
import S3 from "../../assets/images/home/student3.webp"
import GoldButton from "../common/GoldButton"

export default function SubscriptionForm() {
  return (
     <div className="mt-16 flex flex-col items-center gap-8">
      
      {/* زرار Lifetime 
        <button className="gold-button py-3 w-full max-w-md px-10  rounded-full text-white font-semibold text-4xl
        shadow-md hover:scale-105 transition ">
        Lifetime Subscription
      </button>   */}
    

      <GoldButton className="text-white">
        Lifetime Subscription
        
      </GoldButton>

      {/* الفورم */}
      <div className="mt-15 flex items-center gap-3 bg-gray-100 px-3 py-3 rounded-full shadow-inner w-full max-w-4xl">
        
        <input
          type="email"
          placeholder="Enter Your Email"
          className="flex-1 bg-transparent px-4 py-2 outline-none text-sm"
        />

        <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90">
          Get Early Access
        </button>
      </div>

      {/* avatars + text */}
      <div className="flex items-center gap-3">
        
        {/* الصور */}
        <div className="flex -space-x-3">
          <img
            src={S1}
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <img
            src={S2}
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <img
            src={S3}
            className="w-8 h-8 rounded-full border-2 border-white"
          />
        </div>

        {/* النص */}
        <p className="text-sm">
            <span className="font-bold text-xl">3 </span>
          <span className="font-semibold gradient-text-hero"> Students already Access</span>
        </p>

      </div>
    </div>
  )
}
