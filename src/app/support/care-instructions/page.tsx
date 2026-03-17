'use client';

export default function CarePage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-20">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <span className="text-accent tracking-[0.2em] text-xs font-semibold uppercase mb-4 block">Longevity Guide</span>
                    <h1 className="font-serif text-5xl md:text-6xl text-text-main mb-8 leading-tight">Caring for Your Glass.</h1>
                    <p className="text-text-light text-xl leading-relaxed">
                        GLOCASA products are built for durability, but a little care goes a long way in maintaining their sparkling clarity and natural finish for years to come.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">
                    {/* Glass Care */}
                    <div className="space-y-6">
                        <div className="bg-[#F6FAFF] p-8 md:p-12 border-l-4 border-accent">
                            <h2 className="font-serif text-2xl text-text-main mb-6 uppercase tracking-wide">Glass Maintenance</h2>
                            <ul className="space-y-6 text-sm text-text-light">
                                <li>
                                    <strong className="block text-text-main mb-1">Dishwasher Use:</strong>
                                    All our glass bodies are dishwasher safe. For best results, place them in the top rack to avoid high-pressure water contact with other heavy items.
                                </li>
                                <li>
                                    <strong className="block text-text-main mb-1">Removing Stains:</strong>
                                    For oil dispensers, soak in warm soapy water with a tablespoon of vinegar to remove any residue before refilling.
                                </li>
                                <li>
                                    <strong className="block text-text-main mb-1">Microwave Safety:</strong>
                                    Glass is microwave safe, but always remove lids and metallic elements first. Avoid heating empty containers.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bamboo Care */}
                    <div className="space-y-6">
                        <div className="bg-[#FAF7F0] p-8 md:p-12 border-l-4 border-[#8B735B]">
                            <h2 className="font-serif text-2xl text-text-main mb-6 uppercase tracking-wide">Bamboo & Wood Care</h2>
                            <ul className="space-y-6 text-sm text-text-light">
                                <li>
                                    <strong className="block text-text-main mb-1">Hand Wash Only:</strong>
                                    Never put bamboo lids in the dishwasher. The heat and prolonged moisture will cause the natural wood to warp or crack.
                                </li>
                                <li>
                                    <strong className="block text-text-main mb-1">Drying:</strong>
                                    Wipe lids with a damp cloth and dry immediately. Ensure they are completely dry before placing them back on the jars.
                                </li>
                                <li>
                                    <strong className="block text-text-main mb-1">Revitalizing:</strong>
                                    Once every few months, you can apply a tiny drop of food-grade mineral oil to the bamboo to keep its natural luster.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-center py-10 border-t border-divider">
                    <p className="text-text-light italic">"Quality materials deserve a quality polish."</p>
                </div>
            </div>
        </main>
    );
}
