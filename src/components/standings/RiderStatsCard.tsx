'use client'

import { useState } from 'react'

interface RiderStats {
  name: string
  number: number
  nationality: string
  team: string
  bike: string
  points: number
  wins: number
  podiums: number
  poles: number
  championships?: number
  careerWins?: number
  careerPodiums?: number
  bestResult?: string
  worstResult?: string
  avgPosition?: number
  consistency?: number
}

interface RiderStatsCardProps {
  rider: RiderStats
  isExpanded: boolean
  onToggle: () => void
}

export default function RiderStatsCard({ rider, isExpanded, onToggle }: RiderStatsCardProps) {
  return (
    <div className="border-b border-muted/10">
      {/* Basic Row */}
      <button
        onClick={onToggle}
        className="w-full py-4 px-2 hover:bg-white/5 transition-colors text-left"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="font-bold text-lg">{rider.name}</div>
            <div className="text-xs text-muted">#{rider.number}</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-xl font-black text-primary">{rider.points}</div>
            <svg
              className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="px-4 pb-6 pt-2 bg-white/5 animate-fadeIn">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {/* Team & Bike */}
            <div>
              <div className="text-xs text-muted uppercase mb-1">Team</div>
              <div className="text-sm font-semibold">{rider.team}</div>
              <div className="text-xs text-subtle">{rider.bike}</div>
            </div>

            {/* Nationality */}
            <div>
              <div className="text-xs text-muted uppercase mb-1">Nationality</div>
              <div className="text-sm font-semibold">{rider.nationality}</div>
            </div>

            {/* Current Season Stats */}
            <div>
              <div className="text-xs text-muted uppercase mb-1">2026 Season</div>
              <div className="text-xs text-subtle">
                <div>🏆 {rider.wins} Wins</div>
                <div>🥇 {rider.podiums} Podiums</div>
                <div>⚡ {rider.poles} Poles</div>
              </div>
            </div>

            {/* Career Stats */}
            <div>
              <div className="text-xs text-muted uppercase mb-1">Career</div>
              <div className="text-xs text-subtle">
                {rider.championships !== undefined && <div>🏆 {rider.championships} Championships</div>}
                {rider.careerWins !== undefined && <div>✓ {rider.careerWins} Total Wins</div>}
                {rider.careerPodiums !== undefined && <div>🥇 {rider.careerPodiums} Total Podiums</div>}
              </div>
            </div>
          </div>

          {/* Performance Stats */}
          {(rider.bestResult || rider.avgPosition || rider.consistency) && (
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              {rider.bestResult && (
                <div>
                  <div className="text-xs text-muted uppercase mb-1">Best Result</div>
                  <div className="text-sm font-bold text-[#76ff03]">{rider.bestResult}</div>
                </div>
              )}
              {rider.avgPosition && (
                <div>
                  <div className="text-xs text-muted uppercase mb-1">Avg Position</div>
                  <div className="text-sm font-bold">{rider.avgPosition.toFixed(1)}</div>
                </div>
              )}
              {rider.consistency && (
                <div>
                  <div className="text-xs text-muted uppercase mb-1">Consistency</div>
                  <div className="text-sm font-bold text-[#00e5ff]">{rider.consistency}%</div>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <button className="px-3 py-1 bg-[#ff1744]/10 border border-[#ff1744]/30 rounded text-xs font-bebas tracking-wider text-[#ff1744] hover:bg-[#ff1744]/20 transition-all">
              VIEW FULL PROFILE
            </button>
            <button className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-bebas tracking-wider hover:bg-white/10 transition-all">
              COMPARE
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
