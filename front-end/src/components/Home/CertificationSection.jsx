import React from 'react'
import CertificationCard from '../common/CertificationCard';

import CertificateImage1 from "../../assets/images/home/Excellence1.webp"
import CertificateImage2 from "../../assets/images/home/Excellence2.webp"
import CertificateImage3 from "../../assets/images/home/Excellence3.webp"
import CertificateImage4 from "../../assets/images/home/Excellence4.webp"
import CertificateImage5 from "../../assets/images/home/Excellence5.webp"
import CertificateImage6 from "../../assets/images/home/Excellence6.webp"

import Logo2 from "../../assets/images/home/Logo2.webp"
import { ArrowRight } from 'lucide-react';

export default function CertificationSection() {
 
  const students = [
    { 
      name: "Fatima Yasser", 
      title: "Excellence in Graphic Design", 
      image: CertificateImage1, 
      isReversed: false 
    },
    { 
      name: "Yasser Gaber", 
      title: "Excellence in Graphic Design", 
      image: CertificateImage2, 
      isReversed: true 
    },
    { 
      name: "Mostafa Khaled", 
      title: "Excellence in Graphic Design", 
      image:CertificateImage3 , 
      isReversed: false 
    },
    { 
      name: "Salma Hegazi", 
      title: "Excellence in Graphic Design", 
      image:CertificateImage4 , 
      isReversed: true 
    },
    { 
      name: "Karim Sabry", 
      title: "Excellence in Graphic Design", 
      image:CertificateImage6 , 
      isReversed: false 
    },
    { 
      name: "Marim Khaled", 
      title: "Excellence in Graphic Design", 
      image:CertificateImage5 , 
      isReversed: true 
    },
  ];

  return (
    <div className=" pt-20">

      {/* 🔥 HEADER فوق */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-8xl font-semibold font-[lexend] text-black">
          Our
        </h2>

        <h2 className="text-4xl md:text-8xl tracking-tight font-bold gradient-text ">
          Certifications
        </h2>

        <p className="md:text-5xl font-semibold tracking-tighter font-[lexend] text-black mt-2">
          reflect confidence
        </p>
      </div>

      {/* 🔥 SECTION الغامق */}
      <div
        className="bg-[#1a1308] p-10 pt-24 rounded-tr-[100px] rounded-br-[200px] mt-10 relative"
        style={{
          background: `
          radial-gradient(ellipse 90% 80% at -5% 15%, #BF7000 0%, #7A4500 30%, #1a0a00 55%, #000 75%),
          radial-gradient(ellipse 50% 35% at 25% 85%, #C87800 0%, #5C3300 45%, transparent 70%)
        `,
          backgroundBlendMode: 'screen',
        }}
      >

        {/* 🥇 الميدالية */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-12">
          <img src={Logo2} alt="Medal" className="w-24" />
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {students.map((student, index) => (
            <CertificationCard key={index} {...student} />
          ))}
        </div>

        {/* الزر */}
        <div className="flex justify-center mt-12">
          <button className="bg-white/90 text-black px-8 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-white hover:gap-3 transition">
            View All Certifications
            <div className="bg-black text-white rounded-full p-1">
              <ArrowRight size={14} />
            </div>
          </button>
        </div>
      </div>

    </div>
  );
}