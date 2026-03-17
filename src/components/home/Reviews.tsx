'use client';

import { useIntersectionObserver } from '../ui/useIntersectionObserver';
import { Star } from 'lucide-react';

const reviews = [
    {
        name: "Priya Sharma",
        location: "Mumbai, India",
        text: "Bahut hi sundar product hai! Iske saath oil dispense karna bohot aasaan ho gaya. Meri kitchen ka look bilkul badal gaya hai.",
        rating: 5
    },
    {
        name: "Sarah Jenkins",
        location: "New York, USA",
        text: "These oil dispensers completely changed my kitchen counters. No more messy rings, perfectly clean aesthetic.",
        rating: 5
    },
    {
        name: "Rajiv Menon",
        location: "Bengaluru, India",
        text: "Quality ekdam first class hai — glass thick hai aur spout drip free hai. Highly recommended for every modular kitchen.",
        rating: 5
    }
];

export default function Reviews() {
    const { targetRef, isIntersecting } = useIntersectionObserver();

    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div
                    ref={targetRef}
                    className={`text-center max-w-2xl mx-auto mb-16 reveal ${isIntersecting ? 'active' : ''}`}
                >
                    <span className="text-accent tracking-[0.2em] text-xs font-semibold uppercase mb-4 block">Testimonials</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-text-main leading-tight mb-6">Loved by Thousands of Homes.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <div
                            key={i}
                            className={`glass-card p-10 reveal reveal-delay-${i + 1} ${isIntersecting ? 'active' : ''}`}
                        >
                            <div className="flex text-accent mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" strokeWidth={1.5} />
                                ))}
                            </div>
                            <p className="font-serif text-lg text-text-main italic leading-relaxed mb-8">"{review.text}"</p>
                            <div>
                                <p className="font-sans font-semibold text-text-main mb-1">{review.name}</p>
                                <p className="text-xs text-text-light uppercase tracking-wider">{review.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
