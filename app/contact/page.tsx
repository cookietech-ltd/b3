import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="bg-black text-white pt-40 pb-20 sharp">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-7xl font-heading font-thin mb-8">
                        Start the <span className="text-teal-400">Conversation</span>
                    </h1>
                    <p className="text-xl font-body text-gray-400 max-w-2xl leading-relaxed">
                        We work with established service businesses seeking clarity, scalable systems, and long-term options. This is not a sales call. It is an exploratory discussion to see if we are the right fit.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="bg-white text-black section-padding sharp">
                <div className="container-custom grid md:grid-cols-2 gap-20">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-heading font-light mb-8">Tell us about your business</h2>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="font-heading font-medium text-sm uppercase tracking-widest text-gray-500">First Name</label>
                                    <input type="text" className="border-b border-gray-300 py-2 focus:border-teal-500 outline-none transition-colors placeholder:text-gray-200" placeholder="Jane" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-heading font-medium text-sm uppercase tracking-widest text-gray-500">Last Name</label>
                                    <input type="text" className="border-b border-gray-300 py-2 focus:border-teal-500 outline-none transition-colors placeholder:text-gray-200" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-heading font-medium text-sm uppercase tracking-widest text-gray-500">Business Name</label>
                                <input type="text" className="border-b border-gray-300 py-2 focus:border-teal-500 outline-none transition-colors placeholder:text-gray-200" placeholder="Acme Inc." />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-heading font-medium text-sm uppercase tracking-widest text-gray-500">Email Address</label>
                                <input type="email" className="border-b border-gray-300 py-2 focus:border-teal-500 outline-none transition-colors placeholder:text-gray-200" placeholder="jane@acme.com" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-heading font-medium text-sm uppercase tracking-widest text-gray-500">Tell us about your challenge</label>
                                <textarea rows={4} className="border-b border-gray-300 py-2 focus:border-teal-500 outline-none transition-colors placeholder:text-gray-200 resize-none" placeholder="We are struggling with..." />
                            </div>

                            <button type="submit" className="mt-8 bg-black text-white px-10 py-4 font-heading font-bold uppercase tracking-widest hover:bg-teal-500 transition-colors duration-300 sharp w-full md:w-auto">
                                Request Conversation
                            </button>
                        </form>
                    </div>

                    {/* Context/Info */}
                    <div className="border-l border-gray-100 pl-12 space-y-12">
                        <div>
                            <h3 className="text-xl font-heading font-medium mb-4">What happens next?</h3>
                            <p className="font-body text-gray-500 leading-relaxed">
                                We review every inquiry personally. If we believe we can help, we'll schedule a 30-minute discovery call to discuss your specific situation.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-heading font-medium mb-4">Direct Contact</h3>
                            <a href="mailto:connect@b3solutions.com" className="font-body text-teal-600 text-lg hover:underline decoration-teal-600 decoration-2 underline-offset-4">
                                connect@b3solutions.com
                            </a>
                        </div>

                        <div className="pt-12 border-t border-gray-100">
                            <p className="font-heading font-thin text-2xl text-gray-400 italic">
                                "Structure creates leverage."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
