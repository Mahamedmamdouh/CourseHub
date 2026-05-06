import React, { useState } from 'react';
import icon from "../../assets/images/course/Icon5.svg";
import LeaderProfile from "../../assets/images/contact/profile.webp";

const faqs = [
  {
    question: "I’m an employee/student with limited time. Does the course require a fixed schedule?",
    answer:
      "We value your time. The course is designed to be fully flexible. The lessons are high-quality recorded sessions available to you for life, allowing you to learn anytime and from anywhere that suits you, while still maintaining direct support when needed."
  },
  {
    question: "Will it help me get more clients and expand my services, or is it only about design?",
    answer:
      "This is the core of ANS Academy. We don’t just teach you how to design — we teach you how to sell. The course includes complete modules on Freelancing Business: how to build an attractive portfolio, how to negotiate with clients, and how to price your services in a way that reflects your true market value."
  },
  {
    question: "Does the course support AI (Artificial Intelligence) tools in design?",
    answer:
      "Keeping up with the future is part of our approach. You’ll learn how to leverage the latest AI tools to boost your productivity and improve the quality of your designs, becoming a modern designer who stays steps ahead of competitors."
  },
  {
    question: "Does the curriculum focus on visual identities or social media designs?",
    answer:
      "The curriculum is comprehensive and built around market demand. We focus intensively on social media designs (as they are the most requested), in addition to strategic visual identity development, so you graduate with integrated skills that make you the first choice for business owners."
  },
  {
    question: "What if a new Photoshop update is released after I purchase the course?",
    answer:
      "You'll get lifetime updates so your skills stay always up-to-date."
  },
  {
    question: "What if a new Photoshop update is released after I purchase the course?",
    answer:
      "You'll get lifetime updates so your skills stay always up-to-date."
  },
  {
    question: "What if a new Photoshop update is released after I purchase the course?",
    answer:
      "You'll get lifetime updates so your skills stay always up-to-date."
  },
  {
    question: "What if a new Photoshop update is released after I purchase the course?",
    answer:
      "You'll get lifetime updates so your skills stay always up-to-date."
  }
];

const FAQContactSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (

      <>

      <div className="bg-white py-12 md:py-20 text-center">
        <h2 className="text-5xl md:text-[85px] font-bold leading-tight gradient-text tracking-tighter">
          Your question
        </h2>
      </div>
    <section className="bg-black text-white py-20 px-6 md:px-16 font-lexend overflow-hidden relative min-h-[900px]">
      

      {/* Right side image container */}
      <div className="absolute top-0 right-0 h-full w-[70%] z-0 pointer-events-none">

        {/* icon */}
        <div className="absolute top-15 right-12 w-72 md:w-75">
          <img src={icon} alt="icon" className="w-full h-auto" />
        </div>

        {/* Instructor Image (MAIN FIX HERE) */}
      <div className="absolute bottom-0 top-25 right-35" style={{ width: '750px' }}>
  <img
    src={LeaderProfile}
    alt="Instructor"
    className="w-full h-auto object-contain object-bottom"
  />
  </div>

        {/* gradients */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="w-full md:w-[50%]">
          <h2 className="text-4xl font-semibold mb-12">Your question</h2>

          <div>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-b-2 mb-4 pb-4 ${
                  openIndex === index ? "border-yellow-400" : "border-gray-800"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-lg md:text-xl font-medium pr-4">
                    {faq.question}
                  </span>

                  <span className="text-yellow-400 text-2xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openIndex === index
                      ? "max-h-96 opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#44FF00] text-2xl mb-2">Answer</p>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default FAQContactSection;