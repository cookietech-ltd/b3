import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import Engagement from './components/Engagement'; // Process
import ImplementationCapability from './components/ImplementationCapability';
import Deliverables from './components/Deliverables';
import FeaturedWork from './components/FeaturedWork';
import Value from './components/Value'; // Outcomes
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative font-sans text-slate-900 overflow-x-hidden selection:bg-gray-200 selection:text-black scroll-smooth">
      <Header />
      <Hero />
      <Intro />
      <Services />
      <Engagement />
      <ImplementationCapability />
      <Deliverables />
      <FeaturedWork />
      <Value />
      <CTA />
      <Footer />
    </main>
  );
}
