import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ui/ProductCard';
import { getAllProducts, mapShopifyProduct } from '@/lib/shopify';

export const metadata = {
    title: "Shop All Products | GLOCASA",
    description: "Browse our complete collection of premium 100% glass kitchenware.",
};

export default async function ProductsPage() {
    const shopifyProducts = await getAllProducts();
    const products = shopifyProducts.map(mapShopifyProduct).filter(Boolean);

    return (
        <main className="min-h-screen bg-primary-bg">
            <Header />

            {/* Page Hero */}
            <div className="pt-36 pb-16 px-6 text-center bg-secondary-bg border-b border-divider">
                <span className="text-accent tracking-[0.2em] text-xs font-semibold uppercase mb-4 block">Our Collection</span>
                <h1 className="font-serif text-5xl md:text-6xl text-text-main mb-4">All Products</h1>
                <p className="text-text-light font-sans max-w-xl mx-auto text-lg">Every item crafted from 100% food-grade glass for a safer, more elegant kitchen.</p>
            </div>

            {/* Filter Bar */}
            <div className="sticky top-[72px] z-30 bg-white border-b border-divider py-4 px-6">
                <div className="max-w-[1400px] mx-auto flex gap-4 overflow-x-auto">
                    {['All', 'Dispensers', 'Jars', 'Storage', 'Accessories'].map(cat => (
                        <button
                            key={cat}
                            className="px-5 py-1.5 text-xs font-semibold tracking-widest uppercase border border-divider whitespace-nowrap hover:bg-text-main hover:text-white hover:border-text-main transition-all duration-200"
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products Grid */}
            <section className="py-20 px-6">
                <div className="max-w-[1400px] mx-auto">
                    <p className="text-sm text-text-light mb-10">{products.length} products</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products.map((product: any) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                handle={product.handle}
                                name={product.name}
                                price={product.price}
                                priceNumber={product.priceNumber}
                                image={product.images[0]}
                                rating={product.rating}
                                reviews={product.reviewsCount}
                                badge={product.badge}
                                benefits={product.benefits}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
