import React from 'react';
import { TrendingUp, ShieldCheck, Zap, PieChart, Layers } from 'lucide-react';

const TechnologyIntegration: React.FC = () => {
    return (
        <section className="w-full py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-[900px] mx-auto">
                    <h2 className="text-[#123042] font-bold text-3xl md:text-5xl mb-6">
                        Technology Integration
                    </h2>
                    <p className="text-[#6BC778] text-sm md:text-base text-center leading-relaxed max-w-[800px] mx-auto">
                        Empowered By cutting-edge technology, VIC delivers actionable insights, enabling organisations to enhance programme efficiency, foster accountability, and maximise their social impact.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-0 max-w-[1246px] mx-auto">

                    {/* Left Card: Tools and Platforms (Blue) */}
                    <div className="flex-1 w-full p-8 md:p-12 rounded-t-[30px] lg:rounded-l-[30px] lg:rounded-tr-none border-2 border-[#23A6F0] bg-[#EEF8FC] z-10">
                        <h3 className="text-[#23A6F0] font-semibold text-2xl md:text-[32px] mb-10">
                            Tools and Platforms
                        </h3>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-[#23A6F0] font-medium text-xl mb-3">Mobile Apps</h4>
                                <p className="text-[#23A6F0] text-sm leading-relaxed font-light">
                                    We collect data offline or in real-time with features like geo-tagging, time-stamping, and multimedia inputs.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-[#23A6F0] font-medium text-xl mb-3">Data Cleaning and Analysis</h4>
                                <p className="text-[#23A6F0] text-sm leading-relaxed font-light">
                                    We used latest tools like SPSS, Atlas.ti, etc for carrying out data cleaning and analysis for generating actionable insights.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-[#23A6F0] font-medium text-xl mb-3">Interactive Dashboards</h4>
                                <p className="text-[#23A6F0] text-sm leading-relaxed font-light">
                                    We help you visualise programme reach with geo-tagged maps, dynamic charts, and customisable filters.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Center Column: Icons (Dark Green/Teal) */}
                    <div className="hidden lg:flex flex-col justify-between items-center py-12 px-6 bg-[#3A7CA5] relative z-0 min-w-[120px]">
                        {/* We use a solid color here as per plan, since we don't have the specific background texture */}
                        <div className="flex-1 flex flex-col justify-between items-center h-full gap-8">
                            <TrendingUp color="white" size={32} strokeWidth={1.5} />
                            <ShieldCheck color="white" size={32} strokeWidth={1.5} />
                            <Zap color="white" size={32} strokeWidth={1.5} />
                            <PieChart color="white" size={32} strokeWidth={1.5} />
                            <Layers color="white" size={32} strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* Right Card: Benefits (Green) */}
                    <div className="flex-1 w-full p-8 md:p-12 rounded-b-[30px] lg:rounded-r-[30px] lg:rounded-bl-none border-2 border-[#228B22] bg-[#F0FDF4] z-10">
                        <h3 className="text-[#228B22] font-semibold text-2xl md:text-[32px] mb-10">
                            Benefits
                        </h3>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-[#228B22] font-medium text-xl mb-3">Acccurate Data</h4>
                                <p className="text-[#228B22] text-sm leading-relaxed font-light">
                                    Minimise errors with automated validations and centralised repositories.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-[#228B22] font-medium text-xl mb-3">Faster Decisions</h4>
                                <p className="text-[#228B22] text-sm leading-relaxed font-light">
                                    Access real-time insights to drive targeted interventions.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-[#228B22] font-medium text-xl mb-3">Transparent Reporting</h4>
                                <p className="text-[#228B22] text-sm leading-relaxed font-light">
                                    Showcase impact with visually engaging, stakeholder-friendly dashboards.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TechnologyIntegration;
