'use client';

import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../ui/useIntersectionObserver';
import ProductCard from '../ui/ProductCard';
import { getAllProducts, mapShopifyProduct } from '@/lib/shopify';
import Link from 'next/link';

export default function BestSellers() {
    const { targetRef, isIntersecting } = useIntersectionObserver();
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const shopifyProducts = await getAllProducts();
                const mapped = shopifyProducts.map(mapShopifyProduct).filter(Boolean);
                setProducts(mapped.slice(0, 3));
            } catch (error) {
                console.error('Error fetching best sellers:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    if (loading) return <div className="py-24 text-center">Loading Favorites...</div>;

    return (
        <section id="products" className="py-24 px-6 bg-secondary-bg">
            <div className="max-w-[1400px] mx-auto">
                <div
                    ref={targetRef}
                    className={`flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal ${isIntersecting ? 'active' : ''}`}
                >
                    <div className="max-w-xl">
                        <span className="text-accent tracking-[0.2em] text-xs font-semibold uppercase mb-4 block">Most Loved</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-text-main leading-tight mb-6">Customer Favorites</h2>
                        <p className="text-text-light">Discover the glass kitchenware essentials that our community of home chefs and organizers love the most.</p>
                    </div>
                    <Link href="/products" className="group flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-text-main hover:text-accent transition-colors pb-2 border-b border-accent/30 hover:border-accent">
                        View All Products
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`reveal reveal-delay-${index + 1} ${isIntersecting ? 'active' : ''}`}
                        >
                            <ProductCard
                                id={product.id}
                                handle={product.handle}
                                name={product.name}
                                price={product.price}
                                priceNumber={product.priceNumber}
                                image={product.images[0]}
                                rating={product.rating}
                                reviews={product.reviewsCount}
                                badge={product.badge}
                                benefits={product.benefits}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
