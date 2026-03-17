'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/CartContext';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
    id: string; // Variant ID for cart
    handle: string; // Handle for routing
    name: string;
    price: string;
    priceNumber: number;
    image: string;
    rating: number;
    reviews: number;
    badge?: string;
    benefits: string[];
}

export default function ProductCard({ id, handle, name, price, priceNumber, image, rating, reviews, badge, benefits }: ProductCardProps) {
    const { addItem, checkout } = useCart();
    const router = useRouter();

    const handleBuyNow = async (e: React.MouseEvent) => {
        e.preventDefault();
        await checkout({
            variantId: id,
            quantity: 1
        });
    };

    return (
        <div className="group flex flex-col h-full bg-white border border-divider overflow-hidden hover:shadow-hover transition-all duration-500 hover:-translate-y-1">
            {/* Image Container with Shimmer Effect */}
            <Link href={`/products/${handle}`} className="shimmer-container relative h-[350px] w-full bg-secondary-bg overflow-hidden flex items-center justify-center p-6 cursor-pointer">
                {badge && (
                    <div className="absolute top-4 left-4 z-20 bg-text-main text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 flex items-center gap-1.5 shadow-md">
                        <Star size={10} fill="currentColor" /> {badge}
                    </div>
                )}
                <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-contain mix-blend-multiply drop-shadow-xl"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                </div>

                {/* Quick View Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 flex justify-center">
                    <span className="bg-white/90 backdrop-blur text-text-main font-semibold text-sm py-3 px-6 w-full shadow-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
                        View Details
                    </span>
                </div>
            </Link>

            {/* Product Info */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <Link href={`/products/${handle}`}>
                        <h3 className="font-serif text-xl font-semibold text-text-main group-hover:text-accent transition-colors cursor-pointer">{name}</h3>
                    </Link>
                    <span className="font-sans font-medium text-lg text-text-main ml-2 shrink-0">{price}</span>
                </div>

                <div className="flex items-center gap-1.5 mb-4">
                    <div className="flex text-accent">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill={i < Math.floor(rating) ? "currentColor" : "none"} strokeWidth={1.5} />
                        ))}
                    </div>
                    <span className="text-xs text-text-light">{rating} ({reviews})</span>
                </div>

                <ul className="text-sm text-text-light mb-6 space-y-2 flex-grow">
                    {benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-accent rounded-full"></span>
                            {benefit}
                        </li>
                    ))}
                </ul>

                <button
                    onClick={handleBuyNow}
                    className="block w-full relative px-6 py-3.5 bg-text-main text-white font-semibold tracking-wide uppercase text-sm overflow-hidden transition-all duration-300 group/btn mt-auto text-center"
                >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        Buy it Now
                    </span>
                    <div className="absolute inset-0 bg-accent transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover/btn:scale-x-100" />
                </button>
            </div>
        </div>
    );
}

