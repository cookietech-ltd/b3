import { ChevronsRight, Clock, ShieldCheck, CheckSquare, Target } from 'lucide-react';

export default function Engagement() {
    const steps = [
        { title: "Diagnose the Bottleneck" },
        { title: "Design the System" },
        { title: "Deploy & Integrate" },
        { title: "Optimize & Advance" }
    ];

    return (
        <section className="bg-gray-50 text-black section-padding sharp">
            <div className="container-custom">
                <h2 className="text-4xl md:text-5xl font-heading font-light mb-12 max-w-4xl tracking-tight">
                    Focused Engagements Designed to Create <span className="font-normal text-black">Lasting Structure</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-20">
                    <p className="text-xl font-body text-gray-600 leading-relaxed">
                        Structured, outcome driven engagements. Not open ended consulting. Not project based agency work.
                        Each engagement leaves durable systems in place.
                    </p>
                    <div className="border-l-2 border-black pl-8">
                        <h3 className="text-xl font-heading font-medium mb-4">Expectations</h3>
                        <p className="text-gray-500 font-body mb-2">Clear scope, timelines, and outcomes.</p>
                        <p className="text-gray-500 font-body">Selective on both sides.</p>
                    </div>
                </div>

                {/* Timeline Visualization */}
                <div className="relative pt-10">
                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative group">
                                {/* Connecting Line */}
                                <div className="hidden md:block absolute top-[28px] left-8 w-full h-[1px] bg-black group-last:hidden"></div>
                                {/* Arrow on line */}
                                <div className="hidden md:block absolute top-[23px] -right-2 w-3 h-3 border-t border-r border-black rotate-45 bg-gray-50 z-10 group-last:hidden"></div>

                                <div className="text-6xl font-heading font-bold text-black mb-6 relative z-10 bg-gray-50 inline-block pr-4">
                                    0{index + 1}
                                </div>

                                <h4 className="text-xl font-heading font-medium mb-2 uppercase tracking-wider">{step.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
