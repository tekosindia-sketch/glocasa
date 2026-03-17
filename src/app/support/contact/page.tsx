'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp, Package, ShieldCheck, Headphones, Star, ExternalLink, Box } from 'lucide-react';

export default function ContactPage() {
    const [activeSection, setActiveSection] = useState('Care & Durability');
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqData = {
        'Care & Durability': [
            {
                q: "Are GLOCASA glasses dishwasher safe?",
                a: "Yes, all GLOCASA glassware is engineered for durability and is 100% dishwasher safe. Our specialized crystal-tempering process ensures the glass remains clear and scratch-resistant even after hundreds of cycles. We recommend using the top rack for optimal care and avoiding high-heat 'Sanitize' cycles."
            },
            {
                q: "What makes GLOCASA glass \"Premium\"?",
                a: "Our glass is crafted from high-grade Borosilicate 3.3, known for its superior thermal resistance and clarity. Unlike standard soda-lime glass, it can withstand extreme temperature changes from -20°C to 150°C without cracking."
            },
            {
                q: "How should I remove water spots or cloudiness?",
                a: "To restore the brilliant clarity of your glass, soak it in a mixture of warm water and white vinegar for 15 minutes before rinsing. For tough spots, a soft sponge with lemon juice works wonders."
            }
        ],
        'Shipping & Delivery': [
            {
                q: "How does GLOCASA ensure the glass won't break during shipping?",
                a: "We use a proprietary 5-layer drop-tested packaging system. Each vessel is double-boxed with custom-molded biodegradable foam, ensuring a 99.8% safe arrival rate even with standard courier handling."
            },
            {
                q: "Do you offer express delivery?",
                a: "Yes! We offer premium express shipping options for metro cities, typically delivering within 48 hours of order placement."
            }
        ],
        'Returns & Warranty': [
            {
                q: "What is your \"Arrival Guarantee\"?",
                a: "If your product arrives damaged in any way, we will send a free replacement within 24 hours of notification—no questions asked. Just send us a photo of the box and the broken item."
            },
            {
                q: "How do I initiate a return?",
                a: "You can initiate a return directly through the Direct Inquiry form below. Please include your order number and a brief description of the reason for return."
            }
        ]
    };

    const sidebarItems = [
        { name: 'Care & Durability', icon: <Star size={18} /> },
        { name: 'Shipping & Delivery', icon: <Package size={18} /> },
        { name: 'Returns & Warranty', icon: <ShieldCheck size={18} /> },
        { name: 'Contact Specialist', icon: <Headphones size={18} /> }
    ];

    return (
        <main className="min-h-screen bg-[#FDFCFB] pt-32 pb-20">
            {/* Hero Section */}
            <section className="max-w-[1200px] mx-auto px-6 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
                    <div>
                        <span className="text-[#C9A84C] tracking-[0.2em] text-[10px] font-bold uppercase mb-4 block">Help Center</span>
                        <h1 className="font-serif text-5xl md:text-6xl text-text-main mb-6 leading-tight">
                            How can we assist you today?
                        </h1>
                        <p className="text-text-light text-lg leading-relaxed max-w-md">
                            Find expert advice on maintaining your GLOCASA glassware, tracking your orders, and understanding our premium quality standards.
                        </p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                        <Image src="/brain/media__1773400990172.png" alt="Support Hero" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/10" />
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16 items-start">
                {/* Sidebar */}
                <aside className="space-y-8 sticky top-32">
                    <div className="bg-white rounded-3xl p-6 shadow-soft border border-divider">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-text-light mb-6 px-2">Support Topics</h3>
                        <nav className="space-y-2">
                            {sidebarItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => setActiveSection(item.name)}
                                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all text-sm font-medium ${activeSection === item.name
                                        ? 'bg-[#FAF6ED] text-[#B8963D] shadow-sm'
                                        : 'text-text-light hover:bg-[#F9FAFB] hover:text-text-main'
                                        }`}
                                >
                                    <span className={activeSection === item.name ? 'text-[#B8963D]' : 'text-gray-400'}>
                                        {item.icon}
                                    </span>
                                    {item.name}
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="bg-[#FAF6ED] rounded-3xl p-8 border border-[#E9E1D1] text-center">
                        <Box className="mx-auto text-[#B8963D] mb-4" size={32} />
                        <h4 className="font-serif text-xl text-text-main mb-2">Explore Collections</h4>
                        <p className="text-text-light text-xs mb-6 leading-relaxed">Discover our full range of crystal glassware and kitchen essentials.</p>
                        <a
                            href="/collection"
                            className="bg-[#1A1F2C] text-white w-full py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-black transition-all"
                        >
                            View Our Shop
                        </a>
                    </div>
                </aside>

                {/* FAQ / Direct Inquiry */}
                <div className="space-y-20">
                    {activeSection !== 'Contact Specialist' ? (
                        <div className="space-y-12">
                            <div className="flex items-center gap-4">
                                <span className="text-[#B8963D]">
                                    {sidebarItems.find(i => i.name === activeSection)?.icon}
                                </span>
                                <h2 className="font-serif text-3xl text-text-main">{activeSection}</h2>
                            </div>

                            <div className="space-y-4">
                                {faqData[activeSection as keyof typeof faqData]?.map((faq, i) => (
                                    <div key={i} className="bg-white rounded-2xl border border-divider overflow-hidden transition-all hover:shadow-md">
                                        <button
                                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                            className="w-full flex items-center justify-between p-6 text-left"
                                        >
                                            <span className="font-semibold text-text-main pr-8">{faq.q}</span>
                                            {openIndex === i ? <ChevronUp size={20} className="text-accent shrink-0" /> : <ChevronDown size={20} className="text-gray-400 shrink-0" />}
                                        </button>
                                        {openIndex === i && (
                                            <div className="px-6 pb-6 text-text-light text-sm leading-relaxed border-t border-gray-50 pt-4">
                                                {faq.a}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="bg-[#FAF9F6] rounded-[40px] p-10 md:p-16 border border-divider text-center">
                            <h2 className="font-serif text-4xl text-text-main mb-4">Direct Inquiry</h2>
                            <p className="text-text-light text-sm mb-12 max-w-md mx-auto">
                                Can't find what you're looking for? Send a message to our hospitality specialists and we'll get back to you within 24 hours.
                            </p>

                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#B8963D]">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-xl border border-divider focus:outline-none focus:border-accent bg-white text-sm" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#B8963D]">Order ID (Optional)</label>
                                    <input type="text" placeholder="123-456789-000" className="w-full px-6 py-4 rounded-xl border border-divider focus:outline-none focus:border-accent bg-white text-sm" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#B8963D]">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-xl border border-divider focus:outline-none focus:border-accent bg-white text-sm" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#B8963D]">Message</label>
                                    <textarea rows={4} placeholder="Describe your inquiry in detail..." className="w-full px-6 py-4 rounded-xl border border-divider focus:outline-none focus:border-accent bg-white text-sm resize-none"></textarea>
                                </div>
                                <div className="md:col-span-2 pt-6">
                                    <button className="w-full bg-[#D1B06B] hover:bg-[#B8963D] text-white py-5 rounded-xl text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-lg hover:shadow-xl">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
