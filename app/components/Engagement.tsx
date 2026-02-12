import { ChevronsRight, Clock, ShieldCheck, CheckSquare, Target } from 'lucide-react';

export default function Engagement() {
    const steps = [
        { title: "Define the Challenge", icon: Target },
        { title: "Design the System", icon: ChevronsRight },
        { title: "Implement & Iterate", icon: Clock },
        { title: "Handover & Scale", icon: CheckSquare }
    ];

    return (
        <section className="bg-gray-50 text-black section-padding sharp">
            <div className="container-custom">
                <h2 className="text-4xl md:text-5xl font-heading font-light mb-12 max-w-4xl tracking-tight">
                    Focused Engagements Designed to Create <span className="font-normal text-teal-600">Lasting Structure</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-20">
                    <p className="text-xl font-body text-gray-600 leading-relaxed">
                        Structured, outcome driven engagements. Not open ended consulting. Not project based agency work.
                        Each engagement leaves durable systems in place.
                    </p>
                    <div className="border-l-2 border-teal-500 pl-8">
                        <h3 className="text-xl font-heading font-medium mb-4">Expectations</h3>
                        <p className="text-gray-500 font-body mb-2">Clear scope, timelines, and outcomes.</p>
                        <p className="text-gray-500 font-body">Selective on both sides.</p>
                    </div>
                </div>

                {/* Timeline Visualization */}
                <div className="relative border-t border-gray-300 pt-12 md:pt-20">
                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative group">
                                <div className="absolute -top-[53px] left-0 md:left-8 w-4 h-4 bg-teal-500 rounded-full border-4 border-white transition-transform group-hover:scale-125 duration-300"></div>
                                <div className="hidden md:block absolute -top-[51px] left-8 w-full h-[1px] bg-gray-200 group-last:hidden"></div>

                                <h4 className="text-lg font-heading font-medium mb-2 group-hover:text-teal-600 transition-colors uppercase tracking-wider">{step.title}</h4>
                                <div className="text-sm font-body text-gray-400">Phase 0{index + 1}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
