'use client'

import { useState } from 'react'
import arrcData from '@/data/arrc-2024-complete.json'
import StandingsYearSelector from '@/components/standings/StandingsYearSelector'
import StandingsTabsAdvanced from '@/components/standings/StandingsTabsAdvanced'
import FilterControls from '@/components/standings/FilterControls'
import RaceCalendar from '@/components/standings/RaceCalendar'
import ComparisonTool from '@/components/standings/ComparisonTool'
import ChampionsWidget from '@/components/standings/ChampionsWidget'
import LiveIndicator from '@/components/standings/LiveIndicator'
import ExportTools from '@/components/standings/ExportTools'

interface Rider {
  position: number
  name: string
  nationality: string
  team: string
  bike: string
  number: number
  total_points: number
  indonesian?: boolean
}

interface Category {
  full_name: string
  total_riders: number
  indonesian_riders: number
  standings: Rider[]
}

export default function ArrcStandingsPage() {
  const [selectedYear, setSelectedYear] = useState(2024)
  const [activeCategory, setActiveCategory] = useState('AP250')
  const [sortBy, setSortBy] = useState('Points')
  const [searchQuery, setSearchQuery] = useState('')
  const [showIndonesianOnly, setShowIndonesianOnly] = useState(false)

  const categories = arrcData.categories as Record<string, Category>
  const currentCategory = categories[activeCategory]

  // Filter and sort standings
  let filteredStandings = currentCategory.standings.filter((rider) => {
    const matchesSearch = rider.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesIndonesian = !showIndonesianOnly || rider.indonesian
    return matchesSearch && matchesIndonesian
  })

  const categoryTabs = [
    { id: 'AP250', label: 'AP250', icon: '🏍️' },
    { id: 'ASB1000', label: 'ASB1000', icon: '⚡' },
    { id: 'SS600', label: 'SS600', icon: '🏁' },
    { id: 'UB150', label: 'UB150', icon: '🏆' },
  ]

  const champions = [
    { year: 2024, name: 'Muhammad Kiandra Ramadhipa', nationality: 'INA' },
    { year: 2023, name: 'Anupab Sarmoon', nationality: 'THA' },
    { year: 2022, name: 'Md Zaqhwan Zaidi', nationality: 'MAS' },
    { year: 2021, name: 'Peerapong Boonlert', nationality: 'THA' },
  ]

  // Indonesian riders highlight
  const indonesianRiders = filteredStandings.filter((r) => r.indonesian).slice(0, 5)

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="accent-line"></div>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                <span className="text-brand">ARRC {selectedYear}</span>
                <span className="text-white"> STANDINGS</span>
              </h1>
            </div>
            <StandingsYearSelector
              years={[2024, 2023, 2022, 2021, 2020]}
              currentYear={selectedYear}
              onYearChange={setSelectedYear}
            />
          </div>
          <p className="text-lg text-subtle max-w-3xl mb-4">
            Live championship standings from {arrcData.championship}. Indonesian riders highlighted with 🇮🇩
          </p>
          <LiveIndicator
            lastUpdated={arrcData.extracted_date}
            nextUpdate="After Sepang Round"
            dataSource="ARRC Official"
          />
        </div>

        {/* Race Calendar */}
        <div className="mb-8">
          <RaceCalendar
            nextRace={{ name: 'Sepang Round', date: '2024-12-15' }}
            lastRace={{ name: 'Buriram Round 6', date: '2024-11-24' }}
          />
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <StandingsTabsAdvanced
            tabs={categoryTabs}
            activeTab={activeCategory}
            onTabChange={setActiveCategory}
          >
            <div className="text-sm text-muted mb-4">
              {currentCategory.full_name} • {currentCategory.total_riders} Riders • 🇮🇩 {currentCategory.indonesian_riders} Indonesian
            </div>
          </StandingsTabsAdvanced>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Standings */}
          <div className="lg:col-span-2">
            <div className="card">
              <FilterControls
                sortOptions={['Points', 'Name', 'Team']}
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
                      <th className="text-left py-3 px-2 text-xs uppercase text-muted hidden lg:table-cell">Bike</th>
                      <th className="text-right py-3 px-2 text-xs uppercase text-muted">Pts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStandings.map((rider) => {
                      const isLeader = rider.position === 1
                      const isTopThree = rider.position <= 3

                      return (
                        <tr
                          key={rider.position}
                          className={`
                            border-b border-muted/10 transition-colors
                            ${rider.indonesian ? 'bg-red-500/10 hover:bg-red-500/20' : 'hover:bg-white/5'}
                            ${isLeader ? 'bg-yellow-500/10' : ''}
                          `}
                        >
                          <td className="py-4 px-2">
                            <span
                              className={`
                                font-bold text-lg
                                ${isLeader ? 'text-[#ffc400]' : isTopThree ? 'text-[#ff1744]' : 'text-subtle'}
                              `}
                            >
                              {rider.position}
                            </span>
                          </td>
                          <td className="py-4 px-2">
                            <div className="flex items-center space-x-2">
                              {rider.indonesian && <span className="text-lg">🇮🇩</span>}
                              <div>
                                <div
                                  className={`
                                    font-bold
                                    ${rider.indonesian ? 'text-[#ff1744]' : isLeader ? 'text-[#ffc400]' : 'text-primary'}
                                  `}
                                >
                                  {rider.name}
                                </div>
                                <div className="text-xs text-muted">#{rider.number} • {rider.nationality}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-2 hidden md:table-cell">
                            <div className="text-sm text-subtle">{rider.team}</div>
                          </td>
                          <td className="py-4 px-2 hidden lg:table-cell">
                            <div className="text-xs text-muted">{rider.bike}</div>
                          </td>
                          <td className="py-4 px-2 text-right">
                            <span
                              className={`
                                font-black text-xl
                                ${isLeader ? 'text-[#ffc400]' : 'text-primary'}
                              `}
                            >
                              {rider.total_points}
                            </span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

              {/* Stats Summary */}
              <div className="mt-6 pt-6 border-t border-muted/20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-black text-brand">{currentCategory.total_riders}</div>
                    <div className="text-xs text-muted uppercase">Riders</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-brand">{currentCategory.indonesian_riders}</div>
                    <div className="text-xs text-muted uppercase">🇮🇩 Indonesian</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-brand">
                      {currentCategory.standings[0]?.total_points || 0}
                    </div>
                    <div className="text-xs text-muted uppercase">Leader Points</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-brand">
                      {currentCategory.standings[0]?.total_points - currentCategory.standings[1]?.total_points || 0}
                    </div>
                    <div className="text-xs text-muted uppercase">Points Gap</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Indonesian Riders Widget */}
            {indonesianRiders.length > 0 && (
              <div className="card">
                <h3 className="text-xl font-black uppercase text-brand mb-4 flex items-center gap-2">
                  <span>🇮🇩</span>
                  INDONESIAN RIDERS
                </h3>
                <div className="space-y-3">
                  {indonesianRiders.map((rider) => (
                    <div key={rider.position} className="p-3 bg-[#ff1744]/10 border border-[#ff1744]/30 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-bold text-[#ff1744]">{rider.name}</div>
                          <div className="text-xs text-subtle">{rider.team}</div>
                        </div>
                        <div>
                          <div className="text-lg font-black text-primary">{rider.total_points}</div>
                          <div className="text-xs text-muted text-right">P{rider.position}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <ChampionsWidget category="ARRC" champions={champions} />
            
            <ComparisonTool
              riders={filteredStandings.slice(0, 10).map((r) => ({
                name: r.name,
                points: r.total_points,
                wins: 0,
                podiums: 0,
                poles: 0,
              }))}
            />
            
            <ExportTools standingsData={filteredStandings} category="arrc" year={selectedYear} />
          </div>
        </div>
      </div>
    </div>
  )
}
