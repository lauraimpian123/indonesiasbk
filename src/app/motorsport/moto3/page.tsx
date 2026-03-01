import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Moto3 2026 — Berita, Hasil, Klasemen | IndonesiaSBK',
  description: 'Berita Moto3 terbaru: hasil race, klasemen championship 2026. Training ground untuk bintang masa depan.',
}

export default function Moto3Page() {
  const standings = [
    { pos: 1, rider: 'David Alonso', number: 80, team: 'CFMOTO Gaviota Aspar', flag: '🇨🇴', pts: 172 },
    { pos: 2, rider: 'Ivan Ortola', number: 48, team: 'MT Helmets MSI', flag: '🇪🇸', pts: 165 },
    { pos: 3, rider: 'Daniel Holgado', number: 96, team: 'Red Bull KTM Tech3', flag: '🇪🇸', pts: 148 },
    { pos: 4, rider: 'Joel Kelso', number: 66, team: 'BOE Motorsports', flag: '🇦🇺', pts: 132 },
    { pos: 5, rider: 'Collin Veijer', number: 95, team: 'Liqui Moly Husqvarna', flag: '🇳🇱', pts: 125 },
    { pos: 6, rider: 'Taiyo Furusato', number: 72, team: 'Honda Team Asia', flag: '🇯🇵', pts: 118 },
    { pos: 7, rider: 'Luca Lunetta', number: 58, team: 'SIC58 Squadra Corse', flag: '🇮🇹', pts: 105 },
    { pos: 8, rider: 'Veda Ega Pratama', number: 99, team: 'Honda Team Asia', flag: '🇮🇩', pts: 45 },
    { pos: 9, rider: 'Scott Ogden', number: 19, team: 'VisionTrack Racing', flag: '🇬🇧', pts: 38 },
    { pos: 10, rider: 'Stefano Nepa', number: 82, team: 'LEVELUP MTA', flag: '🇮🇹', pts: 32 },
  ]

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-[#9c27b0] rounded-xl flex items-center justify-center text-4xl">
            🏍️
          </div>
          <div>
            <h1 className="text-5xl font-bebas font-black uppercase">MOTO3 2026</h1>
            <p className="text-white/60">Kelas Pemula — Training Ground untuk Bintang Masa Depan</p>
          </div>
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <Link href="#standings" className="px-4 py-2 glass rounded-lg text-sm font-bebas uppercase hover:bg-white/5">
            Klasemen
          </Link>
          <Link href="#riders" className="px-4 py-2 glass rounded-lg text-sm font-bebas uppercase hover:bg-white/5">
            🇮🇩 Veda Ega Pratama
          </Link>
        </div>
      </div>

      <section id="standings" className="mb-12">
        <h2 className="text-2xl font-bebas font-black uppercase mb-6 flex items-center gap-3">
          <span className="w-1 h-8 bg-[#9c27b0] rounded"></span>
          KLASEMEN RIDER MOTO3
        </h2>
        <div className="glass rounded-xl p-6">
          <div className="space-y-3">
            {standings.map((rider) => (
              <div
                key={rider.pos}
                className={`flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors ${
                  rider.pos === 1 ? 'bg-[#ffc400]/10 border-l-4 border-l-[#ffc400]' : ''
                } ${rider.rider === 'Veda Ega Pratama' ? 'bg-[#ff1744]/10 border-l-4 border-l-[#ff1744]' : ''}`}
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
                  <div className={`text-3xl font-bebas font-black ${rider.pos === 1 ? 'text-[#9c27b0]' : 'text-white'}`}>
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
        <h3 className="text-2xl font-bebas font-black mb-4">🇮🇩 VEDA EGA PRATAMA — DEBUT MOTO3 2026</h3>
        <div className="space-y-3 text-white/80">
          <p><strong>Tim:</strong> Honda Team Asia</p>
          <p><strong>Nomor:</strong> #99</p>
          <p><strong>Background:</strong> Lulusan Astra Honda Racing School (AHRS), jebolan RBRC 2025</p>
          <p><strong>Prestasi Sebelumnya:</strong> ARRC kelas SS600, finis ke-6 musim 2024</p>
          <p><strong>Status:</strong> Pembalap kelima binaan AHM yang tembus kejuaraan dunia GP</p>
          <p><strong>Target:</strong> Penerus Mario Suryo Aji menuju MotoGP kelas premier!</p>
        </div>
      </section>

    </div>
  )
}
