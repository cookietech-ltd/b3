import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden flex items-center pb-12 md:pb-24 pt-32 md:pt-48">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/images/hero.png"
                    alt="Business professionals collaborating"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                <div className="absolute inset-0 bg-black/30 z-0"></div> {/* Dark overlay for contrast */}
            </div>

            <div className="relative z-10 container-custom w-full">
                <div className="max-w-4xl space-y-8">
                    <h1 className="text-5xl md:text-8xl font-heading font-thin tracking-tighter text-white leading-[1.05] animate-fade-in-up">
                        Helping Service Businesses Turn Operational Pressure into <span className="font-normal text-teal-400">Clarity and Momentum</span>
                    </h1>

                    <p className="max-w-2xl text-lg md:text-xl font-body text-gray-200 leading-relaxed">
                        B³ works with established service businesses to design and implement practical operating systems that reduce friction, improve visibility, and support sustainable growth.
                    </p>

                    <a href="#contact" className="inline-flex items-center gap-2 bg-teal-500 text-white font-body font-bold uppercase tracking-widest px-8 py-4 sharp transition-all hover:bg-teal-400 hover:scale-105 active:scale-95 group">
                        Request a Conversation
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </section>
    );
}
