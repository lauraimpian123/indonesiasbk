'use client'

import { useState } from 'react'

interface FilterControlsProps {
  sortOptions: string[]
  currentSort: string
  onSortChange: (sort: string) => void
  searchPlaceholder?: string
  onSearch: (query: string) => void
  showIndonesianOnly: boolean
  onToggleIndonesian: () => void
}

export default function FilterControls({
  sortOptions,
  currentSort,
  onSortChange,
  searchPlaceholder = 'Search rider...',
  onSearch,
  showIndonesianOnly,
  onToggleIndonesian,
}: FilterControlsProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    onSearch(value)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {/* Search */}
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder={searchPlaceholder}
          className="w-full px-4 py-2 pl-10 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-[#ff1744] transition-all"
        />
        <svg
          className="absolute left-3 top-2.5 w-5 h-5 text-white/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Sort By */}
      <select
        value={currentSort}
        onChange={(e) => onSortChange(e.target.value)}
        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-[#ff1744] transition-all cursor-pointer"
      >
        {sortOptions.map((option) => (
          <option key={option} value={option} className="bg-black">
            Sort by: {option}
          </option>
        ))}
      </select>

      {/* Indonesian Riders Toggle */}
      <button
        onClick={onToggleIndonesian}
        className={`px-4 py-2 rounded-lg text-sm font-bebas tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
          showIndonesianOnly
            ? 'bg-[#ff1744]/20 text-[#ff1744] border border-[#ff1744]'
            : 'bg-white/5 border border-white/10 hover:bg-white/10'
        }`}
      >
        <span>🇮🇩</span>
        {showIndonesianOnly ? 'SHOWING INDONESIAN' : 'SHOW INDONESIAN ONLY'}
      </button>
    </div>
  )
}
