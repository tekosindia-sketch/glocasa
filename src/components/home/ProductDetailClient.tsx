'use client';

import { useState } from 'react';
import { Minus, Plus, ShoppingCart, Check } from 'lucide-react';
import { useCart } from '@/lib/CartContext';

export default function ProductDetailClient({ product }: { product: any }) {
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);
    const { addItem, checkout } = useCart();

    const handleAddToCart = () => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            priceNumber: product.priceNumber,
            image: product.images[0],
        });
        setAdded(true);
        setTimeout(() => setAdded(false), 2500);
    };

    const handleBuyNow = async () => {
        await checkout({
            variantId: product.id,
            quantity: quantity
        });
    };

    return (
        <div className="flex flex-col gap-4 mb-10">
            {/* Quantity + Add to Cart */}
            <div className="flex gap-4 h-14">
                <div className="flex items-center justify-between border border-divider px-4 min-w-[130px] bg-white select-none">
                    <button
                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                        className="text-text-light hover:text-text-main transition-colors p-1"
                    >
                        <Minus size={16} />
                    </button>
                    <span className="font-semibold text-text-main w-8 text-center">{quantity}</span>
                    <button
                        onClick={() => setQuantity(q => q + 1)}
                        className="text-text-light hover:text-text-main transition-colors p-1"
                    >
                        <Plus size={16} />
                    </button>
                </div>

                <button
                    onClick={handleAddToCart}
                    className={`flex-grow relative px-6 py-4 font-semibold tracking-widest uppercase text-sm overflow-hidden transition-all duration-300 flex items-center justify-center gap-2 ${added ? 'bg-green-600 text-white' : 'bg-text-main text-white hover:bg-accent'
                        }`}
                >
                    {added ? (
                        <>
                            <Check size={18} />
                            Added to Cart!
                        </>
                    ) : (
                        <>
                            <ShoppingCart size={18} />
                            Add to Cart
                        </>
                    )}
                </button>
            </div>

            {/* Buy it Now */}
            <button
                onClick={handleBuyNow}
                className="w-full px-6 py-4 bg-accent text-white font-semibold tracking-widest uppercase text-sm transition-opacity duration-300 hover:opacity-90"
            >
                Buy it Now — {product.price}
            </button>
        </div>
    );
}
