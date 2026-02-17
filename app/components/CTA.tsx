import { ArrowRight, Mail } from 'lucide-react';

export default function CTA() {
    return (
        <section id="contact" className="bg-black border-t border-white/10 text-white section-padding sharp">
            <div className="container-custom flex flex-col items-center text-center">
                <h2 className="text-4xl md:text-5xl font-heading font-thin mb-8 tracking-tight">
                    Let’s Discuss Your <span className="font-normal text-white">Operational Challenges</span>
                </h2>

                <p className="font-body text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
                    Each engagement is selective on both sides. This is a strategic conversation about operational systems and whether a structured approach makes sense for your business.
                </p>

                <a href="https://calendly.com/brad-horner-b-3solutions/30min" target="_blank" className="inline-flex items-center gap-3 bg-white text-black font-heading font-bold uppercase tracking-widest px-10 py-5 sharp hover:bg-black hover:text-white hover:border hover:border-white border border-transparent transition-all group">
                    <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Schedule Strategic Call
                </a>
            </div>
        </section>
    );
}
