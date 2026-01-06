import React from 'react';
import { Button } from '../ui/button';
// Updated import to your new file
import heroWaveImg from '../../assets/hero_wave.jpeg';

const Hero: React.FC = () => {
  return (
    // Section Container
    <section className="w-full relative bg-white flex flex-col items-center overflow-hidden min-h-[850px]">

      {/* Image Wrapper
         - Positioned 130px from the top (mt-[130px])
         - Centered horizontally
      */}
      <div className="relative mt-[130px] group">

        {/* The Wave Image 
           - Uses the exact dimensions from Figma
           - 'object-contain' ensures the wave shape isn't distorted
           - 'drop-shadow-2xl' adds the subtle depth
        */}
        <img
          src={heroWaveImg}
          alt="Team Strategy"
          className="w-[1297px] h-[618.5px] max-w-[95vw]"
        />

        {/* Text Overlay - Positioned absolutely over the image */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4">

          {/* Main Heading */}
          <h1 className="font-semibold text-[48px] leading-none text-white text-center tracking-normal w-[682px] h-[144px] flex items-center justify-center mb-8 drop-shadow-lg">
            Turning Data into Decisions,<br />
            And Decisions into Impact.
          </h1>

          {/* Get Started Button */}
          <Button
            variant="vicGreen"
            className="w-[142px] h-[48px] rounded-[24px] px-[25px] py-[21px] text-[16px] leading-none flex items-center justify-center"
          >
            Get Started
          </Button>
        </div>
      </div>

    </section>
  );
};

export default Hero;