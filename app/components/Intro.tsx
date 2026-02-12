export default function Intro() {
    return (
        <section className="bg-black text-white section-padding sharp">
            <div className="container-custom grid md:grid-cols-2 gap-12 md:gap-24 items-start">
                <div className="md:sticky top-32">
                    <h2 className="text-4xl md:text-6xl font-heading font-thin tracking-tight mb-8">
                        Running a service business carries a <span className="text-teal-400">quiet operational weight</span>.
                    </h2>
                    <div className="w-12 h-1 bg-teal-400 mb-8"></div>
                </div>

                <div className="space-y-8 text-lg font-body text-gray-300 leading-relaxed max-w-xl">
                    <p>
                        Decisions accumulate. Complexity increases. Visibility becomes harder to maintain. Even profitable businesses often struggle with fragmented processes, manual workflows, and limited operational insight.
                    </p>
                    <p>
                        B³ helps service businesses move from informal growth to <strong className="text-white font-medium">intentional system-driven operations</strong>. We build practical systems that support leadership, teams, and long-term performance.
                    </p>

                    <div className="mt-12 p-8 border border-white/10 sharp bg-white/5 backdrop-blur-sm">
                        <h3 className="text-xl font-heading mb-4 text-white">Transition from disorder to clarity</h3>
                        <div className="w-full text-sm text-gray-400">
                            <span className="block border-b border-dashed border-gray-600 pb-2 mb-2">Informal Growth → Structure</span>
                            <span className="block border-b border-dashed border-gray-600 pb-2 mb-2">Manual Workflows → Automation</span>
                            <span className="block">Limited Insight → Full Visibility</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
