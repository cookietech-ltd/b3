import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="pt-40 pb-20 bg-[#F8F8F8] sharp">
                <div className="container-custom max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-heading font-light mb-4">Privacy Policy</h1>
                    <p className="font-body text-gray-500 uppercase tracking-widest text-sm">Last Updated: March 1, 2026</p>
                </div>
            </section>

            <section className="py-20 sharp">
                <div className="container-custom max-w-4xl mx-auto">
                    <div className="font-body text-gray-700 space-y-8 text-lg leading-relaxed">
                        <p>
                            B³ Solutions ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with our AI-powered tools.
                        </p>
                        <p>
                            By using our website or services, you agree to the collection and use of information in accordance with this policy.
                        </p>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">1. Information We Collect</h2>

                        <h3 className="text-xl font-heading font-light text-black pt-4">1.1 Information You Provide to Us</h3>
                        <p>We may collect information that you voluntarily provide when you:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>Contact us through our website or email</li>
                            <li>Request a quote or consultation</li>
                            <li>Schedule a call or meeting</li>
                            <li>Interact with our AI phone receptionist</li>
                            <li>Use our client portal or project management tools (when available)</li>
                        </ul>
                        <p className="pt-4">This information may include:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>Name and contact information (email address, phone number)</li>
                            <li>Company name and business information</li>
                            <li>Project details and service requirements</li>
                            <li>Call transcripts and conversation logs from AI interactions</li>
                            <li>Audio recordings of phone conversations</li>
                            <li>Files and documents you upload to our systems</li>
                        </ul>

                        <h3 className="text-xl font-heading font-light text-black pt-4">1.2 Information Collected Automatically</h3>
                        <p>When you visit our website, we may automatically collect certain information about your device and usage patterns:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>Browser type and version</li>
                            <li>IP address and general location</li>
                            <li>Pages visited and time spent on each page</li>
                            <li>Referring website or source</li>
                            <li>Device information (operating system, screen size)</li>
                        </ul>

                        <h3 className="text-xl font-heading font-light text-black pt-4">1.3 Analytics and Tracking Technologies</h3>
                        <p>We use analytics tools to understand how visitors interact with our website:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li><strong>Google Analytics:</strong> Tracks website traffic, user behavior, and engagement metrics</li>
                            <li><strong>Session recording tools (such as Hotjar):</strong> May be used to analyze user experience and identify website improvements</li>
                        </ul>
                        <p className="pt-4">These tools use cookies and similar technologies. You can control cookie settings through your browser preferences.</p>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">2. How We Use Your Information</h2>
                        <p>We use the information we collect for the following purposes:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>To respond to your inquiries and provide requested information</li>
                            <li>To schedule and manage consultations, meetings, and calls</li>
                            <li>To deliver our services and manage client projects</li>
                            <li>To send transactional emails (confirmations, receipts, project updates)</li>
                            <li>To send marketing communications (newsletters, updates, insights) with your consent</li>
                            <li>To improve our website, services, and user experience</li>
                            <li>To analyze website performance and optimize content</li>
                            <li>To process payments and manage invoicing (when applicable)</li>
                            <li>To comply with legal obligations and protect our rights</li>
                        </ul>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">3. AI Phone Receptionist</h2>
                        <p>When you call our business number, you may interact with an AI-powered phone receptionist. Here's what you should know:</p>

                        <h3 className="text-xl font-heading font-light text-black pt-4">3.1 Data Collection</h3>
                        <p>Our AI receptionist may collect:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>Your phone number</li>
                            <li>Name, email address, and company information (if you provide it)</li>
                            <li>Full conversation transcripts</li>
                            <li>Audio recordings of the call</li>
                        </ul>

                        <h3 className="text-xl font-heading font-light text-black pt-4">3.2 Data Storage and Use</h3>
                        <p>AI conversation data is stored securely on:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>Google Cloud Platform (GCP) servers in US Central region</li>
                            <li>Google Gemini AI servers</li>
                            <li>MongoDB database hosted on GCP</li>
                        </ul>
                        <p className="bg-gray-100 p-6 rounded-sm border-l-4 border-black italic mt-6">
                            <strong>Important:</strong> Your conversation data is NOT used to train AI models. Google does not use your call data to improve Gemini or other AI services.
                        </p>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">4. How We Share Your Information</h2>
                        <p>We do not sell, rent, or trade your personal information. We may share your information with third-party service providers who assist us in operating our business:</p>

                        <h3 className="text-xl font-heading font-light text-black pt-4">4.1 Service Providers</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li><strong>Google Cloud Platform (GCP):</strong> Cloud hosting and data storage</li>
                            <li><strong>Google Gemini AI:</strong> AI phone receptionist and conversation processing</li>
                            <li><strong>Google Analytics:</strong> Website analytics and performance tracking</li>
                            <li><strong>Session recording tools (e.g., Hotjar):</strong> User experience analysis</li>
                            <li><strong>Payment processors (Stripe, PayPal, or similar):</strong> Payment processing when applicable</li>
                            <li><strong>Email service providers:</strong> Transactional and marketing email delivery</li>
                        </ul>
                        <p className="pt-4">These service providers are contractually obligated to protect your information and use it only for the purposes we specify.</p>

                        <h3 className="text-xl font-heading font-light text-black pt-4">4.2 Legal Requirements</h3>
                        <p>We may disclose your information if required by law, court order, or government regulation, or if necessary to protect our rights, property, or safety.</p>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">5. Data Retention</h2>
                        <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li><strong>Contact and inquiry data:</strong> Retained until no longer needed for business purposes or until you request deletion</li>
                            <li><strong>Client project data:</strong> Retained for the duration of the engagement and for a reasonable period afterward for record-keeping</li>
                            <li><strong>AI call recordings and transcripts:</strong> Retained as needed for service quality and business operations</li>
                        </ul>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">6. Data Security</h2>
                        <p>We implement appropriate technical and organizational measures to protect your personal information:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>SSL/TLS encryption (HTTPS) for all website communications</li>
                            <li>Secure cloud infrastructure (Google Cloud Platform)</li>
                            <li>Regular security assessments and updates</li>
                            <li>Access controls and authentication mechanisms</li>
                        </ul>
                        <p className="pt-4">While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.</p>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">7. Your Rights and Choices</h2>
                        <p>You have the following rights regarding your personal information:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                            <li><strong>Correction:</strong> Request corrections to inaccurate or incomplete information</li>
                            <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                            <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                            <li><strong>Data Portability:</strong> Request your data in a structured, commonly used format</li>
                        </ul>
                        <p className="pt-4">To exercise any of these rights, please contact us at: <span className="font-bold text-[#ff0000]">[INSERT PRIVACY EMAIL]</span></p>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">8. Cookies and Tracking Technologies</h2>
                        <p>We use cookies and similar tracking technologies to enhance your browsing experience and analyze website usage.</p>

                        <h3 className="text-xl font-heading font-light text-black pt-4">8.1 Types of Cookies We Use</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li><strong>Essential cookies:</strong> Required for website functionality</li>
                            <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site (Google Analytics)</li>
                            <li><strong>Performance cookies:</strong> Improve website performance and user experience</li>
                        </ul>

                        <h3 className="text-xl font-heading font-light text-black pt-4">8.2 Managing Cookies</h3>
                        <p>You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.</p>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">9. Third-Party Links</h2>
                        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.</p>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">10. Children's Privacy</h2>
                        <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.</p>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">11. Changes to This Privacy Policy</h2>
                        <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated "Last Updated" date.</p>
                        <p>Your continued use of our website and services after any changes constitutes acceptance of the updated policy.</p>

                        <h2 className="text-2xl font-heading font-light text-black pt-8 pb-4 border-b border-gray-200">12. Contact Us</h2>
                        <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
                        <p className="bg-gray-100 p-6 rounded-sm border-l-4 border-black mt-6">
                            <strong className="text-black">B³ Solutions</strong><br />
                            Email: <span className="text-[#ff0000] font-bold">[INSERT PRIVACY EMAIL]</span><br />
                            Website: <span className="text-[#ff0000] font-bold">[INSERT WEBSITE URL]</span>
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
