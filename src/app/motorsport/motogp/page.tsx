import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'MotoGP 2026 — Berita, Hasil, Klasemen | IndonesiaSBK',
  description: 'Berita MotoGP terbaru: hasil race, qualifying, free practice, transfer rumors, analisis teknis, dan klasemen championship 2026.',
}

export default function MotoGPPage() {
  // Mock data - nanti dari API / scraping
  const standings = [
    { pos: 1, rider: 'Marc Marquez', number: 93, team: 'Gresini Racing Ducati', flag: '🇪🇸', pts: 185, bike: 'Ducati' },
    { pos: 2, rider: 'Pecco Bagnaia', number: 1, team: 'Ducati Lenovo Team', flag: '🇮🇹', pts: 178, bike: 'Ducati' },
    { pos: 3, rider: 'Jorge Martin', number: 89, team: 'Aprilia Racing', flag: '🇪🇸', pts: 165, bike: 'Aprilia' },
    { pos: 4, rider: 'Brad Binder', number: 33, team: 'Red Bull KTM Factory', flag: '🇿🇦', pts: 142, bike: 'KTM' },
    { pos: 5, rider: 'Fabio Quartararo', number: 20, team: 'Monster Energy Yamaha', flag: '🇫🇷', pts: 138, bike: 'Yamaha' },
    { pos: 6, rider: 'Toprak Razgatlioglu', number: 54, team: 'Pramac Racing', flag: '🇹🇷', pts: 125, bike: 'Ducati' },
    { pos: 7, rider: 'Enea Bastianini', number: 23, team: 'Ducati Lenovo Team', flag: '🇮🇹', pts: 118, bike: 'Ducati' },
    { pos: 8, rider: 'Alex Marquez', number: 73, team: 'Gresini Racing Ducati', flag: '🇪🇸', pts: 105, bike: 'Ducati' },
    { pos: 9, rider: 'Jack Miller', number: 43, team: 'Red Bull KTM Factory', flag: '🇦🇺', pts: 92, bike: 'KTM' },
    { pos: 10, rider: 'Maverick Vinales', number: 12, team: 'Aprilia Racing', flag: '🇪🇸', pts: 85, bike: 'Aprilia' },
  ]

  const featuredArticles = [
    {
      id: '1',
      slug: 'marquez-pole-qatar-2026',
      title: 'Marc Marquez Pole Position di Qatar: "Ducati Sempurna"',
      excerpt: 'Marquez mencetak lap tercepat 1:53.247 dan mengklaim pole position perdana bersama Ducati. Analis: setup aero baru jadi kunci kecepatan.',
      image: '/images/hero/2026-03-01-20-21-10-hero-motogp.webp',
      category: 'Race Report',
      time: '2 jam lalu',
    },
    {
      id: '2',
      slug: 'bagnaia-strategi-qatar',
      title: 'Bagnaia: "Start Ketiga Bukan Masalah, Strategi Panjang"',
      excerpt: 'Pecco Bagnaia optimis bisa menang dari posisi start ketiga dengan strategi ban yang berbeda dari Marquez.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      category: 'Interview',
      time: '4 jam lalu',
    },
    {
      id: '3',
      slug: 'toprak-debut-motogp',
      title: 'Toprak Razgatlioglu: "MotoGP Lebih Cepat, Tapi Seru Banget"',
      excerpt: 'Debut MotoGP Toprak bersama Pramac menarik perhatian. Dari juara dunia WSBK langsung terjun ke kelas premier.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      category: 'Feature',
      time: '6 jam lalu',
    },
  ]

  const latestArticles = [
    { id: '4', title: 'Martin: Perpindahan ke Aprilia Butuh Adaptasi Signifikan', time: '8 jam', category: 'Interview' },
    { id: '5', title: 'Ducati GP26: Breakdown Teknologi Aero Terbaru', time: '12 jam', category: 'Tech' },
    { id: '6', title: 'Quartararo Keluhkan Kurangnya Grip Yamaha di Qatar', time: '1 hari', category: 'FP Report' },
    { id: '7', title: 'Prediksi: Siapa yang Akan Menang di Qatar GP 2026?', time: '1 hari', category: 'Analysis' },
    { id: '8', title: 'Jack Miller: "KTM Sudah Lebih Baik, Tapi Belum Cukup"', time: '2 hari', category: 'Interview' },
  ]

  const constructorStandings = [
    { pos: 1, constructor: 'Ducati', flag: '🇮🇹', pts: 481, color: '#d32f2f' },
    { pos: 2, constructor: 'Aprilia', flag: '🇮🇹', pts: 250, color: '#000' },
    { pos: 3, constructor: 'KTM', flag: '🇦🇹', pts: 234, color: '#ff6600' },
    { pos: 4, constructor: 'Yamaha', flag: '🇯🇵', pts: 223, color: '#0033cc' },
    { pos: 5, constructor: 'Honda', flag: '🇯🇵', pts: 142, color: '#cc0000' },
  ]

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-[#ff1744] rounded-xl flex items-center justify-center text-4xl">
            🏁
          </div>
          <div>
            <h1 className="text-5xl font-bebas font-black uppercase">MotoGP 2026</h1>
            <p className="text-white/60">Championship Musim 2026 — 20 Riders, 22 Races</p>
          </div>
        </div>
        
        {/* Quick Nav */}
        <div className="flex gap-2 flex-wrap">
          <Link href="#standings" className="px-4 py-2 glass rounded-lg text-sm font-bebas uppercase hover:bg-white/5 transition-colors">
            Klasemen
          </Link>
          <Link href="#news" className="px-4 py-2 glass rounded-lg text-sm font-bebas uppercase hover:bg-white/5 transition-colors">
            Berita
          </Link>
          <Link href="#schedule" className="px-4 py-2 glass rounded-lg text-sm font-bebas uppercase hover:bg-white/5 transition-colors">
            Jadwal
          </Link>
          <Link href="#teams" className="px-4 py-2 glass rounded-lg text-sm font-bebas uppercase hover:bg-white/5 transition-colors">
            Tim & Rider
          </Link>
        </div>
      </div>

      {/* Featured Articles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bebas font-black uppercase mb-6 flex items-center gap-3">
          <span className="w-1 h-8 bg-[#ff1744] rounded"></span>
          ARTIKEL UNGGULAN
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article, idx) => (
            <Link
              key={article.id}
              href={`/article/${article.slug}`}
              className={`group ${idx === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
            >
              <div className="glass rounded-xl overflow-hidden hover:border-[#ff1744] transition-all h-full">
                <div className={`relative ${idx === 0 ? 'aspect-video' : 'aspect-[4/3]'}`}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-black/80 text-[#ff1744] text-xs font-bebas uppercase rounded">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className={`p-${idx === 0 ? '6' : '4'}`}>
                  <h3 className={`${idx === 0 ? 'text-2xl' : 'text-lg'} font-bold leading-tight mb-2 group-hover:text-[#ff1744] transition-colors`}>
                    {article.title}
                  </h3>
                  {idx === 0 && (
                    <p className="text-white/60 mb-3">{article.excerpt}</p>
                  )}
                  <span className="text-xs text-white/40 font-space-mono">{article.time}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column - News */}
        <div className="lg:col-span-2">
          <section id="news" className="mb-12">
            <h2 className="text-2xl font-bebas font-black uppercase mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-[#ff1744] rounded"></span>
              BERITA TERBARU
            </h2>
            <div className="space-y-4">
              {latestArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/article/${article.id}`}
                  className="block glass rounded-lg p-4 hover:bg-white/5 hover:border-[#ff1744] transition-all group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-[#ff1744] transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-[#ff1744] font-bebas uppercase text-xs">
                          {article.category}
                        </span>
                        <span className="text-white/40 font-space-mono text-xs">{article.time}</span>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-white/40 group-hover:text-[#ff1744] group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column - Standings */}
        <div>
          <section id="standings" className="mb-8">
            <h2 className="text-2xl font-bebas font-black uppercase mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-[#ff1744] rounded"></span>
              KLASEMEN RIDER
            </h2>
            <div className="glass rounded-xl p-6">
              <div className="space-y-3">
                {standings.slice(0, 10).map((rider) => (
                  <div
                    key={rider.pos}
                    className={`flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors ${
                      rider.pos === 1 ? 'bg-[#ffc400]/10 border-l-4 border-l-[#ffc400]' : ''
                    }`}
                  >
                    <div className={`text-2xl font-bebas font-black w-8 text-center ${rider.pos === 1 ? 'text-[#ffc400]' : 'text-white/40'}`}>
                      {rider.pos}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-sm leading-tight">{rider.rider}</div>
                      <div className="text-xs text-white/50 truncate">{rider.team}</div>
                    </div>
                    <div className="text-lg">{rider.flag}</div>
                    <div className="text-right">
                      <div className={`text-xl font-bebas font-black ${rider.pos === 1 ? 'text-[#ff1744]' : ''}`}>
                        {rider.pts}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/standings/motogp" className="block mt-4 text-center py-3 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-bebas uppercase transition-colors">
                LIHAT KLASEMEN LENGKAP
              </Link>
            </div>
          </section>

          {/* Constructor Standings */}
          <section className="mb-8">
            <h2 className="text-xl font-bebas font-black uppercase mb-4">
              KLASEMEN KONSTRUKTOR
            </h2>
            <div className="glass rounded-xl p-4">
              <div className="space-y-2">
                {constructorStandings.map((team) => (
                  <div key={team.pos} className="flex items-center gap-3 p-2 rounded hover:bg-white/5">
                    <div className="text-lg font-bebas font-black w-6 text-center text-white/40">
                      {team.pos}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-sm">{team.constructor}</div>
                    </div>
                    <div className="text-lg">{team.flag}</div>
                    <div className="text-lg font-bebas font-black">{team.pts}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section>
            <h2 className="text-xl font-bebas font-black uppercase mb-4">
              NAVIGASI CEPAT
            </h2>
            <div className="space-y-2">
              <Link href="/motorsport/moto2" className="block glass rounded-lg p-3 hover:bg-white/5 hover:border-[#00e5ff] transition-all group">
                <div className="flex items-center justify-between">
                  <span className="font-bebas uppercase">Moto2</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              <Link href="/motorsport/moto3" className="block glass rounded-lg p-3 hover:bg-white/5 hover:border-[#9c27b0] transition-all group">
                <div className="flex items-center justify-between">
                  <span className="font-bebas uppercase">Moto3</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              <Link href="/motorsport/wsbk" className="block glass rounded-lg p-3 hover:bg-white/5 hover:border-[#76ff03] transition-all group">
                <div className="flex items-center justify-between">
                  <span className="font-bebas uppercase">WSBK</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
