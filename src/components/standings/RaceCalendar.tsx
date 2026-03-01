'use client'

import { useEffect, useState } from 'react'

interface Race {
  name: string
  date: string
  winner?: string
}

interface RaceCalendarProps {
  nextRace: Race
  lastRace?: Race
}

export default function RaceCalendar({ nextRace, lastRace }: RaceCalendarProps) {
  const [timeUntilRace, setTimeUntilRace] = useState('')

  useEffect(() => {
    const calculateTimeUntil = () => {
      const now = new Date()
      const raceDate = new Date(nextRace.date)
      const diff = raceDate.getTime() - now.getTime()

      if (diff <= 0) {
        setTimeUntilRace('Race in progress!')
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

      setTimeUntilRace(`${days}d ${hours}h ${minutes}m`)
    }

    calculateTimeUntil()
    const interval = setInterval(calculateTimeUntil, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [nextRace.date])

  return (
    <div className="card">
      <h3 className="text-xl font-black uppercase text-brand mb-4 flex items-center gap-2">
        <span>📆</span>
        RACE CALENDAR
      </h3>

      {/* Next Race */}
      <div className="p-4 bg-[#ff1744]/10 border border-[#ff1744]/30 rounded-lg mb-4">
        <div className="text-xs text-[#ff1744] uppercase mb-1">Next Race</div>
        <div className="text-lg font-bold mb-1">{nextRace.name}</div>
        <div className="text-sm text-subtle mb-2">{new Date(nextRace.date).toLocaleDateString('id-ID', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</div>
        <div className="inline-block px-3 py-1 bg-[#ff1744]/20 rounded-full text-xs font-mono text-[#ff1744]">
          ⏱️ {timeUntilRace}
        </div>
      </div>

      {/* Last Race */}
      {lastRace && (
        <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
          <div className="text-xs text-muted uppercase mb-1">Last Race</div>
          <div className="text-sm font-bold mb-1">{lastRace.name}</div>
          {lastRace.winner && (
            <div className="text-xs text-subtle">
              🏆 Winner: <span className="text-[#ffc400]">{lastRace.winner}</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
