import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Formula 1 2026 — Berita, Hasil, Klasemen | IndonesiaSBK',
  description: 'Berita F1 terbaru: hasil race, klasemen drivers & constructors championship 2026.',
}

export default function F1Page() {
  const driversStandings = [
    { pos: 1, driver: 'Lewis Hamilton', number: 44, team: 'Ferrari', flag: '🇬🇧', pts: 94 },
    { pos: 2, driver: 'Charles Leclerc', number: 16, team: 'Ferrari', flag: '🇲🇨', pts: 87 },
    { pos: 3, driver: 'Max Verstappen', number: 1, team: 'Red Bull Racing', flag: '🇳🇱', pts: 82 },
    { pos: 4, driver: 'Lando Norris', number: 4, team: 'McLaren', flag: '🇬🇧', pts: 76 },
    { pos: 5, driver: 'George Russell', number: 63, team: 'Mercedes', flag: '🇬🇧', pts: 71 },
    { pos: 6, driver: 'Oscar Piastri', number: 81, team: 'McLaren', flag: '🇦🇺', pts: 65 },
    { pos: 7, driver: 'Carlos Sainz', number: 55, team: 'Audi', flag: '🇪🇸', pts: 58 },
    { pos: 8, driver: 'Fernando Alonso', number: 14, team: 'Aston Martin', flag: '🇪🇸', pts: 52 },
    { pos: 9, driver: 'Pierre Gasly', number: 10, team: 'Alpine', flag: '🇫🇷', pts: 45 },
    { pos: 10, driver: 'Yuki Tsunoda', number: 22, team: 'RB', flag: '🇯🇵', pts: 38 },
  ]

  const constructorsStandings = [
    { pos: 1, team: 'Ferrari', flag: '🇮🇹', pts: 181, color: '#DC0000' },
    { pos: 2, team: 'Red Bull Racing', flag: '🇦🇹', pts: 158, color: '#1E41FF' },
    { pos: 3, team: 'McLaren', flag: '🇬🇧', pts: 141, color: '#FF8700' },
    { pos: 4, team: 'Mercedes', flag: '🇩🇪', pts: 125, color: '#00D2BE' },
    { pos: 5, team: 'Aston Martin', flag: '🇬🇧', pts: 88, color: '#006F62' },
  ]

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-[#ff1744] rounded-xl flex items-center justify-center text-4xl">
            🏎️
          </div>
          <div>
            <h1 className="text-5xl font-bebas font-black uppercase">FORMULA 1 2026</h1>
            <p className="text-white/60">World Championship — Regulasi Baru, Era Baru</p>
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

      <div className="glass rounded-xl p-6 mb-8 bg-gradient-to-r from-[#ff1744]/10 to-transparent border-[#ff1744]">
        <h3 className="text-xl font-bebas font-black mb-3">⚡ REGULASI BARU F1 2026!</h3>
        <div className="space-y-2 text-white/80">
          <p>• Mesin 1.6L hybrid baru — power unit completely redesigned</p>
          <p>• Downforce dikurangi — mobil lebih ramping & lebih sulit dikendarai</p>
          <p>• Hamilton ke Ferrari — moment bersejarah!</p>
          <p>• Audi masuk F1 (beli Sauber)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <section id="standings">
          <h2 className="text-2xl font-bebas font-black uppercase mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#ff1744] rounded"></span>
            KLASEMEN DRIVERS
          </h2>
          <div className="glass rounded-xl p-6">
            <div className="space-y-3">
              {driversStandings.map((driver) => (
                <div
                  key={driver.pos}
                  className={`flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors ${
                    driver.pos === 1 ? 'bg-[#ffc400]/10 border-l-4 border-l-[#ffc400]' : ''
                  }`}
                >
                  <div className={`text-3xl font-bebas font-black w-10 text-center ${driver.pos === 1 ? 'text-[#ffc400]' : 'text-white/40'}`}>
                    {driver.pos}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-lg leading-tight">{driver.driver}</div>
                    <div className="text-sm text-white/60 font-space-mono truncate">{driver.team}</div>
                  </div>
                  <div className="text-2xl">{driver.flag}</div>
                  <div className="text-right">
                    <div className={`text-3xl font-bebas font-black ${driver.pos === 1 ? 'text-[#ff1744]' : 'text-white'}`}>
                      {driver.pts}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bebas font-black uppercase mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#ff1744] rounded"></span>
            KLASEMEN CONSTRUCTORS
          </h2>
          <div className="glass rounded-xl p-6">
            <div className="space-y-3">
              {constructorsStandings.map((team) => (
                <div
                  key={team.pos}
                  className={`flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors ${
                    team.pos === 1 ? 'bg-[#ffc400]/10 border-l-4 border-l-[#ffc400]' : ''
                  }`}
                >
                  <div className={`text-3xl font-bebas font-black w-10 text-center ${team.pos === 1 ? 'text-[#ffc400]' : 'text-white/40'}`}>
                    {team.pos}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-lg leading-tight">{team.team}</div>
                  </div>
                  <div className="text-2xl">{team.flag}</div>
                  <div className="text-right">
                    <div className={`text-3xl font-bebas font-black ${team.pos === 1 ? 'text-[#ff1744]' : 'text-white'}`}>
                      {team.pts}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

    </div>
  )
}
