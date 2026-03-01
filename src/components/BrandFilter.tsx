'use client';

import { useState } from 'react';

interface BrandFilterProps {
  brands: string[];
  selectedBrand: string | null;
  onBrandChange: (brand: string | null) => void;
}

export default function BrandFilter({ brands, selectedBrand, onBrandChange }: BrandFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative px-6 py-3 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg hover:border-[#ff1744]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,23,68,0.3)] flex items-center gap-3 min-w-[200px]"
      >
        <span className="text-sm font-bold text-white">
          {selectedBrand || 'Semua Brand'}
        </span>
        <svg
          className={`w-4 h-4 text-[#ff1744] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full min-w-[250px] bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-[0_0_30px_rgba(255,23,68,0.2)] overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* All Brands Option */}
          <button
            onClick={() => {
              onBrandChange(null);
              setIsOpen(false);
            }}
            className={`w-full px-4 py-3 text-left text-sm transition-colors duration-200 ${selectedBrand === null ? 'bg-[#ff1744] text-white font-bold' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
          >
            <span className="flex items-center gap-2">
              {selectedBrand === null && (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              Semua Brand
            </span>
          </button>

          {/* Brand Separator */}
          <div className="border-t border-white/10"></div>

          {/* Brand List */}
          <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => {
                  onBrandChange(brand);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 text-left text-sm transition-colors duration-200 ${selectedBrand === brand ? 'bg-[#ff1744] text-white font-bold' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
              >
                <span className="flex items-center gap-2">
                  {selectedBrand === brand && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {brand}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ff1744;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ff1744cc;
        }
      `}</style>
    </div>
  );
}
