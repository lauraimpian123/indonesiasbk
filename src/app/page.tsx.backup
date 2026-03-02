'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import StandingsTabs from '@/components/StandingsTabs'

export default function Home() {
  useEffect(() => {
    // Scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Mock data - nanti dari API
  const breakingNews = {
    id: '1',
    slug: 'marquez-pole-qatar-2026',
    title: 'Marc Marquez Pole Position di Qatar, Bagnaia Start Ketiga',
    excerpt: 'Marquez mencetak lap tercepat 1:53.247 dan mengklaim pole position perdana bersama Ducati di Qatar.',
    category: 'MotoGP',
    categoryColor: '#ff1744',
    image: '/images/hero/2026-03-01-20-21-10-hero-motogp.webp',
    time: '2 jam lalu',
  }

  const latestNews = [
    { id: '2', slug: 'toprak-debut-motogp', title: 'Toprak Razgatlioglu: "MotoGP Lebih Cepat, Tapi Seru Banget"', category: 'MotoGP', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', time: '3 jam' },
    { id: '3', slug: 'mario-aji-target-podium', title: 'Mario Suryo Aji Target Podium di Mandalika', category: 'Moto2', image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600', time: '5 jam' },
    { id: '4', slug: 'ducati-v4r-review', title: 'Review: Ducati Panigale V4R 2026 — Beast dari Bologna', category: 'Review', image: '/images/hero/2026-03-01-20-21-25-hero-superbike.webp', time: '1 hari' },
    { id: '5', slug: 'wsbk-bautista-fp1', title: 'WSBK Phillip Island: Bautista Tercepat di FP1', category: 'WSBK', image: '/images/hero/2026-03-01-20-21-15-hero-wsbk.webp', time: '1 hari' },
  ]

  const motogpArticles = [
    { id: '2', slug: 'motogp-losail', title: 'MotoGP Qatar: Marc Marquez Pole Position, Pecco Start Ketiga', excerpt: 'Sesi kualifikasi MotoGP Qatar 2026 ditutup dengan dominasi Marc Marquez yang merebut pole position dengan catatan waktu 1:50.123.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', time: '2 jam' },
    { id: '7', slug: 'motogp-marquez', title: 'Marquez: "Ducati Sempurna, Target Juara Dunia Realistis"', excerpt: 'Marc Marquez optimis merebut gelar juara dunia MotoGP 2026 bersama Ducati Factory setelah performa impresif di pre-season.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', time: '3 jam' },
    { id: '8', slug: 'motogp-bagnaia-race-pace', title: 'Bagnaia: "Race Pace Lebih Penting dari Kualifikasi"', excerpt: 'Pecco Bagnaia fokus pada race pace untuk balapan Qatar, meski start dari posisi ketiga.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', time: '4 jam' },
    { id: '9', slug: 'motogp-martin-aprilia', title: 'Jorge Martin Masih Adaptasi dengan Karakter Aprilia', excerpt: 'Jorge Martin butuh waktu lebih lama untuk beradaptasi dengan Aprilia RS-GP26, terutama di corner entry.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', time: '5 jam' },
    { id: '10', slug: 'motogp-bastianini-comeback', title: 'Enea Bastianini Comeback Kuat Setelah Cedera', excerpt: 'Bastianini kembali dengan performa impresif setelah operasi bahu, qualify posisi 5 di Qatar.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', time: '6 jam' },
    { id: '14', slug: 'motogp-acosta-rookie-sensasi', title: 'Pedro Acosta: Rookie Sensasi yang Bikin Veteran Khawatir', excerpt: 'Pedro Acosta tampil impresif di debut MotoGP-nya, qualify posisi 4 dan mengancam para juara dunia.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', time: '7 jam' },
  ]

  const wsbkArticles = [
    { id: '11', slug: 'wsbk-phillip-island-preview', title: 'WSBK Phillip Island: Trek Paling Menantang di Kalender', excerpt: 'Sirkuit Phillip Island terkenal sebagai trek paling cepat dan berbahaya di WSBK, butuh keberanian ekstra.', image: '/images/hero/2026-03-01-20-21-15-hero-wsbk.webp', time: '3 jam' },
    { id: '12', slug: 'wsbk-razgatlioglu-dominan', title: 'Toprak Razgatlioglu Dominan di FP1 Phillip Island', excerpt: 'Toprak Razgatlioglu tercepat di FP1 WSBK Phillip Island, unggul 0.4 detik dari Bautista.', image: '/images/hero/2026-03-01-20-21-15-hero-wsbk.webp', time: '5 jam' },
    { id: '13', slug: 'wsbk-rea-yamaha-progress', title: 'Jonathan Rea Puas dengan Progress Yamaha R1', excerpt: 'Jonathan Rea merasa Yamaha R1 WSBK 2026 sudah jauh lebih kompetitif, terutama di corner speed.', image: '/images/hero/2026-03-01-20-21-15-hero-wsbk.webp', time: '8 jam' },
    { id: '15', slug: 'wsbk-bautista-target-juara', title: 'Alvaro Bautista: "Target Juara Dunia Ketiga Berturut-turut"', excerpt: 'Alvaro Bautista yakin bisa merebut gelar juara dunia WSBK ketiga kalinya bersama Ducati.', image: '/images/hero/2026-03-01-20-21-15-hero-wsbk.webp', time: '10 jam' },
  ]

  const reviewArticles = [
    { id: '30', slug: 'yamaha-r9-review', title: 'Yamaha R9 2026: Pengganti R1 yang Worthy?', excerpt: 'Kami test Yamaha R9 di Sentul Circuit. 900cc, inline-3, harga Rp250 jutaan.', rating: 88, category: 'Review Motor', image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600', time: '1 hari' },
    { id: '31', slug: 'shoei-x15-review', title: 'Shoei X-Fifteen: Helm Premium untuk Track Day', excerpt: 'Helm flagship Shoei dengan aero terbaik. Worth harga Rp12 jutaan?', rating: 92, category: 'Review Helm', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', time: '2 hari' },
  ]

  return (
    <>
      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-title {
          position: relative;
          padding-left: 20px;
        }

        .section-title::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 40px;
          background: #ff1744;
          border-radius: 2px;
        }

        .category-badge {
          display: inline-block;
          padding: 4px 12px;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          border-radius: 3px;
          font-family: var(--font-bebas);
        }

        .glass {
          background: rgba(26, 26, 38, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @keyframes ticker {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .animate-ticker {
          animation: ticker 30s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-ticker {
            animation: ticker 45s linear infinite;
          }
        }
      `}</style>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* ═══════════════════ HERO SECTION ═══════════════════ */}
        <section className="mb-12 reveal">
          <Link href={`/article/${breakingNews.slug}`} className="block group">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
              <Image
                src={breakingNews.image}
                alt={breakingNews.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
                <div className="max-w-4xl">
                  <span className="category-badge bg-[#ff1744] text-white mb-3">
                    {breakingNews.category}
                  </span>
                  <h1 className="text-4xl lg:text-6xl font-bebas font-black leading-tight text-white mb-4 group-hover:text-[#ff1744] transition-colors">
                    {breakingNews.title}
                  </h1>
                  <p className="text-lg text-white/80 mb-4 hidden lg:block">
                    {breakingNews.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-white/60 font-space-mono">
                    <span>⏱ {breakingNews.time}</span>
                    <span className="text-[#ff1744]">→ BACA SELENGKAPNYA</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* ═══════════════════ LATEST NEWS GRID ═══════════════════ */}
        <section className="mb-16 reveal">
          <h2 className="section-title text-3xl font-bebas font-black uppercase mb-6">
            BERITA TERBARU
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {latestNews.map((article) => (
              <Link key={article.id} href={`/article/${article.slug}`} className="group">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="category-badge bg-black/80 text-[#ff1744]">
                      {article.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-base lg:text-lg font-bold leading-tight group-hover:text-[#ff1744] transition-colors mb-2">
                  {article.title}
                </h3>
                <span className="text-xs text-white/50 font-space-mono">{article.time}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ═══════════════════ MOTOGP SECTION ═══════════════════ */}
        <section className="mb-16 reveal">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title text-3xl font-bebas font-black uppercase">
              MOTOGP
            </h2>
            <Link href="/motorsport/motogp" className="text-[#ff1744] hover:text-[#ff4569] text-sm font-bebas tracking-wider uppercase transition-colors">
              LIHAT SEMUA →
            </Link>
          </div>
          
          {/* Running Text Standings */}
          <div className="overflow-hidden bg-[#ff1744] py-2 px-4 mb-4 rounded-lg">
            <div className="animate-ticker whitespace-nowrap text-white font-bold font-space-mono text-sm">
              MotoGP Standings 2026: 1. Pedro Acosta (37pts) • 2. Marco Bezzecchi (37pts) • 3. Marc Marquez (25pts) • 4. Jorge Martin (20pts) • 5. Pecco Bagnaia (16pts) • 6. Enea Bastianini (13pts) • 7. Maverick Viñales (11pts) • 8. Brad Binder (10pts)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {motogpArticles.map((article) => (
              <Link key={article.id} href={`/article/${article.slug}`} className="group glass rounded-xl overflow-hidden hover:border-[#ff1744] transition-all">
                <div className="flex flex-col gap-4 p-4">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold leading-tight mb-2 group-hover:text-[#ff1744] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-white/60 line-clamp-2 mb-3">
                      {article.excerpt}
                    </p>
                    <span className="text-xs text-white/40 font-space-mono">{article.time}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ═══════════════════ WSBK SECTION ═══════════════════ */}
        <section className="mb-16 reveal">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title text-3xl font-bebas font-black uppercase">
              WSBK
            </h2>
            <Link href="/motorsport/wsbk" className="text-[#00e5ff] hover:text-[#00e5ff]/80 text-sm font-bebas tracking-wider uppercase transition-colors">
              LIHAT SEMUA →
            </Link>
          </div>

          {/* Running Text Standings */}
          <div className="overflow-hidden bg-[#00e5ff] py-2 px-4 mb-4 rounded-lg">
            <div className="animate-ticker whitespace-nowrap text-white font-bold font-space-mono text-sm">
              WSBK Standings 2026: 1. Toprak Razgatlioglu (125pts) • 2. Álvaro Bautista (118pts) • 3. Alex Lowes (75pts) • 4. Andrea Locatelli (72pts) • 5. Jonathan Rea (68pts) • 6. Michael van der Mark (54pts) • 7. Danilo Petrucci (47pts)
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {wsbkArticles.map((article) => (
              <Link key={article.id} href={`/article/${article.slug}`} className="group glass rounded-xl overflow-hidden hover:border-[#00e5ff] transition-all">
                <div className="flex flex-col gap-4 p-4">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold leading-tight mb-2 group-hover:text-[#00e5ff] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-white/60 line-clamp-2 mb-3">
                      {article.excerpt}
                    </p>
                    <span className="text-xs text-white/40 font-space-mono">{article.time}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ═══════════════════ STANDINGS SECTION ═══════════════════ */}
        <section className="mb-16 reveal">
          <h2 className="section-title text-3xl font-bebas font-black uppercase mb-6">
            KLASEMEN TERKINI
          </h2>
          <StandingsTabs />
        </section>

        {/* ═══════════════════ REVIEW SECTION ═══════════════════ */}
        <section className="mb-16 reveal">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title text-3xl font-bebas font-black uppercase">
              REVIEW
            </h2>
            <Link href="/review" className="text-[#ffc400] hover:text-[#ffd54f] text-sm font-bebas tracking-wider uppercase transition-colors">
              LIHAT SEMUA →
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {reviewArticles.map((article) => (
              <Link key={article.id} href={`/article/${article.slug}`} className="group glass rounded-xl overflow-hidden hover:border-[#ffc400] transition-all">
                <div className="relative aspect-video">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-[#ffc400] text-black w-14 h-14 rounded-full flex items-center justify-center font-bebas text-2xl font-black">
                    {article.rating}
                  </div>
                </div>
                <div className="p-6">
                  <span className="category-badge bg-[#ffc400]/20 text-[#ffc400] mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-2xl font-bold leading-tight mb-3 group-hover:text-[#ffc400] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-white/60 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/40 font-space-mono">{article.time}</span>
                    <span className="text-sm font-bebas text-[#ffc400] group-hover:translate-x-2 transition-transform">
                      BACA REVIEW →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'IndonesiaSBK',
            url: 'https://indonesiasbk.com',
            description: 'Portal berita motorsport terlengkap di Indonesia',
            publisher: {
              '@type': 'Organization',
              name: 'IndonesiaSBK',
              logo: {
                '@type': 'ImageObject',
                url: 'https://indonesiasbk.com/logo.png',
              },
            },
          }),
        }}
      />
    </>
  )
}
