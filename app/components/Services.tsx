import { LayoutDashboard, Users, Rocket, BarChart, Settings, LineChart } from 'lucide-react';

const services = [
    { icon: LayoutDashboard, title: "Market Infrastructure", desc: "Clear messaging, positioning, and credibility. Websites treated as operational tools." },
    { icon: Users, title: "Client Operations", desc: "Structured intake, communication, and execution. Predictable experiences." },
    { icon: Rocket, title: "Service Delivery", desc: "Ownership, progress tracking, and communication that provide leadership insight." },
    { icon: LineChart, title: "Operational Visibility", desc: "Dashboards and metrics that create clarity without constant oversight." },
];

export default function Services() {
    return (
        <section className="bg-white text-black section-padding sharp">
            <div className="container-custom">
                <h2 className="text-4xl md:text-5xl font-heading font-light tracking-tight mb-4">
                    We build <span className="text-black font-normal">operational infrastructure</span> for service businesses.
                </h2>
                <p className="text-xl max-w-2xl font-body text-gray-500 mb-20 leading-relaxed">
                    The systems that deliver execution, visibility, and scale.
                    Not surface level improvements. Not technology for technology’s sake.
                    We work on how the business operates.
                </p>

                <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 sharp">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-12 hover:bg-gray-50 transition-colors group relative sharp">
                            <div className="absolute top-8 right-8 text-6xl font-heading font-bold text-gray-100 group-hover:text-black transition-colors pointer-events-none">
                                0{index + 1}
                            </div>
                            <service.icon className="w-12 h-12 text-black mb-8 stroke-1 transition-colors" />
                            <h3 className="text-2xl font-heading font-medium mb-4 group-hover:translate-x-2 transition-transform">{service.title}</h3>
                            <p className="font-body text-gray-600 leading-relaxed group-hover:text-black transition-colors">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
