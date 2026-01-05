import React from 'react';
import { Linkedin } from 'lucide-react';
import vicLogo from '../assets/VICLOGO.png';

const Footer: React.FC = () => {
  return (
    // Outer Container: Full width, no side padding constraints on the parent
    <footer className="w-full flex justify-center pb-0 pt-10 bg-white">
      
      {/* Footer Pill: Takes full available width with margin for aesthetics */}
      <div 
        className="relative rounded-t-[50px] md:rounded-[50px] px-8 py-10 md:px-16 flex flex-col xl:flex-row justify-between items-center xl:items-start text-white shadow-2xl gap-10 xl:gap-0"
        style={{
          width: '100%',  // Takes full width
          minHeight: '192px',
          background: 'linear-gradient(102.08deg, rgba(10, 90, 138, 0.8) 14.03%, rgba(12, 135, 190, 0.5) 135.98%)',
          margin: '0 20px 20px 20px' // Adds small margin so it floats nicely
        }}
      >
        
        {/* --- 1. Logo Section --- */}
        <div 
          className="bg-white flex items-center justify-center shrink-0 mb-6 xl:mb-0"
          style={{
            width: '312px',
            height: '152px',
            borderRadius: '32px'
          }}
        >
           <img src={vicLogo} alt="VIC Logo" className="w-3/4 h-auto object-contain" />
        </div>


        {/* --- CENTER COLUMN: Address + (Email/Website Row) --- */}
        <div className="flex flex-col gap-8 flex-grow justify-center px-4 md:px-20 text-center md:text-left">
          
          {/* Top: Address */}
          <div className="flex flex-col gap-3">
            <h4 className="font-medium text-[15px] leading-none font-poppins">
              Address
            </h4>
            <p className="font-light text-[15px] leading-relaxed font-poppins opacity-90 max-w-md mx-auto md:mx-0">
              VIC c/o R4 Foundation, No. 664, 5th Cross, 
              4th Block, Koramangala, Bengaluru - 560034
            </p>
          </div>

          {/* Bottom: Email & Website (Horizontal Row) */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-24 mx-auto md:mx-0">
            
            {/* Email */}
            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-[15px] leading-none font-poppins">
                Email
              </h4>
              <a href="mailto:impact@vic.org.in" className="font-light text-[15px] leading-none font-poppins hover:underline opacity-90">
                impact@vic.org.in
              </a>
            </div>

            {/* Website */}
            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-[15px] leading-none font-poppins">
                Website
              </h4>
              <a href="https://www.vic.org.in" target="_blank" rel="noreferrer" className="font-light text-[15px] leading-none font-poppins hover:underline opacity-90">
                www.vic.org.in
              </a>
            </div>
          </div>

        </div>


      {/* --- RIGHT COLUMN: Navigation & Social --- */}
      <div className="flex flex-row gap-12 xl:gap-16 h-full items-start">
        
        {/* Navigation Links - Vertically Stacked */}
        {/* Changed text-right to text-left */}
        <div className="flex flex-col justify-between text-left h-[92px] mr-[300px]">
           {['Home', 'About Us', 'Resources', 'Contact Us'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="font-light text-[15px] leading-none font-poppins hover:text-white/80 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social & Copyright - Vertically Split (Top & Bottom) */}
        <div className="flex flex-col justify-between items-end h-[152px]">
          
          {/* LinkedIn Icon at Top */}
          <a href="#" className="hover:opacity-80 transition-opacity">
             <Linkedin size={32} strokeWidth={0} fill="white" className="text-white" />
          </a>

          {/* Copyright at Bottom */}
          <span className="font-light text-[13px] leading-none font-poppins opacity-80 whitespace-nowrap">
            © 2025 by VIC.
          </span>
        </div>

      </div>

      </div>
    </footer>
  );
};

export default Footer;