import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/testimonialsData';

const ClientTestimonials: React.FC = () => {
    // Basic state for potential future carousel functionality / simplified for now as per design 
    // which shows 3 static cards. We'll implement a simple scroll or just display them.
    // Given the "arrows" in the design, it implies a carousel. 
    // However, showing 3 at once on desktop seems to be the intended view.
    // We will implement a responsive slider logic.

    // For now we display all 3 testimonials as per the design.
    // The navigation buttons are kept for visual fidelity to the design but are non-functional in this static 3-card view.


    const prevSlide = () => {
        console.log('Previous slide');
    };

    const nextSlide = () => {
        console.log('Next slide');
    };

    return (
        <section className="w-full py-12 md:py-20 bg-white relative">
            <div className="container mx-auto px-4">
                <h2 className="text-[#123042] font-bold text-3xl md:text-[40px] text-center mb-16">
                    What Our Clients Say About Us
                </h2>

                <div className="relative max-w-[1246px] mx-auto">
                    {/* Navigation Buttons (Desktop: Absolute, Mobile: Hidden/Bottom) */}
                    <button
                        onClick={prevSlide}
                        className="hidden lg:flex absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#6BC778] rounded-full items-center justify-center hover:bg-[#5ab567] transition-colors shadow-lg"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft color="white" size={32} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="hidden lg:flex absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#6BC778] rounded-full items-center justify-center hover:bg-[#5ab567] transition-colors shadow-lg"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight color="white" size={32} />
                    </button>

                    {/* Cards Container */}
                    <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch">
                        {/* 
                           For a simple 3-card display that matches the screenshot exactly,
                           we render all 3. If there were more, we'd need a true carousel.
                           Given the task is to match the image, and there are exactly 3 cards,
                           I will render them all in a grid/flex layout. 
                           The arrows might be for decoration or future proofing if there were more.
                           But based on "What Client say ABout us", there are only 3 visible.
                           I will render all 3.
                        */}
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="flex-1 min-w-[300px] bg-white border border-[#23A6F0] rounded-[30px] p-8 flex flex-col justify-between min-h-[300px]"
                            >
                                <p className="text-[#23A6F0] text-sm md:text-base leading-relaxed font-light italic mb-8">
                                    {testimonial.text}
                                </p>

                                <div className="text-right">
                                    <h4 className="text-[#123042] font-bold text-lg mb-1">
                                        {testimonial.author}
                                    </h4>
                                    <p className="text-[#23A6F0] text-xs md:text-sm">
                                        {testimonial.role} | {testimonial.organization}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Navigation controls if needed, but flex-col handles it nicely */}
                </div>
            </div>
        </section>
    );
};

export default ClientTestimonials;
