'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

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

    // Custom cursor
    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'
    document.body.appendChild(cursor)

    const cursorRing = document.createElement('div')
    cursorRing.className = 'custom-cursor-ring'
    document.body.appendChild(cursorRing)

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = mouseX + 'px'
      cursor.style.top = mouseY + 'px'
    })

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      cursorRing.style.left = ringX + 'px'
      cursorRing.style.top = ringY + 'px'
      requestAnimationFrame(animateRing)
    }
    animateRing()

    // Cursor hover effects
    const hoverElements = document.querySelectorAll('a, button, .card')
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover')
        cursorRing.classList.add('cursor-hover')
      })
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover')
        cursorRing.classList.remove('cursor-hover')
      })
    })

    return () => {
      cursor.remove()
      cursorRing.remove()
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');

        :root {
          --black: #0a0a0f;
          --void: #050508;
          --dark: #12121a;
          --panel: #1a1a26;
          --surface: #22222e;
          --line: #2a2a3a;
          
          --red: #ff1744;
          --red-hot: #ff4569;
          --red-deep: #a00020;
          --red-glow: rgba(255, 23, 68, 0.15);
          
          --blue: #00e5ff;
          --blue-dark: #0077aa;
          
          --purple: #9c27b0;
          --purple-light: #ce93d8;
          
          --gold: #ffc400;
          --gold-light: #ffd54f;
          
          --green: #76ff03;
          
          --white: #f5f5fa;
          --silver: #c0c0d0;
          --dim: #70708a;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          cursor: none !important;
        }

        body {
          background: var(--black);
          color: var(--white);
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }

        /* Noise Overlay */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 9999;
          opacity: 0.4;
        }

        /* Custom Cursor */
        .custom-cursor {
          width: 8px;
          height: 8px;
          background: var(--red);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 10000;
          transform: translate(-50%, -50%);
          transition: width 0.2s, height 0.2s;
          mix-blend-mode: difference;
        }

        .custom-cursor-ring {
          width: 32px;
          height: 32px;
          border: 1px solid var(--red);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: width 0.3s, height 0.3s, opacity 0.3s;
          opacity: 0.5;
        }

        .custom-cursor.cursor-hover {
          width: 4px;
          height: 4px;
        }

        .custom-cursor-ring.cursor-hover {
          width: 48px;
          height: 48px;
          opacity: 0.8;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 4px;
        }

        ::-webkit-scrollbar-track {
          background: var(--void);
        }

        ::-webkit-scrollbar-thumb {
          background: var(--red);
          border-radius: 2px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: var(--red-hot);
        }

        /* Typography */
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Bebas Neue', sans-serif;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
        }

        .mono {
          font-family: 'Space Mono', monospace;
        }

        /* Scroll Reveal */
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Glass Morphism */
        .glass {
          background: rgba(26, 26, 38, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Gradient Mesh Background */
        .gradient-mesh {
          background: 
            radial-gradient(circle at 20% 30%, rgba(255, 23, 68, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(0, 229, 255, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(156, 39, 176, 0.04) 0%, transparent 50%);
        }
      `}</style>

      {/* Hero Section - Asymmetric Layout */}
      <section ref={heroRef} className="relative min-h-screen flex items-center gradient-mesh overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/2026-03-01-20-21-10-hero-motogp.webp"
            alt="MotoGP Racing Hero"
            fill
            className="object-cover opacity-40"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12 py-32">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center space-x-4 mb-6 reveal">
              <span className="bg-red px-4 py-2 text-xs font-black mono tracking-widest">
                🏁 MOTOGP QATAR
              </span>
              <span className="text-dim text-sm mono">2 jam lalu</span>
            </div>

            {/* Title - Asymmetric */}
            <h1 className="text-6xl lg:text-8xl leading-[0.95] mb-8 reveal" style={{ transitionDelay: '0.1s' }}>
              <span className="block text-white">MARC MARQUEZ</span>
              <span className="block text-red italic">POLE POSITION</span>
              <span className="block text-white opacity-30" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)', color: 'transparent' }}>
                LOSAIL 2026
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-silver leading-relaxed mb-8 max-w-2xl reveal" style={{ transitionDelay: '0.2s' }}>
              Marquez mencetak lap tercepat 1:53.247 dan mengklaim pole position perdana bersama Ducati di Qatar. 
              Bagnaia start ketiga, Martin ketujuh setelah insiden di tikungan 10.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 reveal" style={{ transitionDelay: '0.3s' }}>
              <Link href="/article/marquez-pole-qatar" className="group px-8 py-4 bg-red hover:bg-red-hot transition-all rounded-sm font-black text-sm tracking-wider">
                BACA SELENGKAPNYA
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link href="/live" className="px-8 py-4 glass hover:border-red transition-all rounded-sm font-bold text-sm tracking-wider">
                ▶ WATCH HIGHLIGHTS
              </Link>
            </div>
          </div>

          {/* Floating Data Cards - Asymmetric */}
          <div className="absolute right-12 bottom-32 space-y-3 hidden lg:block reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="glass p-6 rounded-lg min-w-[200px]">
              <div className="text-4xl font-black text-red mono">1:53.247</div>
              <div className="text-xs text-dim mono mt-1">BEST LAP TIME</div>
            </div>
            <div className="glass p-6 rounded-lg min-w-[200px]">
              <div className="text-4xl font-black mono">185</div>
              <div className="text-xs text-dim mono mt-1">CHAMPIONSHIP PTS</div>
            </div>
            <div className="glass p-6 rounded-lg min-w-[200px]">
              <div className="text-4xl font-black text-gold mono">230HP</div>
              <div className="text-xs text-dim mono mt-1">DUCATI GP26</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-dim text-xs mono tracking-wider">SCROLL</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-red to-transparent"></div>
        </div>
      </section>

      {/* Featured News Grid */}
      <section className="max-w-[1800px] mx-auto px-6 lg:px-12 py-24">
        <div className="flex items-end justify-between mb-12 reveal">
          <div>
            <span className="text-red text-sm mono tracking-widest block mb-2">— TERBARU</span>
            <h2 className="text-5xl">BERITA <span className="text-red">TERKINI</span></h2>
          </div>
          <Link href="/news" className="text-red hover:text-red-hot transition-colors text-sm font-bold mono tracking-wider">
            SEMUA BERITA →
          </Link>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Big Card */}
          <Link href="/article/wsbk-toprak" className="col-span-12 lg:col-span-7 card group reveal">
            <div className="relative aspect-[16/10] lg:aspect-[21/10] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero/2026-03-01-20-21-15-hero-wsbk.webp"
                alt="WSBK Phillip Island"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="bg-blue text-black px-3 py-1 text-xs font-black mono mb-3 inline-block">
                  WSBK · FEATURE
                </span>
                <h3 className="text-3xl lg:text-4xl mb-3 group-hover:text-blue transition-colors">
                  Toprak Razgatlioglu: "Phillip Island adalah circuit paling menyenangkan di dunia"
                </h3>
                <p className="text-silver text-sm max-w-2xl">
                  Juara dunia WSBK berbicara tentang persiapan untuk round pembuka, ambisi mempertahankan gelar, dan hubungannya dengan Yamaha.
                </p>
              </div>
            </div>
          </Link>

          {/* Medium Cards */}
          <div className="col-span-12 lg:col-span-5 grid grid-cols-1 gap-6">
            <Link href="/article/f1-hamilton" className="card group reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/images/hero/2026-03-01-20-21-20-hero-f1.webp"
                  alt="F1 Bahrain"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="bg-purple text-white px-3 py-1 text-xs font-black mono mb-2 inline-block">
                    F1
                  </span>
                  <h3 className="text-2xl group-hover:text-purple-light transition-colors">
                    Hamilton Kuasai FP1 Bahrain, Ferrari Mengintai di Posisi Dua
                  </h3>
                </div>
              </div>
            </Link>

            <Link href="/article/ducati-v4r" className="card group reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/images/hero/2026-03-01-20-21-25-hero-superbike.webp"
                  alt="Ducati Panigale V4R"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="bg-red text-white px-3 py-1 text-xs font-black mono mb-2 inline-block">
                    SUPERBIKE
                  </span>
                  <h3 className="text-2xl group-hover:text-gold transition-colors">
                    Ducati Panigale V4R 2026: 230HP, Teknologi MotoGP Turun ke Jalan
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Standings Section - Glass Morphism */}
      <section className="max-w-[1800px] mx-auto px-6 lg:px-12 py-24">
        <div className="glass rounded-3xl p-12">
          <div className="flex items-end justify-between mb-12 reveal">
            <div>
              <span className="text-red text-sm mono tracking-widest block mb-2">— MUSIM 2026</span>
              <h2 className="text-5xl">KLASEMEN <span className="text-red">TERKINI</span></h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 reveal" style={{ transitionDelay: '0.1s' }}>
            {/* MotoGP Standings */}
            <div>
              <h3 className="text-2xl text-red mb-6 mono">MOTOGP</h3>
              <div className="space-y-3">
                {[
                  { pos: 1, name: 'Marc Marquez', team: 'Gresini Racing · Ducati', flag: '🇪🇸', pts: 185 },
                  { pos: 2, name: 'Pecco Bagnaia', team: 'Ducati Lenovo Team', flag: '🇮🇹', pts: 178 },
                  { pos: 3, name: 'Jorge Martin', team: 'Aprilia Racing', flag: '🇪🇸', pts: 165 },
                  { pos: 4, name: 'Brad Binder', team: 'Red Bull KTM Factory', flag: '🇿🇦', pts: 142 },
                  { pos: 5, name: 'Fabio Quartararo', team: 'Monster Energy Yamaha', flag: '🇫🇷', pts: 138 },
                ].map((rider) => (
                  <div key={rider.pos} className={`glass p-4 rounded-lg flex items-center gap-4 hover:border-red transition-all group ${rider.pos === 1 ? 'bg-red/10' : ''}`}>
                    <div className={`text-3xl font-black mono ${rider.pos === 1 ? 'text-gold' : 'text-dim'}`}>
                      {rider.pos}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-lg">{rider.name}</div>
                      <div className="text-sm text-dim mono">{rider.team}</div>
                    </div>
                    <div className="text-2xl">{rider.flag}</div>
                    <div className={`text-3xl font-black mono ${rider.pos === 1 ? 'text-red' : ''}`}>
                      {rider.pts}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WSBK Standings */}
            <div>
              <h3 className="text-2xl text-blue mb-6 mono">WSBK</h3>
              <div className="space-y-3">
                {[
                  { pos: 1, name: 'Toprak Razgatlioglu', team: 'Pata Yamaha Prometeon', flag: '🇹🇷', pts: 142 },
                  { pos: 2, name: 'Alvaro Bautista', team: 'Aruba.it Racing Ducati', flag: '🇪🇸', pts: 135 },
                  { pos: 3, name: 'Jonathan Rea', team: 'Pata Yamaha Prometeon', flag: '🇬🇧', pts: 128 },
                  { pos: 4, name: 'Alex Lowes', team: 'Kawasaki Racing Team', flag: '🇬🇧', pts: 98 },
                  { pos: 5, name: 'Andrea Locatelli', team: 'Pata Yamaha Prometeon', flag: '🇮🇹', pts: 92 },
                ].map((rider) => (
                  <div key={rider.pos} className={`glass p-4 rounded-lg flex items-center gap-4 hover:border-blue transition-all group ${rider.pos === 1 ? 'bg-blue/10' : ''}`}>
                    <div className={`text-3xl font-black mono ${rider.pos === 1 ? 'text-gold' : 'text-dim'}`}>
                      {rider.pos}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-lg">{rider.name}</div>
                      <div className="text-sm text-dim mono">{rider.team}</div>
                    </div>
                    <div className="text-2xl">{rider.flag}</div>
                    <div className={`text-3xl font-black mono ${rider.pos === 1 ? 'text-blue' : ''}`}>
                      {rider.pts}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="max-w-[1800px] mx-auto px-6 lg:px-12 py-24">
        <div className="flex items-end justify-between mb-12 reveal">
          <div>
            <span className="text-red text-sm mono tracking-widest block mb-2">— PALING BANYAK DIBACA</span>
            <h2 className="text-5xl">🔥 <span className="text-red">TRENDING</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { num: 1, cat: 'MOTOGP', title: 'Marquez ke Ducati: Keputusan Terbaik Karir?', views: '125K' },
            { num: 2, cat: 'MOTOR', title: 'Yamaha R1 Discontinue: Akhir dari Era Supersport', views: '98K' },
            { num: 3, cat: 'INDONESIA', title: 'WSBK Mandalika 2026: Tiket, Hotel & Panduan Lengkap', views: '87K' },
            { num: 4, cat: 'REVIEW', title: 'Ducati V4 vs BMW M1000RR: Mana Raja Sebenarnya?', views: '76K' },
            { num: 5, cat: 'TECH', title: 'Pertamax vs Pertamax Turbo untuk Superbike: Bedanya?', views: '65K' },
          ].map((item, idx) => (
            <Link href={`/article/${item.num}`} key={item.num} className="card group reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <div className="glass p-6 rounded-xl hover:border-red transition-all">
                <div className="text-6xl font-black text-dark group-hover:text-red/20 transition-colors mb-3">
                  {item.num}
                </div>
                <div className="text-red text-xs font-black mono mb-2">{item.cat}</div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-red transition-colors">
                  {item.title}
                </h3>
                <div className="text-dim text-sm mono">👁 {item.views} views</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'IndonesiaSBK',
            url: 'https://indonesiasbk.com',
            logo: 'https://indonesiasbk.com/logo.png',
            description: 'Portal berita motorsport terlengkap di Indonesia',
            sameAs: [
              'https://twitter.com/indonesiasbk',
              'https://instagram.com/indonesiasbk',
              'https://youtube.com/@indonesiasbk'
            ]
          })
        }}
      />
    </>
  )
}
