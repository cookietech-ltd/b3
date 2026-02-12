import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { Target, ChevronsRight, Clock, CheckSquare } from 'lucide-react';

export default function SystemsPage() {
    const engagementSteps = [
        { title: "Define the Challenge", desc: "We audit your current state. No assumptions. We map the friction points and align on the goal.", icon: Target },
        { title: "Design the System", desc: "We build the blueprint. Process flows, tech stack selection (if needed), and role clarity.", icon: ChevronsRight },
        { title: "Implement & Iterate", desc: "We don't just hand you a PDF. We stand up the system, train your team, and run it alongside you.", icon: Clock },
        { title: "Handover & Scale", desc: "The system belongs to you. We ensure your team owns it, maintains it, and improves it.", icon: CheckSquare }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Introduction */}
            <section className="bg-black text-white pt-40 pb-32 sharp">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-7xl font-heading font-thin mb-8">
                        Operating Systems <br />
                        <span className="text-teal-400">Designed for Humans</span>
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
                        How an Engagement <span className="text-teal-600">Unfolds</span>
                    </h2>

                    <div className="space-y-12 max-w-4xl mx-auto">
                        {engagementSteps.map((step, index) => (
                            <div key={index} className="flex gap-4 md:gap-8 items-start group relative">
                                {/* Timeline Line - Absolute to span full height including gap */}
                                {index !== engagementSteps.length - 1 && (
                                    <div className="absolute left-[1.5rem] md:left-[2rem] top-8 bottom-[-2rem] w-0.5 bg-gray-200 -translate-x-1/2 -z-10" />
                                )}

                                {/* Circle */}
                                <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-gray-100 flex items-center justify-center rounded-full border-4 border-white shadow-lg z-10 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-500">
                                    <span className="font-heading font-bold text-lg md:text-xl">0{index + 1}</span>
                                </div>

                                {/* Content */}
                                <div className="pt-1 md:pt-2 pb-12">
                                    <h3 className="text-xl md:text-2xl font-heading font-medium mb-3 md:mb-4 group-hover:text-teal-600 transition-colors uppercase tracking-wide leading-tight">{step.title}</h3>
                                    <p className="font-body text-gray-600 leading-relaxed text-base md:text-lg">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deliverables Grid */}
            <section className="bg-gray-50 py-24 border-t border-gray-200 sharp">
                <div className="container-custom">
                    <h3 className="text-xl font-bold uppercase tracking-widest text-gray-400 mb-12 text-center">Typical Deliverables</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {['Process Maps', 'SOP Libraries', 'Dashboard Setup', 'CRM Configuration', 'Role Descriptions', 'Training Videos', 'Template Suites', 'Metric Trackers'].map((item) => (
                            <div key={item} className="bg-white p-6 shadow-sm border border-gray-100 hover:border-teal-400 transition-colors cursor-default sharp">
                                <span className="font-body text-gray-700 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
