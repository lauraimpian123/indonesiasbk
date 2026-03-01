'use client'

export default function RunningTextMotoGP() {
  const motogpStandings = [
    { pos: 1, rider: 'Marc Marquez', points: 185 },
    { pos: 2, rider: 'Pecco Bagnaia', points: 178 },
    { pos: 3, rider: 'Jorge Martin', points: 165 },
    { pos: 4, rider: 'Brad Binder', points: 142 },
    { pos: 5, rider: 'Fabio Quartararo', points: 138 },
  ]
  
  const motogpText = motogpStandings.map(s => `${s.pos}. ${s.rider} (${s.points}pts)`).join(' • ')
  
  return (
    <div className="bg-brand text-white py-2 overflow-hidden border-b border-[#BE123C]">
      <div className="running-text whitespace-nowrap">
        <div className="inline-block px-4">
          <span className="font-bold">MotoGP 2026 Standings:</span> {motogpText}
        </div>
        <div className="inline-block px-4">
          <span className="font-bold">MotoGP 2026 Standings:</span> {motogpText}
        </div>
      </div>
    </div>
  )
}
