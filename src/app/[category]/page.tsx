import { notFound } from 'next/navigation'

// Mock data untuk championship categories
const championshipData: Record<string, any> = {
  'wsbk-results': {
    name: 'WSBK',
    fullName: 'World Superbike Championship',
    currentSeason: 2026,
    standings: [
      { pos: 1, rider: 'Toprak Razgatlioglu', team: 'BMW Motorrad', points: 142 },
      { pos: 2, rider: 'Alvaro Bautista', team: 'Ducati', points: 135 },
      { pos: 3, rider: 'Jonathan Rea', team: 'Yamaha', points: 128 },
      { pos: 4, rider: 'Alex Lowes', team: 'Kawasaki', points: 98 },
      { pos: 5, rider: 'Andrea Locatelli', team: 'Yamaha', points: 92 },
    ],
    recentResults: [
      { round: 'Round 3', circuit: 'Phillip Island', winner: 'Toprak Razgatlioglu', date: '2026-02-28' },
      { round: 'Round 2', circuit: 'Assen', winner: 'Alvaro Bautista', date: '2026-02-14' },
      { round: 'Round 1', circuit: 'Portimao', winner: 'Toprak Razgatlioglu', date: '2026-02-07' },
    ],
    history: [
      { year: 2025, champion: 'Alvaro Bautista', team: 'Ducati', points: 485 },
      { year: 2024, champion: 'Toprak Razgatlioglu', team: 'BMW', points: 502 },
      { year: 2023, champion: 'Alvaro Bautista', team: 'Ducati', points: 492 },
      { year: 2022, champion: 'Alvaro Bautista', team: 'Ducati', points: 478 },
      { year: 2021, champion: 'Toprak Razgatlioglu', team: 'Yamaha', points: 549 },
    ],
  },
  'motogp-results': {
    name: 'MotoGP',
    fullName: 'MotoGP World Championship',
    currentSeason: 2026,
    standings: [
      { pos: 1, rider: 'Marc Marquez', team: 'Ducati', points: 185 },
      { pos: 2, rider: 'Pecco Bagnaia', team: 'Ducati', points: 178 },
      { pos: 3, rider: 'Jorge Martin', team: 'Aprilia', points: 165 },
      { pos: 4, rider: 'Brad Binder', team: 'KTM', points: 142 },
      { pos: 5, rider: 'Fabio Quartararo', team: 'Yamaha', points: 138 },
    ],
    recentResults: [
      { round: 'Round 4', circuit: 'Losail', winner: 'Marc Marquez', date: '2026-03-08' },
      { round: 'Round 3', circuit: 'Portimao', winner: 'Pecco Bagnaia', date: '2026-02-23' },
      { round: 'Round 2', circuit: 'Termas de Rio Hondo', winner: 'Marc Marquez', date: '2026-02-16' },
    ],
    history: [
      { year: 2025, champion: 'Jorge Martin', team: 'Ducati', points: 498 },
      { year: 2024, champion: 'Pecco Bagnaia', team: 'Ducati', points: 487 },
      { year: 2023, champion: 'Pecco Bagnaia', team: 'Ducati', points: 444 },
      { year: 2022, champion: 'Fabio Quartararo', team: 'Yamaha', points: 265 },
      { year: 2021, champion: 'Fabio Quartararo', team: 'Yamaha', points: 278 },
    ],
  },
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const data = championshipData[category]
  
  if (!data) {
    return notFound()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-black text-white mb-2">{data.fullName}</h1>
        <p className="text-white/70">Season {data.currentSeason} Results & Championship Standings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Current Standings */}
          <section className="card p-6">
            <h2 className="text-2xl font-black text-white mb-4 border-l-4 border-brand pl-3">
              Championship Standings {data.currentSeason}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-tertiary">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Pos</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Rider</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Team</th>
                    <th className="px-4 py-3 text-right text-sm font-semibold">Points</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-default">
                  {data.standings.map((row: any) => (
                    <tr key={row.pos} className="hover:bg-tertiary transition-colors">
                      <td className="px-4 py-3 font-bold text-brand">{row.pos}</td>
                      <td className="px-4 py-3 font-medium text-white">{row.rider}</td>
                      <td className="px-4 py-3 text-white/70">{row.team}</td>
                      <td className="px-4 py-3 text-right font-bold text-white">{row.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Recent Results */}
          <section className="card p-6">
            <h2 className="text-2xl font-black text-white mb-4 border-l-4 border-brand pl-3">
              Recent Results
            </h2>
            <div className="space-y-3">
              {data.recentResults.map((result: any, idx: number) => (
                <div key={idx} className="bg-secondary p-4 rounded-lg border border-default hover:border-brand transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">{result.round}</h3>
                      <p className="text-muted text-sm">{result.circuit}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{result.winner}</p>
                      <p className="text-sm text-muted">{new Date(result.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Championship History */}
          <section className="card p-6">
            <h2 className="text-2xl font-black text-white mb-4 border-l-4 border-brand pl-3">
              Championship History
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-tertiary">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Year</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Champion</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Team</th>
                    <th className="px-4 py-3 text-right text-sm font-semibold">Points</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-default">
                  {data.history.map((row: any) => (
                    <tr key={row.year} className="hover:bg-tertiary transition-colors">
                      <td className="px-4 py-3 font-bold text-white">{row.year}</td>
                      <td className="px-4 py-3 font-medium text-white">{row.champion}</td>
                      <td className="px-4 py-3 text-white/70">{row.team}</td>
                      <td className="px-4 py-3 text-right text-white">{row.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="card p-6 sticky top-24">
            <h3 className="text-xl font-black text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#standings" className="block p-2 rounded hover:bg-tertiary transition-colors">
                  Current Standings
                </a>
              </li>
              <li>
                <a href="#results" className="block p-2 rounded hover:bg-tertiary transition-colors">
                  Recent Results
                </a>
              </li>
              <li>
                <a href="#history" className="block p-2 rounded hover:bg-tertiary transition-colors">
                  Championship History
                </a>
              </li>
              <li>
                <a href={`/${data.name.toLowerCase()}`} className="block p-2 rounded hover:bg-tertiary transition-colors text-brand">
                  Back to {data.name}
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
