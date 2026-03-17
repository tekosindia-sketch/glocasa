'use client';

export default function FAQPage() {
    const faqs = [
        {
            q: "Is your glass microwave safe?",
            a: "Yes, our Borosilicate glass bodies are completely microwave and oven safe up to 300°C. However, please remove the bamboo lids and silicone seals before heating."
        },
        {
            q: "How long does shipping take within India?",
            a: "Most orders are delivered within 3–5 business days. Premium shipping in metro cities may take only 2 days."
        },
        {
            q: "Are the spice jars airtight?",
            a: "Absolutely. All our jars come with a high-grade silicone ring inside the bamboo lid that creates an airtight seal to keep your spices and grains fresh for months."
        },
        {
            q: "What is your return policy?",
            a: "We offer a 30-day easy return policy for unused products in their original packaging. If you receive a damaged item, we will replace it free of charge immediately."
        },
        {
            q: "Can I use the oil dispenser for balsamic vinegar?",
            a: "Yes, the precision pourer is designed for both oils and vinegars, as well as sauces like soy sauce."
        }
    ];

    return (
        <main className="min-h-screen bg-[#FAFAFA] pt-32 pb-20">
            <div className="max-w-[800px] mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-accent tracking-[0.2em] text-xs font-semibold uppercase mb-4 block">Help Center</span>
                    <h1 className="font-serif text-5xl text-text-main mb-6">Frequently Asked Questions.</h1>
                    <p className="text-text-light text-lg">Detailed answers to everything you need to know about GLOCASA.</p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white border border-divider p-8">
                            <h3 className="font-serif text-xl text-text-main mb-4">{faq.q}</h3>
                            <p className="text-text-light leading-relaxed text-sm">{faq.a}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-10 bg-white border border-divider text-center">
                    <h3 className="font-serif text-2xl text-text-main mb-4">Still have questions?</h3>
                    <p className="text-text-light mb-8">Can't find what you're looking for? Reach out to our team.</p>
                    <a href="/support/contact" className="inline-block px-10 py-4 bg-text-main text-white font-semibold tracking-widest uppercase text-sm hover:bg-accent transition-colors">
                        Contact Support
                    </a>
                </div>
            </div>
        </main>
    );
}
