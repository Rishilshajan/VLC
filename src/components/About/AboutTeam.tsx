import React from 'react';
import { teamMembers } from '../../data/teamData';
import linkedinIcon from '../../assets/linkedin-icon.png';

const AboutTeam: React.FC = () => {
    return (
        <section className="w-full flex justify-center pb-20">
            <div className="container mx-auto px-4">
                <h2 className="font-semibold text-3xl md:text-[42px] text-[#123042] text-center mb-12">
                    Our Team
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="w-full max-w-[337px] h-[501px] bg-[#EEF8FC] rounded-[30px] flex flex-col items-center justify-center p-6 text-center hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Image Circle */}
                            <div className="w-[150px] h-[150px] mb-6 rounded-full overflow-hidden border-4 border-white shadow-sm">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Name */}
                            <h3 className="font-semibold text-xl text-[#123042] mb-2">
                                {member.name}
                            </h3>

                            {/* Role */}
                            <p className="font-light text-sm text-[#123042]/70 mb-8 max-w-[200px] leading-tight">
                                {member.role}
                            </p>

                            {/* LinkedIn Icon */}
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#123042] hover:text-[#0077b5] transition-colors"
                                aria-label={`LinkedIn of ${member.name}`}
                            >
                                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 hover:opacity-80 transition-opacity" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutTeam;
