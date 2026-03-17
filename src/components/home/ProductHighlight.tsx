'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useIntersectionObserver } from '../ui/useIntersectionObserver';
import { useCart } from '@/lib/CartContext';
import { getAllProducts, mapShopifyProduct } from '@/lib/shopify';

export default function ProductHighlight() {
    const { targetRef, isIntersecting } = useIntersectionObserver();
    const { checkout } = useCart();
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchHighlight() {
            try {
                const shopifyProducts = await getAllProducts();
                if (shopifyProducts.length > 0) {
                    const mapped = mapShopifyProduct(shopifyProducts[0]);
                    setProduct(mapped);
                }
            } catch (error) {
                console.error('Error fetching highlight product:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchHighlight();
    }, []);

    const handleBuyNow = async () => {
        if (product) {
            await checkout({ variantId: product.id, quantity: 1 });
        }
    };

    if (loading || !product) return null;

    return (
        <section className="py-24 px-6 bg-[#F6FAFF] overflow-hidden">
            <div
                ref={targetRef}
                className={`max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal ${isIntersecting ? 'active' : ''}`}
            >
                <Link href={`/products/${product.handle}`} className="block relative h-[600px] bg-white border border-divider flex items-center justify-center p-12 group cursor-pointer">
                    <div className="absolute inset-0 z-0 bg-gradient-to-tr from-accent/5 to-transparent" />
                    <div className="relative z-10 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                        <Image
                            src={product.images[0] || "/images/oil_dispenser.png"}
                            alt={product.name}
                            fill
                            className="object-contain mix-blend-multiply drop-shadow-2xl"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </Link>

                <div className="flex flex-col">
                    <span className="text-accent tracking-[0.2em] text-xs font-semibold uppercase mb-4 block">Signature Edition</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-text-main leading-tight mb-6">{product.name}</h2>
                    <p className="text-text-light text-lg leading-relaxed mb-8">{product.description.slice(0, 150)}...</p>

                    <ul className="mb-10 space-y-6">
                        {product.benefits.slice(0, 3).map((benefit: string, i: number) => (
                            <li key={i} className="flex flex-col">
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span>
                                    <strong className="font-sans font-semibold text-text-main">{benefit}</strong>
                                </div>
                                <p className="text-text-light text-sm pl-4">Engineered for quality and lasting durability in your modern kitchen.</p>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-6">
                        <button
                            onClick={handleBuyNow}
                            className="px-10 py-4 bg-text-main text-white font-semibold tracking-wide uppercase text-sm hover:bg-accent transition-colors duration-300"
                        >
                            Buy it Now — {product.price}
                        </button>
                        <Link
                            href={`/products/${product.handle}`}
                            className="text-text-main font-medium uppercase tracking-wide text-sm pb-1 border-b border-text-main hover:text-accent hover:border-accent transition-colors"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

