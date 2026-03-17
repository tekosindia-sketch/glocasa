'use client';

import { useCart } from '@/lib/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

export default function CartDrawer() {
    const { items, isOpen, closeCart, removeItem, updateQuantity, checkout, totalItems, totalPrice } = useCart();

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={closeCart}
            />

            {/* Drawer Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-full max-w-[420px] bg-white z-[70] flex flex-col shadow-2xl transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-6 border-b border-divider">
                    <div className="flex items-center gap-3">
                        <ShoppingBag size={22} strokeWidth={1.5} />
                        <h2 className="font-serif text-xl">Your Cart</h2>
                        {totalItems > 0 && (
                            <span className="bg-accent text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </div>
                    <button onClick={closeCart} className="text-text-light hover:text-text-main transition-colors">
                        <X size={22} />
                    </button>
                </div>

                {/* Items */}
                <div className="flex-1 overflow-y-auto px-6 py-4">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center gap-6">
                            <ShoppingBag size={48} strokeWidth={1} className="text-gray-200" />
                            <div>
                                <p className="font-serif text-xl text-text-main mb-2">Your cart is empty</p>
                                <p className="text-text-light text-sm">Add some premium glass kitchenware to get started.</p>
                            </div>
                            <button onClick={closeCart} className="px-8 py-3 bg-text-main text-white text-sm font-semibold tracking-widest uppercase hover:bg-accent transition-colors">
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        <div className="divide-y divide-divider">
                            {items.map(item => (
                                <div key={item.id} className="flex gap-4 py-5">
                                    <Link href={`/products/${item.id}`} onClick={closeCart} className="relative w-20 h-20 bg-secondary-bg border border-divider shrink-0 overflow-hidden">
                                        <Image src={item.image} alt={item.name} fill className="object-contain mix-blend-multiply p-2" />
                                    </Link>
                                    <div className="flex-1 min-w-0">
                                        <Link href={`/products/${item.id}`} onClick={closeCart}>
                                            <p className="font-serif text-base text-text-main leading-tight mb-1 hover:text-accent transition-colors">{item.name}</p>
                                        </Link>
                                        <p className="text-accent font-semibold text-sm mb-3">{item.price}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center border border-divider">
                                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 text-text-light hover:text-text-main">
                                                    <Minus size={14} />
                                                </button>
                                                <span className="px-3 py-1 text-sm font-semibold border-x border-divider">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 text-text-light hover:text-text-main">
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                            <button onClick={() => removeItem(item.id)} className="text-xs text-text-light hover:text-red-500 transition-colors">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="border-t border-divider px-6 py-6 space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="font-sans text-text-light text-sm uppercase tracking-wide">Subtotal</span>
                            <span className="font-serif text-xl font-semibold text-text-main">₹{totalPrice.toLocaleString('en-IN')}</span>
                        </div>
                        <p className="text-xs text-text-light">Taxes and shipping calculated at checkout.</p>
                        <button
                            onClick={() => checkout()}
                            className="w-full block text-center px-6 py-4 bg-text-main text-white font-semibold tracking-widest uppercase text-sm hover:bg-accent transition-colors"
                        >
                            Proceed to Checkout
                        </button>
                        <button
                            onClick={closeCart}
                            className="w-full text-center px-6 py-3 border border-divider text-text-main text-sm font-semibold tracking-widest uppercase hover:bg-secondary-bg transition-colors"
                        >
                            Continue Shopping
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
