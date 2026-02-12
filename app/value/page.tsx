import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

export default function ValuePage() {
    const valueProps = [
        { title: "Visibility", desc: "No more guessing. We build dashboards that answer 'How are we doing?' instantly." },
        { title: "Repeatability", desc: "The same service, the same quality, every time. Regardless of who delivers it." },
        { title: "Scalability", desc: "Add more clients without adding more chaos. Systems expand; people break." },
        { title: "Transferability", desc: "Build a business others can run. Or buy. Documentation is your asset." },
    ];

    return (
        <main className="min-h-screen bg-black text-white">
            <Header />

            {/* Page Header */}
            <section className="bg-gradient-to-br from-black to-gray-900 pt-40 pb-32 sharp">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-8xl font-heading font-thin mb-8 leading-tight">
                        The Value of <br />
                        <span className="text-teal-400">Order</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-body text-gray-400 max-w-3xl leading-relaxed border-l border-teal-500 pl-8 ml-2">
                        "Operational maturity is the single biggest predictor of long-term business value."
                    </p>
                </div>
            </section>

            {/* The Pillars */}
            <section className="bg-white text-black section-padding sharp">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {valueProps.map((v, i) => (
                            <div key={i} className="border-t border-black pt-8 group hover:bg-black hover:text-white p-6 transition-all duration-300 sharp">
                                <span className="block text-teal-500 text-sm font-bold mb-4 uppercase tracking-widest">Pillar 0{i + 1}</span>
                                <h3 className="text-3xl font-heading font-medium mb-4">{v.title}</h3>
                                <p className="font-body text-gray-500 group-hover:text-gray-300 transition-colors leading-relaxed">
                                    {v.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="bg-gray-100 text-black py-24 md:py-40 sharp">
                <div className="container-custom grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-heading font-thin mb-12">
                            Our <span className="text-teal-600">Philosophy</span>
                        </h2>
                        <div className="space-y-8 font-body text-lg leading-relaxed text-gray-700">
                            <p>The challenges that create stress for business leaders are structural, not personal.</p>
                            <p>Effective systems do not need to be complex or expensive. They need to be thoughtful, practical, and aligned with real operations.</p>
                            <p>We believe in <strong className="text-black">right-sized solutions</strong> that create leverage without unnecessary overhead.</p>
                        </div>
                    </div>

                    <div className="aspect-square bg-teal-500 text-white p-12 flex flex-col justify-between sharp">
                        <span className="text-6xl font-heading font-bold">B³</span>
                        <div className="text-2xl font-heading font-thin tracking-wide">
                            Better Business.<br />
                            Better Balance.<br />
                            Better Bottom-line.
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
