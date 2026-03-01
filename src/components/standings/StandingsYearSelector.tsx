'use client'

import { useState } from 'react'

interface YearSelectorProps {
  years: number[]
  currentYear: number
  onYearChange: (year: number) => void
}

export default function StandingsYearSelector({ years, currentYear, onYearChange }: YearSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#ff1744] rounded-lg transition-all"
      >
        <span className="font-bebas text-lg tracking-wider">
          {currentYear} {currentYear === Math.max(...years) && '✓'}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-black/95 border border-white/10 rounded-lg shadow-2xl z-20 overflow-hidden">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => {
                  onYearChange(year)
                  setIsOpen(false)
                }}
                className={`w-full px-4 py-3 text-left font-bebas text-lg tracking-wider transition-all ${
                  year === currentYear
                    ? 'bg-[#ff1744]/20 text-[#ff1744] border-l-4 border-[#ff1744]'
                    : 'hover:bg-white/5 text-white/70 hover:text-white border-l-4 border-transparent'
                }`}
              >
                {year} {year === currentYear && '✓'}
                {year === Math.max(...years) && ' (Current)'}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
