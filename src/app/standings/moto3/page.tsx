'use client'

import { useState } from 'react'
import StandingsYearSelector from '@/components/standings/StandingsYearSelector'
import ChampionsWidget from '@/components/standings/ChampionsWidget'
import LiveIndicator from '@/components/standings/LiveIndicator'
import RaceCalendar from '@/components/standings/RaceCalendar'

// Placeholder data - will be replaced with real data
const moto3Data = [
  { position: 1, name: 'David Alonso', nationality: 'COL', team: 'CFMOTO Gaviota Aspar Team', number: 80, points: 50, age: 18 },
  { position: 2, name: 'Ivan Ortola', nationality: 'ESP', team: 'MT Helmets MSI', number: 48, points: 42, age: 19 },
  { position: 3, name: 'Daniel Holgado', nationality: 'ESP', team: 'Red Bull GASGAS Tech3', number: 96, points: 38, age: 20 },
  { position: 4, name: 'Veda Ega Pratama', nationality: 'INA', team: 'Honda Team Asia', number: 99, points: 28, indonesian: true, age: 16, rookie: true },
  { position: 5, name: 'Joel Kelso', nationality: 'AUS', team: 'BOE Motorsports', number: 66, points: 25, age: 21 },
]

export default function Moto3StandingsPage() {
  const [selectedYear, setSelectedYear] = useState(2026)

  const champions = [
    { year: 2025, name: 'David Alonso', nationality: 'COL' },
    { year: 2024, name: 'David Alonso', nationality: 'COL' },
    { year: 2023, name: 'Jaume Masia', nationality: 'ESP' },
    { year: 2022, name: 'Izan Guevara', nationality: 'ESP' },
  ]

  const vedaEga = moto3Data.find((r) => r.indonesian)
  const rookies = moto3Data.filter((r) => r.rookie)
  const youngestRider = moto3Data.reduce((prev, curr) => (prev.age! < curr.age! ? prev : curr))
  const oldestRider = moto3Data.reduce((prev, curr) => (prev.age! > curr.age! ? prev : curr))

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="accent-line"></div>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                <span className="text-brand">MOTO3 {selectedYear}</span>
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
            Moto3 World Championship standings. Where future champions begin their journey.
          </p>
          <LiveIndicator
            lastUpdated="2026-03-01T18:00:00Z"
            nextUpdate="After Argentina GP"
            dataSource="FIM Moto3"
          />
        </div>

        {/* Race Calendar */}
        <div className="mb-8">
          <RaceCalendar
            nextRace={{ name: 'Argentina GP', date: '2026-03-23' }}
            lastRace={{ name: 'Thailand GP', date: '2026-03-01', winner: 'David Alonso' }}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Standings */}
          <div className="lg:col-span-2">
            {/* Veda Ega Pratama Highlight */}
            {vedaEga && (
              <div className="mb-6 p-6 bg-[#ff1744]/10 border-2 border-[#ff1744]/30 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">🇮🇩</span>
                  <div>
                    <div className="text-2xl font-black text-[#ff1744]">VEDA EGA PRATAMA</div>
                    <div className="text-sm text-subtle">Indonesia's Moto3 Rookie • 2026 Debut!</div>
                  </div>
                  <div className="ml-auto">
                    <span className="px-3 py-1 bg-[#76ff03]/20 border border-[#76ff03] rounded-full text-xs font-bebas tracking-wider text-[#76ff03]">
                      ROOKIE
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <div className="text-xs text-muted uppercase">Position</div>
                    <div className="text-2xl font-black text-[#ffc400]">P{vedaEga.position}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted uppercase">Points</div>
                    <div className="text-2xl font-black text-primary">{vedaEga.points}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted uppercase">Number</div>
                    <div className="text-2xl font-black text-subtle">#{vedaEga.number}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted uppercase">Age</div>
                    <div className="text-2xl font-black text-subtle">{vedaEga.age}</div>
                  </div>
                </div>
              </div>
            )}

            <div className="card">
              <h2 className="text-2xl font-black uppercase text-brand mb-6">RIDER STANDINGS</h2>

              {/* Standings Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-muted/20">
                      <th className="text-left py-3 px-2 text-xs uppercase text-muted">Pos</th>
                      <th className="text-left py-3 px-2 text-xs uppercase text-muted">Rider</th>
                      <th className="text-left py-3 px-2 text-xs uppercase text-muted hidden md:table-cell">Team</th>
                      <th className="text-center py-3 px-2 text-xs uppercase text-muted hidden lg:table-cell">Age</th>
                      <th className="text-right py-3 px-2 text-xs uppercase text-muted">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {moto3Data.map((rider) => (
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
                                {rider.rookie && <span className="ml-2 text-xs text-[#76ff03]">R</span>}
                              </div>
                              <div className="text-xs text-muted">#{rider.number} • {rider.nationality}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-2 hidden md:table-cell">
                          <div className="text-sm text-subtle">{rider.team}</div>
                        </td>
                        <td className="py-4 px-2 text-center hidden lg:table-cell">
                          <span className="text-sm text-subtle">{rider.age}</span>
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
            <ChampionsWidget category="Moto3" champions={champions} />

            {/* Rookie of the Year Tracker */}
            <div className="card">
              <h3 className="text-xl font-black uppercase text-brand mb-4 flex items-center gap-2">
                <span>🌟</span>
                ROOKIE OF THE YEAR
              </h3>
              <div className="space-y-3">
                {rookies.map((rider, index) => (
                  <div key={rider.name} className="p-3 bg-[#76ff03]/10 border border-[#76ff03]/30 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-[#76ff03] flex items-center gap-2">
                          {rider.indonesian && '🇮🇩'} {rider.name}
                        </div>
                        <div className="text-xs text-subtle">Age {rider.age} • {rider.team}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-black text-primary">{rider.points}</div>
                        <div className="text-xs text-muted">P{rider.position}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Age Statistics */}
            <div className="card">
              <h3 className="text-xl font-black uppercase text-brand mb-4 flex items-center gap-2">
                <span>📊</span>
                AGE STATISTICS
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-white/5 rounded">
                  <div className="text-xs text-muted uppercase mb-1">Youngest Rider</div>
                  <div className="font-bold text-primary">{youngestRider.name}</div>
                  <div className="text-sm text-subtle">{youngestRider.age} years old</div>
                </div>
                <div className="p-3 bg-white/5 rounded">
                  <div className="text-xs text-muted uppercase mb-1">Oldest Rider</div>
                  <div className="font-bold text-primary">{oldestRider.name}</div>
                  <div className="text-sm text-subtle">{oldestRider.age} years old</div>
                </div>
                <div className="p-3 bg-white/5 rounded">
                  <div className="text-xs text-muted uppercase mb-1">Average Age</div>
                  <div className="text-2xl font-black text-brand">
                    {(moto3Data.reduce((sum, r) => sum + r.age!, 0) / moto3Data.length).toFixed(1)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
