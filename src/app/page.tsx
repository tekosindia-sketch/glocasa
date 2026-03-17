import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import BestSellers from '@/components/home/BestSellers';
import WhyGlocasa from '@/components/home/WhyGlocasa';
import LifestyleSection from '@/components/home/LifestyleSection';
import ProductHighlight from '@/components/home/ProductHighlight';
import Reviews from '@/components/home/Reviews';
import BrandStory from '@/components/home/BrandStory';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-bg">
      <div className="pt-[80px]">
        <Hero />
        <TrustBar />
        <FeaturedCategories />
        <BestSellers />
        <WhyGlocasa />
        <LifestyleSection />
        <ProductHighlight />
        <Reviews />
        <BrandStory />
        <FinalCTA />
      </div>
    </main>
  );
}
