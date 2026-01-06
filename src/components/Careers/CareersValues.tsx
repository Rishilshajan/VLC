import React from 'react';

const CareersValues: React.FC = () => {
    return (
        <section className="container mx-auto px-4 py-8 md:py-12">

            {/* Mission Driven Team Intro */}
            <div className="max-w-[800px] mx-auto text-center mb-16 md:mb-20">
                <h2 className="text-[#123042] font-bold text-3xl md:text-[40px] mb-6">
                    Join Our Mission-Driven Team
                </h2>
                <div className="font-light text-[#123042] text-sm md:text-base leading-relaxed space-y-4 text-center">
                    <p>
                        We are a team of visionaries, innovators, and problem-solvers, united by a shared purpose: to create measurable, lasting impact.
                    </p>
                    <p>
                        At our core, we’re a boutique advisory firm specialising in impact measurement across sectors like education, livelihoods, health, sustainability, and transformation. We empower changemakers to turn action into tangible outcomes.
                    </p>
                </div>
            </div>

            {/* Why Work With Us */}
            <div className="max-w-[800px] mx-auto">
                <h3 className="text-[#123042] font-bold text-2xl md:text-3xl mb-8 md:mb-12">
                    Why Work With Us?
                </h3>

                <div className="space-y-8 md:space-y-12 pl-0 md:pl-4">
                    <div>
                        <h4 className="text-[#123042] font-semibold text-lg md:text-xl mb-2">
                            Purpose-Driven Work
                        </h4>
                        <p className="text-[#123042] text-sm md:text-base font-light leading-relaxed">
                            Be part of projects that contribute directly to the UN Sustainable Development Goals (SDG 2030), driving change across CSR, philanthropy, non-profits, social enterprises, and government bodies.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[#123042] font-semibold text-lg md:text-xl mb-2">
                            Collaborative Culture
                        </h4>
                        <p className="text-[#123042] text-sm md:text-base font-light leading-relaxed">
                            We believe the best solutions come from collaboration. You’ll work alongside experts, clients, and partners to co-create strategies that truly matter.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[#123042] font-semibold text-lg md:text-xl mb-2">
                            Diverse Impact Sectors
                        </h4>
                        <p className="text-[#123042] text-sm md:text-base font-light leading-relaxed">
                            From grassroots health interventions to national-level education strategies, your work will touch lives and communities in meaningful ways.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[#123042] font-semibold text-lg md:text-xl mb-2">
                            Growth & Learning
                        </h4>
                        <p className="text-[#123042] text-sm md:text-base font-light leading-relaxed">
                            Join a space where curiosity is valued. We encourage continuous learning, mentorship, and shared growth within our nimble and passionate team.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default CareersValues;
