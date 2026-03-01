'use client'

import { useState } from 'react'

interface Rider {
  name: string
  points: number
  wins: number
  podiums: number
  poles: number
}

interface ComparisonToolProps {
  riders: Rider[]
}

export default function ComparisonTool({ riders }: ComparisonToolProps) {
  const [selectedRiders, setSelectedRiders] = useState<string[]>([])

  const toggleRider = (name: string) => {
    if (selectedRiders.includes(name)) {
      setSelectedRiders(selectedRiders.filter((r) => r !== name))
    } else if (selectedRiders.length < 3) {
      setSelectedRiders([...selectedRiders, name])
    }
  }

  const compareData = selectedRiders.map((name) => riders.find((r) => r.name === name)!)

  return (
    <div className="card">
      <h3 className="text-xl font-black uppercase text-brand mb-4 flex items-center gap-2">
        <span>⚖️</span>
        RIDER COMPARISON
      </h3>

      {/* Rider Selection */}
      <div className="mb-4">
        <div className="text-xs text-muted uppercase mb-2">
          Select up to 3 riders ({selectedRiders.length}/3)
        </div>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {riders.slice(0, 10).map((rider) => (
            <button
              key={rider.name}
              onClick={() => toggleRider(rider.name)}
              className={`w-full px-3 py-2 text-left rounded text-sm transition-all ${
                selectedRiders.includes(rider.name)
                  ? 'bg-[#ff1744]/20 border border-[#ff1744]'
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
              disabled={!selectedRiders.includes(rider.name) && selectedRiders.length >= 3}
            >
              {rider.name}
              {selectedRiders.includes(rider.name) && ' ✓'}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Results */}
      {compareData.length >= 2 && (
        <div className="pt-4 border-t border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 text-xs uppercase text-muted">Stat</th>
                {compareData.map((rider) => (
                  <th key={rider.name} className="text-center py-2 text-xs uppercase text-muted">
                    {rider.name.split(' ')[0]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-2 text-subtle">Points</td>
                {compareData.map((rider) => (
                  <td key={rider.name} className="text-center font-bold">
                    {rider.points}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-2 text-subtle">Wins</td>
                {compareData.map((rider) => (
                  <td key={rider.name} className="text-center font-bold text-[#ffc400]">
                    {rider.wins}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-2 text-subtle">Podiums</td>
                {compareData.map((rider) => (
                  <td key={rider.name} className="text-center font-bold text-[#76ff03]">
                    {rider.podiums}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2 text-subtle">Poles</td>
                {compareData.map((rider) => (
                  <td key={rider.name} className="text-center font-bold text-[#00e5ff]">
                    {rider.poles}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>

          {/* Points Difference */}
          {compareData.length === 2 && (
            <div className="mt-4 p-3 bg-white/5 rounded text-center">
              <div className="text-xs text-muted uppercase mb-1">Points Gap</div>
              <div className="text-xl font-black text-[#ff1744]">
                {Math.abs(compareData[0].points - compareData[1].points)} pts
              </div>
            </div>
          )}
        </div>
      )}

      {compareData.length === 0 && (
        <div className="text-center py-8 text-subtle text-sm">
          Select riders to compare
        </div>
      )}
    </div>
  )
}
