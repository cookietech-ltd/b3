import { ArrowRight, Mail } from 'lucide-react';

export default function CTA() {
    return (
        <section id="contact" className="bg-gradient-to-br from-black to-slate-900 border-t border-white/10 text-white section-padding sharp">
            <div className="container-custom flex flex-col items-center text-center">
                <h2 className="text-4xl md:text-5xl font-heading font-thin mb-8 tracking-tight">
                    Let’s Explore Whether This Work Is <br className="hidden md:block" />
                    <span className="text-teal-400 font-normal">Right for Your Business</span>
                </h2>

                <p className="font-body text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
                    We work with established service businesses seeking clarity, scalable systems, and long term options.
                    This is not a sales call. It is an exploratory discussion.
                </p>

                <a href="mailto:connect@b3solutions.com" className="inline-flex items-center gap-3 bg-teal-500 text-black font-heading font-bold uppercase tracking-widest px-10 py-5 sharp hover:bg-teal-400 transition-colors group">
                    <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Request a Conversation
                </a>
            </div>
        </section>
    );
}
