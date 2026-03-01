import Image from 'next/image'
import Link from 'next/link'

// Mock data untuk Moto2
const mockArticles = [
  {
    id: '1',
    slug: 'moto2-article-1',
    title: 'Latest Moto2 News and Updates',
    excerpt: 'Stay updated with the latest Moto2 news, results, and insights.',
    category: 'MOTO2',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    date: '2026-03-01',
    readTime: '5 min',
  },
  {
    id: '2',
    slug: 'moto2-article-2',
    title: 'Moto2 Analysis and Commentary',
    excerpt: 'Expert analysis and commentary on Moto2 events and developments.',
    category: 'MOTO2',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    date: '2026-02-28',
    readTime: '8 min',
  },
]

export const metadata = {
  title: 'Moto2 World Championship - Berita, Review & Analisis | IndonesiaSBK',
  description: 'Berita Moto2 terbaru, hasil race, dan profil rider. Kelas menengah penuh talenta muda menuju MotoGP.',
  keywords: 'moto2, moto2, indonesia sbk, berita moto2, moto2 2026',
  openGraph: {
    title: 'Moto2 World Championship | IndonesiaSBK',
    description: 'Berita Moto2 terbaru, hasil race, dan profil rider. Kelas menengah penuh talenta muda menuju MotoGP.',
    type: 'website',
  },
}

export default function Moto2Page() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="accent-line"></div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
              <span className="text-brand">Moto2</span>
              <span className="text-white"></span>
            </h1>
          </div>
          <p className="text-lg text-subtle max-w-3xl">Berita Moto2 terbaru, hasil race, dan profil rider. Kelas menengah penuh talenta muda menuju MotoGP.</p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockArticles.map((article) => (
            <Link key={article.id} href={`/article/${article.slug}`} className="group card hover-lift p-0 overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="badge-primary text-xs">{article.category}</span>
                  <span className="text-muted text-xs">{article.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-primary group-hover:text-brand transition-colors line-clamp-2 mb-2">
                  {article.title}
                </h2>
                <p className="text-subtle text-sm line-clamp-2">{article.excerpt}</p>
                <div className="mt-4 text-xs text-muted">{article.date}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {mockArticles.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-primary mb-4">Coming Soon</h2>
            <p className="text-subtle">Artikel Moto2 akan segera hadir. Stay tuned!</p>
          </div>
        )}
      </div>
    </div>
  )
}
