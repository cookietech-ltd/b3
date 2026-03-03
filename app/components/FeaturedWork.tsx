import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function FeaturedWork() {
    return (
        <section className="bg-white text-black section-padding sharp">
            <div className="container-custom">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-heading font-light tracking-tight">
                            Featured <span className="font-normal border-b-2 border-black pb-2">Work</span>
                        </h2>
                    </div>
                    <Link href="/case-studies" className="hidden md:flex items-center gap-2 font-heading uppercase tracking-widest text-sm font-bold hover:text-gray-600 transition-colors">
                        View All Work <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <Link href="/case-studies/fitness-room-concierge" className="group block border border-black hover:bg-black hover:text-white transition-colors duration-300 w-full flex flex-col md:flex-row overflow-hidden">
                    <div className="w-full md:w-2/5 relative h-[300px] md:h-auto border-b md:border-b-0 md:border-r border-black group-hover:border-gray-800 transition-colors">
                        <Image src="/images/case-studies/frc-hero.png" alt="Fitness Room Concierge" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <div className="p-8 md:p-12 w-full md:w-3/5 flex flex-col items-start justify-center">
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 group-hover:text-gray-400 transition-colors">Case Study</h3>
                        <h4 className="text-4xl font-heading font-light mb-6 group-hover:text-white transition-colors">Fitness Room Concierge</h4>
                        <p className="font-body text-gray-600 mb-8 max-w-2xl group-hover:text-gray-300 transition-colors text-lg leading-relaxed">
                            Redesigning the service lifecycle from first principles. Eliminating paper-based friction and establishing a scalable operational foundation with a custom web and mobile platform.
                        </p>
                        <div className="flex items-center gap-3 font-heading uppercase tracking-widest text-sm font-medium mt-auto pt-8">
                            Read Full Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                    </div>
                </Link>

                <div className="mt-8 md:hidden">
                    <Link href="/case-studies" className="flex items-center gap-2 font-heading uppercase tracking-widest text-sm font-bold hover:text-gray-600 transition-colors">
                        View All Work <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
