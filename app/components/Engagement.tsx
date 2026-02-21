'use client';

export default function Engagement() {
    const steps = [
        {
            title: "Diagnose the Bottleneck",
            desc: "Audit current operations. Map workflows. Identify where execution breaks down — intake, dispatch, visibility, communication, scalability."
        },
        {
            title: "Design the System",
            desc: "Design the complete operational system. Process flows. Data architecture. Technology requirements. Role definitions."
        },
        {
            title: "Deploy & Integrate",
            desc: "Build and deploy the infrastructure. Custom applications, CRM configuration, workflow automation, operational websites."
        },
        {
            title: "Optimize & Advance",
            desc: "Stabilize the system. Train the team. Optimize performance. Identify the next constraint and continue improving."
        }
    ];

    return (
        <section className="bg-[#F8F8F8] text-black py-24 md:py-36 sharp">
            <div className="container-custom">
                <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 max-w-4xl tracking-tight">
                    How We <span className="font-normal text-black">Work</span>
                </h2>

                <p className="text-xl font-body text-gray-600 leading-relaxed mb-20 max-w-2xl">
                    Four phases. Structured, outcome-driven engagements that leave durable systems in place.
                </p>

                {/* Desktop Layout */}
                <div className="hidden md:block">
                    {/* Phase Numbers Row with Arrows */}
                    <div className="grid grid-cols-7 items-center mb-8">
                        {/* 01 */}
                        <div className="col-span-1 text-[5.5rem] lg:text-[7rem] font-heading font-black text-black leading-none">
                            01
                        </div>
                        {/* Arrow 1 */}
                        <div className="col-span-1 flex items-center justify-center">
                            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" className="w-12 lg:w-16">
                                <line x1="0" y1="12" x2="48" y2="12" stroke="black" strokeWidth="2" />
                                <path d="M48 6 L58 12 L48 18" stroke="black" strokeWidth="2" fill="none" />
                            </svg>
                        </div>
                        {/* 02 */}
                        <div className="col-span-1 text-[5.5rem] lg:text-[7rem] font-heading font-black text-black leading-none">
                            02
                        </div>
                        {/* Arrow 2 */}
                        <div className="col-span-1 flex items-center justify-center">
                            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" className="w-12 lg:w-16">
                                <line x1="0" y1="12" x2="48" y2="12" stroke="black" strokeWidth="2" />
                                <path d="M48 6 L58 12 L48 18" stroke="black" strokeWidth="2" fill="none" />
                            </svg>
                        </div>
                        {/* 03 */}
                        <div className="col-span-1 text-[5.5rem] lg:text-[7rem] font-heading font-black text-black leading-none">
                            03
                        </div>
                        {/* Arrow 3 */}
                        <div className="col-span-1 flex items-center justify-center">
                            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" className="w-12 lg:w-16">
                                <line x1="0" y1="12" x2="48" y2="12" stroke="black" strokeWidth="2" />
                                <path d="M48 6 L58 12 L48 18" stroke="black" strokeWidth="2" fill="none" />
                            </svg>
                        </div>
                        {/* 04 */}
                        <div className="col-span-1 text-[5.5rem] lg:text-[7rem] font-heading font-black text-black leading-none">
                            04
                        </div>
                    </div>

                    {/* Titles & Descriptions Row */}
                    <div className="grid grid-cols-7 gap-0">
                        {steps.map((step, index) => (
                            <div key={index} className={index === 0 ? 'col-start-1 col-span-1' : ''} style={index > 0 ? { gridColumn: `${index * 2 + 1} / span 1` } : undefined}>
                                <h4 className="text-base lg:text-lg font-heading font-semibold mb-3 uppercase tracking-wider leading-tight">{step.title}</h4>
                                <p className="font-body text-gray-600 leading-relaxed text-sm pr-4">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden space-y-0">
                    {steps.map((step, index) => (
                        <div key={index}>
                            <div className="py-8">
                                <div className="text-[5rem] font-heading font-black text-black leading-none mb-4">
                                    0{index + 1}
                                </div>
                                <h4 className="text-lg font-heading font-semibold mb-3 uppercase tracking-wider">{step.title}</h4>
                                <p className="font-body text-gray-600 leading-relaxed text-sm">{step.desc}</p>
                            </div>

                            {/* Divider with arrow between phases */}
                            {index !== steps.length - 1 && (
                                <div className="flex items-center gap-3 py-2">
                                    <div className="flex-1 h-[1px] bg-black/15"></div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M4 6L8 10L12 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
                                    </svg>
                                    <div className="flex-1 h-[1px] bg-black/15"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
