import React from 'react';
import ourWorkHero from '../../assets/our-work-hero.png';

const OurWorkHero: React.FC = () => {
    return (
        <section className="w-full flex justify-center py-12 md:py-20 relative px-4">
            <div className="relative w-full max-w-[1246px]">
                {/* Image Container with Blob Shape */}
                <div className="w-full relative z-0">
                    <img
                        src={ourWorkHero}
                        alt="Our Work"
                        className="w-full h-auto object-cover"
                    />

                    {/* Overlay Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-8 md:px-20 lg:px-32">
                        <h1 className="font-bold text-3xl md:text-5xl lg:text-[64px] text-white mb-6 drop-shadow-md leading-tight">
                            Our Work
                        </h1>
                        <p className="font-light text-sm md:text-lg lg:text-xl text-white italic drop-shadow-md max-w-[800px] leading-relaxed">
                            "We work with Corporations, Governments, Foundations, and Nonprofits to help them maximize, manage, measure, and communicate their social impact."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurWorkHero;
