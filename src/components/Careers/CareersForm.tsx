import React from 'react';
import { Paperclip } from 'lucide-react';

const CareersForm: React.FC = () => {
    return (
        <section className="container mx-auto px-4 py-12 md:py-20">
            {/* Header */}
            <div className="max-w-[841px] mx-auto text-center mb-12">
                <h2 className="text-[#123042] font-bold text-3xl md:text-[40px] mb-6">
                    Work With Us
                </h2>
                <div className="font-light text-[#123042] text-sm md:text-base leading-relaxed space-y-4 text-center">
                    <p>
                        If you’re ready to build something meaningful and work at the intersection of strategy, social change, and innovation—we’d love to hear from you.
                    </p>
                    <p>
                        Send your CV and a short note about why you’re interested, to <a href="mailto:impact@vic.org.in" className="text-[#228B22] hover:underline font-normal">impact@vic.org.in</a>
                    </p>
                    <p>
                        Or apply directly through the form below
                    </p>
                </div>
            </div>

            {/* Application Form */}
            <div className="w-full max-w-[841px] mx-auto bg-white border border-[#23A6F0] rounded-[30px] p-6 md:p-12 relative shadow-sm">
                <h3 className="text-[#123042] font-bold text-2xl md:text-3xl mb-8 text-center md:text-left">
                    Apply Here
                </h3>

                <form className="space-y-6">
                    {/* Full Name */}
                    <div className="relative">
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Full Name"
                            className="w-full h-12 md:h-14 px-6 border border-[#23A6F0] rounded-full text-[#23A6F0] placeholder-[#23A6F0] focus:outline-none focus:ring-1 focus:ring-[#23A6F0] bg-white text-sm"
                        />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="w-full h-12 md:h-14 px-6 border border-[#23A6F0] rounded-full text-[#23A6F0] placeholder-[#23A6F0] focus:outline-none focus:ring-1 focus:ring-[#23A6F0] bg-white text-sm"
                        />
                    </div>

                    {/* Education */}
                    <div className="relative">
                        <input
                            type="text"
                            id="education"
                            placeholder="Education"
                            className="w-full h-12 md:h-14 px-6 border border-[#23A6F0] rounded-full text-[#23A6F0] placeholder-[#23A6F0] focus:outline-none focus:ring-1 focus:ring-[#23A6F0] bg-white text-sm"
                        />
                    </div>

                    {/* Position Applied For */}
                    <div className="relative">
                        <div className="flex items-center border border-[#23A6F0] rounded-full px-6 h-12 md:h-14 bg-white">
                            <input
                                type="text"
                                id="position"
                                placeholder="Position Applied For"
                                className="flex-1 w-full text-[#23A6F0] placeholder-[#23A6F0] focus:outline-none text-sm bg-transparent"
                            />
                            {/* Dotted underline visual from design representation */}
                            {/* <div className="absolute bottom-3 left-6 right-6 border-b border-dotted border-[#23A6F0] pointer-events-none opacity-50"></div> */}
                        </div>
                    </div>

                    {/* Message */}
                    <div className="relative">
                        <div className="w-full border border-[#23A6F0] rounded-[30px] p-6 min-h-[200px] flex flex-col bg-white">
                            <textarea
                                id="message"
                                placeholder="Your Message along with CV"
                                className="w-full flex-1 text-[#23A6F0] placeholder-[#23A6F0] focus:outline-none resize-none text-sm bg-transparent mb-4"
                            />

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="flex items-center gap-2 bg-[#E1F1F8] text-[#23A6F0] text-xs px-4 py-2 rounded-full hover:bg-[#d0e8f2] transition-colors"
                                >
                                    Attach <Paperclip size={14} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-2">
                        <button
                            type="submit"
                            className="bg-[#0077B6] text-white font-medium text-sm px-8 py-3 rounded-full hover:bg-[#026aa1] transition-colors shadow-lg shadow-[#0077B6]/20"
                        >
                            Send Message
                        </button>
                    </div>

                </form>
            </div>
        </section>
    );
};

export default CareersForm;
