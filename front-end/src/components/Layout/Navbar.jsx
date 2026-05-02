import { ShoppingCart, Globe, Heart } from "lucide-react";
import logo from "../../assets/images/common/Logo.svg";
import { Link } from "react-router-dom";



export default function Navbar() {
  return (
    <nav className="w-full h-19.25 bg-black text-white border-b border-red-600">
      <div className="max-w-full mx-auto px-20 py-3 h-full flex items-center justify-between">
        
        {/* Logo */}

        <img src={logo} alt="logo" className="w-30 h-10" />

        {/* Links */}
      
        <ul className="hidden md:flex gap-8 ml-20 text-sm font-medium">
        <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
        <li><Link to="/courses" className="hover:text-yellow-400">Courses</Link></li>
        <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
        <li><Link to="/instructor" className="hover:text-yellow-400">Instructor</Link></li>
        <li><Link to="/certifications" className="hover:text-yellow-400">Certifications</Link></li>
        <li><Link to="/videos" className="hover:text-yellow-400">Videos Courses</Link></li>
        <li><Link to="/subscribe" className="hover:text-yellow-400">Subscribe</Link></li>
      </ul>

        

          {/* Icons (متمركزة بصريًا) */}
          <div className="flex items-center gap-4">
            <ShoppingCart className="w-5 h-5 cursor-pointer" />

            <div className="flex items-center gap-1 cursor-pointer">
              <Globe className="w-5 h-5" />
              <span className="text-sm">Ar</span>
            </div>

            <Heart className="w-5 h-5 cursor-pointer" />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
         <button className="relative p-px min-w-30 rounded-sm overflow-hidden group transition hover:scale-105 gradient-border">
              <div className="bg-black w-full h-full px-4 py-1.5 rounded-[3px] flex items-center justify-center">
                <span className="text-sm text-white">
                  Create account
                </span>
              </div>
            </button>

           
             <button className="relative p-px min-w-30 rounded-sm overflow-hidden group transition hover:scale-105 gradient-border">
              <div className="bg-black w-full h-full px-4 py-1.5 rounded-[3px] flex items-center justify-center">
                <span className="text-sm text-white">
                  Sign in
                </span>
              </div>
            </button>
          </div>

        

      </div>
    </nav>
  );
}