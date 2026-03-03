import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

export default function ValuePage() {
    const pillars = [
        {
            number: "01",
            title: "Visibility",
            desc: "Know how the business is performing without manual work. Dashboards that surface operational health. Metrics that drive decisions."
        },
        {
            number: "02",
            title: "Repeatability",
            desc: "Deliver consistent service quality regardless of who does the work. Documented workflows. Standard operating procedures. Repeatable execution."
        },
        {
            number: "03",
            title: "Scalability",
            desc: "Grow revenue without proportional increases in operational complexity. Systems handle volume. Founders don't become bottlenecks."
        },
        {
            number: "04",
            title: "Transferability",
            desc: "Build a business others can operate. Documented systems. Reduced founder dependency. Real enterprise value."
        },
    ];

    return (
        <main className="min-h-screen bg-black text-white">
            <Header />

            {/* Page Header */}
            <section className="bg-black pt-40 pb-32 sharp">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-8xl font-heading font-thin mb-8 leading-tight">
                        Why Operational <br />
                        <span className="text-white font-normal">Systems Matter</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-body text-gray-400 max-w-3xl leading-relaxed border-l border-white pl-8 ml-2">
                        Service businesses scale when operations are systematic, not when founders work harder.
                    </p>
                </div>
            </section>

            {/* Intro Statement */}
            <section className="bg-white text-black py-16 md:py-24 sharp">
                <div className="container-custom">
                    <p className="text-xl md:text-2xl font-body text-gray-700 max-w-4xl leading-relaxed">
                        Operational infrastructure determines whether a service business can scale or remains dependent on the founder. B³ Solutions builds systems that create four types of operational leverage:
                    </p>
                </div>
            </section>

            {/* The Pillars */}
            <section className="bg-white text-black sharp">
                <div className="container-custom pb-20 md:pb-32">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                        {pillars.map((pillar, i) => (
                            <div
                                key={i}
                                className="group sharp transition-all duration-500 hover:shadow-2xl flex flex-col"
                            >
                                {/* Number Strip */}
                                <div className="bg-black text-white px-8 py-6 flex items-center gap-5">
                                    <span className="text-4xl md:text-5xl font-heading font-black leading-none">
                                        {pillar.number}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-heading font-light uppercase tracking-wider">
                                        {pillar.title}
                                    </h3>
                                </div>
                                {/* Description */}
                                <div className="bg-gray-50 px-8 py-8 border border-t-0 border-gray-200 flex-1">
                                    <p className="font-body text-gray-600 leading-relaxed text-base md:text-lg">
                                        {pillar.desc}
                                    </p>
                                </div>
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
