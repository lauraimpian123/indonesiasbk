import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Mock article data
const mockArticle = {
  id: '1',
  slug: 'ducati-panigale-v4r-2026-ultimate-superbike',
  title: 'Ducati Panigale V4R 2026: The Ultimate Italian Superbike Masterpiece',
  excerpt: 'Dengan 230 HP dan teknologi MotoGP terdepan, Ducati Panigale V4R 2026 menetapkan standar baru untuk superbike jalanan.',
  content: `
    <p>Ducati kembali menggebrak dunia superbike dengan peluncuran Panigale V4R 2026 yang memukau. Motor sport flagship Italia ini hadir dengan sejumlah pembaruan signifikan yang membuatnya semakin mendekati performa motor balap MotoGP.</p>
    
    <h2>Performa yang Menggelegar</h2>
    <p>Dengan output power 230 HP pada 15.500 RPM, Panigale V4R 2026 ini adalah motor produksi paling powerful yang pernah dibuat Ducati. Mesin V4 Desmosedici Stradale R berkapasitas 998cc ini mampu menghasilkan torsi maksimal 112 Nm pada 11.500 RPM.</p>
    
    <h2>Teknologi dari Trek Balap</h2>
    <p>Ducati tak main-main dengan teknologi yang mereka tanamkan. Electronic package-nya lengkap: Ducati Traction Control EVO 3, Ducati Slide Control, Ducati Wheelie Control EVO, Ducati Power Launch, hingga Ducati Quick Shift up/down EVO 2.</p>
    
    <h2>Aerodinamika MotoGP</h2>
    <p>Winglet depan bergaya MotoGP menghasilkan downforce hingga 37kg pada kecepatan tinggi. Ini membantu stabilitas saat akselerasi brutal dan pengereman ekstrem di sirkuit.</p>
    
    <h2>Suspensi Elektronik Öhlins</h2>
    <p>Suspensi Öhlins Smart EC 2.0 dengan sensor IMU 6-axis menyesuaikan damping secara real-time berdasarkan kondisi riding. Setup suspensi bisa diubah langsung dari dashboard TFT 5 inci yang super responsif.</p>
    
    <h2>Harga dan Ketersediaan</h2>
    <p>Ducati Panigale V4R 2026 dibanderol dengan harga mulai dari Rp 1,2 miliar (off the road). Tersedia dalam skema warna Ducati Red iconic dan Racing Livery edisi terbatas.</p>
  `,
  category: 'SUPERBIKE',
  image: '/images/ducati-hero.png',
  date: '1 Maret 2026',
  author: 'Redaksi IndonesiaSBK',
  readTime: '5 min',
  views: '12.5K',
}

const relatedArticles = [
  { id: '2', slug: 'yamaha-r1-2026', title: 'Yamaha R1 2026: Rival Tangguh Ducati', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', category: 'SUPERBIKE' },
  { id: '3', slug: 'kawasaki-zx-10rr', title: 'Kawasaki ZX-10RR: Pure Race Breeding', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', category: 'SUPERBIKE' },
  { id: '4', slug: 'bmw-s1000rr-2026', title: 'BMW S1000RR 2026: German Engineering', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', category: 'SUPERBIKE' },
]

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  // Simulated data fetch
  if (slug !== mockArticle.slug) {
    return notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative aspect-[21/9] w-full">
        <Image
          src={mockArticle.image}
          alt={mockArticle.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 gradient-overlay-hero"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-8">
            <div className="bg-secondary border border-default rounded-2xl p-6 md:p-10 backdrop-blur-xl">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="badge-primary">{mockArticle.category}</span>
                <span className="text-subtle text-sm">{mockArticle.date}</span>
                <span className="text-muted text-sm">•</span>
                <span className="text-subtle text-sm">{mockArticle.readTime} read</span>
                <span className="text-muted text-sm">•</span>
                <span className="text-subtle text-sm flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {mockArticle.views}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-black text-primary mb-6 leading-tight">
                {mockArticle.title}
              </h1>

              {/* Author */}
              <div className="flex items-center space-x-3 mb-8 pb-8 border-b border-tertiary">
                <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white font-bold text-lg">
                  R
                </div>
                <div>
                  <div className="font-bold text-primary">{mockArticle.author}</div>
                  <div className="text-sm text-muted">Motorsport Journalist</div>
                </div>
              </div>

              {/* Content */}
              <div 
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: mockArticle.content }}
              />

              {/* Share Buttons */}
              <div className="mt-12 pt-8 border-t border-tertiary">
                <p className="text-subtle font-semibold mb-4">Bagikan Artikel:</p>
                <div className="flex gap-3">
                  <button className="btn-primary px-6 py-3 rounded-lg flex items-center space-x-2">
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Trending Widget */}
            <div className="widget hover-lift sticky top-24">
              <h3 className="text-xl font-black uppercase mb-4 flex items-center space-x-2">
                <span className="text-brand">🔥</span>
                <span>Trending</span>
              </h3>
              <div className="space-y-4">
                {relatedArticles.map((article, idx) => (
                  <Link key={article.id} href={`/article/${article.slug}`} className="flex gap-3 group">
                    <span className="text-brand text-2xl font-black">{idx + 1}</span>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-primary group-hover:text-brand transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Articles Widget */}
            <div className="widget hover-lift">
              <h3 className="text-xl font-black uppercase mb-4">Related</h3>
              <div className="space-y-4">
                {relatedArticles.map((article) => (
                  <Link key={article.id} href={`/article/${article.slug}`} className="block group">
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-2">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <span className="badge-secondary text-xs">{article.category}</span>
                    <h4 className="text-sm font-bold text-primary group-hover:text-brand transition-colors line-clamp-2 mt-2">
                      {article.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
