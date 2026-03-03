import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="bg-black text-white pt-40 pb-20 sharp">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-7xl font-heading font-thin mb-8">
                        Our <span className="text-white font-normal">Work</span>
                    </h1>
                    <p className="text-xl font-body text-gray-400 max-w-2xl leading-relaxed">
                        Real-world operational transformations.
                    </p>
                </div>
            </section>

            <section className="py-20 sharp min-h-[40vh]">
                <div className="container-custom">
                    <Link href="/case-studies/fitness-room-concierge" className="group block border border-black hover:bg-black hover:text-white transition-colors duration-300 w-full flex flex-col md:flex-row overflow-hidden">
                        <div className="w-full md:w-2/5 relative h-[300px] md:h-auto border-b md:border-b-0 md:border-r border-black group-hover:border-gray-800 transition-colors">
                            <Image src="/images/case-studies/frc-hero.png" alt="Fitness Room Concierge" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                        </div>
                        <div className="p-8 md:p-12 w-full md:w-3/5 flex flex-col items-start justify-center">
                            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 group-hover:text-gray-400 transition-colors">Case Study</h2>
                            <h3 className="text-4xl font-heading font-light mb-6 group-hover:text-white transition-colors">Fitness Room Concierge</h3>
                            <p className="font-body text-gray-600 mb-8 max-w-2xl group-hover:text-gray-300 transition-colors text-lg leading-relaxed">
                                Redesigning the service lifecycle from first principles. Eliminating paper-based friction and establishing a scalable operational foundation with a custom web and mobile platform.
                            </p>
                            <div className="flex items-center gap-3 font-heading uppercase tracking-widest text-sm font-medium mt-auto pt-8">
                                Read Full Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
