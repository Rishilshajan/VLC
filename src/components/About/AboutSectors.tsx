import React from 'react';

const AboutSectors: React.FC = () => {
    const sectors = [
        ["Climate Action", "Food Security", "Education", "Gender"],
        ["Healthcare", "Livelihood", "Inclusion", "WASH"]
    ];

    return (
        <section className="w-full flex justify-center pb-12">
            <div className="container mx-auto px-4">
                {/* Green Card */}
                <div className="w-full max-w-[1246px] mx-auto bg-[#2E5C38] rounded-[30px] md:rounded-[50px] py-16 px-6 md:px-20 text-white text-center relative overflow-hidden">
                    {/* Subtle overlay/texture if needed, using gradient for now to give depth */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

                    <h2 className="font-medium text-3xl md:text-[42px] leading-tight mb-8 relative z-10">
                        We Work Across The Sectors
                    </h2>

                    <p className="font-normal text-sm md:text-base leading-relaxed md:leading-[28px] max-w-4xl mx-auto mb-10 text-white/90 relative z-10">
                        We are committed to the UN SDG 2030 mission and continue to expand our impact footprint through our growing network of clients and partners across CSR, philanthropy, non-profits, social enterprises, government bodies and multilateral agencies, converting action into outcomes across development goals.
                    </p>

                    <div className="flex flex-col gap-4 relative z-10">
                        {sectors.map((row, rowIndex) => (
                            <div key={rowIndex} className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-base md:text-xl font-light">
                                {row.map((item, itemIndex) => (
                                    <React.Fragment key={item}>
                                        <span className="whitespace-nowrap">{item}</span>
                                        {itemIndex < row.length - 1 && (
                                            <span className="hidden md:inline h-6 w-px bg-white/40"></span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSectors;
