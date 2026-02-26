import { LayoutDashboard, Users, Rocket, LineChart } from 'lucide-react';

const services = [
    {
        icon: LayoutDashboard,
        title: "Market Infrastructure",
        desc: "Operational websites that function as intake infrastructure. Lead qualification systems. Service request portals.",
        examples: [
            "Lead capture & qualification workflows",
            "Service request portals",
            "Operational website builds"
        ]
    },
    {
        icon: Users,
        title: "Client Operations",
        desc: "Structured intake workflows. CRM systems configured for service operations. Automated communication sequences.",
        examples: [
            "CRM deployment & configuration",
            "Client onboarding automation",
            "Communication sequence design"
        ]
    },
    {
        icon: Rocket,
        title: "Service Delivery",
        desc: "Documented service delivery workflows. Dispatch systems. Job tracking infrastructure.",
        examples: [
            "Dispatch & field execution apps",
            "Job tracking systems",
            "Standard operating procedures"
        ]
    },
    {
        icon: LineChart,
        title: "Operational Visibility",
        desc: "Dashboards that surface operational health. KPI tracking. Automated reporting infrastructure.",
        examples: [
            "Real-time operational dashboards",
            "KPI & metric tracking systems",
            "Automated reporting pipelines"
        ]
    },
];

export default function Services() {
    return (
        <section className="bg-white text-black section-padding sharp">
            <div className="container-custom">
                <h2 className="text-4xl md:text-5xl font-heading font-light tracking-tight mb-4">
                    We build <span className="text-black font-normal">operational infrastructure</span> for service businesses.
                </h2>
                <p className="text-xl max-w-2xl font-body text-gray-500 mb-20 leading-relaxed">
                    The systems that support execution, visibility, and scale.
                </p>

                <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 sharp">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-12 hover:bg-gray-50 transition-colors group relative sharp">
                            <div className="absolute top-8 right-8 text-5xl md:text-7xl font-heading font-black text-gray-100 group-hover:text-black transition-colors pointer-events-none leading-none">
                                0{index + 1}
                            </div>
                            <service.icon className="w-12 h-12 text-black mb-8 stroke-1 transition-colors" />
                            <h3 className="text-2xl font-heading font-medium mb-4 group-hover:translate-x-2 transition-transform">{service.title}</h3>
                            <p className="font-body text-gray-600 leading-relaxed group-hover:text-black transition-colors mb-6">
                                {service.desc}
                            </p>
                            {/* Bullet point examples */}
                            <ul className="space-y-2 font-body text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                                {service.examples.map((example, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                        {example}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
