import Link from 'next/link'

export const metadata = {
  title: 'MiniGP 2026 — Honda NSF250R Series | IndonesiaSBK',
  description: 'Berita MiniGP (Honda NSF250R One-Make Series) terbaru: hasil race, klasemen 2026. Junior championship.',
}

export default function MiniGPPage() {
  const standings = [
    { pos: 1, rider: 'Raffi Pratama', number: 7, flag: '🇮🇩', pts: 125, team: 'Astra Honda' },
    { pos: 2, rider: 'Bima Ardhika', number: 23, flag: '🇮🇩', pts: 118, team: 'Wahana Honda' },
    { pos: 3, rider: 'Aldo Satya', number: 46, flag: '🇮🇩', pts: 105, team: 'MPM Honda' },
    { pos: 4, rider: 'Yoga Prasetya', number: 11, flag: '🇮🇩', pts: 98, team: 'Astra Honda' },
    { pos: 5, rider: 'Dani Kurniawan', number: 99, flag: '🇮🇩', pts: 88, team: 'Wahana Honda' },
  ]

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-[#76ff03] rounded-xl flex items-center justify-center text-4xl">
            🏍️
          </div>
          <div>
            <h1 className="text-5xl font-bebas font-black uppercase">MINIGP 2026</h1>
            <p className="text-white/60">Honda NSF250R One-Make Series — Junior Championship</p>
          </div>
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <Link href="#standings" className="px-4 py-2 glass rounded-lg text-sm font-bebas uppercase hover:bg-white/5">
            Klasemen
          </Link>
          <Link href="#about" className="px-4 py-2 glass rounded-lg text-sm font-bebas uppercase hover:bg-white/5">
            Tentang MiniGP
          </Link>
        </div>
      </div>

      <div className="glass rounded-xl p-6 mb-8 bg-gradient-to-r from-[#76ff03]/10 to-transparent border-[#76ff03]">
        <h3 className="text-xl font-bebas font-black mb-3">🏍️ TENTANG MINIGP</h3>
        <div className="space-y-2 text-white/80">
          <p><strong>Format:</strong> One-make series — semua pakai Honda NSF250R</p>
          <p><strong>Spesifikasi:</strong> 250cc, 4-stroke, ~40HP, bobot ~100kg</p>
          <p><strong>Target:</strong> Junior riders (usia 14-24 tahun)</p>
          <p><strong>Tujuan:</strong> Ladder system menuju Moto3, ARRC, dan Grand Prix</p>
          <p><strong>Lokasi:</strong> Sirkuit di Indonesia (Sentul, Mandalika, dll)</p>
          <p><strong>Success Story:</strong> Banyak alumni MiniGP yang kini di ARRC dan GP!</p>
        </div>
      </div>

      <section id="standings" className="mb-12">
        <h2 className="text-2xl font-bebas font-black uppercase mb-6 flex items-center gap-3">
          <span className="w-1 h-8 bg-[#76ff03] rounded"></span>
          KLASEMEN MINIGP 2026
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
                  <div className="text-sm text-white/60 font-space-mono">#{rider.number} • {rider.team}</div>
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
