'use client'

import { useState } from 'react'

// Mock category tree (will be fetched from API)
const categoryTree = [
  {
    id: 'motorsport',
    name: 'Motorsport',
    icon: '🏁',
    children: [
      { id: 'wsbk', name: 'WSBK', slug: 'wsbk' },
      { id: 'motogp', name: 'MotoGP', slug: 'motogp' },
      { id: 'moto2', name: 'Moto2', slug: 'moto2' },
      { id: 'moto3', name: 'Moto3', slug: 'moto3' },
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
    icon: '🏍️',
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
    icon: '⭐',
    children: [
      { id: 'bike-review', name: 'Bike Review', slug: 'bike-review' },
      { id: 'gear-review', name: 'Gear Review', slug: 'gear-review' },
      { id: 'helmet-review', name: 'Helmet Review', slug: 'helmet-review' },
      { id: 'accessory-review', name: 'Accessory Review', slug: 'accessory-review' },
      { id: 'comparison', name: 'Comparison', slug: 'comparison' },
    ],
  },
  {
    id: 'rider',
    name: 'Rider',
    icon: '👤',
    children: [
      { id: 'active-riders', name: 'Active Riders', slug: 'active-riders' },
      { id: 'retired-riders', name: 'Retired Riders', slug: 'retired-riders' },
      { id: 'rider-standings', name: 'Rider Standings', slug: 'rider-standings' },
    ],
  },
  {
    id: 'team',
    name: 'Team',
    icon: '🏁',
    children: [
      { id: 'official-teams', name: 'Official Teams', slug: 'official-teams' },
      { id: 'satellite-teams', name: 'Satellite Teams', slug: 'satellite-teams' },
      { id: 'team-news', name: 'Team News', slug: 'team-news' },
    ],
  },
  {
    id: 'racing-school',
    name: 'Racing School',
    icon: '🎓',
    slug: 'racing-school',
    children: [],
  },
  {
    id: 'workshop',
    name: 'Workshop & Mods',
    icon: '🔧',
    slug: 'workshop',
    children: [],
  },
  {
    id: 'touring',
    name: 'Touring',
    icon: '🗺️',
    slug: 'touring',
    children: [],
  },
  {
    id: 'event',
    name: 'Event',
    icon: '📅',
    slug: 'event',
    children: [],
  },
  {
    id: 'live',
    name: 'Live',
    icon: '🔴',
    slug: 'live',
    children: [],
  },
  {
    id: 'news',
    name: 'News',
    icon: '📰',
    slug: 'news',
    children: [],
  },
  {
    id: 'tech',
    name: 'Tech & EV',
    icon: '🔋',
    slug: 'tech',
    children: [],
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    icon: '🌟',
    slug: 'lifestyle',
    children: [],
  },
]

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  return (
    <div className="bg-secondary border-b border-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto category-pills py-2 space-x-1">
          {categoryTree.map((cat) => (
            <div
              key={cat.id}
              className="relative"
              onMouseEnter={() => cat.children?.length > 0 && setActiveMenu(cat.id)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {/* Parent Category Button */}
              <a
                href={cat.slug ? `/${cat.slug}` : '#'}
                className={`
                  flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-semibold 
                  whitespace-nowrap transition-colors
                  ${activeMenu === cat.id 
                    ? 'bg-brand text-white' 
                    : 'text-muted hover:bg-tertiary hover:text-primary'
                  }
                `}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
                {cat.children?.length > 0 && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>

              {/* Dropdown Menu */}
              {cat.children && cat.children.length > 0 && activeMenu === cat.id && (
                <div className="absolute top-full left-0 mt-1 bg-elevated border border-default rounded-lg shadow-lg p-3 min-w-[200px] z-50">
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
  )
}
