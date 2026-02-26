'use client';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const navLinks = [
        { href: '/focus', label: 'Focus' },
        { href: '/value', label: 'Value' },
        { href: '/our-approach', label: 'Our Approach' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <>
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-sm py-4 shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent py-6 md:py-8'}`}>
                <div className="container-custom flex items-center justify-between text-white">
                    <Link href="/" className="hover:opacity-80 transition-opacity z-50 relative">
                        <img src="/images/logo/logo_white.png" alt="B³ Solutions" className="h-8 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10 font-body text-sm font-medium uppercase tracking-widest">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="hover-underline-animation text-white/90 hover:text-white">
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white z-50 relative p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay - Moved outside header to avoid clipping/backdrop filter issues */}
            <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <nav className="flex flex-col items-center gap-8 font-heading text-2xl font-light uppercase tracking-widest text-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-white/80 hover:text-white transition-colors transform hover:scale-105 duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}
