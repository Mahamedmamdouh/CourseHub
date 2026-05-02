import React from 'react';

/* image */
import img1 from "../../assets/images/course/Mask group (7).webp"
import img2 from "../../assets/images/course/Mask group (9).webp"
import img3 from "../../assets/images/course/Mask group (14).webp"
import img4 from "../../assets/images/home/Mask group.png"

/* icon */
import icon1 from "../../assets/images/course/Mask group (8).webp"
import icon2 from "../../assets/images/course/Mask group (13).webp"
import icon3 from "../../assets/images/course/Mask group (10) (1).webp"
import icon4 from "../../assets/images/course/Mask group (12).webp"
import FeatureCard from '../common/FeatureCard';


const FeatureSection = () => {
  
  const featuresData = [
    {
      title: "You will think like a strategist, not just an executive.",
      image: img1 ,
      icon: icon1,
      isReversed: false,
      points: [
        "Mindset & Branding (The Strategic Foundation)",
        "You won’t only learn how to design a logo, but how to analyze a brand, think outside the box, and build a complete visual identity that tells a story and creates real impact."
      ]
    },
    {
      title: "Real-world projects that reflect reality... a portfolio that speaks for you.",
      image: img2,
      icon: icon2,
      isReversed: true,
      points: [
        "Practical Experience (Portfolio)",
        "Stop training on hypothetical projects.",
"Together, you will execute real projects with clear, structured steps to graduate with a professional Portfolio specifically designed to capture the attention of major companies and distinguished clients."
      ]
    },
    {
      title: "You'll dominate the Gulf job market intelligently.",
      image: img3,
      icon: icon3,
      isReversed: false,
      points: [
        "Mastering the Market & Money (The Business of Design)",
        "We reveal to you the secrets of dealing with VIP clients in the Gulf, how to convince clients of higher budgets without hesitation, and how to manage your projects with complete professionalism — without stress or chaos."
      ]
    },
     {
      title: "Support & Follow-Up (Security & Confidence).",
      image: img4,
      icon: icon4,
      isReversed: true,
      points: [
        "With us… you’re never alone.",
        "Your journey doesn’t end when the course ends.",
        "You’ll receive continuous feedback on your work, strategic guidance for your career path, and practical advice that sets you apart from any other designer in the market."
      ]
    }
  ];

  return (
    <section className=" py-20 px-4 sm:px-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* رندر الكروت ديناميكياً */}
        {featuresData.map((item, index) => (
          <FeatureCard
            key={index}
            title={item.title}
            image={item.image}
            icon={item.icon}
            points={item.points}
            isReversed={item.isReversed}
          />
        ))}

        {/* البوكس الأخير (التوقيع) - يضاف في نهاية القائمة */}
      <div className="mt-10 flex justify-center px-4">
  <div className="gold-border-card w-full max-w-5xl p-10 text-center ">
    
    {/* النص المتدرج الأسود (Secrets of the elite...) */}
    <p className="gradient-text-black text-[32px] md:text-[54px] font-semibold font-[lexend] mb-14 tracking-[-0.06em] leading-tight">
      I possess the secrets of the elite that will open doors for you to major companies in the Gulf, with
    </p>

    {/* اسم الشخص */}
    <h4 className="text-black font-semibold text-4xl md:text-5xl font-[lexend] tracking-tighter">
      Abdullah Al-Nasr.
    </h4>
    
  </div>
</div>
        
      </div>
    </section>
  );
};

export default FeatureSection;