import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Moto2 2026 — Berita, Hasil, Klasemen | IndonesiaSBK',
  description: 'Berita Moto2 terbaru: hasil race, qualifying, klasemen championship 2026. Gateway to MotoGP.',
}

export default function Moto2Page() {
  const standings = [
    { pos: 1, rider: 'Diogo Moreira', number: 21, team: 'Italtrans Racing', flag: '🇧🇷', pts: 165 },
    { pos: 2, rider: 'Joe Roberts', number: 16, team: 'OnlyFans American Racing', flag: '🇺🇸', pts: 152 },
    { pos: 3, rider: 'Tony Arbolino', number: 14, team: 'Elf Marc VDS Racing', flag: '🇮🇹', pts: 145 },
    { pos: 4, rider: 'Ai Ogura', number: 79, team: 'Idemitsu Honda Team Asia', flag: '🇯🇵', pts: 138 },
    { pos: 5, rider: 'Fermin Aldeguer', number: 54, team: 'Beta Tools SpeedUp', flag: '🇪🇸', pts: 125 },
    { pos: 6, rider: 'Somkiat Chantra', number: 35, team: 'Idemitsu Honda Team Asia', flag: '🇹🇭', pts: 118 },
    { pos: 7, rider: 'Celestino Vietti', number: 13, team: 'Fantic Racing', flag: '🇮🇹', pts: 105 },
    { pos: 8, rider: 'Jake Dixon', number: 96, team: 'CFMOTO Inde Aspar', flag: '🇬🇧', pts: 98 },
    { pos: 9, rider: 'Mario Suryo Aji', number: 64, team: 'Idemitsu Honda Team Asia', flag: '🇮🇩', pts: 85 },
    { pos: 10, rider: 'Manuel Gonzalez', number: 18, team: 'Gresini Moto2', flag: '🇪🇸', pts: 78 },
  ]

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-[#00e5ff] rounded-xl flex items-center justify-center text-4xl">
            🏍️
          </div>
          <div>
            <h1 className="text-5xl font-bebas font-black uppercase">MOTO2 2026</h1>
            <p className="text-white/60">Kelas Menengah — Gateway to MotoGP</p>
          </div>
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <Link href="#standings" className="px-4 py-2 glass rounded-lg text-sm font-bebas uppercase hover:bg-white/5 transition-colors">
            Klasemen
          </Link>
          <Link href="#news" className="px-4 py-2 glass rounded-lg text-sm font-bebas uppercase hover:bg-white/5 transition-colors">
            Berita
          </Link>
          <Link href="#riders" className="px-4 py-2 glass rounded-lg text-sm font-bebas uppercase hover:bg-white/5 transition-colors">
            🇮🇩 Mario Suryo Aji
          </Link>
        </div>
      </div>

      <section id="standings" className="mb-12">
        <h2 className="text-2xl font-bebas font-black uppercase mb-6 flex items-center gap-3">
          <span className="w-1 h-8 bg-[#00e5ff] rounded"></span>
          KLASEMEN RIDER MOTO2
        </h2>
        <div className="glass rounded-xl p-6">
          <div className="space-y-3">
            {standings.map((rider) => (
              <div
                key={rider.pos}
                className={`flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors ${
                  rider.pos === 1 ? 'bg-[#ffc400]/10 border-l-4 border-l-[#ffc400]' : ''
                } ${rider.rider === 'Mario Suryo Aji' ? 'bg-[#ff1744]/10 border-l-4 border-l-[#ff1744]' : ''}`}
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
                  <div className={`text-3xl font-bebas font-black ${rider.pos === 1 ? 'text-[#00e5ff]' : 'text-white'}`}>
                    {rider.pts}
                  </div>
                  <div className="text-xs text-white/40 font-space-mono">PTS</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="glass rounded-xl p-6 bg-gradient-to-br from-[#ff1744]/10 to-transparent border-[#ff1744]">
        <h3 className="text-2xl font-bebas font-black mb-4">🇮🇩 MARIO SURYO AJI — SUPER MARIO</h3>
        <div className="space-y-3 text-white/80">
          <p><strong>Tim:</strong> Idemitsu Honda Team Asia</p>
          <p><strong>Nomor:</strong> #64</p>
          <p><strong>Asal:</strong> Magetan, Jawa Timur</p>
          <p><strong>Best Result Moto2:</strong> P9 di Americas GP Austin 2025 (prestasi terbaik rider Indonesia di GP)</p>
          <p><strong>Musim 2026:</strong> Tahun ketiga di Moto2, target podium di Mandalika!</p>
          <Link href="/rider/mario-suryo-aji" className="inline-block mt-4 px-6 py-3 bg-[#ff1744] hover:bg-[#ff4569] rounded-lg font-bebas uppercase transition-colors">
            PROFIL LENGKAP MARIO →
          </Link>
        </div>
      </section>

    </div>
  )
}
