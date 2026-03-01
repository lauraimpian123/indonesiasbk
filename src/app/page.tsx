import Image from 'next/image'

// Mock data
const heroArticle = {
  id: '1',
  slug: 'ducati-panigale-v4-2026-review',
  title: 'Ducati Panigale V4 2026: 215 HP, Lebih Ringan, Lebih Ganas',
  excerpt: 'Panigale V4 terbaru hadir dengan performa menggila. Kami coba di Sirkuit Sentul dan hasilnya mencengangkan.',
  category: 'review',
  categoryName: 'Review',
  image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1200&h=675&fit=crop',
  author: 'Bimo Satria',
  date: '2026-03-01',
  readTime: 8,
  views: '12.5K',
}

const latestArticles = [
  {
    id: '2',
    slug: 'wsbk-round-1',
    title: 'WSBK Phillip Island: Toprak Dominan, Bautista Kejar Poin',
    category: 'sbk',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=225&fit=crop',
    date: '1 jam lalu',
    views: '8.2K',
  },
  {
    id: '3',
    slug: 'honda-cb500x',
    title: 'Honda CB500X 2026: Adventure Bike Ramah Pemula',
    category: 'news',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=225&fit=crop',
    date: '3 jam lalu',
    views: '5.1K',
  },
  {
    id: '4',
    slug: 'ev-indonesia',
    title: 'Infrastruktur EV Indonesia: Sudah Siap Belum?',
    category: 'tech',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=225&fit=crop',
    date: '5 jam lalu',
    views: '6.7K',
  },
  {
    id: '5',
    slug: 'motogp-testing',
    title: 'MotoGP Pre-Season Testing: Marquez Tercepat',
    category: 'motogp',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=225&fit=crop',
    date: '8 jam lalu',
    views: '15.3K',
  },
]

const trendingArticles = [
  { title: 'Toprak Razgatlioglu Juara WSBK 2026?', views: '45.2K' },
  { title: 'Review: Yamaha R1 2026 vs Kawasaki ZX-10R', views: '38.1K' },
  { title: 'Marc Marquez Pindah ke Ducati Official', views: '32.5K' },
  { title: 'Harga Motor Sport Naik 2026', views: '28.9K' },
  { title: 'Modifikasi CBR250RR Ala Superbike', views: '24.3K' },
]

const categoryStats = [
  { name: 'SBK', count: 45, color: 'cat-sbk' },
  { name: 'MotoGP', count: 38, color: 'cat-motogp' },
  { name: 'F1', count: 28, color: 'cat-f1' },
  { name: 'Review', count: 52, color: 'cat-review' },
  { name: 'News', count: 124, color: 'cat-news' },
  { name: 'Tech', count: 31, color: 'cat-tech' },
  { name: 'Lifestyle', count: 19, color: 'cat-lifestyle' },
]

function getCategoryClass(category: string) {
  const map: Record<string, string> = {
    sbk: 'cat-sbk',
    motogp: 'cat-motogp',
    f1: 'cat-f1',
    review: 'cat-review',
    news: 'cat-news',
    tech: 'cat-tech',
    lifestyle: 'cat-lifestyle',
  }
  return map[category] || 'cat-news'
}

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Hero Article */}
          <article className="card group cursor-pointer">
            <div className="relative aspect-[16/9]">
              <Image
                src={heroArticle.image}
                alt={heroArticle.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <span className={`absolute top-3 left-3 category-badge ${getCategoryClass(heroArticle.category)}`}>
                {heroArticle.categoryName}
              </span>
            </div>
            <div className="p-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-brand transition-colors">
                {heroArticle.title}
              </h1>
              <p className="text-muted text-lg mb-4">
                {heroArticle.excerpt}
              </p>
              <div className="flex items-center space-x-4 text-sm text-subtle">
                <span className="font-medium">{heroArticle.author}</span>
                <span>•</span>
                <span>{heroArticle.date}</span>
                <span>•</span>
                <span>{heroArticle.readTime} min baca</span>
                <span>•</span>
                <span>{heroArticle.views} views</span>
              </div>
            </div>
          </article>

          {/* Latest Articles Grid */}
          <section>
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-brand pl-3">
              Berita Terkini
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {latestArticles.map((article) => (
                <article key={article.id} className="card group cursor-pointer">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className={`absolute top-2 left-2 category-badge ${getCategoryClass(article.category)}`}>
                      {article.category.toUpperCase()}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-brand transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center space-x-3 text-xs text-subtle">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.views} views</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          {/* Trending */}
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4 border-l-4 border-brand pl-3">
              Trending
            </h3>
            <ol className="space-y-3">
              {trendingArticles.map((article, idx) => (
                <li key={idx} className="group cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl font-bold text-brand">{idx + 1}</span>
                    <div className="flex-1">
                      <a href="#" className="text-sm font-semibold group-hover:text-brand transition-colors line-clamp-2">
                        {article.title}
                      </a>
                      <p className="text-xs text-subtle mt-1">{article.views} views</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Categories */}
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4 border-l-4 border-brand pl-3">
              Kategori
            </h3>
            <ul className="space-y-2">
              {categoryStats.map((cat) => (
                <li key={cat.name}>
                  <a href={`/${cat.name.toLowerCase()}`} className="flex items-center justify-between p-2 rounded hover:bg-tertiary transition-colors group">
                    <div className="flex items-center space-x-3">
                      <span className={`w-3 h-3 rounded-full ${cat.color}`}></span>
                      <span className="font-medium group-hover:text-brand transition-colors">{cat.name}</span>
                    </div>
                    <span className="text-sm text-subtle">{cat.count}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ad Space */}
          <div className="card p-6 text-center">
            <p className="text-subtle text-sm mb-2">Advertisement</p>
            <div className="bg-tertiary aspect-square rounded flex items-center justify-center">
              <p className="text-muted">300x300</p>
            </div>
          </div>
        </aside>
      </div>

      {/* All Categories Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 border-l-4 border-brand pl-3">
          Semua Kategori
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { name: 'WSBK', slug: 'wsbk', color: 'bg-[#E11D48]' },
            { name: 'MotoGP', slug: 'motogp', color: 'bg-[#FF6B35]' },
            { name: 'Moto2', slug: 'moto2', color: 'bg-[#3B82F6]' },
            { name: 'Moto3', slug: 'moto3', color: 'bg-[#10B981]' },
            { name: 'F1', slug: 'f1', color: 'bg-[#DC2626]' },
            { name: 'BSB', slug: 'bsb', color: 'bg-[#E11D48]' },
            { name: 'Superbike', slug: 'superbike', color: 'bg-[#E11D48]' },
            { name: 'Supersport', slug: 'supersport', color: 'bg-[#3B82F6]' },
            { name: 'Supermatic', slug: 'supermatic', color: 'bg-[#F59E0B]' },
            { name: 'Naked Bike', slug: 'naked', color: 'bg-[#8B5CF6]' },
            { name: 'Adventure', slug: 'adventure', color: 'bg-[#10B981]' },
            { name: 'Cruiser', slug: 'cruiser', color: 'bg-[#DC2626]' },
            { name: 'Review', slug: 'review', color: 'bg-[#3B82F6]' },
            { name: 'Gear Review', slug: 'gear-review', color: 'bg-[#10B981]' },
            { name: 'Helmet Review', slug: 'helmet-review', color: 'bg-[#F59E0B]' },
            { name: 'Active Riders', slug: 'active-riders', color: 'bg-[#10B981]' },
            { name: 'Retired Riders', slug: 'retired-riders', color: 'bg-[#6B7280]' },
            { name: 'Standings', slug: 'rider-standings', color: 'bg-[#E11D48]' },
            { name: 'Official Teams', slug: 'official-teams', color: 'bg-[#DC2626]' },
            { name: 'Satellite Teams', slug: 'satellite-teams', color: 'bg-[#3B82F6]' },
            { name: 'Racing School', slug: 'racing-school', color: 'bg-[#10B981]' },
            { name: 'Workshop', slug: 'workshop', color: 'bg-[#F59E0B]' },
            { name: 'Touring', slug: 'touring', color: 'bg-[#06B6D4]' },
            { name: 'Event', slug: 'event', color: 'bg-[#EC4899]' },
            { name: 'Tech & EV', slug: 'tech', color: 'bg-[#10B981]' },
            { name: 'News', slug: 'news', color: 'bg-[#8B5CF6]' },
            { name: 'Lifestyle', slug: 'lifestyle', color: 'bg-[#F59E0B]' },
          ].map((cat) => (
            <a
              key={cat.slug}
              href={`/${cat.slug}`}
              className={`${cat.color} text-white rounded-lg p-4 hover:opacity-90 transition-opacity text-center`}
            >
              <h3 className="font-semibold text-sm">{cat.name}</h3>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
