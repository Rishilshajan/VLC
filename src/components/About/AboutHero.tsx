import React from 'react';
import heroBlob from '../../assets/about-hero-blob.png';

const AboutHero: React.FC = () => {
  return (
    <section className="w-full flex justify-center pt-8 pb-10">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="relative w-full max-w-[1273px]">
          {/* Main Blob Image */}
          <img
            src={heroBlob}
            alt="Who We Are - Team Meeting"
            className="w-full h-auto object-contain"
          />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-16 text-white pt-8">
            <h1 className="font-semibold text-3xl md:text-[56px] leading-tight md:leading-[1.2] mb-2 md:mb-4">
              Who We Are
            </h1>
            <p className="font-normal italic text-sm md:text-[20px] leading-relaxed md:leading-[30px] max-w-xl text-white/90">
              We help organisations turn purpose into measurable progress, creating lasting impact across the sector
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;