import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/testimonialsData';

const ClientTestimonials: React.FC = () => {

    const [activeIndex, setActiveIndex] = React.useState(1);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const getVisibleTestimonials = () => {
        const len = testimonials.length;
        const leftIndex = (activeIndex - 1 + len) % len;
        const rightIndex = (activeIndex + 1) % len;
        return [
            { ...testimonials[leftIndex], position: 'left' },
            { ...testimonials[activeIndex], position: 'center' },
            { ...testimonials[rightIndex], position: 'right' },
        ];
    };

    const visibleTestimonials = getVisibleTestimonials();

    return (
        <section className="w-full py-12 md:py-20 bg-white relative">
            <div className="container mx-auto px-4">
                <h2 className="text-[#123042] font-bold text-3xl md:text-[40px] text-center mb-16">
                    What Our Clients Say About Us
                </h2>

                <div className="relative max-w-[1246px] mx-auto">

                    {/* Navigation Buttons  */}
                    <button
                        onClick={prevSlide}
                        className="hidden lg:flex absolute left-[-28px] top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-[#6BC778] rotate-45 rounded-lg items-center justify-center hover:bg-[#5ab567] transition-all shadow-lg"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft color="white" size={32} className="-rotate-45" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="hidden lg:flex absolute right-[-28px] top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-[#6BC778] rotate-45 rounded-lg items-center justify-center hover:bg-[#5ab567] transition-all shadow-lg"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight color="white" size={32} className="-rotate-45" />
                    </button>

                    {/* Cards Container */}
                    <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch">
                        {visibleTestimonials.map((item) => (
                            <div
                                key={`${item.id}-${item.position}`}
                                className={`flex-1 min-w-[350px] bg-white border border-[#23A6F0] rounded-[30px] p-8 flex flex-col justify-between min-h-[340px] transition-all duration-300 ${item.position === 'center'
                                    ? 'opacity-100 scale-100'
                                    : 'opacity-50 scale-95'
                                    } ${item.position === 'left' ? '[mask-image:linear-gradient(to_right,transparent,black_20%)]' : ''
                                    } ${item.position === 'right' ? '[mask-image:linear-gradient(to_left,transparent,black_20%)]' : ''
                                    }`}
                            >
                                <p className="text-[#23A6F0] text-base md:text-lg leading-relaxed font-light italic mb-8">
                                    {item.text}
                                </p>

                                <div className="text-right">
                                    <h4 className="text-[#123042] font-bold text-xl mb-1">
                                        {item.author}
                                    </h4>
                                    <p className="text-[#23A6F0] text-sm md:text-base">
                                        {item.role} | {item.organization}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ClientTestimonials;
