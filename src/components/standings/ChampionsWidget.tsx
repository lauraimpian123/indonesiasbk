'use client'

interface Champion {
  year: number
  name: string
  nationality?: string
  team?: string
}

interface ChampionsWidgetProps {
  category: string
  champions: Champion[]
}

export default function ChampionsWidget({ category, champions }: ChampionsWidgetProps) {
  return (
    <div className="card">
      <h3 className="text-xl font-black uppercase text-brand mb-4 flex items-center gap-2">
        <span>🏆</span>
        CHAMPIONS
      </h3>

      <div className="space-y-3">
        {champions.map((champion, index) => (
          <div
            key={champion.year}
            className={`p-3 rounded-lg transition-all ${
              index === 0
                ? 'bg-[#ffc400]/10 border border-[#ffc400]/30'
                : 'bg-white/5 border border-white/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className={`text-lg font-bold ${index === 0 ? 'text-[#ffc400]' : 'text-primary'}`}>
                  {champion.name}
                </div>
                {champion.team && (
                  <div className="text-xs text-subtle">{champion.team}</div>
                )}
              </div>
              <div className={`text-2xl font-bebas font-black ${index === 0 ? 'text-[#ffc400]' : 'text-muted'}`}>
                {champion.year}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-bebas tracking-wider uppercase hover:bg-white/10 transition-all">
        VIEW FULL HISTORY →
      </button>
    </div>
  )
}
