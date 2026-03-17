import { getProductByHandle, getAllProducts, mapShopifyProduct } from '@/lib/shopify';
import { notFound } from 'next/navigation';
import ProductDetailClient from '@/components/home/ProductDetailClient';
import ProductReviews from '@/components/home/ProductReviews';
import ProductGallery from '@/components/home/ProductGallery';
import { Star, Truck, ShieldCheck, ChevronRight } from 'lucide-react';

export async function generateStaticParams() {
    const products = await getAllProducts();
    return products.map((p: any) => ({ id: p.handle }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params; // id is the handle
    const shopifyProduct = await getProductByHandle(id);
    const product = mapShopifyProduct(shopifyProduct);

    if (!product) return {};
    return {
        title: `${product.name} | GLOCASA`,
        description: product.description,
    };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params; // id is the handle
    const shopifyProduct = await getProductByHandle(id);
    const product = mapShopifyProduct(shopifyProduct);

    if (!product) notFound();
    const p = product!;

    return (
        <main className="min-h-screen bg-[#FAFAFA] pt-[88px]">

            {/* Breadcrumb */}
            <div className="border-b border-divider bg-white">
                <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center text-xs text-text-light uppercase tracking-widest">
                    <a href="/" className="hover:text-accent transition-colors">Home</a>
                    <ChevronRight size={12} className="mx-2" />
                    <a href="/products" className="hover:text-accent transition-colors">Products</a>
                    <ChevronRight size={12} className="mx-2" />
                    <span className="text-text-main font-semibold">{p.name}</span>
                </div>
            </div>

            {/* Main Product Grid */}
            <div className="max-w-[1400px] mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Gallery */}
                <ProductGallery images={p.images} name={p.name} badge={p.badge} />

                {/* Details */}
                <div className="flex flex-col py-2">
                    <span className="text-accent tracking-[0.25em] text-[11px] font-bold uppercase mb-3">{p.category}</span>
                    <h1 className="font-serif text-4xl md:text-5xl text-text-main leading-tight mb-3">{p.name}</h1>
                    <p className="font-semibold text-3xl text-text-main mb-5">{p.price}</p>

                    <div className="flex items-center gap-2 mb-7 pb-7 border-b border-divider">
                        <div className="flex text-[#C9A84C]">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={15} fill={i < Math.floor(p.rating) ? 'currentColor' : 'none'} strokeWidth={1.5} />
                            ))}
                        </div>
                        <span className="text-sm text-text-light">{p.rating} · {p.reviewsCount} verified reviews</span>
                    </div>

                    <p className="text-text-light leading-relaxed mb-9 text-[15px]">{p.description}</p>

                    {/* Benefits */}
                    <div className="mb-9 p-5 bg-white border border-divider">
                        <h3 className="text-[11px] font-bold tracking-widest uppercase text-text-main mb-4">Key Benefits</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-text-light">
                            {p.benefits.map((b: string, i: number) => (
                                <li key={i} className="flex items-center gap-2.5">
                                    <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full shrink-0"></span>
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Interactive Cart Buttons */}
                    <ProductDetailClient product={p as any} />

                    {/* Trust Bar */}
                    <div className="grid grid-cols-2 gap-3 mb-9">
                        <div className="flex items-center gap-2.5 text-[13px] text-text-main bg-white border border-divider px-4 py-3">
                            <Truck className="text-[#C9A84C] shrink-0" size={18} /> Free Shipping
                        </div>
                        <div className="flex items-center gap-2.5 text-[13px] text-text-main bg-white border border-divider px-4 py-3">
                            <ShieldCheck className="text-[#C9A84C] shrink-0" size={18} /> 30-Day Returns
                        </div>
                    </div>

                    {/* Specifications Accordion */}
                    <div className="border-t border-divider">
                        {Object.entries(p.specifications).map(([key, val]) => (
                            <details key={key} className="border-b border-divider group">
                                <summary className="flex justify-between items-center cursor-pointer py-4 list-none">
                                    <span className="font-semibold text-[11px] uppercase tracking-widest text-text-main capitalize">{key}</span>
                                    <span className="text-[#C9A84C] text-xl font-light transition-transform duration-300 group-open:rotate-45">+</span>
                                </summary>
                                <p className="pb-4 text-sm text-text-light leading-relaxed">{val as string}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <ProductReviews reviews={p.reviews} productName={p.name} rating={p.rating} reviewsCount={p.reviewsCount} />
        </main>
    );
}
