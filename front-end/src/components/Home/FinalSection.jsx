import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

import mainUserImage from "../../assets/images/home/FinalSection.webp";
import ProfileIcon from "../../assets/images/home/Iconprofile 1.webp";

const FinalSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto my-10 overflow-hidden rounded-[79px] shadow-lg font-sans">
      <div className="flex flex-col md:flex-row bg-black relative min-h-[400px]">

        {/* --- LEFT SECTION --- */}
        <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-between text-white z-20">
          
          <div className="space-y-10">

            {/* TITLE */}
            <h2
              className="pointer-events-none md:w-[150%] font-normal leading-tight"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "44.54px",
                lineHeight: "1.2",
              }}
            >
              I'm

              <img
                src={ProfileIcon}
                alt="Icon"
                className="inline-block w-10 h-10 mx-3 rounded-full object-cover border border-gray-600 align-middle"
              />

              <span className="inline-block">
                Always With You, To
              </span>

              <br />

              {/* 🔥 ANIMATED TEXT */}
              <motion.span
                className="inline-block text-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once:false, amount: 0.5 }}
              >
                {"Solve Any Problem".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-2"
                    custom={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: (i) => ({
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: i * 0.2,
                          duration: 0.5,
                          ease: "easeOut",
                        },
                      }),
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-500 max-w-md gradient-text-hero -translate-y-6">
              Feel free to let me know if there is any problem <br />
              with the work and solve it.
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-6 mt-16 md:mt-0">
            {[
              { icon: FaFacebookF, label: 'Facebook' },
              { icon: FaInstagram, label: 'Instagram' },
              { icon: FaTwitter, label: 'X (Twitter)' },
              { icon: FaTiktok, label: 'TikTok' }
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                aria-label={social.label}
                className="border border-gray-700 rounded-full p-2.5 hover:bg-gray-800 transition-colors duration-200"
              >
                <social.icon size={22} className="text-gray-300" />
              </a>
            ))}
          </div>
        </div>

        {/* --- RIGHT SECTION (IMAGE) --- */}
        <div className="w-full md:w-[70%] md:absolute md:right-0 md:top-0 md:bottom-0 z-10">
          <div className="relative h-full w-full">

            <img
              src={mainUserImage}
              alt="Main User with Laptop"
              className="w-full h-full object-cover"
            />

            {/* THINKING BUBBLES */}
            <div className="absolute top-1/9 left-10 md:left-70 -translate-x-1/2 flex flex-col items-center gap-2 z-20">

              <img
                src={ProfileIcon}
                alt="Thinking Icon"
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-xl"
              />

              <div className="space-y-2 flex flex-col items-center translate-x-10 rotate-[-30deg]">
                <div className="w-5 h-5 bg-white rounded-full shadow-lg"></div>
                <div className="w-4 h-4 bg-white rounded-full shadow-lg"></div>
                <div className="w-3 h-3 bg-white rounded-full shadow-lg"></div>
                <div className="w-2 h-2 bg-white rounded-full shadow-lg"></div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FinalSection;