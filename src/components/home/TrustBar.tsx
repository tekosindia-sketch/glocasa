'use client';

import { useIntersectionObserver } from '../ui/useIntersectionObserver';
import { ShieldCheck, Leaf, LayoutGrid, Heart } from 'lucide-react';

export default function TrustBar() {
    const { targetRef, isIntersecting } = useIntersectionObserver();

    const trustItems = [
        { icon: <ShieldCheck size={28} strokeWidth={1.5} />, title: "Premium Quality Glass" },
        { icon: <Leaf size={28} strokeWidth={1.5} />, title: "100% Food Safe Materials" },
        { icon: <LayoutGrid size={28} strokeWidth={1.5} />, title: "Modern Kitchen Design" },
        { icon: <Heart size={28} strokeWidth={1.5} />, title: "Loved by Thousands" }
    ];

    return (
        <section className="bg-text-main text-white py-12 px-6 border-b border-white/10">
            <div
                ref={targetRef}
                className={`max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 
          reveal ${isIntersecting ? 'active' : ''}`}
            >
                {trustItems.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center gap-4">
                        <div className="text-accent">
                            {item.icon}
                        </div>
                        <h3 className="font-serif text-sm tracking-wide text-white/90 uppercase">{item.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
