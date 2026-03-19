import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-text-main text-white py-20 px-6">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="font-serif text-3xl font-semibold tracking-wide block mb-4">GLOCASA.</Link>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">Elevate your kitchen with premium, food-safe glass storage and accessories designed for the modern home.</p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/glocasa_glass/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                    </div>
                </div>

                <div>
                    <h4 className="font-serif text-lg mb-6">Shop</h4>
                    <ul className="space-y-4">
                        <li><Link href="#products" className="text-gray-400 text-sm hover:text-white hover:pl-2 transition-all">Glass Oil Dispensers</Link></li>
                        <li><Link href="#products" className="text-gray-400 text-sm hover:text-white hover:pl-2 transition-all">Spice Jars</Link></li>
                        <li><Link href="#products" className="text-gray-400 text-sm hover:text-white hover:pl-2 transition-all">Storage Containers</Link></li>
                        <li><Link href="#products" className="text-gray-400 text-sm hover:text-white hover:pl-2 transition-all">Accessories</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-serif text-lg mb-6">About</h4>
                    <ul className="space-y-4">
                        <li><Link href="/about/story" className="text-gray-400 text-sm hover:text-white hover:pl-2 transition-all">Our Story</Link></li>
                        <li><Link href="/about/sustainability" className="text-gray-400 text-sm hover:text-white hover:pl-2 transition-all">Sustainability</Link></li>
                        <li><Link href="/about/materials" className="text-gray-400 text-sm hover:text-white hover:pl-2 transition-all">Materials</Link></li>
                        <li><Link href="/about/careers" className="text-gray-400 text-sm hover:text-white hover:pl-2 transition-all">Careers</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-serif text-lg mb-6">Support</h4>
                    <ul className="space-y-4">
                        <li><Link href="/support/contact" className="text-gray-400 text-sm hover:text-white hover:pl-2 transition-all">Contact Us</Link></li>
                        <li><Link href="/support/faq" className="text-gray-400 text-sm hover:text-white hover:pl-2 transition-all">FAQ</Link></li>
                        <li><Link href="/support/shipping-returns" className="text-gray-400 text-sm hover:text-white hover:pl-2 transition-all">Shipping & Returns</Link></li>
                        <li><Link href="/support/care-instructions" className="text-gray-400 text-sm hover:text-white hover:pl-2 transition-all">Care Instructions</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} GLOCASA. All rights reserved.</p>
            </div>
        </footer>
    );
}
