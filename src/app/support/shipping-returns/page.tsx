'use client';

export default function ShippingPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-20">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <span className="text-accent tracking-[0.2em] text-xs font-semibold uppercase mb-4 block">Orders & Deliveries</span>
                    <h1 className="font-serif text-5xl md:text-6xl text-text-main mb-8 leading-tight">Shipping & Returns.</h1>
                    <p className="text-text-light text-xl leading-relaxed">
                        We take extreme care in packaging our glass products to ensure they reach you in pristine condition. Here's everything you need to know about our shipping and return policies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div className="space-y-8">
                        <div>
                            <h2 className="font-serif text-2xl text-text-main mb-4 border-b border-divider pb-2">Shipping Information</h2>
                            <div className="space-y-4 text-sm text-text-light leading-relaxed">
                                <p><strong>Pan-India Delivery:</strong> We ship to over 25,000+ pincodes across India.</p>
                                <p><strong>Shipping Cost:</strong> Free shipping on all orders above ₹999. For orders below ₹999, a flat fee of ₹99 is applicable.</p>
                                <p><strong>Delivery Time:</strong> Orders are processed within 24 hours. Delivery typically takes 3–5 business days depending on your location.</p>
                                <p><strong>Secure Packaging:</strong> We use 5-ply reinforced cardboard boxes and specialized paper cushioning to protect our glass items.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h2 className="font-serif text-2xl text-text-main mb-4 border-b border-divider pb-2">Returns & Refunds</h2>
                            <div className="space-y-4 text-sm text-text-light leading-relaxed">
                                <p><strong>30-Day Policy:</strong> If you're not completely satisfied, you can return your unused product within 30 days of delivery.</p>
                                <p><strong>Transit Damage:</strong> If you receive a broken or damaged glass item, please email us a clear photo within 48 hours. We will send a free replacement immediately.</p>
                                <p><strong>Easy Pickup:</strong> We arrange for a reverse pickup from your address for all returns.</p>
                                <p><strong>Refunds:</strong> Once the item is inspected, refunds are processed within 5–7 business days to your original payment method.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-secondary-bg p-12 text-center border border-divider">
                    <p className="text-text-main font-serif text-xl mb-4 italic">Need to initiate a return?</p>
                    <p className="text-text-light text-sm mb-6">Contact us at <strong>returns@glocasa.com</strong> with your order number.</p>
                </div>
            </div>
        </main>
    );
}
