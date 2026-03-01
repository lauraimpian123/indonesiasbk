'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Review } from '@/data/reviews';

interface SimilarProductsProps {
  products: Review[];
  currentProductId: string;
}

function CompactStarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-xs ${
            star <= rating ? 'text-[#ffc400]' : 'text-gray-600'
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function SimilarProducts({ products, currentProductId }: SimilarProductsProps) {
  // Filter out current product and limit to 4 items
  const similarProducts = products
    .filter((p) => p.id !== currentProductId)
    .slice(0, 4);

  if (similarProducts.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 pt-12 border-t border-white/10">
      <div className="mb-6">
        <h2 className="text-3xl font-bebas text-white mb-2 uppercase tracking-tight">
          🔥 Produk Sejenis
        </h2>
        <p className="text-gray-400 text-sm">
          Mungkin kamu juga tertarik dengan produk-produk berikut
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {similarProducts.map((product) => (
          <Link
            key={product.id}
            href={`/review/${product.category.toLowerCase().replace(' ', '-')}/${product.id}`}
            className="group bg-black/40 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-[#ff1744]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,23,68,0.3)] hover:-translate-y-1"
          >
            {/* Compact Image */}
            <div className="relative h-32 overflow-hidden">
              <Image
                src={product.image}
                alt={`${product.brand} ${product.model}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Brand Badge */}
              <div className="absolute top-2 left-2">
                <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bebas px-2 py-0.5 rounded-full border border-white/20">
                  {product.brand}
                </span>
              </div>
            </div>

            {/* Compact Details */}
            <div className="p-3">
              {/* Title */}
              <h3 className="text-sm font-bebas text-white mb-1 uppercase tracking-tight line-clamp-1">
                {product.brand} {product.model}
              </h3>

              {/* Rating & Price */}
              <div className="flex items-center justify-between mb-2">
                <CompactStarRating rating={product.rating} />
                {product.price !== 'N/A' && (
                  <span className="text-xs font-bold text-[#00e5ff]">
                    {product.price.split('-')[0].trim()}
                  </span>
                )}
              </div>

              {/* Excerpt */}
              <p className="text-xs text-gray-400 line-clamp-2 mb-2 min-h-[32px]">
                {product.excerpt}
              </p>

              {/* View Link */}
              <div className="flex items-center gap-1 text-[#ff1744] group-hover:text-white text-xs font-bold transition-colors">
                <span>Lihat Detail</span>
                <svg 
                  className="w-3 h-3 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
