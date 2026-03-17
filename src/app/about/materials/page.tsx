'use client';

export default function MaterialsPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-20">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <span className="text-accent tracking-[0.2em] text-xs font-semibold uppercase mb-4 block">Materials & Origin</span>
                    <h1 className="font-serif text-5xl md:text-6xl text-text-main mb-8 leading-tight">Uncompromising Integrity.</h1>
                    <p className="text-text-light text-xl leading-relaxed">
                        The quality of our products is defined by the quality of our base materials. We use only the finest food-grade glass and natural wood to ensure a lifetime of safe usage.
                    </p>
                </div>

                <div className="space-y-24">
                    {/* Material 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="bg-secondary-bg p-12 aspect-video flex items-center justify-center border border-divider">
                            <h3 className="font-serif text-3xl font-light italic">Borosilicate 3.3</h3>
                        </div>
                        <div>
                            <h2 className="font-serif text-3xl text-text-main mb-6">Borosilicate Glass</h2>
                            <p className="text-text-light mb-4 leading-relaxed">
                                Unlike standard soda-lime glass, Borosilicate glass contains boric oxide, which makes it highly resistant to thermal shock. This means you can pour boiling liquids into our jars without worrying about cracks.
                            </p>
                            <ul className="space-y-3 text-sm text-text-light">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Lead-free and BPA-free</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Non-porous (doesn't absorb odors)</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Microwave and dishwasher safe</li>
                            </ul>
                        </div>
                    </div>

                    {/* Material 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="font-serif text-3xl text-text-main mb-6">Natural Bamboo</h2>
                            <p className="text-text-light mb-4 leading-relaxed">
                                Our lids are carved from solid, sustainably sourced bamboo. Known as "nature's gold," bamboo is naturally antimicrobial and extremely durable, making it the perfect companion for our glass.
                            </p>
                            <ul className="space-y-3 text-sm text-text-light">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Hand-polished finish</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Naturally water-resistant</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /> Renewable and carbon-sequestering</li>
                            </ul>
                        </div>
                        <div className="bg-[#FAF7F0] p-12 aspect-video flex items-center justify-center border border-[#E9E1D1] order-1 md:order-2">
                            <h3 className="font-serif text-3xl font-light italic text-[#8B735B]">Organic Bamboo</h3>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
