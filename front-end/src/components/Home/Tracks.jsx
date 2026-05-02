import React from 'react'
import { useEffect, useState } from "react";
import Card from "../common/Card"
import img1 from "../../assets/images/home/Mask group.png"
import img2 from "../../assets/images/home/Mask group (1).png"
import img3 from "../../assets/images/home/Mask group (2).png"
import img4 from "../../assets/images/home/Mask group (3).png"
import img5 from "../../assets/images/home/Mask group (4).png"
import img6 from "../../assets/images/home/Mask group (5).png"
import img7 from "../../assets/images/home/Mask group (6).png"

const data = [
  {
    title: "Professionalism Guide",
    desc: "We reveal to you the keys to dealing with elite clients and show you how to build a strong presence, price your services confidently, and manage your projects professionally—placing you at the forefront of the market.",
    img: img1,
  },
  {
    title: "Strong Brand",
    desc: "You will learn how to build a comprehensive brand identity, turn a logo into a story, and use design to achieve real business goals.",
    img: img2,
  },
  {
    title: "Real Experience",
    desc: " We provide you with the essence of years of real-world experience: executing live projects, understanding client mindsets and requirements, and creating work that commands high professional fees.",
    img: img3,
  },
  {
    title: "Professional Mindset",
    desc: "You won’t just learn software and tools; you’ll learn how a professional designer thinks: how to analyze, innovate, and present a design that sells and is valued..",
    img: img4,
  },
  {
    title: "Job Market",
    desc: "We reveal the secrets of dealing with premium clients, how to price with confidence, and how to manage projects professionally without stress or chaos.",
    img: img5,
  },
  {
    title: "Continuous Support",
    desc: "You’re not buying a course… you’re building a professional foundation that grows with you for life.",
    img: img6,
  },
  {
    title: "Continuous Support",
    desc: "With us, you are not alone; we provide continuous and constructive reviews of your work, strategic career guidance, and practical tips that set you apart from others.",
    img: img7,
  },
];

export default function Tracks() {
  const [index, setIndex] = useState(0);

  const visible = 4;

  // duplicate for smooth loop
  const loopData = [...data, ...data];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev >= data.length ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full overflow-hidden py-10 px-6 ">
      <div
        className="flex gap-5 transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${index * (100 / visible)}%)`,
        }}
      >
        {loopData.map((card, i) => (
          <div key={i} className="min-w-[25%]">
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>


    <div className="max-w-4xl mx-auto text-center py-16 px-6">
  <p className="text-2xl md:text-3xl font-light italic text-gray-700 leading-relaxed">
    "You aren't just buying a course... you are investing in a 
    <span className="font-bold text-black"> professional asset </span> 
    that grows with you for a lifetime..One decision, continuous growth, and the power to always keep you at the forefront of the elite."
  </p>
  

  

 
    


</div>
    </>
  
  );
}
