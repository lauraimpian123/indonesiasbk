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
    id: 'rider',
    name: 'Rider',
    children: [
      { id: 'active-riders', name: 'Active Riders', slug: 'active-riders' },
      { id: 'retired-riders', name: 'Retired Riders', slug: 'retired-riders' },
      { id: 'rider-standings', name: 'Rider Standings', slug: 'rider-standings' },
    ],
  },
  {
    id: 'team',
    name: 'Team',
    children: [
      { id: 'official-teams', name: 'Official Teams', slug: 'official-teams' },
      { id: 'satellite-teams', name: 'Satellite Teams', slug: 'satellite-teams' },
      { id: 'team-news', name: 'Team News', slug: 'team-news' },
    ],
  },
  {
    id: 'racing-school',
    name: 'Racing School',
    slug: 'racing-school',
    children: [],
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
    id: 'event',
    name: 'Event',
    slug: 'event',
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
        <div className="flex overflow-x-auto category-pills py-2 space-x-1">
          {categoryTree.map((cat) => (
            <div
              key={cat.id}
              className="relative group"
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

              {cat.children && cat.children.length > 0 && activeMenu === cat.id && (
                <div 
                  className="absolute top-full left-0 mt-1 bg-elevated border border-default rounded-lg shadow-lg p-3 min-w-[200px] z-50"
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
  )
}
