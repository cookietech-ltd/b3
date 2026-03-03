import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsOfUsePage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="pt-40 pb-20 bg-[#F8F8F8] sharp">
                <div className="container-custom max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-heading font-light mb-4">Website Terms of Use</h1>
                    <p className="font-body text-gray-500 uppercase tracking-widest text-sm">Last Updated: March 1, 2026</p>
                </div>
            </section>

            <section className="py-20 sharp">
                <div className="container-custom max-w-4xl mx-auto">
                    <div className="font-body text-gray-700 space-y-8 text-lg leading-relaxed">
                        <p>
                            These Website Terms of Use ("Terms") govern your access to and use of the B³ Solutions website and any related services, tools, or content we provide.
                        </p>
                        <p>
                            By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use our website.
                        </p>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">1. Use of Website</h2>

                        <h3 className="text-xl font-heading font-light text-black pt-4">1.1 Permitted Use</h3>
                        <p>You may use our website for lawful purposes only. You agree not to:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>Violate any applicable laws or regulations</li>
                            <li>Infringe upon our intellectual property or the rights of others</li>
                            <li>Transmit harmful code, viruses, or malicious software</li>
                            <li>Attempt to gain unauthorized access to our systems or data</li>
                            <li>Scrape, crawl, or harvest data from our website without permission</li>
                            <li>Interfere with the proper functioning of our website</li>
                            <li>Impersonate any person or entity or misrepresent your affiliation</li>
                        </ul>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">2. Intellectual Property</h2>

                        <h3 className="text-xl font-heading font-light text-black pt-4">2.1 Our Content</h3>
                        <p>All content on this website, including text, graphics, logos, images, software, and design, is the property of B³ Solutions or our licensors and is protected by copyright, trademark, and other intellectual property laws.</p>
                        <p>You may not reproduce, distribute, modify, or create derivative works from our content without our express written permission.</p>

                        <h3 className="text-xl font-heading font-light text-black pt-4">2.2 Trademarks</h3>
                        <p>"B³ Solutions," our logo, and other marks displayed on our website are our trademarks. You may not use these marks without our prior written consent.</p>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">3. AI Phone Receptionist</h2>

                        <h3 className="text-xl font-heading font-light text-black pt-4">3.1 AI Interaction Disclosure</h3>
                        <p>When you call our business phone number, you may interact with an AI-powered receptionist. By continuing the call, you acknowledge that:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>You are communicating with an automated AI system, not a human</li>
                            <li>Your conversation may be recorded and transcribed</li>
                            <li>Call data will be processed and stored as described in our Privacy Policy</li>
                            <li>You consent to the collection and use of your call information</li>
                        </ul>
                        <p>If you do not consent to AI interaction or call recording, please disconnect the call and contact us via email or our website contact form.</p>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">4. User-Submitted Content</h2>
                        <p>If you submit content to us through contact forms, file uploads, or our client portal (when available), you:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>Retain ownership of your content</li>
                            <li>Grant us a license to use, store, and process your content as necessary to provide our services</li>
                            <li>Represent that you have the right to submit such content</li>
                            <li>Agree not to submit content that is unlawful, harmful, or violates third-party rights</li>
                        </ul>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">5. Third-Party Services and Links</h2>
                        <p>Our website may contain links to third-party websites or integrate with third-party services (such as Google Analytics, payment processors, or scheduling tools).</p>
                        <p>We are not responsible for the content, privacy practices, or terms of these third-party services. Your use of third-party services is governed by their respective terms and policies.</p>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">6. Disclaimers</h2>

                        <h3 className="text-xl font-heading font-light text-black pt-4">6.1 Website Provided "As Is"</h3>
                        <p>Our website and its content are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>Accuracy, completeness, or reliability of content</li>
                            <li>Uninterrupted or error-free operation</li>
                            <li>Fitness for a particular purpose</li>
                            <li>Non-infringement of third-party rights</li>
                        </ul>

                        <h3 className="text-xl font-heading font-light text-black pt-4">6.2 No Professional Advice</h3>
                        <p>Information on our website is for general informational purposes only and does not constitute professional advice. You should not rely on website content as a substitute for professional consultation specific to your situation.</p>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">7. Limitation of Liability</h2>
                        <p>To the fullest extent permitted by law, B³ Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>Your use of or inability to use our website</li>
                            <li>Errors, omissions, or inaccuracies in website content</li>
                            <li>Unauthorized access to or alteration of your data</li>
                            <li>Third-party conduct or content on our website</li>
                            <li>Any other matter relating to our website or services</li>
                        </ul>
                        <p>In no event shall our total liability exceed the amount you paid us, if any, for accessing our website.</p>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">8. Indemnification</h2>
                        <p>You agree to indemnify, defend, and hold harmless B³ Solutions and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses arising from:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>Your use of our website</li>
                            <li>Your violation of these Terms</li>
                            <li>Your violation of any third-party rights</li>
                            <li>Content you submit to our website</li>
                        </ul>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">9. Changes to These Terms</h2>
                        <p>We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on this page with a revised "Last Updated" date.</p>
                        <p>Your continued use of our website after changes constitutes acceptance of the updated Terms.</p>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">10. Governing Law and Dispute Resolution</h2>
                        <p>These Terms are governed by the laws of <span className="font-bold">[INSERT STATE/JURISDICTION]</span>, without regard to conflict of law principles.</p>
                        <p>Any disputes arising from these Terms or your use of our website shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, or through the courts of <span className="font-bold">[INSERT JURISDICTION]</span>.</p>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">11. Severability</h2>
                        <p>If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">12. Entire Agreement</h2>
                        <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and B³ Solutions regarding your use of our website.</p>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">13. Contact Us</h2>
                        <p>If you have questions about these Terms, please contact us:</p>
                        <p className="bg-gray-100 p-6 rounded-sm border-l-4 border-black">
                            <strong className="text-black">B³ Solutions</strong><br />
                            Email: <span className="text-[#ff0000] font-bold">[INSERT CONTACT EMAIL]</span><br />
                            Website: <span className="text-[#ff0000] font-bold">[INSERT WEBSITE URL]</span>
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
