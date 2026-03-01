import Image from 'next/image'

// Mock articles
const heroArticle = {
  id: '1',
  slug: 'wsbk-phillip-island-toprak-dominan',
  title: 'WSBK Phillip Island: Toprak Dominan di Race 1, Drama Ban untuk Bautista',
  excerpt: 'Toprak Razgatlioglu memulai musim 2026 dengan sempurna sementara Alvaro Bautista terkendala masalah ban di lap terakhir',
  category: 'WSBK',
  image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1200&h=675&fit=crop',
  time: '2 jam lalu',
}

const motorsportArticles = [
  {
    id: '2',
    slug: 'motogp-losail-marquez-pole',
    title: 'MotoGP Qatar: Marc Marquez Pole Position, Pecco Start Ketiga',
    category: 'MOTOGP',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    time: '30 min',
  },
  {
    id: '3',
    slug: 'f1-bahrain-verstappen',
    title: 'Formula 1 akan lebih sulit diikuti fans di 2026 - Max Verstappen',
    category: 'FORMULA 1',
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400&h=300&fit=crop',
    time: '15 h',
  },
  {
    id: '4',
    slug: 'fia-compression-ratio',
    title: 'FIA umumkan clampdown pada tes rasio kompresi mulai Juni 2026',
    category: 'FORMULA 1',
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400&h=300&fit=crop',
    time: '23 h',
  },
]

const reviewArticles = [
  {
    id: '5',
    slug: 'ducati-panigale-v4-2026',
    title: 'Review: Ducati Panigale V4 2026 - 215 HP Beast dari Bologna',
    excerpt: 'Kami test Panigale V4 terbaru di Sentul Circuit. Lebih ringan 2kg, lebih kencang, lebih gila.',
    category: 'BIKE REVIEW',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1200&h=675&fit=crop',
    time: '1 hari lalu',
  },
  {
    id: '6',
    slug: 'yamaha-r1-vs-zx10r',
    title: 'Yamaha R1 vs Kawasaki ZX-10R 2026: Mana Lebih Worth It?',
    category: 'COMPARISON',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    time: '2 hari lalu',
  },
  {
    id: '7',
    slug: 'shoei-x15-review',
    title: 'Review Helm Shoei X-Fifteen: Worth Harga Premium?',
    category: 'HELMET REVIEW',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    time: '3 hari lalu',
  },
]

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Motorsport Section */}
      <section className="mb-16">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-1 h-8 bg-brand"></div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
            <span className="text-brand">MOTOR</span>
            <span className="text-white">SPORT</span>
          </h2>
        </div>

        {/* Hero Article */}
        <article className="mb-6 group cursor-pointer">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
            <Image
              src={heroArticle.image}
              alt={heroArticle.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-3">
                <span className="bg-brand text-white px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider">
                  {heroArticle.category}
                </span>
                <span className="text-white/80 text-sm font-medium">{heroArticle.time}</span>
              </div>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-3 leading-tight">
                {heroArticle.title}
              </h3>
              <p className="text-white/90 text-base md:text-lg italic font-light max-w-3xl">
                {heroArticle.excerpt}
              </p>
            </div>
          </div>
        </article>

        {/* Article List */}
        <div className="space-y-4">
          {motorsportArticles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="flex gap-4">
                <div className="relative w-32 h-24 md:w-48 md:h-36 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-brand text-white px-2 py-0.5 rounded-sm text-xs font-bold uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-muted text-xs font-medium">{article.time}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-brand transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Review Section */}
      <section className="mb-16">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-1 h-8 bg-brand"></div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
            REVIEW
          </h2>
        </div>

        {/* Hero Review */}
        <article className="mb-6 group cursor-pointer">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
            <Image
              src={reviewArticles[0].image}
              alt={reviewArticles[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-3">
                <span className="bg-brand text-white px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider">
                  {reviewArticles[0].category}
                </span>
                <span className="text-white/80 text-sm font-medium">{reviewArticles[0].time}</span>
              </div>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-3 leading-tight">
                {reviewArticles[0].title}
              </h3>
              <p className="text-white/90 text-base md:text-lg italic font-light">
                {reviewArticles[0].excerpt}
              </p>
            </div>
          </div>
        </article>

        {/* Review List */}
        <div className="space-y-4">
          {reviewArticles.slice(1).map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="flex gap-4">
                <div className="relative w-32 h-24 md:w-48 md:h-36 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-brand text-white px-2 py-0.5 rounded-sm text-xs font-bold uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-muted text-xs font-medium">{article.time}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-brand transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* All Categories - Simplified */}
      <section className="mt-16 border-t border-[#1F1F1F] pt-12">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-1 h-8 bg-brand"></div>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
            KATEGORI
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            'WSBK', 'MotoGP', 'Moto2', 'Moto3', 'F1', 'BSB',
            'Superbike', 'Supersport', 'Review', 'Riders', 'Teams', 'Results'
          ].map((cat) => (
            <a
              key={cat}
              href={`/${cat.toLowerCase()}`}
              className="bg-secondary border border-default hover:border-brand text-white hover:text-brand transition-all p-4 rounded text-center font-bold uppercase text-sm tracking-wide"
            >
              {cat}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
