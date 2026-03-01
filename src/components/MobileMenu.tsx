'use client'

import { useState } from 'react'

const categories = [
  { name: 'Motorsport', items: ['WSBK', 'MotoGP', 'Moto2', 'Moto3', 'F1'] },
  { name: 'Motor', items: ['Superbike', 'Supersport', 'Supermatic'] },
  { name: 'Review', items: ['Bike Review', 'Gear Review', 'Helmet Review'] },
  { name: 'Racing', items: ['Teams', 'School', 'Riders'] },
  { name: 'Result & Standing', items: ['WSBK', 'MotoGP', 'F1'] },
]

const standalone = ['Workshop', 'Touring', 'Live', 'News']

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Racing Style Button - Only visible on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-[100] bg-brand hover:bg-[#C73D2F] text-white p-3 rounded-none shadow-lg transition-colors"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)',
        }}
        aria-label="Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[90]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Panel */}
      <div className={`fixed top-0 left-0 bottom-0 w-80 bg-black border-r-2 border-brand z-[95] transform transition-transform duration-300 overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 pt-20">
          <div className="mb-8">
            <h1 className="text-3xl font-black tracking-tight">
              <span className="text-white">INDONESIA</span>
              <span className="text-brand">SBK</span>
            </h1>
            <div className="w-12 h-1 bg-brand mt-2"></div>
          </div>

          {/* Categories with Sub-items */}
          {categories.map((cat) => (
            <div key={cat.name} className="mb-6">
              <h3 className="text-brand font-bold uppercase text-xs tracking-wider mb-2">
                {cat.name}
              </h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                      className="block text-white hover:text-brand transition-colors py-1 text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Standalone Links */}
          <div className="mb-6 border-t border-[#1F1F1F] pt-6">
            <h3 className="text-brand font-bold uppercase text-xs tracking-wider mb-2">
              Content
            </h3>
            <ul className="space-y-2">
              {standalone.map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="block text-white hover:text-brand transition-colors py-1 text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
