import Link from 'next/link'

export const metadata = {
  title: 'MotoE 2026 — Berita, Hasil, Klasemen | IndonesiaSBK',
  description: 'Berita MotoE (MotoE World Cup) terbaru: hasil race, klasemen 2026. Full electric racing.',
}

export default function MotoEPage() {
  const standings = [
    { pos: 1, rider: 'Matteo Ferrari', number: 11, team: 'Felo Gresini MotoE', flag: '🇮🇹', pts: 88 },
    { pos: 2, rider: 'Oscar Gutierrez', number: 17, team: 'Axxis-MSi', flag: '🇪🇸', pts: 82 },
    { pos: 3, rider: 'Eric Granado', number: 51, team: 'LCR E-Team', flag: '🇧🇷', pts: 75 },
    { pos: 4, rider: 'Nicholas Spinelli', number: 63, team: 'Tech3 E-Racing', flag: '🇮🇹', pts: 68 },
    { pos: 5, rider: 'Kevin Zannoni', number: 99, team: 'Ongetta SIC58', flag: '🇮🇹', pts: 62 },
  ]

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-[#ff1744] rounded-xl flex items-center justify-center">
            ⚡
          </div>
          <div>
            <h1 className="text-5xl font-bebas font-black uppercase">MOTOE 2026</h1>
            <p className="text-white/60">MotoE World Cup — Full Electric Racing</p>
          </div>
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <Link href="#standings" className="px-4 py-2 glass rounded-lg text-sm font-bebas uppercase hover:bg-white/5">
            Klasemen
          </Link>
          <Link href="#tech" className="px-4 py-2 glass rounded-lg text-sm font-bebas uppercase hover:bg-white/5">
            Teknologi
          </Link>
        </div>
      </div>

      <div className="glass rounded-xl p-6 mb-8 bg-gradient-to-r from-[#76ff03]/10 to-transparent border-[#76ff03]">
        <h3 className="text-xl font-bebas font-black mb-3">⚡ MOTOE: MASA DEPAN RACING?</h3>
        <div className="space-y-2 text-white/80">
          <p><strong>Spec Bike:</strong> Ducati V21L (full electric)</p>
          <p><strong>Power:</strong> ~150HP, torque instan dari 0 RPM</p>
          <p><strong>Battery:</strong> 18 kWh, charge time ~30 menit</p>
          <p><strong>Weight:</strong> ~225kg (lebih berat dari MotoGP)</p>
          <p><strong>Sound:</strong> Silent — cuma suara ban & angin!</p>
          <p><strong>Filosofi:</strong> Proving ground untuk teknologi electric yang bisa turun ke motor produksi</p>
        </div>
      </div>

      <section id="standings" className="mb-12">
        <h2 className="text-2xl font-bebas font-black uppercase mb-6 flex items-center gap-3">
          <span className="w-1 h-8 bg-[#76ff03] rounded"></span>
          KLASEMEN MOTOE 2026
        </h2>
        <div className="glass rounded-xl p-6">
          <div className="space-y-3">
            {standings.map((rider) => (
              <div
                key={rider.pos}
                className={`flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors ${
                  rider.pos === 1 ? 'bg-[#ffc400]/10 border-l-4 border-l-[#ffc400]' : ''
                }`}
              >
                <div className={`text-3xl font-bebas font-black w-10 text-center ${rider.pos === 1 ? 'text-[#ffc400]' : 'text-white/40'}`}>
                  {rider.pos}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-lg leading-tight">{rider.rider}</div>
                  <div className="text-sm text-white/60 font-space-mono truncate">{rider.team}</div>
                </div>
                <div className="text-2xl">{rider.flag}</div>
                <div className="text-right">
                  <div className={`text-3xl font-bebas font-black ${rider.pos === 1 ? 'text-[#76ff03]' : 'text-white'}`}>
                    {rider.pts}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
