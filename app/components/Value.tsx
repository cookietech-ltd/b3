export default function Value() {
    const values = [
        { title: "Visibility", desc: "Clear insight without constant oversight." },
        { title: "Repeatability", desc: "Consistent service delivery." },
        { title: "Scalability", desc: "Growth without added complexity." },
        { title: "Transferability", desc: "Systems others can operate and improve." },
    ];

    return (
        <section id="value" className="bg-black text-white section-padding sharp">
            <div className="container-custom">
                <h2 className="text-4xl md:text-6xl font-heading font-thin mb-12 animate-fade-in text-gray-100">
                    Built for <span className="font-normal text-white">Real Operations</span>
                </h2>

                <p className="font-body text-xl text-gray-400 mb-20 max-w-3xl leading-relaxed animate-fade-in-up delay-200">
                    We've designed workflows for multi-location service teams, deployed operational platforms that improve visibility, and built technology infrastructure that scales with the business.
                    <br /><br />
                    <span className="text-white font-medium">No fake scale. No exaggerated claims.</span>
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((v, i) => (
                        <div key={i} className="border border-white/20 p-8 sharp hover:bg-white/10 transition-colors group">
                            <h3 className="text-2xl font-heading font-normal mb-4 text-white group-hover:text-white transition-colors uppercase tracking-widest">
                                {v.title}
                            </h3>
                            <p className="font-body text-gray-500 group-hover:text-gray-300 transition-colors leading-relaxed">
                                {v.desc}
                            </p>
                            <div className="w-8 h-px bg-white/20 mt-8 group-hover:w-full group-hover:bg-white transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
