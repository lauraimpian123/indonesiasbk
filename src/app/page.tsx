import Image from 'next/image'

// Temporary mock data (will be replaced with real API calls)
const heroArticle = {
  id: '1',
  slug: 'ducati-panigale-v4-2026-review',
  title: 'Ducati Panigale V4 2026: Beast dari Bologna yang Makin Ganas',
  excerpt: 'Dengan 215 HP, chassis 2kg lebih ringan, dan aerodinamika baru, Panigale V4 terbaru membuktikan kenapa Ducati tetap raja di jalur balap.',
  category: 'review',
  categoryName: 'Review & Test',
  image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1920&h=1080&fit=crop',
  author: 'Bimo Satria',
  date: '2026-03-01',
  readTime: 8,
}

const latestArticles = [
  {
    id: '2',
    slug: 'wsbk-round-1-recap',
    title: 'WSBK Round 1: Toprak Dominan, Bautista Kejar Poin',
    excerpt: 'Toprak Razgatlioglu membuka musim dengan kemenangan ganda di Phillip Island.',
    category: 'sbk',
    categoryName: 'SBK',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop',
    author: 'Andi Kurniawan',
    date: '2026-03-01',
    readTime: 5,
  },
  {
    id: '3',
    slug: 'honda-cb500x-2026',
    title: 'Honda CB500X 2026: Adventure Bike Ramah Pemula',
    excerpt: 'CB500X terbaru dapat upgrade elektronik dan fitur keselamatan lebih lengkap.',
    category: 'news',
    categoryName: 'Berita',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    author: 'Dita Sari',
    date: '2026-02-28',
    readTime: 4,
  },
  {
    id: '4',
    slug: 'ev-infrastructure-indonesia',
    title: 'Infrastruktur EV Indonesia 2026: Sudah Siap?',
    excerpt: 'Melihat perkembangan charging station dan regulasi kendaraan listrik di Indonesia.',
    category: 'tech',
    categoryName: 'Tech & EV',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop',
    author: 'Rizki Pratama',
    date: '2026-02-28',
    readTime: 6,
  },
]

function getBadgeClass(category: string) {
  const badges: Record<string, string> = {
    sbk: 'badge-sbk',
    review: 'badge-review',
    news: 'badge-news',
    tech: 'badge-tech',
    lifestyle: 'badge-lifestyle',
  }
  return `badge ${badges[category] || 'badge-news'}`
}

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative rounded-card overflow-hidden group">
          <div className="aspect-[21/9] relative">
            <Image
              src={heroArticle.image}
              alt={heroArticle.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
            <span className={getBadgeClass(heroArticle.category)}>
              {heroArticle.categoryName}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 leading-tight">
              {heroArticle.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl">
              {heroArticle.excerpt}
            </p>
            <div className="flex items-center space-x-4 text-white/80 text-sm">
              <span className="font-medium">{heroArticle.author}</span>
              <span>·</span>
              <span>{new Date(heroArticle.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span>·</span>
              <span>{heroArticle.readTime} menit baca</span>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Artikel Terbaru</h2>
          <a href="/articles" className="text-primary hover:text-primary-dark font-semibold transition-colors">
            Lihat Semua →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <article key={article.id} className="card group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <span className={getBadgeClass(article.category)}>
                {article.categoryName}
              </span>
              
              <h3 className="text-xl font-bold mt-3 mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              
              <p className="text-text-muted mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              
              <div className="flex items-center space-x-3 text-text-subtle text-sm">
                <span>{article.author}</span>
                <span>·</span>
                <span>{article.readTime} min</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Jelajahi Kategori</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { name: 'SBK & Motorsport', slug: 'sbk', gradient: 'from-red-500 to-red-600', icon: '🏍️' },
            { name: 'Review & Test', slug: 'review', gradient: 'from-blue-500 to-blue-600', icon: '⚡' },
            { name: 'Berita Otomotif', slug: 'news', gradient: 'from-purple-500 to-purple-600', icon: '📰' },
            { name: 'Tech & EV', slug: 'tech', gradient: 'from-green-500 to-green-600', icon: '🔋' },
            { name: 'Lifestyle', slug: 'lifestyle', gradient: 'from-amber-500 to-amber-600', icon: '🌟' },
          ].map((cat) => (
            <a
              key={cat.slug}
              href={`/${cat.slug}`}
              className={`bg-gradient-to-br ${cat.gradient} text-white rounded-card p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="font-semibold text-sm">{cat.name}</h3>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
