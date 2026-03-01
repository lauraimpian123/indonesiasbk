'use client'

export default function RunningTextWSBK() {
  const wsbkStandings = [
    { pos: 1, rider: 'Toprak Razgatlioglu', points: 142 },
    { pos: 2, rider: 'Alvaro Bautista', points: 135 },
    { pos: 3, rider: 'Jonathan Rea', points: 128 },
    { pos: 4, rider: 'Alex Lowes', points: 98 },
    { pos: 5, rider: 'Andrea Locatelli', points: 92 },
  ]
  
  const wsbkText = wsbkStandings.map(s => `${s.pos}. ${s.rider} (${s.points}pts)`).join(' • ')
  
  return (
    <div className="bg-[#C73D2F] text-white py-2 overflow-hidden border-b border-[#A0332A]">
      <div className="running-text whitespace-nowrap">
        <div className="inline-block px-4">
          <span className="font-bold">WSBK 2026 Standings:</span> {wsbkText}
        </div>
        <div className="inline-block px-4">
          <span className="font-bold">WSBK 2026 Standings:</span> {wsbkText}
        </div>
      </div>
    </div>
  )
}
