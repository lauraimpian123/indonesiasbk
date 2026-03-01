'use client'

import { useState } from 'react'
import StandingsYearSelector from './StandingsYearSelector'
import ChampionsWidget from './ChampionsWidget'

interface Champion {
  year: number
  name: string
  nationality?: string
  team?: string
}

interface ComingSoonStandingsProps {
  category: string
  fullName: string
  description: string
  champions: Champion[]
  eta?: string
  relatedLink?: { text: string; href: string }
}

export default function ComingSoonStandings({
  category,
  fullName,
  description,
  champions,
  eta = 'Mid-2026',
  relatedLink,
}: ComingSoonStandingsProps) {
  const [selectedYear, setSelectedYear] = useState(2026)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="accent-line"></div>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                <span className="text-brand">{category} {selectedYear}</span>
                <span className="text-white"> STANDINGS</span>
              </h1>
            </div>
            <StandingsYearSelector
              years={[2026, 2025, 2024, 2023]}
              currentYear={selectedYear}
              onYearChange={setSelectedYear}
            />
          </div>
          <p className="text-lg text-subtle max-w-3xl">{description}</p>
        </div>

        {/* Coming Soon Banner */}
        <div className="mb-8 p-8 bg-gradient-to-r from-[#ff1744]/10 to-[#00e5ff]/10 border border-white/20 rounded-2xl text-center">
          <div className="text-6xl mb-4">🚧</div>
          <h2 className="text-3xl font-black uppercase text-brand mb-2">COMING SOON</h2>
          <p className="text-lg text-subtle mb-4">
            {category} standings page is under development
          </p>
          <div className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-lg">
            <span className="text-sm text-muted">Expected: </span>
            <span className="font-bebas text-lg text-[#ffc400]">{eta}</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Category Info */}
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="text-2xl font-black uppercase text-brand mb-4">ABOUT {category}</h2>
              <p className="text-subtle mb-6">{fullName}</p>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">📊 What to Expect</h3>
                  <ul className="text-sm text-subtle space-y-2">
                    <li>• Live championship standings</li>
                    <li>• Real-time race results</li>
                    <li>• Detailed rider statistics</li>
                    <li>• Historical data and records</li>
                    <li>• Indonesian rider highlights</li>
                  </ul>
                </div>

                <div className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">🔔 Subscribe for Updates</h3>
                  <p className="text-sm text-subtle mb-4">
                    Get notified when {category} standings go live!
                  </p>
                  
                  {!subscribed ? (
                    <form onSubmit={handleSubscribe} className="flex gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-[#ff1744]"
                      />
                      <button
                        type="submit"
                        className="px-6 py-2 bg-[#ff1744] hover:bg-[#ff1744]/80 rounded-lg text-sm font-bebas tracking-wider uppercase transition-all"
                      >
                        SUBSCRIBE
                      </button>
                    </form>
                  ) : (
                    <div className="p-3 bg-[#76ff03]/10 border border-[#76ff03]/30 rounded-lg text-center">
                      <span className="text-[#76ff03]">✓ Subscribed! We'll notify you soon.</span>
                    </div>
                  )}
                </div>

                {relatedLink && (
                  <div className="p-4 bg-[#00e5ff]/10 border border-[#00e5ff]/30 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">🔗 Related</h3>
                    <a
                      href={relatedLink.href}
                      className="text-[#00e5ff] hover:underline text-sm"
                    >
                      {relatedLink.text} →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {champions.length > 0 && (
              <ChampionsWidget category={category} champions={champions} />
            )}

            {/* Progress Tracker */}
            <div className="card">
              <h3 className="text-xl font-black uppercase text-brand mb-4 flex items-center gap-2">
                <span>⏳</span>
                DEVELOPMENT STATUS
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-subtle">Data Collection</span>
                  <span className="text-[#76ff03]">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-subtle">Page Design</span>
                  <span className="text-[#ffc400]">⏳ In Progress</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-subtle">Testing</span>
                  <span className="text-white/30">⭘ Pending</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-subtle">Live Data</span>
                  <span className="text-white/30">⭘ Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
