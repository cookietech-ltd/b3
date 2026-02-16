export default function Intro() {
    return (
        <section className="bg-black text-white section-padding sharp">
            <div className="container-custom grid md:grid-cols-2 gap-12 md:gap-24 items-start">
                <div className="md:sticky top-32">
                    <h2 className="text-4xl md:text-6xl font-heading font-thin tracking-tight mb-8">
                        Most service businesses grow <span className="text-white font-normal">informally</span>.
                    </h2>
                    <div className="w-12 h-1 bg-white mb-8"></div>
                </div>

                <div className="space-y-8 text-lg font-body text-gray-300 leading-relaxed max-w-xl">
                    <p>
                        Manual workflows, fragmented processes, limited operational visibility. We design structured systems that fix this.
                    </p>
                    <p>
                        B³ designs the infrastructure that moves service businesses from informal growth to <strong className="text-white font-medium">intentional system-driven operations</strong>. We build practical systems that deliver leadership, teams, and long-term performance.
                    </p>
                </div>
            </div>
        </section>
    );
}
