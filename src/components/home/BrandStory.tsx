'use client';

import { useIntersectionObserver } from '../ui/useIntersectionObserver';

export default function BrandStory() {
    const { targetRef, isIntersecting } = useIntersectionObserver();

    return (
        <section
            id="about"
            className="py-32 px-6 bg-[#F9F6F0] relative overflow-hidden flex items-center justify-center min-h-[600px]"
        >
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E9EEF5] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div
                ref={targetRef}
                className={`relative z-10 max-w-4xl mx-auto text-center reveal ${isIntersecting ? 'active' : ''}`}
            >
                <span className="text-accent tracking-[0.2em] text-xs font-semibold uppercase mb-6 block">Our Story</span>
                <h2 className="font-serif text-4xl md:text-5xl text-text-main leading-relaxed mb-10">
                    "We believe the kitchen is the heart of the home, and it deserves to be both safe and beautiful. GLOCASA was born from a desire to eliminate plastics and elevate everyday culinary experiences through the purity of glass."
                </h2>
                <div className="flex flex-col items-center">
                    <span className="w-[1px] h-12 bg-accent mb-6"></span>
                    <span className="font-sans text-sm font-semibold tracking-[0.2em] uppercase text-text-main">The GLOCASA Team</span>
                </div>
            </div>
        </section>
    );
}
