'use client'

import { useState } from 'react'

const categoryTree = [
  {
    id: 'motorsport',
    name: 'Motorsport',
    children: [
      { id: 'wsbk', name: 'WSBK', slug: 'wsbk' },
      { id: 'motogp', name: 'MotoGP', slug: 'motogp' },
      { id: 'moto2', name: 'Moto2', slug: 'moto2' },
      { id: 'moto3', name: 'Moto3', slug: 'moto3' },
      { id: 'minigp', name: 'MiniGP', slug: 'minigp' },
      { id: 'f1', name: 'F1', slug: 'f1' },
      { id: 'bsb', name: 'BSB', slug: 'bsb' },
      { id: 'arrc', name: 'ARRC', slug: 'arrc' },
      { id: 'idc', name: 'IDC', slug: 'idc' },
      { id: 'motoe', name: 'MotoE', slug: 'motoe' },
    ],
  },
  {
    id: 'bike-class',
    name: 'Bike Class',
    children: [
      { id: 'superbike', name: 'Superbike', slug: 'superbike' },
      { id: 'supersport', name: 'Supersport', slug: 'supersport' },
      { id: 'supermatic', name: 'Supermatic', slug: 'supermatic' },
      { id: 'naked', name: 'Naked Bike', slug: 'naked' },
      { id: 'adventure', name: 'Adventure', slug: 'adventure' },
      { id: 'cruiser', name: 'Cruiser', slug: 'cruiser' },
    ],
  },
  {
    id: 'review',
    name: 'Review',
    children: [
      { id: 'bike-review', name: 'Bike Review', slug: 'bike-review' },
      { id: 'gear-review', name: 'Gear Review', slug: 'gear-review' },
      { id: 'helmet-review', name: 'Helmet Review', slug: 'helmet-review' },
      { id: 'accessory-review', name: 'Accessory Review', slug: 'accessory-review' },
      { id: 'comparison', name: 'Comparison', slug: 'comparison' },
    ],
  },
  {
    id: 'racing',
    name: 'Racing',
    children: [
      { id: 'official-teams', name: 'Teams', slug: 'official-teams' },
      { id: 'racing-school', name: 'School', slug: 'racing-school' },
      { id: 'active-riders', name: 'Riders', slug: 'active-riders' },
    ],
  },
  {
    id: 'result-standing',
    name: 'Result & Standing',
    children: [
      { id: 'wsbk-results', name: 'WSBK', slug: 'wsbk-results' },
      { id: 'motogp-results', name: 'MotoGP', slug: 'motogp-results' },
      { id: 'moto2-results', name: 'Moto2', slug: 'moto2-results' },
      { id: 'moto3-results', name: 'Moto3', slug: 'moto3-results' },
      { id: 'minigp-results', name: 'MiniGP', slug: 'minigp-results' },
      { id: 'f1-results', name: 'F1', slug: 'f1-results' },
      { id: 'bsb-results', name: 'BSB', slug: 'bsb-results' },
      { id: 'arrc-results', name: 'ARRC', slug: 'arrc-results' },
      { id: 'idc-results', name: 'IDC', slug: 'idc-results' },
      { id: 'motoe-results', name: 'MotoE', slug: 'motoe-results' },
    ],
  },
  {
    id: 'workshop',
    name: 'Workshop',
    slug: 'workshop',
    children: [],
  },
  {
    id: 'touring',
    name: 'Touring',
    slug: 'touring',
    children: [],
  },
  {
    id: 'live',
    name: 'Live',
    slug: 'live',
    children: [],
  },
  {
    id: 'news',
    name: 'News',
    slug: 'news',
    children: [],
  },
  {
    id: 'tech',
    name: 'Tech & EV',
    slug: 'tech',
    children: [],
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    slug: 'lifestyle',
    children: [],
  },
]

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  return (
    <div className="bg-secondary border-b border-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wrapper with overflow-x-auto for horizontal scroll */}
        <div className="overflow-x-auto">
          {/* Inner flex container with relative positioning */}
          <div className="flex py-2 space-x-1 relative">
            {categoryTree.map((cat) => (
              <div
                key={cat.id}
                className="relative"
              >
                <a
                  href={cat.slug ? `/${cat.slug}` : '#'}
                  onMouseEnter={() => cat.children && cat.children.length > 0 && setActiveMenu(cat.id)}
                  onMouseLeave={() => setActiveMenu(null)}
                  className={`
                    flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-semibold 
                    whitespace-nowrap transition-colors
                    ${activeMenu === cat.id 
                      ? 'bg-brand text-white' 
                      : 'text-muted hover:bg-tertiary hover:text-primary'
                    }
                  `}
                >
                  <span>{cat.name}</span>
                  {cat.children && cat.children.length > 0 && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>

                {/* Dropdown - positioned absolute with very high z-index */}
                {cat.children && cat.children.length > 0 && activeMenu === cat.id && (
                  <div 
                    className="fixed mt-1 bg-elevated border border-default rounded-lg shadow-xl p-3 min-w-[200px]"
                    style={{ 
                      zIndex: 9999,
                      position: 'fixed'
                    }}
                    onMouseEnter={() => setActiveMenu(cat.id)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <div className="space-y-1">
                      {cat.children.map((child) => (
                        <a
                          key={child.id}
                          href={`/${child.slug}`}
                          className="block px-3 py-2 rounded text-sm text-muted hover:bg-tertiary hover:text-primary transition-colors"
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
