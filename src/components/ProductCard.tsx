'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { Review } from '@/data/reviews';

interface ProductCardProps {
  review: Review;
  onCompareToggle?: (id: string, checked: boolean) => void;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-lg ${
            star <= rating ? 'text-[#ffc400]' : 'text-gray-600'
          }`}
        >
          ★
        </span>
      ))}
      <span className="text-sm text-gray-400 ml-2">{rating}/5</span>
    </div>
  );
}

export default function ProductCard({ review, onCompareToggle }: ProductCardProps) {
  const [isCompareChecked, setIsCompareChecked] = useState(false);

  const handleCompareChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsCompareChecked(checked);
    if (onCompareToggle) {
      onCompareToggle(review.id, checked);
    }
  };

  return (
    <div className="group relative bg-black/80 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-[#ff1744]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,23,68,0.4)] hover:-translate-y-2">
      {/* Product Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={review.image}
          alt={`${review.brand} ${review.model}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-[#ff1744] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg backdrop-blur-sm">
            {review.category}
          </span>
        </div>

        {/* Brand Logo Badge */}
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-black/60 backdrop-blur-sm text-white text-xs font-bebas px-3 py-1 rounded-full border border-white/20">
            {review.brand}
          </div>
        </div>

        {/* Compare Checkbox */}
        {onCompareToggle && (
          <div className="absolute bottom-4 right-4 z-10">
            <label className="flex items-center gap-2 bg-black/70 backdrop-blur-sm px-3 py-2 rounded-lg cursor-pointer hover:bg-black/90 transition-colors">
              <input
                type="checkbox"
                checked={isCompareChecked}
                onChange={handleCompareChange}
                className="w-4 h-4 accent-[#ff1744] cursor-pointer"
              />
              <span className="text-xs text-white font-bold">Compare</span>
            </label>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-2xl font-bebas text-white mb-1 uppercase tracking-tight">
          {review.brand} {review.model}
        </h3>
        
        {/* Year & Price */}
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-gray-400">Model {review.year}</p>
          {review.price !== 'N/A' && (
            <p className="text-sm font-bold text-[#00e5ff]">{review.price}</p>
          )}
        </div>

        {/* Rating */}
        <div className="mb-4">
          <StarRating rating={review.rating} />
        </div>

        {/* Excerpt */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-2 min-h-[40px]">
          {review.excerpt}
        </p>

        {/* Quick Specs */}
        <div className="mb-4">
          <h4 className="text-xs font-bold text-[#00e5ff] mb-2 uppercase tracking-wide">
            ⚡ Quick Specs
          </h4>
          <ul className="text-xs text-gray-400 space-y-1">
            {review.specs.slice(0, 3).map((spec, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#ff1744] mt-0.5">▸</span>
                <span className="line-clamp-1">{spec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pros/Cons */}
        <div className="space-y-3 mb-4 pb-4 border-b border-white/10">
          <div>
            <h4 className="text-xs font-bold text-green-400 mb-1">✓ TOP FEATURES</h4>
            <ul className="text-xs text-gray-400 space-y-1">
              {review.pros.slice(0, 2).map((pro, i) => (
                <li key={i} className="line-clamp-1">• {pro}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-red-400 mb-1">✗ TRADE-OFFS</h4>
            <ul className="text-xs text-gray-400 space-y-1">
              {review.cons.slice(0, 2).map((con, i) => (
                <li key={i} className="line-clamp-1">• {con}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{review.reviewDate}</span>
          <Link
            href={`/review/${review.category.toLowerCase().replace(' ', '-')}/${review.id}`}
            className="group/link inline-flex items-center gap-2 text-[#ff1744] hover:text-white text-sm font-bold transition-colors"
          >
            Baca Review
            <svg 
              className="w-4 h-4 transition-transform group-hover/link:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
