import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { Target, MessageCircle, BarChart3, Fingerprint } from 'lucide-react';

export default function FocusPage() {
    const focusAreas = [
        {
            title: "Market Presence & Lead Flow",
            icon: Fingerprint,
            problem: "Marketing is sporadic. Leads are unpredictable. The website is just a brochure.",
            solution: "We build systems that turn your market presence into a consistent intake engine. Messaging is sharpened. Channels are tracked. Your website becomes an operational tool that qualifies and captures intent."
        },
        {
            title: "Client Intake & Experience",
            icon: MessageCircle,
            problem: "Onboarding is manual. Clients feel a jagged entry. Communication relies on memory.",
            solution: "We structure the entire client journey from 'Interested' to 'Signed'. Automated checkpoints, clear expectations, and a seamless digital handshake that builds trust before the work even begins."
        },
        {
            title: "Service Delivery & Fulfillment",
            icon: Target,
            problem: "Every project feels like a new invention. Scope creep is common. Quality depends on who is assigned.",
            solution: "We map and standardize your delivery process. Checklists, templates, and clear handoff points ensure that quality is repeatable and scalable, regardless of who is doing the work."
        },
        {
            title: "Leadership Visibility",
            icon: BarChart3,
            problem: "You lead by feeling, not fact. Data is buried in spreadsheets or nonexistent.",
            solution: "We implement dashboards that surface the pulse of your business. Cash flow, pipeline health, utilization, and client sentiment—visible at a glance, allowing you to lead with precision."
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Page Header */}
            <section className="bg-black text-white pt-40 pb-20 sharp">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-7xl font-heading font-thin mb-8">
                        Where We <span className="text-teal-400">Focus</span>
                    </h1>
                    <p className="text-xl font-body text-gray-400 max-w-2xl leading-relaxed">
                        We don't try to fix everything. We focus on the four critical pillars that determine whether a service business struggles or scales.
                    </p>
                </div>
            </section>

            {/* Detailed Areas */}
            <section className="section-padding sharp">
                <div className="container-custom space-y-24">
                    {focusAreas.map((area, index) => (
                        <div key={index} className="grid md:grid-cols-2 gap-12 items-start group">
                            <div className="md:sticky top-32">
                                <div className="w-16 h-16 bg-teal-50 flex items-center justify-center mb-6 sharp group-hover:bg-teal-500 transition-colors duration-500">
                                    <area.icon className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-heading font-light mb-4">{area.title}</h2>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-gray-50 p-8 border-l-2 border-red-200 sharp">
                                    <h3 className="text-sm font-bold text-red-400 uppercase tracking-widest mb-2">The Friction</h3>
                                    <p className="font-body text-gray-700 leading-relaxed">{area.problem}</p>
                                </div>

                                <div className="bg-teal-50/30 p-8 border-l-2 border-teal-500 sharp">
                                    <h3 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-2">The B³ Fix</h3>
                                    <p className="font-body text-gray-800 leading-relaxed">{area.solution}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
