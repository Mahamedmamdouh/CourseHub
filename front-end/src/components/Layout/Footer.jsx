import React from "react";

import logo from "../../assets/images/common/Logo.svg";
import { Phone, Link as LinkIcon, MapPin, Mail, Music } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16 font-sans border-t border-gray-900">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
        {/* الجزء الأيسر: الشعار ومعلومات الاتصال */}
        <div className="flex flex-col gap-6">
          <div className="mb-2">
            <img src={logo} alt="ANA Logo" className="h-10 w-auto" />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold border-b border-gray-800 pb-1 w-fit pr-10 mb-4">
              Contact information
            </h2>

            <div className="space-y-3 text-sm text-gray-300">
              {/* الهاتف/المعرف */}
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <a href="#" className="hover:text-white transition-colors">
                  @alnaser224
                </a>
              </div>

              {/* الرابط */}
              <div className="flex items-center gap-3">
                <LinkIcon size={16} />
                <a
                  href="https://t.me/...."
                  className="hover:text-white transition-colors"
                >
                  https://t.me/....
                </a>
              </div>

              {/* الموقع */}
              <div className="flex items-center gap-3">
                <MapPin size={16} />
                <span>Kingdom of Saudi Arabia</span>
              </div>

              {/* الإيميل */}
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <a
                  href="mailto:abdullahelnasrabdullahelnasr@gmail.com"
                  className="hover:text-white transition-colors uppercase text-[10px] tracking-tighter"
                >
                  abdullahelnasrabdullahelnasr@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* الجزء الأيمن: أيقونات السوشيال ميديا */}
        <div className="flex items-center gap-6 pb-2">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            {/* Facebook Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            {/* Instagram Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <rect
                x="2.17"
                y="2.17"
                width="19.66"
                height="19.66"
                rx="4.7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <circle
                cx="12"
                cy="12"
                r="3.6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <circle cx="18.5" cy="5.5" r="0.8" fill="currentColor" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            {/* أيقونة X بدلاً من تويتر القديم */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="hover:text-white transition-colors"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            {/* LinkedIn Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Music size={20} />
          </a>
        </div>
      </div>

      {/* الخط السفلي الرفيع جداً الموجود في الصورة */}
      <div className="max-w-[1440px] mx-auto mt-8 border-t border-gray-900/50"></div>
    </footer>
  );
};

export default Footer;
