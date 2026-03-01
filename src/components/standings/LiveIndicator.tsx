'use client'

import { useEffect, useState } from 'react'

interface LiveIndicatorProps {
  lastUpdated: string
  nextUpdate?: string
  dataSource?: string
}

export default function LiveIndicator({ lastUpdated, nextUpdate, dataSource }: LiveIndicatorProps) {
  const [timeAgo, setTimeAgo] = useState('')

  useEffect(() => {
    const calculateTimeAgo = () => {
      const now = new Date()
      const updated = new Date(lastUpdated)
      const diff = now.getTime() - updated.getTime()

      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

      if (hours > 24) {
        const days = Math.floor(hours / 24)
        setTimeAgo(`${days} day${days > 1 ? 's' : ''} ago`)
      } else if (hours > 0) {
        setTimeAgo(`${hours} hour${hours > 1 ? 's' : ''} ago`)
      } else if (minutes > 0) {
        setTimeAgo(`${minutes} minute${minutes > 1 ? 's' : ''} ago`)
      } else {
        setTimeAgo('Just now')
      }
    }

    calculateTimeAgo()
    const interval = setInterval(calculateTimeAgo, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [lastUpdated])

  return (
    <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
      {/* Live Indicator */}
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="w-2 h-2 bg-[#76ff03] rounded-full animate-pulse"></div>
          <div className="absolute inset-0 w-2 h-2 bg-[#76ff03] rounded-full animate-ping"></div>
        </div>
        <span className="uppercase">LIVE</span>
      </div>

      {/* Last Updated */}
      <div className="flex items-center gap-1">
        <span>Last updated:</span>
        <span className="font-semibold text-subtle">{timeAgo}</span>
      </div>

      {/* Next Update */}
      {nextUpdate && (
        <div className="flex items-center gap-1">
          <span>Next update:</span>
          <span className="font-semibold text-subtle">{nextUpdate}</span>
        </div>
      )}

      {/* Data Source */}
      {dataSource && (
        <div className="flex items-center gap-1">
          <span>Source:</span>
          <span className="font-semibold text-subtle">{dataSource}</span>
        </div>
      )}

      {/* Auto-refresh toggle (placeholder) */}
      <button className="ml-auto px-2 py-1 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-all">
        ⟳ Auto-refresh
      </button>
    </div>
  )
}
