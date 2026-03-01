'use client'

import { ReactNode } from 'react'

interface Tab {
  id: string
  label: string
  icon?: string
}

interface StandingsTabsAdvancedProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabId: string) => void
  children: ReactNode
}

export default function StandingsTabsAdvanced({ tabs, activeTab, onTabChange, children }: StandingsTabsAdvancedProps) {
  return (
    <div>
      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-white/10 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-2 font-bebas text-sm tracking-wider uppercase transition-all rounded-sm flex items-center gap-2 ${
              activeTab === tab.id
                ? 'bg-[#ff1744]/10 text-[#ff1744] border-b-2 border-[#ff1744]'
                : 'text-white/50 hover:text-white/80 border-b-2 border-transparent'
            }`}
          >
            {tab.icon && <span>{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="animate-fadeIn">
        {children}
      </div>
    </div>
  )
}
