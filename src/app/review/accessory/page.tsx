'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import BrandFilter from '@/components/BrandFilter';
import ProductCard from '@/components/ProductCard';
import { accessoryReviews, brandLists } from '@/data/reviews';

export default function AccessoryReviewPage() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [comparedItems, setComparedItems] = useState<string[]>([]);

  // Filter reviews by selected brand
  const filteredReviews = selectedBrand
    ? accessoryReviews.filter((review) => review.brand === selectedBrand)
    : accessoryReviews;

  const handleCompareToggle = (id: string, checked: boolean) => {
    if (checked) {
      if (comparedItems.length < 4) {
        setComparedItems([...comparedItems, id]);
      }
    } else {
      setComparedItems(comparedItems.filter((item) => item !== id));
    }
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Breadcrumb */}
      <div className="border-b border-white/10 bg-black/40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-[#ff1744] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Review Accessory</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">📦</span>
            <h1 className="text-5xl font-bebas text-[#ff1744] uppercase tracking-tight">
              Review Accessory
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mb-6">
            Review lengkap riding accessories: action camera, intercom, phone mount, luggage, dan gear lainnya. 
            Tingkatkan pengalaman riding dengan aksesoris yang tepat.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/review/bike"
              className="px-4 py-2 bg-white/10 hover:bg-[#ff1744] text-white rounded-lg transition-colors text-sm"
            >
              Review Motor
            </Link>
            <Link
              href="/review/gear"
              className="px-4 py-2 bg-white/10 hover:bg-[#ff1744] text-white rounded-lg transition-colors text-sm"
            >
              Review Gear
            </Link>
            <Link
              href="/review/helmet"
              className="px-4 py-2 bg-white/10 hover:bg-[#ff1744] text-white rounded-lg transition-colors text-sm"
            >
              Review Helmet
            </Link>
            <Link
              href="/review/comparison"
              className="px-4 py-2 bg-white/10 hover:bg-[#00e5ff] text-white rounded-lg transition-colors text-sm"
            >
              Comparison
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 border-b border-white/10 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Brand Filter */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-gray-400">Filter by Brand:</span>
              <BrandFilter
                brands={brandLists.accessory}
                selectedBrand={selectedBrand}
                onBrandChange={setSelectedBrand}
              />
            </div>

            {/* Results Count */}
            <div className="flex items-center gap-4">
              {comparedItems.length > 0 && (
                <div className="bg-[#00e5ff]/10 border border-[#00e5ff]/30 rounded-lg px-4 py-2">
                  <span className="text-sm text-[#00e5ff] font-bold">
                    {comparedItems.length} item dipilih untuk compare
                  </span>
                </div>
              )}
              <div className="text-sm text-gray-400">
                <span className="font-bold text-white">{filteredReviews.length}</span> reviews
                {selectedBrand && ` (${selectedBrand})`}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredReviews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Tidak ada review untuk brand {selectedBrand}
              </p>
              <button
                onClick={() => setSelectedBrand(null)}
                className="mt-4 px-6 py-2 bg-[#ff1744] hover:bg-[#ff1744]/80 text-white 
                           rounded-lg transition-colors"
              >
                Lihat Semua
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReviews.map((review) => (
                <ProductCard
                  key={review.id}
                  review={review}
                  onCompareToggle={handleCompareToggle}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Accessory Categories */}
      <section className="py-12 border-t border-white/10 bg-gradient-to-b from-black to-[#00e5ff]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bebas text-white mb-4 uppercase">
              📱 Kategori Accessory
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-4 
                              hover:border-[#00e5ff]/50 transition-colors">
                <div className="text-3xl mb-2">📷</div>
                <h3 className="text-sm font-bebas text-white">ACTION CAMERA</h3>
                <p className="text-xs text-gray-400">GoPro, Insta360</p>
              </div>
              <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-4 
                              hover:border-[#00e5ff]/50 transition-colors">
                <div className="text-3xl mb-2">🎧</div>
                <h3 className="text-sm font-bebas text-white">INTERCOM</h3>
                <p className="text-xs text-gray-400">Sena, Cardo</p>
              </div>
              <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-4 
                              hover:border-[#00e5ff]/50 transition-colors">
                <div className="text-3xl mb-2">📱</div>
                <h3 className="text-sm font-bebas text-white">PHONE MOUNT</h3>
                <p className="text-xs text-gray-400">RAM, Quad Lock</p>
              </div>
              <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-4 
                              hover:border-[#00e5ff]/50 transition-colors">
                <div className="text-3xl mb-2">🎒</div>
                <h3 className="text-sm font-bebas text-white">LUGGAGE</h3>
                <p className="text-xs text-gray-400">Givi, SW-Motech</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bebas text-white mb-4 uppercase">
            Level Up Your Ride!
          </h2>
          <p className="text-gray-400 mb-6">
            Accessory yang tepat bisa bikin riding lebih aman, nyaman, dan fun. Temukan yang cocok buat kamu!
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#ff1744] hover:bg-[#ff1744]/80 text-white 
                       font-bold rounded-lg transition-all duration-300 
                       hover:shadow-[0_0_20px_rgba(255,23,68,0.5)]"
          >
            Request Review
          </Link>
        </div>
      </section>
    </main>
  );
}
