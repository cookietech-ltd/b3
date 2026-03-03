import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import Image from 'next/image';
import ImageCarousel, { CarouselImage } from '../../components/ImageCarousel';

export default function FRCCaseStudy() {
    const carouselImages: CarouselImage[] = [
        {
            src: "/images/case-studies/frc-mobile.png",
            alt: "FRC Mobile App Scanner",
            title: "Mobile Technician App",
            subtitle: "QR based onboarding logic"
        },
        {
            src: "/images/case-studies/frc-mobile-2.png",
            alt: "FRC Digital Work Order",
            title: "Digital Work Orders",
            subtitle: "Checklists & Parts Logging via Mobile"
        },
        {
            src: "/images/case-studies/frc-web-staff.png",
            alt: "FRC Web Staff Dashboard",
            title: "Staff Review Workflow",
            subtitle: "Centralized Kanban approvals"
        }
    ];
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-black text-white pt-40 pb-20 sharp">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-7xl font-heading font-thin mb-8">
                        Case Study: <span className="text-white font-normal">Fitness Room Concierge</span>
                    </h1>
                    <p className="text-xl font-body text-gray-400 max-w-3xl leading-relaxed">
                        The infrastructure couldn't support the service model FRC was building. Manual workflows were creating friction for members, staff, and technicians and limiting revenue capture.
                    </p>
                    <div className="mt-16 w-full relative h-[300px] md:h-[500px] grayscale overflow-hidden group">
                        <Image src="/images/case-studies/frc-hero.png" alt="Fitness Room Concierge" fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-20 sharp">
                <div className="container-custom grid md:grid-cols-3 gap-16">
                    {/* Left Column - Details */}
                    <div className="md:col-span-1 border-t-2 border-black pt-8">
                        <h3 className="text-xs font-bold text-black uppercase tracking-[0.2em] mb-8 font-body">Project Details</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Scope</h4>
                                <p className="font-body text-gray-800 text-sm leading-relaxed">Operational system design, custom web & mobile platform development, full website rebuild with integrated portal access, quote request system with admin dashboard, Zebra mobile printer hardware integration, deployment, ongoing optimization</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Cost Structure</h4>
                                <p className="font-body text-gray-800 text-sm leading-relaxed">Highly cost effective engagement delivering enterprise level platform capabilities at service business economics</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Industries</h4>
                                <p className="font-body text-gray-800 text-sm leading-relaxed">Service operations, fitness equipment maintenance</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Technologies</h4>
                                <p className="font-body text-gray-800 text-sm leading-relaxed">Custom web application, mobile responsive technician interface, QR based asset tracking, Zebra mobile printer integration, real time dashboards, client portal</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Main Content */}
                    <div className="md:col-span-2 space-y-20">

                        {/* The Problem */}
                        <div>
                            <h2 className="text-3xl font-heading font-light mb-8 border-b border-gray-200 pb-4">The Problem</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-black mb-2">Paper-based work orders</h3>
                                    <p className="font-body text-gray-600 leading-relaxed">No standardized lifecycle. Technicians documented service on physical forms. Lost or delayed paperwork was common.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-black mb-2">Parts & Billing Tracking</h3>
                                    <p className="font-body text-gray-600 leading-relaxed">Parts usage and labor hours were tracked manually. Billing required reconstructing service details after the fact. Revenue leakage was a known problem.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-black mb-2">Operational Visibility</h3>
                                    <p className="font-body text-gray-600 leading-relaxed">Leadership had no real time view of technician activity, service completion times, or equipment history. Reporting was manual and backward looking.</p>
                                </div>
                            </div>
                        </div>

                        {/* The System */}
                        <div>
                            <h2 className="text-3xl font-heading font-light mb-8 border-b border-gray-200 pb-4">The System</h2>
                            <p className="font-body text-gray-800 text-lg mb-6 leading-relaxed">
                                Rather than layering software onto broken processes, we redesigned the service lifecycle from first principles. The goal wasn't digitization. It was structured operational clarity. Once the system was designed, we built the custom platform to run it.
                            </p>
                            <div className="w-full relative h-[300px] md:h-[450px] mb-8 bg-black border border-gray-200">
                                <Image src="/images/case-studies/frc-dashboard.png" alt="FRC Dashboard" fill className="object-cover opacity-90" />
                            </div>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Strategic Design Work:</h3>
                            <ul className="space-y-4 font-body text-gray-600">
                                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span> Mapped the complete service request flow (member → staff → technician → completion → billing)</li>
                                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span> Defined standardized work order stages with clear handoff points</li>
                                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span> Structured asset based service tracking (every piece of equipment gets a unique ID)</li>
                                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span> Designed mobile first technician workflows</li>
                                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span> Built centralized visibility dashboards for leadership</li>
                                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span> Integrated parts tracking directly into work order execution</li>
                            </ul>
                        </div>

                        {/* What We Built */}
                        <div>
                            <h2 className="text-3xl font-heading font-light mb-8 border-b border-gray-200 pb-4">What We Built</h2>
                            <p className="font-body text-gray-800 text-lg mb-8 font-medium">Custom Web and Mobile Platform</p>

                            <ImageCarousel images={carouselImages} />

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="border border-gray-200 p-6">
                                    <h3 className="text-lg font-bold text-black mb-3">QR Based Service Initiation</h3>
                                    <p className="font-body text-gray-600 text-sm leading-relaxed">Every piece of equipment gets a QR code. Members scan and submit issues through their phone in seconds. No phone calls. No lost requests.</p>
                                </div>
                                <div className="border border-gray-200 p-6">
                                    <h3 className="text-lg font-bold text-black mb-3">On Site Equipment Onboarding</h3>
                                    <p className="font-body text-gray-600 text-sm leading-relaxed">Technicians input equipment data through the mobile app and print QR codes on site using integrated Zebra mobile printers. Equipment becomes active in the system instantly with no office based data entry delays.</p>
                                </div>
                                <div className="border border-gray-200 p-6">
                                    <h3 className="text-lg font-bold text-black mb-3">Staff Review & Approval Workflow</h3>
                                    <p className="font-body text-gray-600 text-sm leading-relaxed">Service requests route to gym staff for review. Staff can approve member requests or create new work orders directly through web or mobile.</p>
                                </div>
                                <div className="border border-gray-200 p-6">
                                    <h3 className="text-lg font-bold text-black mb-3">Automated Technician Dispatch</h3>
                                    <p className="font-body text-gray-600 text-sm leading-relaxed">Approved requests automatically dispatch to the right technician. Work orders include full equipment history, parts availability, and service instructions.</p>
                                </div>
                                <div className="border border-gray-200 p-6">
                                    <h3 className="text-lg font-bold text-black mb-3">Mobile Technician Workflow</h3>
                                    <p className="font-body text-gray-600 text-sm leading-relaxed">Technicians receive work orders on mobile devices. Document service details, log parts usage, capture labor hours, and mark completion all in real time.</p>
                                </div>
                                <div className="border border-gray-200 p-6">
                                    <h3 className="text-lg font-bold text-black mb-3">Real Time Administrative Dashboard</h3>
                                    <p className="font-body text-gray-600 text-sm leading-relaxed">Leadership sees live technician activity, work order status, response times, completion metrics, and billing alignment. Service history for every asset is centralized and accessible.</p>
                                </div>
                                <div className="border border-gray-200 p-6">
                                    <h3 className="text-lg font-bold text-black mb-3">Integrated Website & Quote System</h3>
                                    <p className="font-body text-gray-600 text-sm leading-relaxed">New website with embedded portal access for gym clients. Quote request function feeds directly into FRC admin dashboard for streamlined sales pipeline management.</p>
                                </div>
                                <div className="border border-gray-200 p-6 bg-gray-50">
                                    <h3 className="text-lg font-bold text-black mb-3">Structured Billing & Reporting</h3>
                                    <p className="font-body text-gray-600 text-sm leading-relaxed">Parts and labor are captured in real time and compiled into detailed reports. Invoicing that previously required hours of manual reconstruction now takes minutes.</p>
                                </div>
                            </div>
                        </div>

                        {/* Impact */}
                        <div>
                            <h2 className="text-3xl font-heading font-light mb-8 border-b border-gray-200 pb-4">The Impact</h2>
                            <p className="font-body text-gray-800 text-lg mb-8 italic border-l-2 border-black pl-4">
                                "Since deployment, FRC now operates on infrastructure designed to scale, not manual processes patched together over time."
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <span className="text-black font-heading text-xl mt-1">→</span>
                                    <div>
                                        <h3 className="text-lg font-bold text-black mb-1">Service Request Friction Eliminated</h3>
                                        <p className="font-body text-gray-600 leading-relaxed">Members report issues instantly via QR code. Staff review and approve with one click. No phone calls, no lost requests.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-black font-heading text-xl mt-1">→</span>
                                    <div>
                                        <h3 className="text-lg font-bold text-black mb-1">Paper Work Orders Gone</h3>
                                        <p className="font-body text-gray-600 leading-relaxed">Technicians transitioned from paper based documentation to structured digital workflows. Lost or delayed work orders were eliminated.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-black font-heading text-xl mt-1">→</span>
                                    <div>
                                        <h3 className="text-lg font-bold text-black mb-1">Billable Capture Improved</h3>
                                        <p className="font-body text-gray-600 leading-relaxed">Parts and labor tracking became automatic. Revenue leakage from missed billing was significantly reduced.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-black font-heading text-xl mt-1">→</span>
                                    <div>
                                        <h3 className="text-lg font-bold text-black mb-1">Recurring Revenue Model Established</h3>
                                        <p className="font-body text-gray-600 leading-relaxed">Structured planned maintenance contracts were implemented, creating predictable annual recurring revenue and shifting the business from reactive service to proactive maintenance programs.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-black font-heading text-xl mt-1">→</span>
                                    <div>
                                        <h3 className="text-lg font-bold text-black mb-1">Real Time Operational Visibility</h3>
                                        <p className="font-body text-gray-600 leading-relaxed">Leadership now has live dashboards showing technician activity, response times, service completion rates, and equipment service history.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-black font-heading text-xl mt-1">→</span>
                                    <div>
                                        <h3 className="text-lg font-bold text-black mb-1">Scalable Foundation in Place</h3>
                                        <p className="font-body text-gray-600 leading-relaxed">The platform was built to grow with the business. Additional reporting, performance tracking, and automation capabilities can be layered in as the company expands.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-black text-white py-24 sharp">
                <div className="container-custom">
                    <h2 className="text-3xl md:text-5xl font-heading font-thin mb-16 text-center">
                        What Leadership <span className="font-normal">Says</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="bg-[#111] p-10 border border-white/10 relative flex flex-col">
                            <span className="text-6xl text-white/20 font-serif absolute top-6 left-6">"</span>
                            <p className="font-body text-gray-300 text-lg leading-relaxed relative z-10 pt-4 mb-8 flex-grow">
                                Before working with B³, we were running on paper and phone calls. What set them apart was they understood operations, not just software. They redesigned our workflows before writing a single line of code. Now our technicians went from carrying clipboards to having everything they need on their phones. The QR code system alone changed how we onboard equipment. What used to take days now happens on site in minutes. We've had ongoing support since launch, and they think like partners, not vendors.
                            </p>
                            <div className="mt-auto">
                                <h4 className="font-heading text-xl text-white">Ron Meaden</h4>
                                <p className="font-body text-gray-500 text-sm uppercase tracking-widest">CEO, Fitness Room Concierge</p>
                            </div>
                        </div>
                        <div className="bg-[#111] p-10 border border-white/10 relative flex flex-col">
                            <span className="text-6xl text-white/20 font-serif absolute top-6 left-6">"</span>
                            <p className="font-body text-gray-300 text-lg leading-relaxed relative z-10 pt-4 mb-8 flex-grow">
                                B³ delivered enterprise level capabilities at a price that made sense for a growing service business. Between recovered billing, time savings, and the recurring revenue model we can now support, the system paid for itself faster than we projected. More importantly, it actually fits how we operate. No bloated features we don't use, just solid infrastructure that captures revenue and reduces operational friction.
                            </p>
                            <div className="mt-auto">
                                <h4 className="font-heading text-xl text-white">Olivia Meaden</h4>
                                <p className="font-body text-gray-500 text-sm uppercase tracking-widest">CFO, Fitness Room Concierge</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ongoing Partnership */}
            <section className="py-24 bg-[#F8F8F8] sharp">
                <div className="container-custom max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-heading font-light mb-6">Ongoing Partnership</h2>
                    <p className="font-body text-gray-600 text-lg leading-relaxed mb-12">
                        The MVP deployment established the operational backbone. With the foundation in place, we continue working with FRC to support growth and enhance the platform. Current focus: Sales growth and internal process optimization as the business scales on the new infrastructure.
                    </p>

                    <div className="text-left bg-white p-10 border border-gray-200">
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">Product Roadmap Includes:</h3>
                        <ul className="grid sm:grid-cols-2 gap-4 font-body text-gray-800">
                            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span> Automated billing integration with accounting software</li>
                            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span> Delivery & installation scheduling with route optimization</li>
                            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span> Full client portal with payment processing</li>
                            <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span> Expanded gym management capabilities</li>
                        </ul>
                    </div>

                    <p className="mt-12 font-body text-xl text-black font-medium">
                        The platform was built with a clear product vision not just to solve today's problems, but to evolve into a complete gym operations ecosystem.<br /><br />
                        <span className="italic border-b-2 border-black pb-1">This is infrastructure designed to grow with the business.</span>
                    </p>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
