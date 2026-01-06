import React from 'react';
import OurWorkHero from '../components/OurWork/OurWorkHero';
import OurWorkGrid from '../components/OurWork/OurWorkGrid';
import TechnologyIntegration from '../components/OurWork/TechnologyIntegration';
import ClientTestimonials from '../components/OurWork/ClientTestimonials';

const OurWork: React.FC = () => {
    return (
        <div className="w-full bg-white">
            <OurWorkHero />

            <section className="container mx-auto px-4 py-12 md:py-16">
                <div className="max-w-[1044px] mx-auto flex flex-col gap-8 text-[#123042] text-sm md:text-base leading-loose font-light text-justify">
                    <p>
                        We have reported impact outcomes for over 40 organisations, collectively managing a fund size exceeding INR 150 crores. Our experience spans a wide spectrum of thematic areas including education, livelihoods, agriculture, climate action, gender equality, Early Childhood Care and Education (ECCE), citizen participation, and WASH (Water, Sanitation, and Hygiene).
                    </p>
                    <p>
                        Our work includes conducting a comprehensive impact assessment for a leading FinTech CSR initiative focused on livelihoods, climate resilience, and sustainable environment. We have evaluated an education project reaching over 6,000 students across 60+ schools in Karnataka, conducted dip-stick and baseline studies for an ECCE intervention in Uttar Pradesh, and assessed a STEM education initiative targeting middle and high school students.
                    </p>
                    <p>
                        Additionally, we have led impact assurance studies for rural livelihood programmes across 10 Indian states, and measured outcomes for a participatory citizenship project implemented in Karnataka and Haryana. Each engagement reflects our commitment to delivering context-sensitive, data-driven insights that translate into scalable, measurable change.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 pb-20">
                <OurWorkGrid />
            </section>

            <TechnologyIntegration />

            <ClientTestimonials />
        </div>
    );
};

export default OurWork;
