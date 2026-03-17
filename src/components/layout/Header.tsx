'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { useCart } from '@/lib/CartContext';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { totalItems, openCart } = useCart();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'About', href: '/#about' },
        { label: 'Contact', href: '/support/contact' },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-sm py-4 border-b border-divider' : 'bg-white/70 backdrop-blur-md py-6'
                    }`}
            >
                <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="font-serif text-2xl font-semibold tracking-wider text-text-main flex flex-col items-start">
                        GLOCASA
                        <span className="font-sans text-[9px] tracking-[0.3em] font-medium text-text-light uppercase mt-0.5">Premium Glass Kitchenware</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map(link => (
                            <Link key={link.href} href={link.href} className="text-[12px] font-semibold tracking-widest uppercase text-text-main hover:text-accent transition-colors relative group">
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Icons */}
                    <div className="flex items-center gap-5">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="text-text-main hover:text-accent transition-colors"
                            aria-label="Search"
                        >
                            <Search size={20} strokeWidth={1.5} />
                        </button>

                        <button
                            onClick={openCart}
                            className="text-text-main hover:text-accent transition-colors relative"
                            aria-label="Open Cart"
                        >
                            <ShoppingBag size={22} strokeWidth={1.5} />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-accent text-white text-[9px] w-5 h-5 rounded-full flex items-center justify-center font-bold animate-bounce-once">
                                    {totalItems > 9 ? '9+' : totalItems}
                                </span>
                            )}
                        </button>

                        <button
                            className="md:hidden text-text-main hover:text-accent transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-10 transition-transform duration-400 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    style={{ top: '72px' }}
                >
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="font-serif text-4xl text-text-main hover:text-accent transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </header>

            {/* Search Overlay */}
            <div
                className={`fixed inset-0 bg-white z-[100] transition-all duration-500 ease-in-out flex flex-col items-center justify-start pt-32 px-6 ${isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
            >
                <button
                    onClick={() => setIsSearchOpen(false)}
                    className="absolute top-10 right-10 text-text-main hover:rotate-90 transition-transform duration-300"
                >
                    <X size={32} strokeWidth={1} />
                </button>

                <div className="w-full max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="text-accent tracking-[0.3em] text-[10px] font-bold uppercase mb-6 block text-center">What are you looking for?</span>
                    <div className="relative border-b-2 border-text-main/10 focus-within:border-accent transition-colors py-4">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full bg-transparent border-none outline-none text-4xl md:text-6xl font-serif text-text-main placeholder:text-text-light/30"
                            autoFocus={isSearchOpen}
                        />
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-text-light/50" size={32} strokeWidth={1} />
                    </div>

                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-[11px] font-bold tracking-widest uppercase text-text-main mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-sm text-text-light">
                                <li className="hover:text-accent cursor-pointer transition-colors">Best Sellers</li>
                                <li className="hover:text-accent cursor-pointer transition-colors">New Arrivals</li>
                                <li className="hover:text-accent cursor-pointer transition-colors">Gift Sets</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[11px] font-bold tracking-widest uppercase text-text-main mb-4">Categories</h4>
                            <ul className="space-y-2 text-sm text-text-light">
                                <li className="hover:text-accent cursor-pointer transition-colors">Oil Dispensers</li>
                                <li className="hover:text-accent cursor-pointer transition-colors">Spice Jars</li>
                                <li className="hover:text-accent cursor-pointer transition-colors">Storage</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
