import React, { useState } from 'react';
import type { WorkService } from '../../data/ourWorkData';

interface WorkCardProps {
    service: WorkService;
}

const WorkCard: React.FC<WorkCardProps> = ({ service }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative w-full h-[400px] rounded-[30px] border border-[#23A6F0] overflow-hidden p-8 transition-all duration-500 ease-in-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                boxShadow: isHovered ? '0px 20px 40px rgba(0, 0, 0, 0.3)' : 'none',
                backgroundColor: isHovered ? 'transparent' : 'white'
            }}
        >
            {/* Background Image on Hover */}
            <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundImage: `url(${service.image})` }}
            />

            {/* Dark Overlay on Hover for Readability */}
            <div
                className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
                <h3 className={`font-semibold text-xl mb-8 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-[#23A6F0]'}`}>
                    {service.title}
                </h3>

                <div className={`flex-1 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-[#23A6F0]'}`}>
                    {service.description ? (
                        <p className="text-sm md:text-base leading-relaxed font-light">
                            {service.description}
                        </p>
                    ) : (
                        <ul className="text-sm md:text-base font-light space-y-2">
                            {service.items?.map((item, index) => (
                                <li key={index} className="flex gap-2">
                                    <span className="block w-1.5 h-1.5 rounded-full bg-current mt-2 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
