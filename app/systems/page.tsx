import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

export default function SystemsPage() {
    const phases = [
        {
            number: "01",
            title: "Diagnose the Bottleneck",
            desc: "Audit current operations. Map workflows. Identify where execution breaks down — intake, dispatch, visibility, communication, scalability. Document the actual operational constraint."
        },
        {
            number: "02",
            title: "Design the System",
            desc: "Design the complete operational system. Process flows. Data architecture. Technology requirements. Role definitions. This is the blueprint for implementation."
        },
        {
            number: "03",
            title: "Deploy & Integrate",
            desc: "Build and deploy the infrastructure. Custom applications, CRM configuration, workflow automation, operational websites. Implement and integrate the system into operations."
        },
        {
            number: "04",
            title: "Optimize & Advance",
            desc: "Stabilize the system. Train the team. Optimize performance. Once operational, identify the next constraint and continue improving infrastructure."
        }
    ];

    const deliverables = [
        {
            title: "System Design & Documentation",
            items: ["Process maps", "Workflow diagrams", "SOP libraries", "Role descriptions", "Operational playbooks", "Training materials"]
        },
        {
            title: "Technology Implementation",
            items: ["Custom applications", "CRM configuration", "Dashboard setup", "Workflow automation", "Metric trackers", "Operational websites"]
        },
        {
            title: "Training & Enablement",
            items: ["Training videos", "Template suites", "Quick-reference guides", "Onboarding materials", "Change management support"]
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Introduction */}
            <section className="bg-black text-white pt-40 pb-32 sharp">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-7xl font-heading font-thin mb-8">
                        How We <span className="text-white font-normal">Work</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We diagnose operational bottlenecks, design complete systems, and implement the infrastructure. From strategy through execution.
                    </p>
                </div>
            </section>

            {/* Four-Phase Process */}
            <section className="bg-[#F8F8F8] py-24 md:py-36 sharp">
                <div className="container-custom">
                    <h2 className="text-3xl md:text-5xl font-heading font-light mb-20 text-center">
                        Four-Phase <span className="text-black font-normal">Process</span>
                    </h2>

                    <div className="max-w-5xl mx-auto space-y-0">
                        {phases.map((phase, index) => (
                            <div key={index} className="relative">
                                {/* Connecting arrow / vertical line */}
                                {index !== phases.length - 1 && (
                                    <div className="absolute left-[36px] md:left-[42px] top-[84px] bottom-0 w-[2px] bg-black/20 z-0">
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black/30"></div>
                                    </div>
                                )}

                                <div className="flex gap-6 md:gap-10 items-start relative z-10 pb-16 md:pb-20">
                                    {/* Phase Number Badge — black bg, white text */}
                                    <div className="w-[72px] h-[72px] md:w-[84px] md:h-[84px] bg-black text-white flex items-center justify-center shrink-0 sharp">
                                        <span className="text-2xl md:text-3xl font-heading font-bold">{phase.number}</span>
                                    </div>

                                    {/* Content */}
                                    <div className="pt-2 md:pt-4">
                                        <h3 className="text-2xl md:text-3xl font-heading font-medium mb-4 uppercase tracking-wide">
                                            {phase.title}
                                        </h3>
                                        <p className="font-body text-gray-600 leading-relaxed text-base md:text-lg max-w-2xl">
                                            {phase.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Deliver */}
            <section className="bg-white text-black section-padding sharp">
                <div className="container-custom">
                    <h2 className="text-4xl md:text-5xl font-heading font-light tracking-tight mb-4">
                        What We <span className="font-normal border-b-2 border-black pb-1">Deliver</span>
                    </h2>

                    <p className="text-xl max-w-2xl font-body text-gray-500 mb-20 leading-relaxed">
                        The outputs depend on operational requirements. Typical deliverables include:
                    </p>

                    <div className="grid md:grid-cols-3 gap-12 text-left">
                        {deliverables.map((cat, index) => (
                            <div key={index} className="space-y-6">
                                <h3 className="text-2xl font-heading font-bold">{cat.title}</h3>
                                <div className="h-px w-12 bg-black"></div>
                                <ul className="space-y-3 font-body text-gray-600">
                                    {cat.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-sm mt-1.5">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
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
