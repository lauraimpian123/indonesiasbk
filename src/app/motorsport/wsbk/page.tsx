import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'WSBK 2026 — Berita, Hasil, Klasemen | IndonesiaSBK',
  description: 'Berita WSBK (World Superbike) terbaru: hasil race, klasemen championship 2026. Production-based racing.',
}

export default function WSBKPage() {
  const standings = [
    { pos: 1, rider: 'Alvaro Bautista', number: 1, team: 'Aruba.it Racing Ducati', flag: '🇪🇸', pts: 142, bike: 'Ducati Panigale V4R' },
    { pos: 2, rider: 'Jonathan Rea', number: 65, team: 'Pata Yamaha Prometeon', flag: '🇬🇧', pts: 135, bike: 'Yamaha R1' },
    { pos: 3, rider: 'Nicolo Bulega', number: 11, team: 'Aruba.it Racing Ducati', flag: '🇮🇹', pts: 128, bike: 'Ducati Panigale V4R' },
    { pos: 4, rider: 'Andrea Locatelli', number: 55, team: 'Pata Yamaha Prometeon', flag: '🇮🇹', pts: 118, bike: 'Yamaha R1' },
    { pos: 5, rider: 'Alex Lowes', number: 22, team: 'Kawasaki Racing Team', flag: '🇬🇧', pts: 98, bike: 'Kawasaki ZX-10RR' },
    { pos: 6, rider: 'Michael Ruben Rinaldi', number: 21, team: 'Motocorsa Racing', flag: '🇮🇹', pts: 85, bike: 'Ducati Panigale V4R' },
    { pos: 7, rider: 'Remy Gardner', number: 87, team: 'GYTR GRT Yamaha', flag: '🇦🇺', pts: 72, bike: 'Yamaha R1' },
    { pos: 8, rider: 'Iker Lecuona', number: 7, team: 'Honda HRC', flag: '🇪🇸', pts: 68, bike: 'Honda CBR1000RR-R' },
    { pos: 9, rider: 'Axel Bassani', number: 47, team: 'Kawasaki Racing Team', flag: '🇮🇹', pts: 58, bike: 'Kawasaki ZX-10RR' },
    { pos: 10, rider: 'Garrett Gerloff', number: 31, team: 'Bonovo Action BMW', flag: '🇺🇸', pts: 52, bike: 'BMW M1000RR' },
  ]

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-[#00e5ff] rounded-xl flex items-center justify-center text-4xl">
            🏍️
          </div>
          <div>
            <h1 className="text-5xl font-bebas font-black uppercase">WSBK 2026</h1>
            <p className="text-white/60">World Superbike Championship — Production-Based Racing</p>
          </div>
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <Link href="#standings" className="px-4 py-2 glass rounded-lg text-sm font-bebas uppercase hover:bg-white/5">
            Klasemen
          </Link>
          <Link href="#news" className="px-4 py-2 glass rounded-lg text-sm font-bebas uppercase hover:bg-white/5">
            Berita
          </Link>
        </div>
      </div>

      <div className="glass rounded-xl p-6 mb-8 bg-gradient-to-r from-[#00e5ff]/10 to-transparent border-[#00e5ff]">
        <h3 className="text-xl font-bebas font-black mb-3">📢 TOPRAK RAZGATLIOGLU PINDAH KE MOTOGP!</h3>
        <p className="text-white/80">
          Juara dunia WSBK 2024 Toprak Razgatlioglu sudah tidak lagi di WSBK musim 2026. 
          Dia debut di MotoGP bersama Pramac Racing — langkah berani dari kelas production ke prototype!
        </p>
        <Link href="/article/toprak-motogp-debut" className="inline-block mt-4 px-6 py-3 bg-[#00e5ff] text-black hover:bg-[#00e5ff]/80 rounded-lg font-bebas uppercase transition-colors">
          BACA CERITA LENGKAP →
        </Link>
      </div>

      <section id="standings" className="mb-12">
        <h2 className="text-2xl font-bebas font-black uppercase mb-6 flex items-center gap-3">
          <span className="w-1 h-8 bg-[#00e5ff] rounded"></span>
          KLASEMEN RIDER WSBK
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
                  <div className="text-xs text-white/40">{rider.bike}</div>
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

    </div>
  )
}
