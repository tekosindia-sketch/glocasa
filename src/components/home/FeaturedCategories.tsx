'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useIntersectionObserver } from '../ui/useIntersectionObserver';
import { getAllProducts, mapShopifyProduct } from '@/lib/shopify';

export default function FeaturedCategories() {
    const { targetRef, isIntersecting } = useIntersectionObserver();
    const [categories, setCategories] = useState<any[]>([]);

    useEffect(() => {
        async function load() {
            try {
                const shopifyProducts = await getAllProducts();
                const mapped = shopifyProducts.map(mapShopifyProduct).filter(Boolean);

                // For now, we'll use the available products as "Featured"
                // or fall back to static definitions if we want specific categories
                const cats = [
                    {
                        title: "Glass Oil Dispensers",
                        image: "/images/oil_dispenser.png",
                        handle: "precision-oil-dispenser",
                        classes: "md:col-span-2 md:row-span-2 h-[400px] md:h-auto",
                        bg: "bg-[#F9F6F0]",
                        delay: "reveal-delay-1"
                    },
                    {
                        title: "Spice Jars",
                        image: "/images/spice_jars.png",
                        handle: "minimalist-spice-jars-6",
                        classes: "md:col-span-1 md:row-span-1 h-[300px]",
                        bg: "bg-[#F0F5F9]",
                        delay: "reveal-delay-2"
                    },
                    {
                        title: "Storage Containers",
                        image: "/images/containers.png",
                        handle: "tall-storage-canister",
                        classes: "md:col-span-1 md:row-span-1 h-[300px]",
                        bg: "bg-[#F9F0F5]",
                        delay: "reveal-delay-3"
                    }
                ];

                // Check if handles exist in Shopify
                const updatedCats = cats.map(cat => {
                    const match = mapped.find((p: any) => p.handle === cat.handle);
                    return {
                        ...cat,
                        // If no match, we'll either use a fallback handle from Shopify or link to /products
                        href: match ? `/products/${cat.handle}` : (mapped.length > 0 ? `/products/${mapped[0].handle}` : '/products'),
                        image: match ? match.images[0] : cat.image
                    };
                });
                setCategories(updatedCats);
            } catch (error) {
                console.error('Error loading featured categories:', error);
            }
        }
        load();
    }, []);

    if (categories.length === 0) return null;

    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto">

                <div
                    ref={targetRef}
                    className={`text-center max-w-2xl mx-auto mb-16 reveal ${isIntersecting ? 'active' : ''}`}
                >
                    <span className="text-accent tracking-[0.2em] text-xs font-semibold uppercase mb-4 block">Our Collections</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-text-main leading-tight mb-6">Designed for Organization.<br />Crafted for Elegance.</h2>
                    <div className="w-16 h-px bg-accent mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 max-h-[800px]">
                    {categories.map((cat, i) => (
                        <Link
                            key={i}
                            href={cat.href}
                            className={`group relative overflow-hidden flex flex-col items-center justify-center p-8 transition-transform duration-500 hover:-translate-y-1 hover:shadow-hover cursor-pointer ${cat.classes} ${cat.bg} reveal ${cat.delay} ${isIntersecting ? 'active' : ''}`}
                        >
                            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105 mb-12">
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    fill
                                    className="object-contain mix-blend-multiply drop-shadow-2xl"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
                                <h3 className="font-serif text-2xl font-semibold text-text-main group-hover:text-white transition-colors duration-300 drop-shadow-md">{cat.title}</h3>
                                <span className="hidden group-hover:flex items-center justify-center w-12 h-12 bg-white rounded-full text-text-main shadow-lg animate-fade-in-up">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
