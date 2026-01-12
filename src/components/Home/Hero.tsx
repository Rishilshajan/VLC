import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
// Updated import to your new file
import heroWaveImg from '../../assets/hero_image_update.png';

const Hero: React.FC = () => {
  return (
    <section className="w-full relative bg-white flex flex-col items-center overflow-hidden">

      <div className="relative mt-[40px] group">

        <img
          src={heroWaveImg}
          alt="Team Strategy"
          className="w-[1297px] h-[618.5px] max-w-[95vw] object-contain"
        />

        {/* Text Overlay  */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4">

          {/* Main Heading */}
          <h1 className="font-semibold text-[48px] leading-none text-white text-center tracking-normal w-[682px] h-[144px] flex items-center justify-center mb-8 drop-shadow-lg">
            Turning Data into Decisions,<br />
            And Decisions into Impact.
          </h1>

          {/* Get Started Button */}
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
            <Button
              variant="vicGreen"
              className="w-[142px] h-[48px] rounded-[24px] px-[25px] py-[21px] text-[16px] leading-none flex items-center justify-center cursor-pointer"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>

    </section>
  );
};

export default Hero;