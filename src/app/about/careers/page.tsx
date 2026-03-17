'use client';

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-20">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <span className="text-accent tracking-[0.2em] text-xs font-semibold uppercase mb-4 block">Join GLOCASA</span>
                    <h1 className="font-serif text-5xl md:text-6xl text-text-main mb-8 leading-tight">Craft Your Future With Us.</h1>
                    <p className="text-text-light text-xl leading-relaxed">
                        We are a community of designers, organizers, and storytellers dedicated to creating a more beautiful and sustainable home. While we don't have active openings today, we are always looking for passionate talent.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div className="bg-secondary-bg p-12 border border-divider">
                        <h2 className="font-serif text-2xl text-text-main mb-6">Our Culture</h2>
                        <p className="text-text-light text-sm leading-relaxed mb-6">
                            At GLOCASA, we value meticulousness, transparency, and a deep respect for the materials we work with. We operate with a small, high-impact team where every voice contributes to our brand's evolution.
                        </p>
                        <ul className="space-y-4 text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Design-First Approach</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Sustainability Mindset</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Collaborative Growth</li>
                        </ul>
                    </div>
                    <div className="border border-divider p-12 flex flex-col justify-center">
                        <h2 className="font-serif text-2xl text-text-main mb-6">Open Applications</h2>
                        <p className="text-text-light text-sm leading-relaxed mb-10">
                            Think you'd be a great fit for our Creative or Operations team? Send your portfolio or CV to our talent team and we'll keep you in mind for future roles.
                        </p>
                        <p className="text-accent font-semibold text-lg">careers@glocasa.com</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
