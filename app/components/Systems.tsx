import { ArrowRight, Monitor, UserCheck, BarChart3 } from 'lucide-react';

export default function Systems() {
    const steps = [
        {
            title: "Market Interface",
            desc: "Clear messaging, positioning, and credibility. Websites treated as operational tools.",
            icon: Monitor,
            step: "01"
        },
        {
            title: "Client Experience",
            desc: "Structured intake, communication, and support. Predictable experiences.",
            icon: UserCheck,
            step: "02"
        },
        {
            title: "Service Delivery",
            desc: "Ownership, progress tracking, and communication that provide leadership insight.",
            icon: BarChart3,
            step: "03"
        }
    ];

    return (
        <section id="systems" className="bg-white text-black section-padding sharp relative overflow-hidden">
            {/* Background Graphic Suggestion */}
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gray-50 -skew-x-12 opacity-50 z-0 hidden lg:block"></div>

            <div className="container-custom relative z-10">
                <h2 className="text-4xl md:text-6xl font-heading font-light tracking-tight mb-20">
                    Operating Systems Designed Around <br className="hidden md:block" />
                    <span className="text-teal-600 font-normal">How Service Businesses Actually Work</span>
                </h2>

                <div className="relative">
                    {/* Connecting Line for large screens */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-gray-200 z-0"></div>

                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
                        {steps.map((s, i) => (
                            <div key={i} className="relative bg-white pt-8 lg:pt-16 group">
                                <div className="hidden lg:block absolute top-10 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-gray-200 z-10 group-hover:border-teal-500 transition-colors duration-300"></div>

                                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                                    <div className="mb-6 p-4 bg-gray-50 rounded-full lg:rounded-none lg:bg-transparent lg:p-0">
                                        <s.icon className="w-12 h-12 text-gray-400 group-hover:text-teal-600 transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-2xl font-heading font-medium mb-4">{s.title}</h3>
                                    <p className="font-body text-gray-500 max-w-sm lg:max-w-none leading-relaxed group-hover:text-black transition-colors duration-300">
                                        {s.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
