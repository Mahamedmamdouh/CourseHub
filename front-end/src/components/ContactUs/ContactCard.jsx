import React from "react";
import { FaEnvelope, FaTelegramPlane, FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const ContactCards = () => {
  const contacts = [
    {
      id: 1,
      type: "Email",
      icon: <FaEnvelope className="text-white text-2xl" />,
      handle: "abdullahelnasrabdullahel nasr@gmail.com",
      description: "Submit your request",
    },
    {
      id: 2,
      type: "Telegram",
      icon: <FaTelegramPlane className="text-white text-2xl" />,
      handle: "@alnaser224",
      description: "Follow student results and behind-the-scenes work",
    },
    {
      id: 3,
      type: "WhatsApp Business",
      icon: <FaWhatsapp className="text-white text-2xl" />,
      handle: "https://wa.me/message/YY7B6636FEATM1",
      description: "Speak directly with the technical support team",
    },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <RiTwitterXFill />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
    { icon: <FaTiktok />, link: "#" },
  ];

  return (
    <section className="py-16 px-6 bg-white font-[Lexend]">
      <div className="max-w-7xl mx-auto">
        {/* صف الكروت العلوية */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="relative rounded-[40px] border-2 border-[#D0A300] overflow-hidden bg-white shadow-xl flex flex-col h-full"
            >
              {/* الجزء الأسود العلوي */}
              <div className="bg-black p-4 rounded-b-[40px]  min-h-[160px]">
                <div className="flex items-center gap-3 mb-4">
                  {contact.icon}
                  <h3 className="gradient-text text-4xl tracking-tight font-medium">{contact.type}</h3>
                </div>
                <p className="text-white text-sm md:text-base break-all font-light opacity-90">
                  {contact.handle}
                </p>
              </div>

              {/* الجزء الأبيض السفلي */}
              <div className="p-6 bg-white">
                <p className="text-black text-xl font-bold leading-tight">
                  {contact.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* شريط التواصل الاجتماعي السفلي */}
        <div className="relative rounded-[40px] border-2 border-[#D0A300] bg-black p-10 shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* نص المشاركة */}
            <div className="w-full md:w-auto">
              <p className="text-white text-sm mb-2 opacity-80 uppercase tracking-widest">Share the course</p>
              <div className="w-full md:w-96 h-[1px] bg-white/30"></div>
            </div>

            {/* الأيقونات */}
            <div className="flex items-center gap-6">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white text-xl hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCards;