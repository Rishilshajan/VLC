import React from 'react';
import ourWorkHero from '../../assets/our-work-hero.png';

const OurWorkHero: React.FC = () => {
    return (
        <section className="w-full flex justify-center py-12 md:py-20 relative px-4">
            <div className="relative w-full max-w-[1246px]">
                {/* Image Container */}
                <div className="w-full relative z-0">
                    <img
                        src={ourWorkHero}
                        alt="Our Work"
                        className="w-full h-auto object-cover"
                    />

                    {/* Overlay Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-8 md:px-20 lg:px-32">
                        <h1 className="font-poppins font-semibold italic text-3xl md:text-[48px] text-white mb-8 drop-shadow-md leading-tight">
                            Our Work
                        </h1>
                        <p className="font-poppins font-normal italic text-sm md:text-[16px] text-white drop-shadow-md max-w-[406px] leading-relaxed">
                            "We <span className="text-[#6BC778]">work</span> with Corporations, Governments, Foundations, and Nonprofits to help them maximize, manage, measure, and communicate their social impact."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurWorkHero;
