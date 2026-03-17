'use client';

import Link from 'next/link';
import { useIntersectionObserver } from '../ui/useIntersectionObserver';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
    const { targetRef, isIntersecting } = useIntersectionObserver();

    return (
        <section id="contact" className="py-32 px-6 bg-text-main text-white text-center">
            <div
                ref={targetRef}
                className={`max-w-3xl mx-auto reveal ${isIntersecting ? 'active' : ''}`}
            >
                <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-6">Upgrade Your Kitchen<br />With Glass.</h2>
                <p className="text-white/70 text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">Join thousands of modern homes making the switch to premium, food-safe glass storage. Free shipping on your first order.</p>

                <Link
                    href="/products"
                    className="group relative px-12 py-5 bg-white text-text-main font-semibold tracking-wide uppercase text-sm rounded-none overflow-hidden transition-all duration-300 hover:text-white inline-block"
                >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        Shop Now
                        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-accent transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
                </Link>
            </div>
        </section>
    );
}
