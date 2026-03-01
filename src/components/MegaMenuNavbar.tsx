'use client'

import Link from 'next/link'
import { useState } from 'react'

const menuStructure = {
  motorsport: {
    title: 'MOTORSPORT',
    items: [
      { name: 'WSBK / Superbike World Championship', href: '/motorsport/wsbk', emoji: '🏍️' },
      { name: 'MotoGP', href: '/motorsport/motogp', emoji: '🏁' },
      { name: 'Moto2', href: '/motorsport/moto2', emoji: '🏁' },
      { name: 'Moto3', href: '/motorsport/moto3', emoji: '🏁' },
      { name: 'MiniGP', href: '/motorsport/minigp', emoji: '🏍️' },
      { name: 'Formula 1', href: '/motorsport/f1', emoji: '🏎️' },
      { name: 'British Superbike (BSB)', href: '/motorsport/bsb', emoji: '🇬🇧' },
      { name: 'Asia Road Racing Championship (ARRC)', href: '/motorsport/arrc', emoji: '🌏' },
      { name: 'Indonesia Ducati Championship (IDC)', href: '/motorsport/idc', emoji: '🇮🇩' },
      { name: 'MotoE', href: '/motorsport/motoe', emoji: '⚡' },
    ],
  },
  bikeClass: {
    title: 'BIKE CLASS',
    items: [
      { name: 'Superbike', href: '/bike-class/superbike', emoji: '🔴' },
      { name: 'Supersport', href: '/bike-class/supersport', emoji: '🔵' },
      { name: 'Supermatic', href: '/bike-class/supermatic', emoji: '⚙️' },
      { name: 'Naked Bike', href: '/bike-class/naked', emoji: '🟢' },
      { name: 'Adventure', href: '/bike-class/adventure', emoji: '🗻' },
      { name: 'Cruiser', href: '/bike-class/cruiser', emoji: '🛣️' },
    ],
  },
  review: {
    title: 'REVIEW',
    items: [
      { name: 'Bike Review', href: '/review/bike', emoji: '🏍️' },
      { name: 'Gear Review', href: '/review/gear', emoji: '🧥' },
      { name: 'Helmet Review', href: '/review/helmet', emoji: '🪖' },
      { name: 'Accessory Review', href: '/review/accessory', emoji: '🔧' },
      { name: 'Comparison', href: '/review/comparison', emoji: '⚔️' },
    ],
  },
  racing: {
    title: 'RACING',
    items: [
      { name: 'Teams & Manufacturers', href: '/racing/teams', emoji: '🏁' },
      { name: 'Racing School', href: '/racing/school', emoji: '🎓' },
      { name: 'Riders Profile', href: '/racing/riders', emoji: '👤' },
    ],
  },
  standings: {
    title: 'STANDINGS',
    items: [
      { name: 'MotoGP Standings', href: '/standings/motogp', emoji: '🏁' },
      { name: 'WSBK Standings', href: '/standings/wsbk', emoji: '🏍️' },
      { name: 'Moto2 Standings', href: '/standings/moto2', emoji: '🏁' },
      { name: 'Moto3 Standings', href: '/standings/moto3', emoji: '🏁' },
      { name: 'MiniGP Standings', href: '/standings/minigp', emoji: '🏍️' },
      { name: 'Formula 1 Standings', href: '/standings/f1', emoji: '🏎️' },
      { name: 'BSB Standings', href: '/standings/bsb', emoji: '🇬🇧' },
      { name: 'ARRC Standings', href: '/standings/arrc', emoji: '🌏' },
      { name: 'IDC Standings', href: '/standings/idc', emoji: '🇮🇩' },
      { name: 'MotoE Standings', href: '/standings/motoe', emoji: '⚡' },
    ],
  },
}

export default function MegaMenuNavbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#ff1744] to-[#ff4569] flex items-center justify-center font-black text-white text-sm rounded-md transform group-hover:scale-105 transition-transform">
              IS
            </div>
            <div className="font-black text-xl tracking-tight">
              <span className="text-white">INDONESIA</span>
              <span className="text-[#ff1744]">SBK</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-bold uppercase tracking-wider text-white/70 hover:text-white transition-colors"
            >
              Home
            </Link>

            {Object.entries(menuStructure).map(([key, menu]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setActiveMenu(key)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="px-4 py-2 text-sm font-bold uppercase tracking-wider text-white/70 hover:text-white transition-colors flex items-center space-x-1">
                  <span>{menu.title}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mega Dropdown */}
                {activeMenu === key && (
                  <div className="absolute top-full left-0 mt-1 min-w-[300px] bg-black/98 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl overflow-hidden">
                    <div className="p-2">
                      <div className={`grid ${menu.items.length > 6 ? 'grid-cols-2' : 'grid-cols-1'} gap-1`}>
                        {menu.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center space-x-3 px-4 py-3 rounded-md hover:bg-[#ff1744]/10 hover:text-[#ff1744] text-white/80 transition-all group"
                          >
                            <span className="text-xl">{item.emoji}</span>
                            <span className="text-sm font-semibold">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/workshop"
              className="px-4 py-2 text-sm font-bold uppercase tracking-wider text-white/70 hover:text-white transition-colors"
            >
              Workshop
            </Link>
            <Link
              href="/touring"
              className="px-4 py-2 text-sm font-bold uppercase tracking-wider text-white/70 hover:text-white transition-colors"
            >
              Touring
            </Link>
            <Link
              href="/tech"
              className="px-4 py-2 text-sm font-bold uppercase tracking-wider text-white/70 hover:text-white transition-colors"
            >
              Tech
            </Link>
            <Link
              href="/live"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-[#ff1744] to-[#ff4569] text-white text-sm font-black uppercase tracking-wider rounded-full hover:shadow-lg hover:shadow-[#ff1744]/50 transition-all"
            >
              🔴 LIVE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/98 backdrop-blur-xl border-t border-white/10 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-6 space-y-4">
            <Link href="/" className="block text-white font-bold text-lg" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            {Object.entries(menuStructure).map(([key, menu]) => (
              <div key={key} className="space-y-2">
                <div className="text-[#ff1744] font-black text-sm uppercase tracking-wider">{menu.title}</div>
                {menu.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block pl-4 py-2 text-white/70 hover:text-white text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.emoji} {item.name}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href="/workshop"
              className="block text-white font-bold text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Workshop
            </Link>
            <Link
              href="/touring"
              className="block text-white font-bold text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Touring
            </Link>
            <Link href="/tech" className="block text-white font-bold text-lg" onClick={() => setMobileMenuOpen(false)}>
              Tech
            </Link>
            <Link
              href="/live"
              className="block px-6 py-3 bg-gradient-to-r from-[#ff1744] to-[#ff4569] text-white text-sm font-black uppercase tracking-wider rounded-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              🔴 LIVE
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
