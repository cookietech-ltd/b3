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
                    Operational Maturity Is the Foundation of <span className="text-teal-400">Long Term Business Value</span>
                </h2>

                <p className="font-body text-xl text-gray-400 mb-20 max-w-3xl leading-relaxed animate-fade-in-up delay-200">
                    Long term value in a service business comes from consistent execution, visibility, and control.
                    Businesses with strong operating systems experience lower risk, stronger performance, and greater optionality.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((v, i) => (
                        <div key={i} className="border border-white/20 p-8 sharp hover:bg-white/5 transition-colors group">
                            <h3 className="text-2xl font-heading font-normal mb-4 text-white group-hover:text-teal-400 transition-colors uppercase tracking-widest">
                                {v.title}
                            </h3>
                            <p className="font-body text-gray-500 group-hover:text-gray-300 transition-colors leading-relaxed">
                                {v.desc}
                            </p>
                            <div className="w-8 h-px bg-white/20 mt-8 group-hover:w-full group-hover:bg-teal-400 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
