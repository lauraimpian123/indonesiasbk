'use client'

import { useState } from 'react'
import motogpData from '@/data/standings-motogp-2026.json'
import StandingsYearSelector from '@/components/standings/StandingsYearSelector'
import StandingsTabsAdvanced from '@/components/standings/StandingsTabsAdvanced'
import FilterControls from '@/components/standings/FilterControls'
import RaceCalendar from '@/components/standings/RaceCalendar'
import ComparisonTool from '@/components/standings/ComparisonTool'
import ChampionsWidget from '@/components/standings/ChampionsWidget'
import LiveIndicator from '@/components/standings/LiveIndicator'
import PointsProgressionChart from '@/components/standings/PointsProgressionChart'
import ExportTools from '@/components/standings/ExportTools'

interface Rider {
  position: number
  rider: {
    name: string
    number: number
    nationality: string
    team: string
    bike: string
  }
  points: number
  wins: number
  podiums: number
  poles: number
}

export default function MotoGPStandingsPage() {
  const [selectedYear, setSelectedYear] = useState(2026)
  const [activeTab, setActiveTab] = useState('riders')
  const [sortBy, setSortBy] = useState('Points')
  const [searchQuery, setSearchQuery] = useState('')
  const [showIndonesianOnly, setShowIndonesianOnly] = useState(false)

  const standings = motogpData as Rider[]

  // Filter and sort standings
  let filteredStandings = standings.filter((entry) => {
    const matchesSearch = entry.rider.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesIndonesian = !showIndonesianOnly || entry.rider.nationality === 'INA'
    return matchesSearch && matchesIndonesian
  })

  // Sort standings
  if (sortBy === 'Wins') {
    filteredStandings.sort((a, b) => b.wins - a.wins)
  } else if (sortBy === 'Podiums') {
    filteredStandings.sort((a, b) => b.podiums - a.podiums)
  } else if (sortBy === 'Poles') {
    filteredStandings.sort((a, b) => b.poles - a.poles)
  }

  // Prepare data for charts
  const topRiders = filteredStandings.slice(0, 5).map((entry) => ({
    name: entry.rider.name,
    color: entry.position === 1 ? '#ffc400' : entry.position === 2 ? '#ff1744' : '#00e5ff',
    results: [
      { round: 1, raceName: 'Qatar', points: Math.floor(entry.points / 3) },
      { round: 2, raceName: 'Americas', points: Math.floor(entry.points / 2.5) },
      { round: 3, raceName: 'Argentina', points: entry.points },
    ],
  }))

  const tabs = [
    { id: 'riders', label: 'Rider Standings', icon: '🏍️' },
    { id: 'teams', label: 'Team Standings', icon: '👥' },
    { id: 'constructors', label: 'Constructors', icon: '🏭' },
    { id: 'statistics', label: 'Statistics', icon: '📊' },
  ]

  const champions = [
    { year: 2025, name: 'Marc Marquez', nationality: 'ESP', team: 'Gresini Racing Ducati' },
    { year: 2024, name: 'Francesco Bagnaia', nationality: 'ITA', team: 'Ducati Lenovo Team' },
    { year: 2023, name: 'Francesco Bagnaia', nationality: 'ITA', team: 'Ducati Lenovo Team' },
    { year: 2022, name: 'Francesco Bagnaia', nationality: 'ITA', team: 'Ducati Lenovo Team' },
    { year: 2021, name: 'Fabio Quartararo', nationality: 'FRA', team: 'Monster Yamaha' },
  ]

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="accent-line"></div>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                <span className="text-brand">MOTOGP {selectedYear}</span>
                <span className="text-white"> STANDINGS</span>
              </h1>
            </div>
            <StandingsYearSelector
              years={[2026, 2025, 2024, 2023, 2022]}
              currentYear={selectedYear}
              onYearChange={setSelectedYear}
            />
          </div>
          <p className="text-lg text-subtle max-w-3xl mb-4">
            Live MotoGP World Championship standings. The premier class of motorcycle racing.
          </p>
          <LiveIndicator
            lastUpdated="2026-03-01T18:00:00Z"
            nextUpdate="After Argentina GP"
            dataSource="Official MotoGP"
          />
        </div>

        {/* Race Calendar */}
        <div className="mb-8">
          <RaceCalendar
            nextRace={{ name: 'Argentina GP', date: '2026-03-23' }}
            lastRace={{ name: 'Thailand GP', date: '2026-03-01', winner: 'Marco Bezzecchi' }}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Standings */}
          <div className="lg:col-span-2">
            <div className="card">
              <StandingsTabsAdvanced
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              >
                {activeTab === 'riders' && (
                  <>
                    <FilterControls
                      sortOptions={['Points', 'Wins', 'Podiums', 'Poles']}
                      currentSort={sortBy}
                      onSortChange={setSortBy}
                      searchPlaceholder="Search rider..."
                      onSearch={setSearchQuery}
                      showIndonesianOnly={showIndonesianOnly}
                      onToggleIndonesian={() => setShowIndonesianOnly(!showIndonesianOnly)}
                    />

                    {/* Standings Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-muted/20">
                            <th className="text-left py-3 px-2 text-xs uppercase text-muted">Pos</th>
                            <th className="text-left py-3 px-2 text-xs uppercase text-muted">Rider</th>
                            <th className="text-left py-3 px-2 text-xs uppercase text-muted hidden md:table-cell">Team</th>
                            <th className="text-center py-3 px-2 text-xs uppercase text-muted hidden lg:table-cell">W</th>
                            <th className="text-center py-3 px-2 text-xs uppercase text-muted hidden lg:table-cell">Pod</th>
                            <th className="text-center py-3 px-2 text-xs uppercase text-muted hidden lg:table-cell">Pole</th>
                            <th className="text-right py-3 px-2 text-xs uppercase text-muted">Points</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredStandings.map((entry) => {
                            const isIndonesian = entry.rider.nationality === 'INA'
                            const isLeader = entry.position === 1

                            return (
                              <tr
                                key={entry.position}
                                className={`
                                  border-b border-muted/10 transition-colors
                                  ${isIndonesian ? 'bg-red-500/10 hover:bg-red-500/20' : 'hover:bg-white/5'}
                                  ${isLeader ? 'bg-yellow-500/10' : ''}
                                `}
                              >
                                <td className="py-4 px-2">
                                  <span className={`font-bold text-lg ${isLeader ? 'text-[#ffc400]' : 'text-subtle'}`}>
                                    {entry.position}
                                  </span>
                                </td>
                                <td className="py-4 px-2">
                                  <div className="flex items-center space-x-2">
                                    {isIndonesian && <span className="text-lg">🇮🇩</span>}
                                    <div>
                                      <div className={`font-bold ${isIndonesian ? 'text-[#ff1744]' : isLeader ? 'text-[#ffc400]' : 'text-primary'}`}>
                                        {entry.rider.name}
                                      </div>
                                      <div className="text-xs text-muted">#{entry.rider.number} • {entry.rider.nationality}</div>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-4 px-2 hidden md:table-cell">
                                  <div className="text-sm text-subtle">{entry.rider.team}</div>
                                  <div className="text-xs text-muted">{entry.rider.bike}</div>
                                </td>
                                <td className="py-4 px-2 text-center hidden lg:table-cell">
                                  <span className="text-sm font-semibold text-primary">{entry.wins}</span>
                                </td>
                                <td className="py-4 px-2 text-center hidden lg:table-cell">
                                  <span className="text-sm font-semibold text-primary">{entry.podiums}</span>
                                </td>
                                <td className="py-4 px-2 text-center hidden lg:table-cell">
                                  <span className="text-sm font-semibold text-primary">{entry.poles}</span>
                                </td>
                                <td className="py-4 px-2 text-right">
                                  <span className={`font-black text-xl ${isLeader ? 'text-[#ffc400]' : 'text-primary'}`}>
                                    {entry.points}
                                  </span>
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}

                {activeTab === 'teams' && (
                  <div className="text-center py-12 text-subtle">
                    Team standings will be available after Round 3
                  </div>
                )}

                {activeTab === 'constructors' && (
                  <div className="text-center py-12 text-subtle">
                    Constructor standings will be available after Round 3
                  </div>
                )}

                {activeTab === 'statistics' && (
                  <div className="space-y-6">
                    <PointsProgressionChart riders={topRiders} title="Top 5 Riders - Points Progression" />
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div className="card">
                        <div className="text-3xl font-black text-brand">{standings.length}</div>
                        <div className="text-xs text-muted uppercase">Riders</div>
                      </div>
                      <div className="card">
                        <div className="text-3xl font-black text-brand">{standings[0]?.points || 0}</div>
                        <div className="text-xs text-muted uppercase">Leader Points</div>
                      </div>
                      <div className="card">
                        <div className="text-3xl font-black text-brand">
                          {standings.reduce((sum, r) => sum + r.wins, 0)}
                        </div>
                        <div className="text-xs text-muted uppercase">Total Wins</div>
                      </div>
                      <div className="card">
                        <div className="text-3xl font-black text-brand">
                          {standings.reduce((sum, r) => sum + r.poles, 0)}
                        </div>
                        <div className="text-xs text-muted uppercase">Pole Positions</div>
                      </div>
                    </div>
                  </div>
                )}
              </StandingsTabsAdvanced>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ChampionsWidget category="MotoGP" champions={champions} />
            <ComparisonTool riders={filteredStandings.map((e) => ({
              name: e.rider.name,
              points: e.points,
              wins: e.wins,
              podiums: e.podiums,
              poles: e.poles,
            }))} />
            <ExportTools standingsData={filteredStandings} category="motogp" year={selectedYear} />
          </div>
        </div>
      </div>
    </div>
  )
}
