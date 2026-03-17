'use client';

export default function SustainabilityPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-20">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <span className="text-accent tracking-[0.2em] text-xs font-semibold uppercase mb-4 block">Our Commitment</span>
                    <h1 className="font-serif text-5xl md:text-6xl text-text-main mb-8 leading-tight">Better for You, Better for the Planet.</h1>
                    <p className="text-text-light text-xl leading-relaxed">
                        At GLOCASA, sustainability isn't a buzzword—it's the foundation of everything we build. We believe that premium design should never come at the cost of the environment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                    {[
                        {
                            title: "Zero Plastic Packaging",
                            desc: "We use 100% recyclable cardboard and paper-based cushioning for all our shipments. No bubble wrap, no plastic tape."
                        },
                        {
                            title: "Infinite Recyclability",
                            desc: "Glass is one of the few materials that can be recycled infinitely without losing its quality or purity."
                        },
                        {
                            title: "Ethical Sourcing",
                            desc: "Our bamboo is sourced from sustainably managed forests, ensuring that we give back more than we take."
                        }
                    ].map((item, i) => (
                        <div key={i} className="border border-divider p-8 hover:shadow-hover transition-all">
                            <h3 className="font-serif text-2xl text-text-main mb-4">{item.title}</h3>
                            <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-serif text-3xl text-text-main mb-6">Built to Last Generations</h2>
                        <p className="text-text-light mb-6 leading-relaxed">
                            The most sustainable product is the one you only have to buy once. By using high-grade Borosilicate glass, we create kitchenware that resists thermal shock and mechanical breakage.
                        </p>
                        <p className="text-text-light leading-relaxed">
                            We design our products to be timeless, moving away from "fast homeware" and towards heirloom-quality pieces that you'll use for decades.
                        </p>
                    </div>
                    <div className="bg-[#F0F5F0] p-12 aspect-video flex items-center justify-center border border-green-100">
                        <span className="text-green-800 font-serif text-3xl italic">100% Eco-Conscious</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
