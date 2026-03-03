'use client'

import Image from 'next/image'
import Link from 'next/link'
import { articlesPhase2A } from '@/data/articles-phase2a'
import { articlesPhase2B } from '@/data/articles-phase2b'
import articlesWave2 from '@/data/articles-wave2'
import articlesWave3 from '@/data/articles-wave3'
import articlesRealRace from '@/data/articles-real-race'
import { articlesMotogpLatest } from '@/data/articles-motogp-latest'
import articlesThailand2026 from '@/data/articles-thailand-2026'

export default function ARRCArticlesPage() {
  // Combine all articles
  const allArticles = [
    ...articlesPhase2A,
    ...articlesPhase2B,
    ...articlesWave2,
    ...articlesWave3,
    ...articlesRealRace,
    ...articlesMotogpLatest,
    ...articlesThailand2026
  ]

  // Filter only ARRC articles
  const categoryArticles = allArticles.filter(
    (article: any) => article.category?.toLowerCase() === 'arrc'
  )

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 bg-[#ffc400] rounded-xl flex items-center justify-center text-4xl">
            🌏
          </div>
          <div>
            <h1 className="text-6xl font-bebas font-black uppercase tracking-tight">ARRC</h1>
            <p className="text-xl text-white/60 font-dm-sans">
              Berita Terkini, Analisis, dan Liputan Lengkap
            </p>
          </div>
        </div>
        
        <div className="flex gap-3 flex-wrap mt-6">
          <Link 
            href="/motorsport/arrc" 
            className="px-6 py-3 glass rounded-lg font-bebas uppercase hover:bg-white/10 transition-colors"
          >
            📊 Lihat Klasemen
          </Link>
          <Link 
            href="/" 
            className="px-6 py-3 glass rounded-lg font-bebas uppercase hover:bg-white/10 transition-colors"
          >
            ← Kembali ke Home
          </Link>
        </div>
      </div>

      {/* Articles Count */}
      <div className="mb-6">
        <p className="text-white/60 font-space-mono text-sm">
          {categoryArticles.length} artikel ditemukan
        </p>
      </div>

      {/* Articles Grid */}
      {categoryArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryArticles.map((article: any) => (
            <Link
              key={article.slug}
              href={`/article/${article.slug}`}
              className="group glass rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-black/40">
                {article.image && (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#ffc400] rounded-full text-xs font-bebas uppercase tracking-wide">
                    {article.category || 'ARRC'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-[#00e5ff] transition-colors">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-white/70 text-sm line-clamp-3 mb-4 font-dm-sans">
                  {article.excerpt || article.metaDescription || ''}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-white/40 font-space-mono">
                  <span>{article.date || 'Baru'}</span>
                  <span>{article.readTime || '5 min'}</span>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="h-1 bg-gradient-to-r from-[#ff1744] via-[#00e5ff] to-[#9c27b0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🌏</div>
          <h3 className="text-2xl font-bebas uppercase mb-2">Belum Ada Artikel ARRC</h3>
          <p className="text-white/60">Artikel akan segera hadir!</p>
        </div>
      )}

      {/* Quick Links */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link href="/moto3" className="glass rounded-lg p-6 text-center hover:bg-white/5 transition-colors group">
          <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🏍️</div>
          <div className="font-bebas uppercase">Moto3</div>
        </Link>
        <Link href="/moto2" className="glass rounded-lg p-6 text-center hover:bg-white/5 transition-colors group">
          <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🏍️</div>
          <div className="font-bebas uppercase">Moto2</div>
        </Link>
        <Link href="/motogp" className="glass rounded-lg p-6 text-center hover:bg-white/5 transition-colors group">
          <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🏁</div>
          <div className="font-bebas uppercase">MotoGP</div>
        </Link>
        <Link href="/wsbk" className="glass rounded-lg p-6 text-center hover:bg-white/5 transition-colors group">
          <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🔥</div>
          <div className="font-bebas uppercase">WSBK</div>
        </Link>
      </div>
    </div>
  )
}
