'use client'

import { useState } from 'react'
import StandingsYearSelector from '@/components/standings/StandingsYearSelector'
import ChampionsWidget from '@/components/standings/ChampionsWidget'
import LiveIndicator from '@/components/standings/LiveIndicator'
import RaceCalendar from '@/components/standings/RaceCalendar'

// Placeholder data - will be replaced with real data
const moto2Data = [
  { position: 1, name: 'Diogo Moreira', nationality: 'BRA', team: 'Italtrans Racing Team', number: 21, points: 45 },
  { position: 2, name: 'Joe Roberts', nationality: 'USA', team: 'OnlyFans American Racing', number: 16, points: 38 },
  { position: 3, name: 'Mario Suryo Aji', nationality: 'INA', team: 'Idemitsu Honda Asia', number: 64, points: 32, indonesian: true },
  { position: 4, name: 'Ai Ogura', nationality: 'JPN', team: 'MT Helmets MSI', number: 79, points: 28 },
  { position: 5, name: 'Tony Arbolino', nationality: 'ITA', team: 'Elf Marc VDS', number: 14, points: 25 },
]

export default function Moto2StandingsPage() {
  const [selectedYear, setSelectedYear] = useState(2026)

  const champions = [
    { year: 2025, name: 'Ai Ogura', nationality: 'JPN' },
    { year: 2024, name: 'Fermín Aldeguer', nationality: 'ESP' },
    { year: 2023, name: 'Pedro Acosta', nationality: 'ESP' },
    { year: 2022, name: 'Augusto Fernández', nationality: 'ESP' },
  ]

  const marioSuryoAji = moto2Data.find((r) => r.indonesian)

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="accent-line"></div>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                <span className="text-brand">MOTO2 {selectedYear}</span>
                <span className="text-white"> STANDINGS</span>
              </h1>
            </div>
            <StandingsYearSelector
              years={[2026, 2025, 2024, 2023]}
              currentYear={selectedYear}
              onYearChange={setSelectedYear}
            />
          </div>
          <p className="text-lg text-subtle max-w-3xl mb-4">
            Moto2 World Championship standings. The proving ground for future MotoGP stars.
          </p>
          <LiveIndicator
            lastUpdated="2026-03-01T18:00:00Z"
            nextUpdate="After Argentina GP"
            dataSource="FIM Moto2"
          />
        </div>

        {/* Race Calendar */}
        <div className="mb-8">
          <RaceCalendar
            nextRace={{ name: 'Argentina GP', date: '2026-03-23' }}
            lastRace={{ name: 'Thailand GP', date: '2026-03-01', winner: 'Diogo Moreira' }}
          />
        </div>

        {/* Notice Banner */}
        <div className="mb-8 p-6 bg-[#00e5ff]/10 border border-[#00e5ff]/30 rounded-lg">
          <div className="flex items-center gap-3">
            <span className="text-3xl">⏳</span>
            <div>
              <div className="text-lg font-bold text-[#00e5ff]">2026 Season in Progress</div>
              <div className="text-sm text-subtle">Full standings data will be available after Round 3. Current data is from opening races.</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Standings */}
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="text-2xl font-black uppercase text-brand mb-6">RIDER STANDINGS</h2>

              {/* Mario Suryo Aji Highlight */}
              {marioSuryoAji && (
                <div className="mb-6 p-4 bg-[#ff1744]/10 border-2 border-[#ff1744]/30 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">🇮🇩</span>
                    <div>
                      <div className="text-xl font-black text-[#ff1744]">MARIO SURYO AJI</div>
                      <div className="text-sm text-subtle">Indonesia's Moto2 Rider</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div>
                      <div className="text-xs text-muted uppercase">Position</div>
                      <div className="text-2xl font-black text-[#ffc400]">P{marioSuryoAji.position}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted uppercase">Points</div>
                      <div className="text-2xl font-black text-primary">{marioSuryoAji.points}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted uppercase">Number</div>
                      <div className="text-2xl font-black text-subtle">#{marioSuryoAji.number}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Standings Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-muted/20">
                      <th className="text-left py-3 px-2 text-xs uppercase text-muted">Pos</th>
                      <th className="text-left py-3 px-2 text-xs uppercase text-muted">Rider</th>
                      <th className="text-left py-3 px-2 text-xs uppercase text-muted hidden md:table-cell">Team</th>
                      <th className="text-right py-3 px-2 text-xs uppercase text-muted">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {moto2Data.map((rider) => (
                      <tr
                        key={rider.position}
                        className={`
                          border-b border-muted/10 transition-colors
                          ${rider.indonesian ? 'bg-red-500/10 hover:bg-red-500/20' : 'hover:bg-white/5'}
                          ${rider.position === 1 ? 'bg-yellow-500/10' : ''}
                        `}
                      >
                        <td className="py-4 px-2">
                          <span className={`font-bold text-lg ${rider.position === 1 ? 'text-[#ffc400]' : 'text-subtle'}`}>
                            {rider.position}
                          </span>
                        </td>
                        <td className="py-4 px-2">
                          <div className="flex items-center space-x-2">
                            {rider.indonesian && <span className="text-lg">🇮🇩</span>}
                            <div>
                              <div className={`font-bold ${rider.indonesian ? 'text-[#ff1744]' : rider.position === 1 ? 'text-[#ffc400]' : 'text-primary'}`}>
                                {rider.name}
                              </div>
                              <div className="text-xs text-muted">#{rider.number} • {rider.nationality}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-2 hidden md:table-cell">
                          <div className="text-sm text-subtle">{rider.team}</div>
                        </td>
                        <td className="py-4 px-2 text-right">
                          <span className={`font-black text-xl ${rider.position === 1 ? 'text-[#ffc400]' : 'text-primary'}`}>
                            {rider.points}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ChampionsWidget category="Moto2" champions={champions} />

            {/* Path to MotoGP Widget */}
            <div className="card">
              <h3 className="text-xl font-black uppercase text-brand mb-4 flex items-center gap-2">
                <span>🚀</span>
                PATH TO MOTOGP
              </h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-white/5 rounded">
                  <div className="font-bold text-primary">Pedro Acosta</div>
                  <div className="text-xs text-subtle">2023 Moto2 Champion → 2024 MotoGP</div>
                </div>
                <div className="p-3 bg-white/5 rounded">
                  <div className="font-bold text-primary">Fermín Aldeguer</div>
                  <div className="text-xs text-subtle">2024 Moto2 Champion → 2025 MotoGP</div>
                </div>
                <div className="p-3 bg-white/5 rounded">
                  <div className="font-bold text-primary">Ai Ogura</div>
                  <div className="text-xs text-subtle">2025 Moto2 Champion → 2026 MotoGP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
