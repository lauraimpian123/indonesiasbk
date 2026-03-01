'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { comparisonReviews } from '@/data/reviews';

export default function ComparisonReviewPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Breadcrumb */}
      <div className="border-b border-white/10 bg-black/80">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-[#00e5ff] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Comparison</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">⚖️</span>
            <h1 className="text-5xl font-bebas text-[#00e5ff] uppercase tracking-tight">
              Head-to-Head Comparison
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mb-6">
            Perbandingan langsung produk sejenis: motor vs motor, helmet vs helmet, gear vs gear. 
            Data objektif, tes real-world, dan verdict jujur untuk membantu keputusan pembelian kamu.
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
              href="/review/accessory"
              className="px-4 py-2 bg-white/10 hover:bg-[#ff1744] text-white rounded-lg transition-colors text-sm"
            >
              Review Accessory
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Types */}
      <section className="py-12 border-b border-white/10 bg-gradient-to-b from-black to-[#00e5ff]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bebas text-white mb-8 text-center uppercase">
              🎯 Tipe Comparison
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-6 text-center
                              hover:border-[#00e5ff]/50 transition-all hover:-translate-y-1">
                <div className="text-4xl mb-3">🏍️</div>
                <h3 className="text-lg font-bebas text-[#00e5ff] mb-2">SUPERBIKE SHOWDOWN</h3>
                <p className="text-xs text-gray-400">
                  Litre bike flagship comparison
                </p>
              </div>
              <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-6 text-center
                              hover:border-[#00e5ff]/50 transition-all hover:-translate-y-1">
                <div className="text-4xl mb-3">🪖</div>
                <h3 className="text-lg font-bebas text-[#00e5ff] mb-2">HELMET BATTLE</h3>
                <p className="text-xs text-gray-400">
                  Premium helmet head-to-head
                </p>
              </div>
              <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-6 text-center
                              hover:border-[#00e5ff]/50 transition-all hover:-translate-y-1">
                <div className="text-4xl mb-3">🧥</div>
                <h3 className="text-lg font-bebas text-[#00e5ff] mb-2">GEAR SHOWDOWN</h3>
                <p className="text-xs text-gray-400">
                  Racing suit & boots comparison
                </p>
              </div>
              <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-6 text-center
                              hover:border-[#00e5ff]/50 transition-all hover:-translate-y-1">
                <div className="text-4xl mb-3">🎧</div>
                <h3 className="text-lg font-bebas text-[#00e5ff] mb-2">TECH BATTLE</h3>
                <p className="text-xs text-gray-400">
                  Intercom, camera, accessories
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Articles */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bebas text-white mb-2 uppercase">
              📊 Latest Comparisons
            </h2>
            <p className="text-gray-400 text-sm">
              <span className="font-bold text-white">{comparisonReviews.length}</span> artikel perbandingan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisonReviews.map((review) => (
              <ProductCard
                key={review.id}
                review={review}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Method */}
      <section className="py-12 border-t border-white/10 bg-gradient-to-b from-black to-[#00e5ff]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bebas text-white mb-8 text-center uppercase">
              🔬 Metode Comparison Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-6">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-lg font-bebas text-[#00e5ff] mb-2">OBJECTIVE DATA</h3>
                <p className="text-sm text-gray-300">
                  Spec sheet lengkap, measurement akurat, dan benchmark test yang terukur.
                </p>
              </div>
              <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-6">
                <div className="text-3xl mb-3">🏁</div>
                <h3 className="text-lg font-bebas text-[#00e5ff] mb-2">REAL-WORLD TEST</h3>
                <p className="text-sm text-gray-300">
                  Tes langsung di jalanan dan sirkuit Indonesia, bukan cuma baca spec sheet.
                </p>
              </div>
              <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-6">
                <div className="text-3xl mb-3">💯</div>
                <h3 className="text-lg font-bebas text-[#00e5ff] mb-2">HONEST VERDICT</h3>
                <p className="text-sm text-gray-300">
                  Jujur tentang pros/cons, tidak ada bias brand, fokus pada value for money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Comparison Works */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-black/80 backdrop-blur-md border border-[#00e5ff]/30 rounded-lg p-8">
            <h2 className="text-2xl font-bebas text-[#00e5ff] mb-4 uppercase text-center">
              💡 Cara Membaca Comparison Kami
            </h2>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-[#00e5ff] font-bold">1.</span>
                <p>
                  <strong className="text-white">Spec Comparison Table:</strong> Lihat perbedaan teknis side-by-side.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#00e5ff] font-bold">2.</span>
                <p>
                  <strong className="text-white">Test Results:</strong> Data objektif dari track/road test kami.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#00e5ff] font-bold">3.</span>
                <p>
                  <strong className="text-white">Pros & Cons Each Product:</strong> Kelebihan dan kekurangan masing-masing.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#00e5ff] font-bold">4.</span>
                <p>
                  <strong className="text-white">The Verdict:</strong> Rekomendasi final berdasarkan use case dan budget.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#00e5ff] font-bold">5.</span>
                <p>
                  <strong className="text-white">Winner Category:</strong> Best overall, best value, best for track, dll.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bebas text-white mb-4 uppercase">
            Mau Request Comparison?
          </h2>
          <p className="text-gray-400 mb-6">
            Ada produk yang ingin kamu bandingkan? Kasih tau kami!
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#00e5ff] hover:bg-[#00e5ff]/80 text-black 
                       font-bold rounded-lg transition-all duration-300 
                       hover:shadow-[0_0_20px_rgba(0,229,255,0.5)]"
          >
            Request Comparison
          </Link>
        </div>
      </section>
    </main>
  );
}
