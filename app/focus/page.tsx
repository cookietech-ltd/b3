import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

export default function FocusPage() {
    const categories = [
        {
            number: "01",
            title: "Market Infrastructure",
            bottleneck: "Your website is a static brochure. No lead capture. No qualification. No operational connection to how work actually flows into the business.",
            whatWeBuild: "Operational websites that function as intake infrastructure — not marketing brochures. Lead qualification systems. Service request portals. Client-facing operational tools.",
            closing: "Your digital presence becomes part of your operational system, not separate from it.",
        },
        {
            number: "02",
            title: "Client Operations",
            bottleneck: "Intake is manual. Communication depends on who remembers what. Client expectations are set verbally and forgotten. No structured onboarding.",
            whatWeBuild: "Structured intake workflows. CRM systems configured for service operations. Automated communication sequences. Client portals that provide visibility without creating more work for your team.",
            closing: "Every client moves through the same structured process — from inquiry to signed to delivered.",
        },
        {
            number: "03",
            title: "Service Delivery",
            bottleneck: "Every job is custom. Quality depends on who's assigned. No standard process for dispatch, execution, or close-out. Service delivery is tribal knowledge.",
            whatWeBuild: "Documented service delivery workflows. Technician apps for field execution. Dispatch systems. Job tracking infrastructure. Process maps that make quality repeatable regardless of who delivers.",
            closing: "Service delivery becomes a system, not an art form.",
        },
        {
            number: "04",
            title: "Operational Visibility",
            bottleneck: "Leadership operates by feel. Data is buried in spreadsheets or doesn't exist. Job profitability, utilization, and pipeline health require manual work to determine.",
            whatWeBuild: "Operational dashboards that surface business health. KPI tracking. Automated reporting. Metric infrastructure that provides real-time visibility without constant manual updates.",
            closing: "Leadership operates with data, not gut feel.",
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Page Header */}
            <section className="bg-black text-white pt-40 pb-20 sharp">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-7xl font-heading font-thin mb-8">
                        Where We <span className="text-white font-normal">Focus</span>
                    </h1>
                    <p className="text-xl font-body text-gray-400 max-w-2xl leading-relaxed">
                        Four operational infrastructure categories that determine whether service businesses struggle or scale.
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="sharp">
                <div className="container-custom">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className={`py-20 md:py-28 border-l-2 border-black pl-8 md:pl-16 ${index % 2 === 1 ? 'bg-[#F8F8F8] -mx-6 md:-mx-12 px-12 md:px-24' : ''}`}
                        >
                            {/* Category Number & Title */}
                            <div className="flex items-baseline gap-4 md:gap-6 mb-12">
                                <span className="text-5xl md:text-7xl font-heading font-black text-black leading-none">
                                    {cat.number}
                                </span>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-gray-400 font-heading text-xl md:text-2xl">—</span>
                                    <h2 className="text-3xl md:text-4xl font-heading font-light">{cat.title}</h2>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
                                {/* The Bottleneck */}
                                <div>
                                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-4 font-body">
                                        The Bottleneck
                                    </h3>
                                    <p className="font-body text-gray-600 leading-relaxed text-lg">
                                        {cat.bottleneck}
                                    </p>
                                </div>

                                {/* What We Build */}
                                <div>
                                    <h3 className="text-xs font-bold text-black uppercase tracking-[0.2em] mb-4 font-body">
                                        What We Build
                                    </h3>
                                    <p className="font-body text-gray-800 leading-relaxed text-lg mb-6">
                                        {cat.whatWeBuild}
                                    </p>
                                    <p className="font-body text-black font-medium leading-relaxed text-lg border-l-2 border-black pl-6">
                                        {cat.closing}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
