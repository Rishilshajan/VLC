import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { cn } from '../lib/utils';
import vicLogo from '../assets/VICLOGO.png';

const Header: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Define navigation items with their specific paths
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Our Work', path: '/our-work' },
    { label: 'Careers', path: '/careers' },
    { label: 'Resources', path: '/resources' },
  ];

  return (
    <header className="w-full py-5 px-6 md:px-10 bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={vicLogo}
            alt="VIC Logo"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            
            return (
              <Link
                key={item.label}
                to={item.path}
                className={cn(
                  "px-6 py-2.5 rounded-full transition-all duration-200 font-sans font-normal text-[16px] leading-none tracking-normal",
                  isActive
                    ? "bg-[#6BC778] text-[#123042]" // Active: Green Bg, Navy Text
                    : "bg-transparent text-[#123042] hover:text-[#6BC778]" // Inactive: Navy Text, Green Hover
                )}
              >
                {item.label}
              </Link>
            );
          })}
          
          {/* Contact Us Button */}
          <Link to="/contact">
            <Button 
              className="ml-4 rounded-full font-sans font-normal text-[16px] leading-none tracking-normal bg-[#123042] text-[#6AC777] hover:bg-[#123042]/90 hover:text-[#6AC777]"
            >
              Contact Us
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;