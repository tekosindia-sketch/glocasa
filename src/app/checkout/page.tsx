'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/CartContext';
import { ChevronRight, ShieldCheck, Truck, Lock, CheckCircle } from 'lucide-react';

export default function CheckoutPage() {
    const { items, totalPrice, totalItems } = useCart();
    const [placed, setPlaced] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        firstName: '', lastName: '', email: '', phone: '',
        address: '', city: '', state: '', pincode: '',
        paymentMethod: 'upi',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handlePlaceOrder = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setPlaced(true);
        }, 1800);
    };

    const safeTotalPrice = Number(totalPrice) || 0;
    const shipping = safeTotalPrice > 999 || safeTotalPrice === 0 ? 0 : 99;
    const tax = Math.round(safeTotalPrice * 0.18);
    const grandTotal = safeTotalPrice + shipping + tax;

    if (placed) {
        return (
            <main className="min-h-screen bg-[#FAFAFA] pt-[88px] flex items-center justify-center px-6">
                <div className="max-w-lg w-full text-center py-20">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h1 className="font-serif text-4xl text-text-main mb-4">Order Confirmed!</h1>
                    <p className="text-text-light mb-2">Thank you for your purchase, {form.firstName}.</p>
                    <p className="text-text-light mb-8">A confirmation has been sent to <strong>{form.email}</strong>. Your order will be delivered in <strong>3–5 business days</strong>.</p>
                    <div className="bg-white border border-divider p-6 text-left mb-10">
                        <p className="text-xs uppercase tracking-widest font-semibold text-text-light mb-4">Order Summary</p>
                        {items.map(item => (
                            <div key={item.id} className="flex justify-between text-sm py-2 border-b border-divider last:border-0">
                                <span className="text-text-main">{item.name} × {item.quantity}</span>
                                <span className="font-semibold">₹{(item.priceNumber * item.quantity).toLocaleString('en-IN')}</span>
                            </div>
                        ))}
                        <div className="flex justify-between text-base font-semibold pt-4 mt-2 border-t border-divider">
                            <span>Total Paid</span>
                            <span className="text-[#C9A84C]">₹{grandTotal.toLocaleString('en-IN')}</span>
                        </div>
                    </div>
                    <Link href="/products" className="inline-block px-10 py-4 bg-text-main text-white font-semibold tracking-widest uppercase text-sm hover:bg-accent transition-colors">
                        Continue Shopping
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#FAFAFA] pt-[88px]">

            {/* Breadcrumb */}
            <div className="border-b border-divider bg-white">
                <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center text-xs text-text-light uppercase tracking-widest">
                    <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                    <ChevronRight size={12} className="mx-2" />
                    <Link href="/products" className="hover:text-accent transition-colors">Products</Link>
                    <ChevronRight size={12} className="mx-2" />
                    <span className="text-text-main font-semibold">Checkout</span>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12">

                {/* ——— Left: Form ——— */}
                <form onSubmit={handlePlaceOrder} className="space-y-10">

                    {/* Contact */}
                    <div>
                        <h2 className="font-serif text-2xl text-text-main mb-6 pb-4 border-b border-divider">Contact Information</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { label: 'First Name', name: 'firstName', type: 'text' },
                                { label: 'Last Name', name: 'lastName', type: 'text' },
                                { label: 'Email Address', name: 'email', type: 'email' },
                                { label: 'Phone Number', name: 'phone', type: 'tel' },
                            ].map(f => (
                                <div key={f.name} className="col-span-1">
                                    <label className="block text-[11px] font-semibold uppercase tracking-widest text-text-light mb-2">{f.label}</label>
                                    <input
                                        type={f.type}
                                        name={f.name}
                                        value={(form as any)[f.name]}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-divider bg-white px-4 py-3 text-sm text-text-main placeholder-gray-300 focus:outline-none focus:border-text-main transition-colors"
                                        placeholder={f.label}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Shipping */}
                    <div>
                        <h2 className="font-serif text-2xl text-text-main mb-6 pb-4 border-b border-divider">Shipping Address</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-[11px] font-semibold uppercase tracking-widest text-text-light mb-2">Street Address</label>
                                <input name="address" value={form.address} onChange={handleChange} required
                                    className="w-full border border-divider bg-white px-4 py-3 text-sm focus:outline-none focus:border-text-main transition-colors" placeholder="Building, Street, Area" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {[
                                    { label: 'City', name: 'city' },
                                    { label: 'State', name: 'state' },
                                    { label: 'PIN Code', name: 'pincode' },
                                ].map(f => (
                                    <div key={f.name}>
                                        <label className="block text-[11px] font-semibold uppercase tracking-widest text-text-light mb-2">{f.label}</label>
                                        <input name={f.name} value={(form as any)[f.name]} onChange={handleChange} required
                                            className="w-full border border-divider bg-white px-4 py-3 text-sm focus:outline-none focus:border-text-main transition-colors" placeholder={f.label} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Payment */}
                    <div>
                        <h2 className="font-serif text-2xl text-text-main mb-6 pb-4 border-b border-divider">Payment Method</h2>
                        <div className="space-y-3">
                            {[
                                { id: 'upi', label: 'UPI (Google Pay / PhonePe / Paytm)', icon: '📱' },
                                { id: 'card', label: 'Credit / Debit Card', icon: '💳' },
                                { id: 'cod', label: 'Cash on Delivery', icon: '💵' },
                                { id: 'netbanking', label: 'Net Banking', icon: '🏦' },
                            ].map(method => (
                                <label key={method.id} className={`flex items-center gap-4 p-4 border-2 cursor-pointer transition-all duration-200 ${form.paymentMethod === method.id ? 'border-text-main bg-white' : 'border-divider bg-white hover:border-gray-300'}`}>
                                    <input type="radio" name="paymentMethod" value={method.id} checked={form.paymentMethod === method.id} onChange={handleChange} className="accent-black" />
                                    <span className="text-lg">{method.icon}</span>
                                    <span className="text-sm font-medium text-text-main">{method.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading || items.length === 0}
                        className="w-full py-5 bg-text-main text-white font-semibold tracking-widest uppercase text-sm hover:bg-accent transition-colors disabled:opacity-50 flex items-center justify-center gap-3"
                    >
                        {loading ? (
                            <>
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Placing Order…
                            </>
                        ) : (
                            <>
                                <Lock size={16} /> Place Order · ₹{grandTotal.toLocaleString('en-IN')}
                            </>
                        )}
                    </button>
                </form>

                {/* ——— Right: Order Summary ——— */}
                <div className="lg:sticky lg:top-[100px] h-fit">
                    <div className="bg-white border border-divider p-7">
                        <h2 className="font-serif text-xl text-text-main mb-6 pb-4 border-b border-divider">
                            Order Summary <span className="text-text-light text-sm font-sans">({totalItems} items)</span>
                        </h2>

                        {items.length === 0 ? (
                            <div className="text-center py-10">
                                <p className="text-text-light text-sm mb-4">Your cart is empty.</p>
                                <Link href="/products" className="text-accent text-sm font-semibold underline">Browse Products</Link>
                            </div>
                        ) : (
                            <>
                                <div className="space-y-4 mb-6">
                                    {items.map(item => (
                                        <div key={item.id} className="flex gap-4">
                                            <div className="relative w-16 h-16 bg-secondary-bg border border-divider shrink-0 overflow-hidden">
                                                <Image src={item.image} alt={item.name} fill className="object-contain mix-blend-multiply p-2" />
                                                <span className="absolute -top-2 -right-2 w-5 h-5 bg-text-main text-white text-[10px] font-bold rounded-full flex items-center justify-center">{item.quantity}</span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-text-main leading-tight mb-1 line-clamp-2">{item.name}</p>
                                                <p className="text-xs text-text-light">{item.price} each</p>
                                            </div>
                                            <p className="text-sm font-semibold text-text-main shrink-0">₹{(item.priceNumber * item.quantity).toLocaleString('en-IN')}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-divider pt-5 space-y-3 text-sm">
                                    <div className="flex justify-between text-text-light">
                                        <span>Subtotal</span><span className="text-text-main font-medium">₹{safeTotalPrice.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex justify-between text-text-light">
                                        <span>Shipping</span>
                                        <span className={shipping === 0 ? 'text-green-600 font-medium' : 'text-text-main font-medium'}>
                                            {shipping === 0 ? 'FREE' : `₹${shipping}`}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-text-light">
                                        <span>GST (18%)</span><span className="text-text-main font-medium">₹{tax.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex justify-between font-semibold text-base text-text-main pt-3 border-t border-divider">
                                        <span>Total</span>
                                        <span className="text-[#C9A84C] text-lg">₹{grandTotal.toLocaleString('en-IN')}</span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Trust badges */}
                    <div className="mt-5 p-5 bg-white border border-divider space-y-3">
                        <div className="flex items-center gap-3 text-xs text-text-light">
                            <Truck size={16} className="text-[#C9A84C] shrink-0" />
                            <span>Free shipping on orders above ₹999</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-text-light">
                            <ShieldCheck size={16} className="text-[#C9A84C] shrink-0" />
                            <span>30-day easy returns & refunds</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-text-light">
                            <Lock size={16} className="text-[#C9A84C] shrink-0" />
                            <span>100% secure & encrypted checkout</span>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
