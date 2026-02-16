import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import Deliverables from '../components/Deliverables';
import { Target, ChevronsRight, Clock, CheckSquare } from 'lucide-react';

export default function SystemsPage() {
    const engagementSteps = [
        { title: "Diagnose the Bottleneck", desc: "We audit your current state. No assumptions. We map the friction points and align on the goal.", icon: Target },
        { title: "Design the System", desc: "We build the blueprint. Process flows, tech stack selection (if needed), and role clarity.", icon: ChevronsRight },
        { title: "Deploy & Integrate", desc: "We don't just hand you a PDF. We stand up the system, train your team, and run it alongside you.", icon: Clock },
        { title: "Optimize & Advance", desc: "The system belongs to you. We ensure your team owns it, maintains it, and improves it.", icon: CheckSquare }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Introduction */}
            <section className="bg-black text-white pt-40 pb-32 sharp">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-7xl font-heading font-thin mb-8">
                        Operating Systems <br />
                        <span className="text-white font-normal">Designed for Humans</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Technology is just the tool. The system is the behavior. We build operating models that your specific team will actually use.
                    </p>
                </div>
            </section>

            {/* Engagement Model */}
            <section className="section-padding sharp">
                <div className="container-custom">
                    <h2 className="text-3xl md:text-5xl font-heading font-light mb-16 text-center">
                        How an Engagement <span className="text-black font-normal">Unfolds</span>
                    </h2>

                    <div className="space-y-12 max-w-4xl mx-auto">
                        {engagementSteps.map((step, index) => (
                            <div key={index} className="flex gap-4 md:gap-8 items-start group relative">
                                {/* Timeline Line - Absolute to span full height including gap */}
                                {index !== engagementSteps.length - 1 && (
                                    <div className="absolute left-[1.5rem] md:left-[2rem] top-8 bottom-[-2rem] w-0.5 bg-gray-200 -translate-x-1/2 -z-10" />
                                )}

                                {/* Circle */}
                                <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-gray-100 flex items-center justify-center rounded-full border-4 border-white shadow-lg z-10 group-hover:bg-black group-hover:text-white transition-colors duration-500">
                                    <span className="font-heading font-bold text-lg md:text-xl">0{index + 1}</span>
                                </div>

                                {/* Content */}
                                <div className="pt-1 md:pt-2 pb-12">
                                    <h3 className="text-xl md:text-2xl font-heading font-medium mb-3 md:mb-4 group-hover:text-black transition-colors uppercase tracking-wide leading-tight">{step.title}</h3>
                                    <p className="font-body text-gray-600 leading-relaxed text-base md:text-lg">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deliverables Grid */}
            <Deliverables />

            <CTA />
            <Footer />
        </main>
    );
}
