'use client';
import Link from 'next/link';
import { Menu, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-sm py-4 shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent py-6 md:py-8'}`}>
            <div className="container-custom flex items-center justify-between text-white">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                    <img src="/images/logo/logo_white.png" alt="B³ Solutions" className="h-8 w-auto" />
                </Link>

                <nav className="hidden md:flex items-center gap-10 font-body text-sm font-medium uppercase tracking-widest">
                    <Link href="/focus" className="hover-underline-animation text-white/90 hover:text-white">Focus</Link>
                    <Link href="/value" className="hover-underline-animation text-white/90 hover:text-white">Value</Link>
                    <Link href="/systems" className="hover-underline-animation text-white/90 hover:text-white">Systems</Link>
                    <Link href="/contact" className="hover-underline-animation text-white/90 hover:text-white">Contact</Link>
                </nav>

                <button className="md:hidden text-white">
                    <Menu className="w-8 h-8" />
                </button>
            </div>
        </header>
    );
}
