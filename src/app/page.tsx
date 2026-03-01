import Image from 'next/image'
import Link from 'next/link'

// Mock data - nanti diganti dari API backend
const heroArticle = {
  id: '1',
  slug: 'wsbk-phillip-island-toprak-dominan',
  title: 'WSBK Phillip Island: Toprak Dominan di Race 1, Drama Ban untuk Bautista',
  excerpt: 'Toprak Razgatlioglu memulai musim 2026 dengan sempurna sementara Alvaro Bautista terkendala masalah ban di lap terakhir.',
  category: 'WSBK',
  image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1200&h=675&fit=crop',
  time: '2 jam lalu',
  author: 'Redaksi IndonesiaSBK',
}

const latestNews = [
  { id: '2', slug: 'motogp-losail', title: 'MotoGP Qatar: Marc Marquez Pole Position, Pecco Start Ketiga', category: 'MOTOGP', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '30 min' },
  { id: '3', slug: 'ducati-panigale-v4r', title: 'Ducati Panigale V4R 2026: 230 HP, Teknologi MotoGP', category: 'SUPERBIKE', image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop', time: '1 jam' },
  { id: '4', slug: 'f1-bahrain', title: 'F1 Bahrain: Hamilton Kuasai FP1, Leclerc Kedua', category: 'F1', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '2 jam' },
  { id: '5', slug: 'yamaha-r9-2026', title: 'Yamaha R9 2026: Pengganti R1 Resmi Meluncur', category: 'BIKE NEWS', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '3 jam' },
  { id: '6', slug: 'kawasaki-zx-10rr', title: 'Kawasaki ZX-10RR 2026: Lebih Ringan 5kg, Lebih Garang', category: 'SUPERBIKE', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '4 jam' },
  { id: '7', slug: 'motogp-marquez', title: 'Marquez: "Ducati Sempurna, Target Juara Dunia Realistis"', category: 'MOTOGP', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '5 jam' },
]

const wsbkArticles = [
  { id: '8', slug: 'wsbk-toprak-interview', title: 'Toprak: "Phillip Island Trek Favorit, Target Podium Terus"', category: 'WSBK', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '6 jam' },
  { id: '9', slug: 'wsbk-bautista-analisis', title: 'Bautista Analisis Masalah Ban: Kesalahan Setup atau Keberuntungan?', category: 'WSBK', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '8 jam' },
  { id: '10', slug: 'wsbk-rea-yamaha', title: 'Jonathan Rea: Adaptasi Yamaha Lebih Cepat dari Ekspektasi', category: 'WSBK', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '10 jam' },
  { id: '11', slug: 'wsbk-calendar-2026', title: 'Kalender WSBK 2026: Mandalika Konfirmasi Round 4', category: 'WSBK', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '12 jam' },
]

const reviewArticles = [
  { id: '12', slug: 'ducati-v4-review', title: 'Review: Ducati Panigale V4 2026 - 215 HP Beast dari Bologna', excerpt: 'Kami test Panigale V4 terbaru di Sentul Circuit. Lebih ringan 2kg, lebih kencang, lebih gila.', category: 'BIKE REVIEW', image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop', time: '1 hari' },
  { id: '13', slug: 'r1-vs-zx10r', title: 'Yamaha R1 vs Kawasaki ZX-10R 2026: Mana Lebih Worth It?', excerpt: 'Head-to-head dua superbike legendaris Jepang. Performa, handling, harga.', category: 'COMPARISON', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '2 hari' },
  { id: '14', slug: 'shoei-x15', title: 'Review Helm Shoei X-Fifteen: Worth Harga Premium?', excerpt: 'Helm flagship Shoei terbaru. Aero, safety, comfort - semua diuji.', category: 'HELMET REVIEW', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '3 hari' },
  { id: '15', slug: 'alpinestars-suit', title: 'Alpinestars GP Pro v3: Racing Suit untuk Track Day', excerpt: 'Suit racing kelas MotoGP dengan harga masuk akal. Protection maksimal.', category: 'GEAR REVIEW', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '4 hari' },
]

const motogpArticles = [
  { id: '16', slug: 'motogp-marquez-fastest', title: 'MotoGP Pre-Season: Marquez Tercepat, Ducati Dominan', category: 'MOTOGP', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '1 hari' },
  { id: '17', slug: 'bagnaia-target', title: 'Bagnaia: Target Minimum 5 Kemenangan di Awal Musim', category: 'MOTOGP', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '1 hari' },
  { id: '18', slug: 'martin-aprilia', title: 'Jorge Martin ke Aprilia: Langkah Berani atau Bunuh Diri?', category: 'MOTOGP', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '2 hari' },
  { id: '19', slug: 'vr46-team', title: 'VR46 Racing Team: Ambisi Podium dengan Duo Rookie', category: 'MOTOGP', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '2 hari' },
]

const techArticles = [
  { id: '20', slug: 'ev-battery-tech', title: 'Teknologi Baterai Solid-State: Masa Depan Motor Listrik', excerpt: 'Energi 2x lipat, charge 10 menit, aman. Game changer?', category: 'TECH', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '1 hari' },
  { id: '21', slug: 'ducati-desmo', title: 'Ducati Desmodromic: Kenapa Masih Dipertahankan?', excerpt: 'Engineering deep-dive sistem valve unik Ducati.', category: 'TECH', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '2 hari' },
  { id: '22', slug: 'abs-cornering', title: 'Cornering ABS vs IMU: Mana Lebih Efektif?', excerpt: 'Teknologi safety modern dijelaskan secara sederhana.', category: 'TECH', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '3 hari' },
  { id: '23', slug: 'quickshifter', title: 'Quickshifter Explained: Up/Down, Bi-Directional', excerpt: 'Cara kerja, jenis-jenis, worth it atau gimmick?', category: 'TECH', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '4 hari' },
]

const lifestyleArticles = [
  { id: '24', slug: 'touring-bali', title: '5 Rute Touring Bali Paling Instagrammable', excerpt: 'Dari pantai hingga pegunungan. Motor apa yang cocok?', category: 'TOURING', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '1 hari' },
  { id: '25', slug: 'modif-r15', title: 'Modifikasi Yamaha R15: Budget 10 Juta, Hasil WOW', excerpt: 'Dari look standar jadi racing replica. Step by step.', category: 'MODIFIKASI', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '2 hari' },
  { id: '26', slug: 'cafe-racer-jakarta', title: '7 Kafe & Kongkow Spot Bikers di Jakarta', excerpt: 'Community hub, kopi enak, vibes racing.', category: 'LIFESTYLE', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '3 hari' },
  { id: '27', slug: 'riding-gear-101', title: 'Riding Gear 101: Apa Aja yang Wajib Punya?', excerpt: 'Safety first, style second. Panduan lengkap pemula.', category: 'LIFESTYLE', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', time: '4 hari' },
]

const trendingArticles = [
  { id: '28', slug: 'marquez-ducati', title: 'Marquez ke Ducati: Keputusan Terbaik Karir?', views: '125K' },
  { id: '29', slug: 'r1-discontinued', title: 'Yamaha R1 Discontinue: Akhir dari Era?', views: '98K' },
  { id: '30', slug: 'wsbk-mandalika', title: 'WSBK Mandalika 2026: Tiket Mulai Rp500K', views: '87K' },
  { id: '31', slug: 'ducati-v4-crash', title: 'Crash Test Ducati V4: Seberapa Aman?', views: '76K' },
  { id: '32', slug: 'fuel-octane', title: 'Pertamax vs Pertamax Turbo: Bedanya Apa?', views: '65K' },
]

export default function Home() {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content */}
        <main className="lg:col-span-9">
          {/* Hero Article */}
          <Link href={`/article/${heroArticle.slug}`} className="block mb-12 group">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src={heroArticle.image}
                alt={heroArticle.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-brand text-white px-4 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider">
                    {heroArticle.category}
                  </span>
                  <span className="text-white/80 text-sm font-medium">{heroArticle.time}</span>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
                  {heroArticle.title}
                </h1>
                <p className="text-white/90 text-lg md:text-xl italic font-light max-w-4xl">
                  {heroArticle.excerpt}
                </p>
              </div>
            </div>
          </Link>

          {/* Latest News Grid */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-1 h-8 bg-brand"></div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
                BERITA TERKINI
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestNews.map((article) => (
                <Link key={article.id} href={`/article/${article.slug}`} className="group">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-brand text-white px-2 py-1 rounded-sm text-[10px] font-bold uppercase">
                      {article.category}
                    </span>
                    <span className="text-muted text-xs">{article.time}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-brand transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>

          {/* WSBK Section */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-1 h-8 bg-brand"></div>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                  <span className="text-brand">WS</span><span className="text-white">BK</span>
                </h2>
              </div>
              <Link href="/wsbk" className="text-brand hover:text-white text-sm font-bold uppercase transition-colors">
                Lihat Semua →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {wsbkArticles.map((article) => (
                <Link key={article.id} href={`/article/${article.slug}`} className="flex gap-4 group">
                  <div className="relative w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-brand text-white px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase">
                        {article.category}
                      </span>
                      <span className="text-muted text-xs">{article.time}</span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-brand transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* MotoGP Section */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-1 h-8 bg-brand"></div>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                  <span className="text-brand">MOTO</span><span className="text-white">GP</span>
                </h2>
              </div>
              <Link href="/motogp" className="text-brand hover:text-white text-sm font-bold uppercase transition-colors">
                Lihat Semua →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {motogpArticles.map((article) => (
                <Link key={article.id} href={`/article/${article.slug}`} className="flex gap-4 group">
                  <div className="relative w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-brand text-white px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase">
                        {article.category}
                      </span>
                      <span className="text-muted text-xs">{article.time}</span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-brand transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Review Section */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-1 h-8 bg-brand"></div>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
                  REVIEW
                </h2>
              </div>
              <Link href="/review" className="text-brand hover:text-white text-sm font-bold uppercase transition-colors">
                Lihat Semua →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviewArticles.map((article) => (
                <Link key={article.id} href={`/article/${article.slug}`} className="group">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-brand text-white px-2 py-1 rounded-sm text-[10px] font-bold uppercase">
                      {article.category}
                    </span>
                    <span className="text-muted text-xs">{article.time}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-brand transition-colors line-clamp-2 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-muted text-sm line-clamp-2">{article.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Tech Section */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-1 h-8 bg-brand"></div>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
                  TECH
                </h2>
              </div>
              <Link href="/tech" className="text-brand hover:text-white text-sm font-bold uppercase transition-colors">
                Lihat Semua →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techArticles.map((article) => (
                <Link key={article.id} href={`/article/${article.slug}`} className="flex gap-4 group">
                  <div className="relative w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-brand text-white px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase">
                        {article.category}
                      </span>
                      <span className="text-muted text-xs">{article.time}</span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-brand transition-colors line-clamp-2 mb-1">
                      {article.title}
                    </h3>
                    <p className="text-muted text-xs line-clamp-1">{article.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Lifestyle Section */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-1 h-8 bg-brand"></div>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
                  LIFESTYLE
                </h2>
              </div>
              <Link href="/lifestyle" className="text-brand hover:text-white text-sm font-bold uppercase transition-colors">
                Lihat Semua →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lifestyleArticles.map((article) => (
                <Link key={article.id} href={`/article/${article.slug}`} className="flex gap-4 group">
                  <div className="relative w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-brand text-white px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase">
                        {article.category}
                      </span>
                      <span className="text-muted text-xs">{article.time}</span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-brand transition-colors line-clamp-2 mb-1">
                      {article.title}
                    </h3>
                    <p className="text-muted text-xs line-clamp-1">{article.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>

        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <div className="sticky top-24 space-y-8">
            {/* Trending */}
            <div className="bg-secondary border border-default rounded-lg p-6">
              <h3 className="text-xl font-black uppercase mb-4 text-white flex items-center space-x-2">
                <span className="text-brand">🔥</span>
                <span>TRENDING</span>
              </h3>
              <div className="space-y-4">
                {trendingArticles.map((article, idx) => (
                  <Link key={article.id} href={`/article/${article.slug}`} className="block group">
                    <div className="flex items-start space-x-3">
                      <span className="text-brand text-2xl font-black">{idx + 1}</span>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-white group-hover:text-brand transition-colors line-clamp-2 mb-1">
                          {article.title}
                        </h4>
                        <span className="text-muted text-xs">{article.views} views</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-secondary border border-default rounded-lg p-6">
              <h3 className="text-xl font-black uppercase mb-4 text-white">KATEGORI</h3>
              <div className="grid grid-cols-2 gap-2">
                {['WSBK', 'MotoGP', 'F1', 'Review', 'Tech', 'Lifestyle'].map((cat) => (
                  <Link
                    key={cat}
                    href={`/${cat.toLowerCase()}`}
                    className="bg-tertiary border border-default hover:border-brand text-white hover:text-brand transition-all px-3 py-2 rounded text-center font-bold uppercase text-xs"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-brand border border-[#C73D2F] rounded-lg p-6">
              <h3 className="text-xl font-black uppercase mb-2 text-white">NEWSLETTER</h3>
              <p className="text-white/90 text-sm mb-4">Berita terbaru langsung ke inbox kamu!</p>
              <input
                type="email"
                placeholder="Email kamu"
                className="w-full bg-white text-black px-4 py-2 rounded mb-2 text-sm focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="w-full bg-black hover:bg-white hover:text-brand text-white font-bold px-4 py-2 rounded text-sm uppercase transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
