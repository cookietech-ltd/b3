
export default function Deliverables() {
    const categories = [
        {
            title: "System Design & Documentation",
            items: ["Process maps", "Workflow diagrams", "SOP libraries", "Role descriptions", "Operational playbooks", "Training materials"]
        },
        {
            title: "Technology Implementation",
            items: ["Custom applications", "CRM configuration", "Dashboard setup", "Workflow automation", "Metric trackers", "Operational websites"]
        },
        {
            title: "Training & Enablement",
            items: ["Training videos", "Template suites", "Quick-reference guides", "Onboarding materials", "Change management support"]
        }
    ];

    return (
        <section className="bg-gray-50 text-black section-padding sharp">
            <div className="container-custom">
                <h2 className="text-4xl md:text-5xl font-heading font-light tracking-tight mb-4">
                    What We <span className="font-normal border-b-2 border-black pb-1">Deliver</span>
                </h2>

                <p className="text-xl max-w-2xl font-body text-gray-500 mb-20 leading-relaxed">
                    The outputs depend on the system requirements. Here's what we typically build:
                </p>

                <div className="grid md:grid-cols-3 gap-12 text-left">
                    {categories.map((cat, index) => (
                        <div key={index} className="space-y-6">
                            <h3 className="text-2xl font-heading font-bold">{cat.title}</h3>
                            <div className="h-px w-12 bg-black"></div>
                            <ul className="space-y-3 font-body text-gray-600">
                                {cat.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-sm mt-1.5">•</span>
                                        {item}
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
