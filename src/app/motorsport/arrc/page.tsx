import Link from 'next/link'

export const metadata = {
  title: 'ARRC 2026 — Berita, Hasil, Klasemen | IndonesiaSBK',
  description: 'Berita ARRC (Asia Road Racing Championship) terbaru: hasil race, klasemen 2026. Batu loncatan rider Indonesia ke Grand Prix.',
}

export default function ARRCPage() {
  const standings = [
    { pos: 1, rider: 'Anupab Sarmoon', team: 'Yamaha Thailand Racing', flag: '🇹🇭', pts: 158 },
    { pos: 2, rider: 'Md Zaqhwan Zaidi', team: 'Honda Malaysia', flag: '🇲🇾', pts: 145 },
    { pos: 3, rider: 'Andy Fadly', team: 'Yamaha Indonesia Racing', flag: '🇮🇩', pts: 132 },
    { pos: 4, rider: 'Veda Ega Pratama', team: 'Honda Team Indonesia', flag: '🇮🇩', pts: 125 },
    { pos: 5, rider: 'McKinley Kyle Paz', team: 'Yamaha Philippines', flag: '🇵🇭', pts: 115 },
    { pos: 6, rider: 'Nguyen Thanh Nam', team: 'Honda Vietnam', flag: '🇻🇳', pts: 98 },
    { pos: 7, rider: 'Fakhrusy Rostam', team: 'Honda Asia Dream', flag: '🇲🇾', pts: 88 },
    { pos: 8, rider: 'Aldi Satya Mahendra', team: 'Yamaha Indonesia', flag: '🇮🇩', pts: 82 },
    { pos: 9, rider: 'Peerapong Boonlert', team: 'Yamaha Thailand', flag: '🇹🇭', pts: 75 },
    { pos: 10, rider: 'Irfan Ardiansyah', team: 'Honda Astra Indonesia', flag: '🇮🇩', pts: 68 },
  ]

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-[#ff1744] rounded-xl flex items-center justify-center">
            🌏
          </div>
          <div>
            <h1 className="text-5xl font-bebas font-black uppercase">ARRC 2026</h1>
            <p className="text-white/60">Asia Road Racing Championship — Gateway to Grand Prix</p>
          </div>
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <Link href="#standings" className="px-4 py-2 glass rounded-lg text-sm font-bebas uppercase hover:bg-white/5">
            Klasemen
          </Link>
          <Link href="#riders" className="px-4 py-2 glass rounded-lg text-sm font-bebas uppercase hover:bg-white/5">
            🇮🇩 Rider Indonesia
          </Link>
        </div>
      </div>

      <div className="glass rounded-xl p-6 mb-8 bg-gradient-to-r from-[#ff1744]/10 to-transparent border-[#ff1744]">
        <h3 className="text-xl font-bebas font-black mb-3">🇮🇩 ARRC: LADDER SYSTEM KE MOTOGP!</h3>
        <div className="space-y-2 text-white/80">
          <p><strong>Success Story:</strong></p>
          <p>• Veda Ega Pratama: ARRC SS600 → Moto3 2026 ✅</p>
          <p>• Mario Suryo Aji: ARRC champion → Moto3 → Moto2 ✅</p>
          <p><strong>ARRC = Proving Ground untuk rider Indonesia tembus Grand Prix!</strong></p>
        </div>
      </div>

      <section id="standings" className="mb-12">
        <h2 className="text-2xl font-bebas font-black uppercase mb-6 flex items-center gap-3">
          <span className="w-1 h-8 bg-[#ff6600] rounded"></span>
          KLASEMEN ARRC SS600
        </h2>
        <div className="glass rounded-xl p-6">
          <div className="space-y-3">
            {standings.map((rider) => (
              <div
                key={rider.pos}
                className={`flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors ${
                  rider.pos === 1 ? 'bg-[#ffc400]/10 border-l-4 border-l-[#ffc400]' : ''
                } ${rider.flag === '🇮🇩' ? 'bg-[#ff1744]/5' : ''}`}
              >
                <div className={`text-3xl font-bebas font-black w-10 text-center ${rider.pos === 1 ? 'text-[#ffc400]' : 'text-white/40'}`}>
                  {rider.pos}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-lg leading-tight flex items-center gap-2">
                    {rider.rider}
                    {rider.flag === '🇮🇩' && <span className="text-xs bg-[#ff1744] px-2 py-1 rounded">INDONESIA</span>}
                  </div>
                  <div className="text-sm text-white/60 font-space-mono truncate">{rider.team}</div>
                </div>
                <div className="text-2xl">{rider.flag}</div>
                <div className="text-right">
                  <div className={`text-3xl font-bebas font-black ${rider.pos === 1 ? 'text-[#ff6600]' : 'text-white'}`}>
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
