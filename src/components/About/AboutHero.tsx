import React from 'react';
import heroWaveImg from '../../assets/hero_wave.jpeg'; 

const AboutHero: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-10">
      <div className="container mx-auto px-4">
        {/* Dark container mimicking the Blob shape */}
        <div className="relative w-full max-w-6xl mx-auto min-h-[400px] md:min-h-[500px] bg-[#1a1a1a] rounded-[3rem] md:rounded-[5rem] overflow-hidden flex flex-col justify-center items-center text-center px-6 md:px-20 text-white">
          
          {/* Background Image Layer */}
          <div className="absolute inset-0 bg-black/40 z-0">
            { <img src={heroWaveImg} className="w-full h-full object-cover opacity-50" alt="Background" /> }
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-6 max-w-3xl">
            <h1 className="font-semibold text-4xl md:text-6xl text-white">
              Who We Are
            </h1>
            <p className="font-light text-lg md:text-xl text-white/90 leading-relaxed">
              We help organisations turn purpose into measurable progress, creating lasting impact across the sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;