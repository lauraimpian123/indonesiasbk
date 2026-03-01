import Link from 'next/link'

export const metadata = {
  title: 'IDC 2026 — Indonesia Ducati Championship | IndonesiaSBK',
  description: 'Berita IDC (Indonesia Ducati Championship) terbaru: hasil race, klasemen 2026. One-make series Ducati.',
}

export default function IDCPage() {
  const standings = [
    { pos: 1, rider: 'Andi Gilang', number: 11, flag: '🇮🇩', pts: 145, bike: 'Panigale V2' },
    { pos: 2, rider: 'Rizki Ramdhan', number: 27, flag: '🇮🇩', pts: 138, bike: 'Panigale V2' },
    { pos: 3, rider: 'Bagas Prakoso', number: 99, flag: '🇮🇩', pts: 125, bike: 'Panigale V2' },
    { pos: 4, rider: 'Dimas Galang', number: 46, flag: '🇮🇩', pts: 112, bike: 'Panigale V2' },
    { pos: 5, rider: 'Arya Wijaya', number: 7, flag: '🇮🇩', pts: 98, bike: 'Panigale V2' },
  ]

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-[#ff1744] rounded-xl flex items-center justify-center">
            🇮🇩
          </div>
          <div>
            <h1 className="text-5xl font-bebas font-black uppercase">IDC 2026</h1>
            <p className="text-white/60">Indonesia Ducati Championship — One-Make Series</p>
          </div>
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <Link href="#standings" className="px-4 py-2 glass rounded-lg text-sm font-bebas uppercase hover:bg-white/5">
            Klasemen
          </Link>
          <Link href="#about" className="px-4 py-2 glass rounded-lg text-sm font-bebas uppercase hover:bg-white/5">
            Tentang IDC
          </Link>
        </div>
      </div>

      <div className="glass rounded-xl p-6 mb-8 bg-gradient-to-r from-[#ff1744]/10 to-transparent border-[#ff1744]">
        <h3 className="text-xl font-bebas font-black mb-3">🏍️ TENTANG IDC</h3>
        <div className="space-y-2 text-white/80">
          <p><strong>Format:</strong> One-make series — semua pakai Ducati Panigale V2</p>
          <p><strong>Tujuan:</strong> Equal machinery, murni skill rider yang menang</p>
          <p><strong>Lokasi:</strong> Sirkuit Sentul, Mandalika, dan sirkuit lain di Indonesia</p>
          <p><strong>Peserta:</strong> Rider Indonesia, amateur to semi-pro</p>
          <p><strong>Entry Point:</strong> Kejuaraan lokal yang profesional, stepping stone ke ARRC</p>
        </div>
      </div>

      <section id="standings" className="mb-12">
        <h2 className="text-2xl font-bebas font-black uppercase mb-6 flex items-center gap-3">
          <span className="w-1 h-8 bg-[#ff1744] rounded"></span>
          KLASEMEN IDC 2026
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
                  <div className="text-sm text-white/60 font-space-mono">#{rider.number} • {rider.bike}</div>
                </div>
                <div className="text-2xl">{rider.flag}</div>
                <div className="text-right">
                  <div className={`text-3xl font-bebas font-black ${rider.pos === 1 ? 'text-[#ff1744]' : 'text-white'}`}>
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
