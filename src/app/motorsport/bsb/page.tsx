import Link from 'next/link'

export const metadata = {
  title: 'BSB 2026 — British Superbike Championship | IndonesiaSBK',
  description: 'Berita BSB (British Superbike Championship) terbaru: hasil race, klasemen 2026.',
}

export default function BSBPage() {
  const standings = [
    { pos: 1, rider: 'Tommy Bridewell', number: 46, team: 'Honda Racing UK', flag: '🇬🇧', pts: 158, bike: 'Honda CBR1000RR-R' },
    { pos: 2, rider: 'Glenn Irwin', number: 2, team: 'Hager PBM Ducati', flag: '🇬🇧', pts: 145, bike: 'Ducati Panigale V4R' },
    { pos: 3, rider: 'Kyle Ryde', number: 77, team: 'OMG Racing BMW', flag: '🇬🇧', pts: 132, bike: 'BMW M1000RR' },
    { pos: 4, rider: 'Christian Iddon', number: 21, team: 'Oxford Racing Ducati', flag: '🇬🇧', pts: 125, bike: 'Ducati Panigale V4R' },
    { pos: 5, rider: 'Lee Jackson', number: 15, team: 'MasterMac Honda', flag: '🇬🇧', pts: 112, bike: 'Honda CBR1000RR-R' },
  ]

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-[#ffc400] rounded-xl flex items-center justify-center text-4xl">
            🇬🇧
          </div>
          <div>
            <h1 className="text-5xl font-bebas font-black uppercase">BSB 2026</h1>
            <p className="text-white/60">British Superbike Championship — UK's Premier Racing</p>
          </div>
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <Link href="#standings" className="px-4 py-2 glass rounded-lg text-sm font-bebas uppercase hover:bg-white/5">
            Klasemen
          </Link>
        </div>
      </div>

      <section id="standings" className="mb-12">
        <h2 className="text-2xl font-bebas font-black uppercase mb-6 flex items-center gap-3">
          <span className="w-1 h-8 bg-[#ffc400] rounded"></span>
          KLASEMEN BSB 2026
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
                  <div className={`text-3xl font-bebas font-black ${rider.pos === 1 ? 'text-[#ffc400]' : 'text-white'}`}>
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
