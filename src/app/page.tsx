'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import StandingsTabs from '@/components/StandingsTabs'
import { articlesPhase2A } from '@/data/articles-phase2a'
import { articlesPhase2B } from '@/data/articles-phase2b'
import articlesWave2 from '@/data/articles-wave2'
import articlesWave3 from '@/data/articles-wave3'

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

  // Combine all real articles
  const allArticles = [...articlesPhase2A, ...articlesPhase2B, ...articlesWave2, ...articlesWave3]

  // Helper to get articles by category
  const getArticlesByCategory = (category: string, limit: number = 6) => {
    return allArticles
      .filter((a: any) => a.category?.toLowerCase() === category.toLowerCase())
      .slice(0, limit)
      .map((a: any) => ({
        id: a.slug,
        slug: a.slug,
        title: a.title,
        excerpt: a.excerpt || a.metaDescription || '',
        category: a.category || category,
        image: a.image || '/images/hero/2026-03-01-20-21-10-hero-motogp.webp',
        time: '1 hari',
      }))
  }

  // Breaking news - use latest article
  const breakingNews = allArticles[0] ? {
    id: allArticles[0].slug,
    slug: allArticles[0].slug,
    title: allArticles[0].title,
    excerpt: allArticles[0].excerpt || allArticles[0].metaDescription,
    category: allArticles[0].category || 'Motorsport',
    categoryColor: '#ff1744',
    image: allArticles[0].image || '/images/hero/2026-03-01-20-21-10-hero-motogp.webp',
    time: '2 jam lalu',
  } : {
    id: '1',
    slug: 'breaking-news',
    title: 'Breaking News - Latest Update',
    excerpt: 'Stay tuned for latest motorsport news',
    category: 'Motorsport',
    categoryColor: '#ff1744',
    image: '/images/hero/2026-03-01-20-21-10-hero-motogp.webp',
    time: '1 jam lalu',
  }

  // Latest news - mix of recent articles
  const latestNews = allArticles.slice(1, 6).map((a: any, idx: number) => ({
    id: String(idx + 2),
    slug: a.slug,
    title: a.title,
    category: a.category || 'Motorsport',
    image: a.image || '/images/hero/2026-03-01-20-21-10-hero-motogp.webp',
    time: `${idx + 3} jam`,
  }))

  // Category-specific articles (prioritize MotoGP/Moto2/Moto3 for motorsport sections)
  const motogpArticles = [
    ...getArticlesByCategory('moto2', 2),
    ...getArticlesByCategory('Moto3', 2),
    ...getArticlesByCategory('ARRC', 2)
  ].slice(0, 6)

  const wsbkArticles = [
    ...getArticlesByCategory('WSBK', 3),
    ...getArticlesByCategory('BSB', 2)
  ].slice(0, 4)

  const reviewArticles = [
    ...getArticlesByCategory('IDC', 2),
    ...getArticlesByCategory('MiniGP', 2)
  ].slice(0, 2).map((a, idx) => ({
    ...a,
    rating: 88 + idx * 2,
  }))

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
          background: rgba(255, 23, 68, 0.2);
          color: #ff1744;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 4px;
        }

        .glass {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .glass:hover {
          background: rgba(0, 0, 0, 0.6);
          border-color: rgba(255, 23, 68, 0.3);
        }
      `}</style>

      {/* Hero Section - Breaking News */}
      <section className="relative min-h-[600px] flex items-center reveal">
        <div className="absolute inset-0 z-0">
          <Image
            src={breakingNews.image}
            alt={breakingNews.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <span className="category-badge">{breakingNews.category}</span>
            <h1 className="text-5xl md:text-7xl font-bebas text-white mt-4 mb-6 leading-tight">
              {breakingNews.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {breakingNews.excerpt}
            </p>
            <div className="flex items-center gap-6">
              <Link href={`/article/${breakingNews.slug}`} className="inline-block px-8 py-4 bg-[#ff1744] hover:bg-[#d01438] text-white font-bold rounded-lg transition-all">
                Baca Selengkapnya
              </Link>
              <span className="text-gray-400">⏱️ {breakingNews.time}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Grid */}
      <section className="container mx-auto px-4 py-16 reveal">
        <h2 className="section-title text-4xl font-bebas text-white mb-8">Berita Terbaru</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestNews.map((article) => (
            <Link key={article.id} href={`/article/${article.slug}`} className="group">
              <div className="glass rounded-xl overflow-hidden hover:border-[#ff1744] transition-all">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="category-badge">{article.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-dm-sans font-bold text-white mb-2 group-hover:text-[#ff1744] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <span className="text-sm text-gray-400">⏱️ {article.time}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* MotoGP Section */}
      <section className="container mx-auto px-4 py-16 reveal">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title text-4xl font-bebas text-white">Moto2 & Moto3</h2>
          <Link href="/motorsport/motogp" className="text-[#ff1744] hover:text-[#d01438] font-bold">
            Lihat Semua →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {motogpArticles.map((article) => (
            <Link key={article.id} href={`/article/${article.slug}`} className="group glass rounded-xl overflow-hidden hover:border-[#ff1744] transition-all">
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-[#ff1744] text-sm font-bold">{article.category}</span>
                <h3 className="text-lg font-dm-sans font-bold text-white mt-2 mb-3 group-hover:text-[#ff1744] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WSBK Section */}
      <section className="container mx-auto px-4 py-16 reveal">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title text-4xl font-bebas text-white">WSBK & BSB</h2>
          <Link href="/motorsport/wsbk" className="text-[#00e5ff] hover:text-[#00bcd4] font-bold">
            Lihat Semua →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wsbkArticles.map((article) => (
            <Link key={article.id} href={`/article/${article.slug}`} className="group glass rounded-xl overflow-hidden hover:border-[#00e5ff] transition-all">
              <div className="relative h-40">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <span className="text-[#00e5ff] text-sm font-bold">{article.category}</span>
                <h3 className="text-base font-dm-sans font-bold text-white mt-2 group-hover:text-[#00e5ff] transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Standings Tabs */}
      <section className="container mx-auto px-4 py-16 reveal">
        <h2 className="section-title text-4xl font-bebas text-white mb-8">Klasemen Terkini</h2>
        <StandingsTabs />
      </section>

      {/* Review Section */}
      <section className="container mx-auto px-4 py-16 reveal">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title text-4xl font-bebas text-white">Review Terbaru</h2>
          <Link href="/review/bike" className="text-[#ffc400] hover:text-[#ffb300] font-bold">
            Lihat Semua →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewArticles.map((article) => (
            <Link key={article.id} href={`/article/${article.slug}`} className="group">
              <div className="glass rounded-xl overflow-hidden hover:border-[#ffc400] transition-all p-6">
                <div className="flex gap-6">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-[#ffc400] text-sm font-bold">{article.category}</span>
                    <h3 className="text-xl font-dm-sans font-bold text-white mt-2 mb-2 group-hover:text-[#ffc400] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-[#ffc400] font-bold text-lg">{article.rating}/100</span>
                      <span className="text-gray-400 text-sm">Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
