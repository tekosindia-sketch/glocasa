'use client';

import Image from 'next/image';

export default function StoryPage() {
    return (
        <main className="min-h-screen bg-white pb-20 overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 px-6 mb-24">
                <div className="max-w-[1400px] mx-auto relative rounded-[40px] overflow-hidden h-[500px] md:h-[600px] group">
                    <Image
                        src="/brain/story_hero_banner_1773640957289.png"
                        alt="Crafting Clarity"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-20 pb-16">
                        <h1 className="font-serif text-6xl md:text-8xl text-white mb-6 leading-[0.9] tracking-tight">
                            Crafting Clarity
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl font-light italic max-w-xl">
                            Where ancient fire meets modern minimalist design.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pure Glass, Pure Kitchen Section */}
            <section className="max-w-[1200px] mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="pt-10">
                        <span className="text-accent tracking-[0.3em] text-[10px] font-bold uppercase mb-4 block">The Vision</span>
                        <h2 className="font-serif text-5xl md:text-6xl text-text-main mb-8 leading-[1.1]">
                            Pure Glass, <br />
                            <span className="text-accent italic font-light">Pure Kitchen</span>
                        </h2>
                        <div className="space-y-6 text-text-light text-lg leading-relaxed max-w-md">
                            <p>
                                At GLOCASA, we believe that the vessels we use to nourish our families should be as pure as the ingredients within them. Our philosophy centers on the transparency of glass—a material that hides nothing and elevates everything.
                            </p>
                            <p className="border-l-2 border-accent pl-6 italic text-text-main py-2">
                                "We don't just make kitchenware; we curate the atmosphere of the modern home through light and clarity."
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-3xl overflow-hidden aspect-[4/5] relative mt-12 shadow-2xl">
                                <Image src="/brain/lifestyle_modern_kitchen_1773390927087.png" alt="Modern Kitchen" fill className="object-cover" />
                            </div>
                            <div className="rounded-3xl overflow-hidden aspect-[4/5] relative shadow-2xl">
                                <Image src="/brain/hero_glass_kitchenware_1773390782218.png" alt="Glass Purity" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Craft Section */}
            <section className="bg-[#f9f9f9] py-32 px-6 mb-32">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="font-serif text-4xl md:text-5xl text-text-main mb-6">The Craft</h2>
                        <p className="text-text-light max-w-2xl mx-auto text-lg">
                            Every GLOCASA piece is born from fire and refined by hand. Our artisans combine centuries-old glassblowing techniques with precision engineering.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Hand-Blown Mastery",
                                img: "/brain/media__1773395192979.png",
                                desc: "No two pieces are identical. Each vessel carries the subtle breath and unique rhythm of its creator."
                            },
                            {
                                title: "Precision Tempered",
                                img: "/brain/product_oil_dispenser_1773390802435.png",
                                desc: "Engineered for the rigors of modern life. High thermal shock resistance for the transition from flame to fridge."
                            },
                            {
                                title: "Artisanal Finish",
                                img: "/brain/media__1773401146735.png",
                                desc: "Signature hand-painted gold rims using real 24k gold for a touch of timeless luxury."
                            }
                        ].map((item, i) => (
                            <div key={i} className="group cursor-default">
                                <div className="rounded-[40px] overflow-hidden aspect-[4/5] relative mb-8 shadow-lg">
                                    <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                <h3 className="font-serif text-2xl text-text-main mb-3">{item.title}</h3>
                                <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="max-w-[1200px] mx-auto px-6 mb-32">
                <div className="bg-[#FAF9F6] rounded-[60px] p-12 lg:p-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border border-divider">
                    <div>
                        <div className="flex gap-2 mb-8">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                            <div className="w-1.5 h-1.5 bg-accent/30 rounded-full" />
                            <div className="w-1.5 h-1.5 bg-accent/30 rounded-full" />
                        </div>
                        <h2 className="font-serif text-5xl text-text-main mb-8 leading-tight">Our Philosophy</h2>
                        <p className="text-text-light text-lg leading-relaxed mb-10 max-w-md">
                            We believe in the beauty of the essential. By stripping away the synthetic and the opaque, we create space for what matters: the colors of fresh ingredients, the warmth of a shared meal, and the clarity of a conscious home.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {['Non-Porous', 'Toxin Free', 'Odor Resistant'].map((tag) => (
                                <span key={tag} className="px-5 py-2 rounded-full border border-divider text-[10px] font-bold uppercase tracking-widest text-text-main bg-white shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl">
                        <Image src="/brain/media__1773400990172.png" alt="Philosophy" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                        <div className="absolute inset-0 bg-text-main/10" />
                    </div>
                </div>
            </section>

            {/* Sustainability Section */}
            <section className="max-w-[1200px] mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-20 items-center">
                    <div className="rounded-[40px] overflow-hidden aspect-square relative shadow-2xl lg:-ml-20">
                        <Image src="/brain/grid_storage_containers_1773391191520.png" alt="Sustainability" fill className="object-cover" />
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-[1px] bg-accent" />
                            <span className="text-accent tracking-widest text-xs font-bold uppercase">Sustainability</span>
                        </div>
                        <div className="space-y-12">
                            <div>
                                <h3 className="font-serif text-2xl text-text-main mb-4 tracking-tight">Infinite Recyclability</h3>
                                <p className="text-text-light text-sm leading-relaxed">
                                    Glass is 100% recyclable and can be recycled endlessly without loss in quality or purity. We source 40% of our glass from post-consumer recycled cullet.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-serif text-2xl text-text-main mb-4 tracking-tight">Food-Grade Purity</h3>
                                <p className="text-text-light text-sm leading-relaxed">
                                    Our borosilicate glass is free from BPA, lead, and cadmium. It doesn't bleach chemicals into your food, ensuring a healthy kitchen environment for generations.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-serif text-2xl text-text-main mb-4 tracking-tight">Zero-Waste Packaging</h3>
                                <p className="text-text-light text-sm leading-relaxed">
                                    We ship using 100% plastic-free, biodegradable materials. Our goal is to leave a legacy of beauty, not waste.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Quote */}
            <section className="max-w-[1200px] mx-auto px-6 text-center py-20 bg-text-main rounded-[40px] text-white">
                <h2 className="font-serif text-4xl md:text-5xl italic mb-4">Experience the GLOCASA difference.</h2>
                <div className="w-20 h-[1px] bg-accent mx-auto mt-8" />
            </section>
        </main>
    );
}
