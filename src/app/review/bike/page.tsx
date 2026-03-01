'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import BrandFilter from '@/components/BrandFilter';
import ProductCard from '@/components/ProductCard';
import { bikeReviews, brandLists } from '@/data/reviews';

export default function BikeReviewPage() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [comparedItems, setComparedItems] = useState<string[]>([]);

  // Filter reviews by selected brand
  const filteredReviews = selectedBrand
    ? bikeReviews.filter((review) => review.brand === selectedBrand)
    : bikeReviews;

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
      <div className="border-b border-white/10 bg-black/80">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-[#ff1744] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Review Motor</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🏍️</span>
            <h1 className="text-5xl font-bebas text-[#ff1744] uppercase tracking-tight">
              Review Motor Sport
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mb-6">
            Ulasan mendalam tentang motor sport terbaru. Tes langsung di jalanan dan sirkuit Indonesia 
            dengan fokus pada performa, handling, fitur, dan value for money.
          </p>
          <div className="flex flex-wrap gap-4">
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
              href="/review/accessory"
              className="px-4 py-2 bg-white/10 hover:bg-[#ff1744] text-white rounded-lg transition-colors text-sm"
            >
              Review Accessory
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
                brands={brandLists.bike}
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

      {/* CTA */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bebas text-white mb-4 uppercase">
            Mau Review Motor Tertentu?
          </h2>
          <p className="text-gray-400 mb-6">
            Kontak kami untuk request review motor spesifik yang ingin kamu lihat.
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
