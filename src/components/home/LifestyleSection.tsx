'use client';

import { useIntersectionObserver } from '../ui/useIntersectionObserver';

export default function LifestyleSection() {
    const { targetRef, isIntersecting } = useIntersectionObserver();

    return (
        <section
            ref={targetRef}
            className={`relative py-32 px-6 bg-fixed bg-center bg-cover flex items-center justify-center reveal ${isIntersecting ? 'active' : ''}`}
            style={{
                backgroundImage: "url('/images/lifestyle.png')",
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 text-center text-white max-w-3xl mx-auto glass-effect p-12 md:p-16 rounded-none backdrop-blur-md bg-white/10 border-white/20">
                <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6 drop-shadow-md">Bring Clarity and Order to Your Culinary Space.</h2>
                <p className="font-sans text-white/90 text-lg md:text-xl font-light leading-relaxed mb-8 drop-shadow">Transform your pantry and countertops into a visually stunning, perfectly organized haven.</p>
                <a href="#products" className="inline-block px-10 py-4 bg-white text-text-main font-semibold tracking-wide uppercase text-sm hover:bg-accent hover:text-white transition-colors duration-300">
                    Shop The Look
                </a>
            </div>
        </section>
    );
}
