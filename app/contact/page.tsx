"use client";

import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        businessName: '',
        email: '',
        challenge: ''
    });
    const [submitting, setSubmitting] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.dataset.field!]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!res.ok) throw new Error('Failed to send message');

            setSuccess(true);
            setFormData({ firstName: '', lastName: '', businessName: '', email: '', challenge: '' });
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="bg-black text-white pt-40 pb-20 sharp">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-7xl font-heading font-thin mb-8">
                        Start the <span className="text-white font-normal">Conversation</span>
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

                        {success ? (
                            <div className="bg-green-50 p-8 border border-green-200">
                                <h3 className="text-xl font-heading font-bold text-green-800 mb-2">Message Sent</h3>
                                <p className="text-green-700">Thank you for reaching out. We'll be in touch shortly.</p>
                                <button onClick={() => setSuccess(false)} className="mt-4 text-sm font-bold underline">Send another message</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="font-heading font-medium text-sm uppercase tracking-widest text-gray-500">First Name</label>
                                        <input required type="text" data-field="firstName" value={formData.firstName} onChange={handleChange} className="border-b border-gray-300 py-2 focus:border-black outline-none transition-colors placeholder:text-gray-400" placeholder="Jane" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-heading font-medium text-sm uppercase tracking-widest text-gray-500">Last Name</label>
                                        <input required type="text" data-field="lastName" value={formData.lastName} onChange={handleChange} className="border-b border-gray-300 py-2 focus:border-black outline-none transition-colors placeholder:text-gray-400" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="font-heading font-medium text-sm uppercase tracking-widest text-gray-500">Business Name</label>
                                    <input required type="text" data-field="businessName" value={formData.businessName} onChange={handleChange} className="border-b border-gray-300 py-2 focus:border-black outline-none transition-colors placeholder:text-gray-400" placeholder="Acme Inc." />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="font-heading font-medium text-sm uppercase tracking-widest text-gray-500">Email Address</label>
                                    <input required type="email" data-field="email" value={formData.email} onChange={handleChange} className="border-b border-gray-300 py-2 focus:border-black outline-none transition-colors placeholder:text-gray-400" placeholder="jane@acme.com" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="font-heading font-medium text-sm uppercase tracking-widest text-gray-500">Tell us about your challenge</label>
                                    <textarea required rows={4} data-field="challenge" value={formData.challenge} onChange={handleChange} className="border-b border-gray-300 py-2 focus:border-black outline-none transition-colors placeholder:text-gray-400 resize-none" placeholder="We are struggling with..." />
                                </div>

                                {error && <p className="text-red-500 text-sm">{error}</p>}

                                <button disabled={submitting} type="submit" className="mt-8 bg-black text-white px-10 py-4 font-heading font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors duration-300 sharp w-full md:w-auto disabled:opacity-50">
                                    {submitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Context/Info */}
                    <div className="border-l border-gray-100 pl-12 space-y-12">
                        <div>
                            <h3 className="text-xl font-heading font-medium mb-4">Ready to Schedule?</h3>
                            <p className="font-body text-gray-600 mb-8 leading-relaxed">
                                Prefer to book a time directly? Use our calendar link below.
                            </p>
                            <a href="https://calendly.com/brad-horner-b-3solutions/30min" target="_blank" className="inline-block border border-black text-black px-8 py-3 font-heading font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300 sharp">
                                Book 30-Min Call
                            </a>
                        </div>

                        <div>
                            <h3 className="text-xl font-heading font-medium mb-4">Direct Contact</h3>
                            <a href="mailto:connect@b3solutions.com" className="font-body text-black text-lg hover:underline decoration-black decoration-2 underline-offset-4">
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
