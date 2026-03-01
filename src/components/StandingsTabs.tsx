'use client'

import { useState } from 'react'
import Link from 'next/link'

const standingsData = {
  motogp: [
    { pos: 1, rider: 'Marc Marquez', team: 'Gresini Racing Ducati', flag: '🇪🇸', pts: 185 },
    { pos: 2, rider: 'Pecco Bagnaia', team: 'Ducati Lenovo Team', flag: '🇮🇹', pts: 178 },
    { pos: 3, rider: 'Jorge Martin', team: 'Aprilia Racing', flag: '🇪🇸', pts: 165 },
    { pos: 4, rider: 'Brad Binder', team: 'Red Bull KTM', flag: '🇿🇦', pts: 142 },
    { pos: 5, rider: 'Fabio Quartararo', team: 'Monster Yamaha', flag: '🇫🇷', pts: 138 },
  ],
  moto2: [
    { pos: 1, rider: 'Diogo Moreira', team: 'Italtrans Racing', flag: '🇧🇷', pts: 165 },
    { pos: 2, rider: 'Joe Roberts', team: 'OnlyFans American', flag: '🇺🇸', pts: 152 },
    { pos: 3, rider: 'Tony Arbolino', team: 'Elf Marc VDS', flag: '🇮🇹', pts: 145 },
    { pos: 4, rider: 'Ai Ogura', team: 'Idemitsu Honda Asia', flag: '🇯🇵', pts: 138 },
    { pos: 5, rider: 'Mario Suryo Aji', team: 'Idemitsu Honda Asia', flag: '🇮🇩', pts: 85 },
  ],
  moto3: [
    { pos: 1, rider: 'David Alonso', team: 'CFMOTO Gaviota', flag: '🇨🇴', pts: 172 },
    { pos: 2, rider: 'Ivan Ortola', team: 'MT Helmets MSI', flag: '🇪🇸', pts: 165 },
    { pos: 3, rider: 'Daniel Holgado', team: 'Red Bull KTM Tech3', flag: '🇪🇸', pts: 148 },
    { pos: 4, rider: 'Joel Kelso', team: 'BOE Motorsports', flag: '🇦🇺', pts: 132 },
    { pos: 5, rider: 'Veda Ega Pratama', team: 'Honda Team Asia', flag: '🇮🇩', pts: 45 },
  ],
  wsbk: [
    { pos: 1, rider: 'Alvaro Bautista', team: 'Aruba.it Ducati', flag: '🇪🇸', pts: 142 },
    { pos: 2, rider: 'Jonathan Rea', team: 'Pata Yamaha', flag: '🇬🇧', pts: 135 },
    { pos: 3, rider: 'Nicolo Bulega', team: 'Aruba.it Ducati', flag: '🇮🇹', pts: 128 },
    { pos: 4, rider: 'Andrea Locatelli', team: 'Pata Yamaha', flag: '🇮🇹', pts: 118 },
    { pos: 5, rider: 'Alex Lowes', team: 'Kawasaki Racing', flag: '🇬🇧', pts: 98 },
  ],
  arrc: [
    { pos: 1, rider: 'Anupab Sarmoon', team: 'Yamaha Thailand', flag: '🇹🇭', pts: 158 },
    { pos: 2, rider: 'Md Zaqhwan Zaidi', team: 'Honda Malaysia', flag: '🇲🇾', pts: 145 },
    { pos: 3, rider: 'Andy Fadly', team: 'Yamaha Indonesia', flag: '🇮🇩', pts: 132 },
    { pos: 4, rider: 'Veda Ega Pratama', team: 'Honda Indonesia', flag: '🇮🇩', pts: 125 },
    { pos: 5, rider: 'McKinley Kyle Paz', team: 'Yamaha Philippines', flag: '🇵🇭', pts: 115 },
  ],
}

type Category = keyof typeof standingsData

export default function StandingsTabs() {
  const [activeTab, setActiveTab] = useState<Category>('motogp')

  const tabs = [
    { key: 'motogp' as Category, label: 'MotoGP', color: 'red' },
    { key: 'moto2' as Category, label: 'Moto2', color: 'blue' },
    { key: 'moto3' as Category, label: 'Moto3', color: 'purple' },
    { key: 'wsbk' as Category, label: 'WSBK', color: 'green' },
    { key: 'arrc' as Category, label: 'ARRC', color: 'gold' },
  ]

  const colorMap = {
    red: 'border-[#ff1744] text-[#ff1744]',
    blue: 'border-[#00e5ff] text-[#00e5ff]',
    purple: 'border-[#9c27b0] text-[#9c27b0]',
    green: 'border-[#76ff03] text-[#76ff03]',
    gold: 'border-[#ffc400] text-[#ffc400]',
  }

  return (
    <div className="glass rounded-2xl p-6 lg:p-8">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-white/10 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 font-bebas text-sm tracking-wider uppercase transition-all rounded-sm ${
              activeTab === tab.key
                ? `bg-${tab.color}/10 ${colorMap[tab.color as keyof typeof colorMap]} border-b-2`
                : 'text-white/50 hover:text-white/80 border-b-2 border-transparent'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Standings Table */}
      <div className="space-y-2">
        {standingsData[activeTab].map((rider, idx) => (
          <div
            key={rider.pos}
            className={`flex items-center gap-4 p-4 rounded-lg transition-all hover:bg-white/5 ${
              rider.pos === 1 ? 'bg-white/5 border-l-4 border-l-[#ffc400]' : 'border-l-4 border-l-transparent'
            }`}
          >
            {/* Position */}
            <div
              className={`text-3xl font-bebas font-black w-10 text-center ${
                rider.pos === 1 ? 'text-[#ffc400]' : 'text-white/40'
              }`}
            >
              {rider.pos}
            </div>

            {/* Rider Info */}
            <div className="flex-1 min-w-0">
              <div className="font-bold text-lg leading-tight">{rider.rider}</div>
              <div className="text-sm text-white/60 font-space-mono truncate">{rider.team}</div>
            </div>

            {/* Flag */}
            <div className="text-2xl">{rider.flag}</div>

            {/* Points */}
            <div className="text-right">
              <div className={`text-3xl font-bebas font-black ${rider.pos === 1 ? 'text-[#ff1744]' : 'text-white'}`}>
                {rider.pts}
              </div>
              <div className="text-xs text-white/40 font-space-mono">PTS</div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Link */}
      <div className="mt-6 text-center">
        <Link
          href={`/standings/${activeTab}`}
          className="inline-block px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#ff1744] rounded-lg text-sm font-bebas tracking-wider uppercase transition-all"
        >
          LIHAT KLASEMEN LENGKAP →
        </Link>
      </div>
    </div>
  )
}
