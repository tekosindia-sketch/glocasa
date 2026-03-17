'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface ProductGalleryProps {
    images: string[];
    name: string;
    badge?: string;
}

export default function ProductGallery({ images, name, badge }: ProductGalleryProps) {
    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-white border border-divider overflow-hidden flex items-center justify-center group">
                {badge && (
                    <div className="absolute top-5 left-5 z-20 bg-text-main text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 flex items-center gap-1.5">
                        <Star size={9} fill="currentColor" /> {badge}
                    </div>
                )}
                <div className="relative w-full h-full p-10">
                    <Image
                        src={activeImage}
                        alt={name}
                        fill
                        priority
                        className="object-contain mix-blend-multiply drop-shadow-2xl transition-all duration-500 ease-out"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveImage(img)}
                            className={`relative aspect-square bg-white border-2 transition-all duration-300 overflow-hidden ${activeImage === img ? 'border-accent ring-1 ring-accent/20' : 'border-divider hover:border-text-light'
                                }`}
                        >
                            <Image
                                src={img}
                                alt={`View ${i + 1}`}
                                fill
                                className={`object-contain mix-blend-multiply p-3 transition-transform duration-300 ${activeImage === img ? 'scale-90' : 'hover:scale-110'
                                    }`}
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
