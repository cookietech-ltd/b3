import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import Value from './components/Value';
import Systems from './components/Systems';
import Engagement from './components/Engagement';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative font-sans text-slate-900 overflow-x-hidden selection:bg-teal-500 selection:text-white scroll-smooth">
      <Header />
      <Hero />
      <Intro />
      <Services />
      <Value />
      <Systems />
      <Engagement />
      <CTA />
      <Footer />
    </main>
  );
}
