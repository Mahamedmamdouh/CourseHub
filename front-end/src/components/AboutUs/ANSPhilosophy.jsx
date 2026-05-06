import React from "react";
 import Card1 from "../../assets/images/about/card1.webp"
import Card2 from "../../assets/images/about/card2.webp"
 import Card3 from "../../assets/images/about/card3.webp"
 import Card4 from "../../assets/images/about/card4.webp"
 import HeroImg from "../../assets/images/about/cover2.webp"

const data = [
  {
    title: "A deep understanding of the psychology of the Gulf market:",
    desc: "We don't teach general design; rather, we reveal to you the secrets of refined taste and the high-quality standards demanded by leading companies in the Arab world. Our goal is for you to master the language of the market,so you become a designer understood and appreciated by clients at first glance.",
    image: Card1,
    reverse: false,
  },
  {
    title: "Business of Design methodology",
    desc: "Talent alone is not enough. The biggest gap in our region is the talented designer who doesn't know how to sell themselves or their project. Our curriculum places negotiation skills, strategic pricing, and project management at the heart of our education, transforming you from an order fulfiller to a technical consultant who leads projects and makes decisions with confidence.",
    image: Card2,
    reverse: true,
  },
  {
    title: "Real-world agency simulation (Real-world Workflow):",
    desc: "True learning begins when theorizing stops. Our projects aren't just academic exercises; they're a realistic simulation of the creative agencies industry. You'll learn how to build strategy and present your work professionally, ensuring you stand out and land the biggest projects.",
    image: Card3,
    reverse: false,
  },
  {
    title: "A lifetime asset that grows forever",
    desc: "Subscribing to our service isn't just about accessing educational videos; it's about acquiring a lasting professional asset. Our content is constantly updated to keep pace with AI technologies and market changes, ensuring you always stay ahead, at no extra cost.",
    image: Card4,
    reverse: true,
  },
];

export default function ANSPhilosophy() {
  return (
 
    <div className="w-full px-4 md:px-10 py-12">

      {/* 🔥 Hero Card - تم إصلاح مشكلة ظهور الصورة */}
     <div className="w-full flex justify-center mb-10">
  <div className="relative w-full max-w-6xl h-[260px] md:h-[570px] rounded-[40px] overflow-hidden p-[1.5px] bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400">
    
    <div className="relative w-full h-full rounded-[calc(1.5rem-1px)] overflow-hidden ">
      <img
        src={HeroImg}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-contain "
      />
      <div className="absolute inset-0 " />

      <div className="relative z-10 h-full flex items-center px-6 md:px-12">
        <h2 className="text-white text-lg md:text-4xl font-semibold font-[lexend] max-w-[450px] leading-snug">
          What is the secret that made our platform the top destination for elite designers in the Gulf?
        </h2>
      </div>
    </div>

  </div>
</div>

      {/* 🔥 Description */}
      <div className="text-center max-w-5xl mx-auto mb-16">
        <p className="gradient-text-black-v2 font-[lexend] text-lg md:text-4xl font-semibold tracking-tighter leading-relaxed">
          At ANS courses, our philosophy transcends the limitations of educational tools. 
          We shape the professional future of every designer. 
          Our passion is transforming talent from a mere hobby into a sovereign manager,
          resulting in designers who don't find opportunities, but rather create them. Our philosophy rests on four pillars.

        </p>
      </div>

      {/* 🔥 Cards */}
      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        {data.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col ${
              item.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl`}
          >
            {/* Image - 1/3 Width (33%) */}
            <div className="md:w-1/3 h-[220px] md:h-[300px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content - 2/3 Width (66%) */}
            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center text-white">
              <div className="flex items-start gap-3 mb-4">
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
                <h3 className="font-semibold font-[lexend] text-3xl md:text-2xl tracking-tight">
                  {item.title}
                </h3>
              </div>
              <p className="font-light font-[lexend] text-sm md:text-xl tracking-tight  max-w-prose">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
