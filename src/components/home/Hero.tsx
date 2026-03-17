'use client';

import { useIntersectionObserver } from '../ui/useIntersectionObserver';

export default function Hero() {
    const { targetRef, isIntersecting } = useIntersectionObserver();

    return (
        <section
            id="home"
            className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/hero.png')",
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

            {/* Hero Content */}
            <div
                ref={targetRef}
                className={`relative z-10 text-center text-white px-6 w-full max-w-4xl mx-auto flex flex-col items-center
          reveal ${isIntersecting ? 'active' : ''}`}
            >
                <div className="inline-block px-4 py-1.5 border border-white/30 backdrop-blur-md rounded-full text-xs font-semibold tracking-widest uppercase mb-8">
                    The Premium Glassware Collection
                </div>

                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 drop-shadow-lg">
                    Elevate Your Kitchen<br />
                    <span className="italic text-white/90 font-light">With Pure Glass.</span>
                </h1>

                <p className="font-sans text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-12 drop-shadow-md">
                    Discover our curated collection of 100% food-grade glass dispensers, jars, and storage containers designed for the modern, elegant home.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
                    <a
                        href="#products"
                        className="group relative px-10 py-4 bg-white text-text-main font-semibold tracking-wide uppercase text-sm rounded-none overflow-hidden transition-all duration-300 hover:text-white"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Explore Collection
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </span>
                        <div className="absolute inset-0 bg-accent transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center animate-bounce">
                <span className="text-[10px] tracking-widest uppercase mb-2">Scroll to discover</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
            </div>
        </section>
    );
}
