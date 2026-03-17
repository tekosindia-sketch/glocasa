'use client';

import { useIntersectionObserver } from '../ui/useIntersectionObserver';
import { Shield, Sparkles, RefreshCw, Droplet } from 'lucide-react';

const features = [
    {
        icon: <Shield size={32} strokeWidth={1.5} />,
        title: "100% Food Grade Glass",
        desc: "Crafted from premium borosilicate glass, ensuring no chemicals leach into your food. Safe, pure, and durable."
    },
    {
        icon: <Sparkles size={32} strokeWidth={1.5} />,
        title: "Chemical Free Storage",
        desc: "Unlike plastics, our glass maintains the original taste and aroma of your ingredients without any health risks."
    },
    {
        icon: <RefreshCw size={32} strokeWidth={1.5} />,
        title: "Sustainable & Reusable",
        desc: "An eco-friendly choice. Reduce plastic waste in your kitchen with our elegant, long-lasting glassware."
    },
    {
        icon: <Droplet size={32} strokeWidth={1.5} />,
        title: "Easy to Clean",
        desc: "Non-porous glass surfaces resist stains and odors, making cleanup effortless and maintaining pristine clarity."
    }
];

export default function WhyGlocasa() {
    const { targetRef, isIntersecting } = useIntersectionObserver();

    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div
                    ref={targetRef}
                    className={`text-center max-w-2xl mx-auto mb-20 reveal ${isIntersecting ? 'active' : ''}`}
                >
                    <span className="text-accent tracking-[0.2em] text-xs font-semibold uppercase mb-4 block">The GLOCASA Difference</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-text-main leading-tight mb-6">Why Choose Glass for Your Kitchen?</h2>
                    <p className="text-text-light text-lg font-light leading-relaxed">It's not just about aesthetics. It's about health, purity, and sustainable living.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className={`text-center group reveal reveal-delay-${(i % 4) + 1} ${isIntersecting ? 'active' : ''}`}
                        >
                            <div className="w-20 h-20 mx-auto rounded-full bg-secondary-bg flex items-center justify-center text-accent mb-6 transition-transform duration-500 group-hover:-translate-y-2 group-hover:bg-[#F0F5F9] group-hover:shadow-soft">
                                {feature.icon}
                            </div>
                            <h3 className="font-serif text-xl font-semibold text-text-main mb-4">{feature.title}</h3>
                            <p className="text-text-light text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
