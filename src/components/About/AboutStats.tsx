import React from 'react';

const AboutStats: React.FC = () => {
    const stats = [
        { value: "40+", label: "Grantee Assessed" },
        { value: "INR 150Cr+", label: "Funded Projects Assessed" },
        { value: "6+", label: "States Covered" },
    ];

    return (
        <section className="w-full pb-20 flex justify-center">
            <div className="container mx-auto px-4 text-center">
                <div className="flex flex-wrap justify-center gap-10 md:gap-24 mb-10">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="font-semibold text-4xl md:text-[56px] text-[#123042] mb-2">
                                {index === 1 ? (
                                    <>
                                        <span className="text-vic-green">INR 150Cr</span>
                                        <span className="text-vic-green">+</span>
                                    </>
                                ) : (
                                    // Check if the generic component logic works or if I need specific styling per item
                                    // Based on designs, 40+ is black? No wait, screenshot 4 shows:
                                    // "40+" is Dark Blue/Navy (#123042) with Green plus? Or all green?
                                    // Looking at "uploaded_image_4", "40+" is Black/Navy. "INR 150Cr+" is Green. "6+" is Black/Navy.
                                    // Wait, checking closer at "uploaded_image_4_..." in the carousel.
                                    // "40+" -> 40 is Navy, + is Green.
                                    // "INR 150Cr+" -> All Green.
                                    // "6+" -> 6 is Navy, + is Green.
                                    // Labels are small navy/grey text.
                                    // Bottom text is Green.

                                    <>
                                        {stat.value.replace('+', '')}
                                        <span className="text-vic-green">+</span>
                                    </>
                                )}
                            </span>
                            <span className="font-medium text-sm md:text-base text-[#123042]/70">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

                <p className="text-vic-green font-normal text-sm md:text-lg max-w-2xl mx-auto">
                    We have assessed over 40+ organisations with INR 150 Cr+ CSR fund value
                </p>
            </div>
        </section>
    );
};

export default AboutStats;
