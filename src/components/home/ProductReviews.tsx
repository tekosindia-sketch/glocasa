import { Star, CheckCircle } from 'lucide-react';
import type { Review } from '@/data/products';

interface ProductReviewsProps {
    reviews: Review[];
    productName: string;
    rating: number;
    reviewsCount: number;
}

export default function ProductReviews({ reviews, productName, rating, reviewsCount }: ProductReviewsProps) {
    return (
        <section className="bg-white border-t border-divider py-20 px-6">
            <div className="max-w-[1200px] mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 pb-10 border-b border-divider">
                    <div>
                        <span className="text-[#C9A84C] tracking-[0.2em] text-[11px] font-bold uppercase mb-3 block">Customer Reviews</span>
                        <h2 className="font-serif text-4xl text-text-main mb-4">What Our Customers Say</h2>
                        <p className="text-text-light text-sm max-w-md">Genuine reviews from verified buyers across India.</p>
                    </div>
                    {/* Summary stats */}
                    <div className="flex items-center gap-6 shrink-0">
                        <div className="text-center">
                            <p className="font-serif text-6xl font-semibold text-text-main leading-none">{rating}</p>
                            <div className="flex justify-center gap-0.5 my-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill={i < Math.floor(rating) ? '#C9A84C' : 'none'} stroke="#C9A84C" strokeWidth={1.5} />
                                ))}
                            </div>
                            <p className="text-text-light text-xs">{reviewsCount} reviews</p>
                        </div>
                    </div>
                </div>

                {/* Review Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reviews.map((review, i) => (
                        <div key={i} className="border border-divider p-7 hover:shadow-hover transition-all duration-300 hover:-translate-y-0.5 bg-[#FAFAFA]">
                            {/* Stars */}
                            <div className="flex gap-0.5 mb-4">
                                {[...Array(5)].map((_, s) => (
                                    <Star key={s} size={13} fill={s < review.rating ? '#C9A84C' : 'none'} stroke="#C9A84C" strokeWidth={1.5} />
                                ))}
                            </div>
                            {/* Review Text */}
                            <p className="text-text-main text-[15px] leading-relaxed mb-5 font-light italic">"{review.text}"</p>
                            {/* Reviewer Info */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-text-main text-sm">{review.name}</p>
                                    <p className="text-text-light text-xs mt-0.5">{review.location}</p>
                                </div>
                                <div className="text-right">
                                    {review.verified && (
                                        <div className="flex items-center gap-1 text-green-600 text-xs mb-1">
                                            <CheckCircle size={12} />
                                            <span className="font-medium">Verified Buyer</span>
                                        </div>
                                    )}
                                    <p className="text-text-light text-xs">{review.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
