import Image from 'next/image'

// Mock articles by category
const articlesByCategory = {
  motorsport: [
    {
      id: '1',
      slug: 'wsbk-phillip-island-race-1',
      title: 'WSBK Phillip Island: Toprak Dominan di Race 1',
      excerpt: 'Toprak Razgatlioglu memulai musim 2026 dengan sempurna, meraih kemenangan di race pertama Phillip Island.',
      category: 'wsbk',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=450&fit=crop',
      date: '2 jam lalu',
      views: '12.5K',
    },
    {
      id: '2',
      slug: 'motogp-losail-qualifying',
      title: 'MotoGP Losail: Marc Marquez Pole Position',
      excerpt: 'Marc Marquez mengunci posisi terdepan qualifying MotoGP Qatar dengan catatan waktu baru.',
      category: 'motogp',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop',
      date: '4 jam lalu',
      views: '18.3K',
    },
    {
      id: '3',
      slug: 'f1-bahrain-practice',
      title: 'F1 Bahrain: Red Bull Masih Mendominasi FP1',
      excerpt: 'Max Verstappen tercepat di sesi free practice pertama Grand Prix Bahrain.',
      category: 'f1',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=450&fit=crop',
      date: '6 jam lalu',
      views: '9.8K',
    },
    {
      id: '4',
      slug: 'arrc-johor-preview',
      title: 'ARRC Johor: Peluang Pembalap Indonesia',
      excerpt: 'Preview lengkap ARRC putaran Johor dan analisis peluang pembalap Indonesia.',
      category: 'arrc',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=450&fit=crop',
      date: '1 hari lalu',
      views: '6.2K',
    },
  ],
  review: [
    {
      id: '5',
      slug: 'ducati-panigale-v4-2026-review',
      title: 'Review: Ducati Panigale V4 2026',
      excerpt: '215 HP, 2kg lebih ringan, dan teknologi baru. Kami test di Sentul Circuit.',
      category: 'bike-review',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=450&fit=crop',
      date: '1 hari lalu',
      views: '32.1K',
    },
    {
      id: '6',
      slug: 'yamaha-r1-vs-kawasaki-zx10r',
      title: 'Komparasi: Yamaha R1 vs Kawasaki ZX-10R 2026',
      excerpt: 'Head-to-head dua superbike Jepang terbaik. Mana yang lebih worth it?',
      category: 'comparison',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop',
      date: '2 hari lalu',
      views: '28.5K',
    },
    {
      id: '7',
      slug: 'shoei-x15-helmet-review',
      title: 'Review Helm: Shoei X-Fifteen',
      excerpt: 'Helm racing flagship dari Shoei. Apakah worth harganya yang premium?',
      category: 'helmet-review',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop',
      date: '3 hari lalu',
      views: '15.7K',
    },
  ],
  racing: [
    {
      id: '8',
      slug: 'marc-marquez-ducati-kontrak',
      title: 'Marc Marquez Perpanjang Kontrak dengan Ducati',
      excerpt: 'Marc Marquez resmi perpanjang kontrak 2 tahun dengan Ducati Lenovo Team.',
      category: 'team-news',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=450&fit=crop',
      date: '5 jam lalu',
      views: '21.4K',
    },
    {
      id: '9',
      slug: 'yamaha-racing-school-sentul',
      title: 'Yamaha Racing School Buka Kelas Baru di Sentul',
      excerpt: 'Program racing school untuk pemula hingga advanced. Pendaftaran dibuka Maret 2026.',
      category: 'racing-school',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop',
      date: '1 hari lalu',
      views: '8.9K',
    },
  ],
}

function CategoryBadge({ category }: { category: string }) {
  const colors: Record<string, string> = {
    wsbk: 'bg-brand text-white',
    motogp: 'bg-brand text-white',
    f1: 'bg-brand text-white',
    arrc: 'bg-brand text-white',
    'bike-review': 'bg-brand text-white',
    'helmet-review': 'bg-brand text-white',
    comparison: 'bg-brand text-white',
    'team-news': 'bg-brand text-white',
    'racing-school': 'bg-brand text-white',
  }
  return (
    <span className={`inline-block px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider ${colors[category] || 'bg-brand text-white'}`}>
      {category.replace('-', ' ')}
    </span>
  )
}

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Motorsport Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-black uppercase tracking-tight">
            <span className="text-brand">MOTOR</span>
            <span className="text-white">SPORT</span>
          </h2>
          <a href="/motorsport" className="text-brand hover:text-white font-bold transition-colors uppercase text-sm tracking-wider">
            Lihat Semua →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {articlesByCategory.motorsport.map((article) => (
            <article key={article.id} className="card group cursor-pointer">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 left-2">
                  <CategoryBadge category={article.category} />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-brand transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-muted text-sm mb-3 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center space-x-3 text-subtle text-xs">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.views} views</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Review Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-black uppercase tracking-tight text-white">
            REVIEW
          </h2>
          <a href="/review" className="text-brand hover:text-white font-bold transition-colors uppercase text-sm tracking-wider">
            Lihat Semua →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articlesByCategory.review.map((article) => (
            <article key={article.id} className="card group cursor-pointer">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 left-2">
                  <CategoryBadge category={article.category} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-brand transition-colors">
                {article.title}
              </h3>
              <p className="text-muted mb-3 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center space-x-3 text-subtle text-sm">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.views} views</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Racing Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-black uppercase tracking-tight text-brand">
            RACING
          </h2>
          <a href="/racing" className="text-brand hover:text-white font-bold transition-colors uppercase text-sm tracking-wider">
            Lihat Semua →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articlesByCategory.racing.map((article) => (
            <article key={article.id} className="card group cursor-pointer flex">
              <div className="relative w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex-1 ml-4">
                <CategoryBadge category={article.category} />
                <h3 className="text-lg font-bold mt-2 mb-2 group-hover:text-brand transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted text-sm mb-2 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center space-x-3 text-subtle text-xs">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.views} views</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* All Categories Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8 border-l-4 border-brand pl-3">
          Jelajahi Kategori
        </h2>

        {/* Motorsport Racing */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3 text-muted uppercase tracking-wider text-sm">Motorsport</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {[
              { name: 'WSBK', slug: 'wsbk' },
              { name: 'MotoGP', slug: 'motogp' },
              { name: 'Moto2', slug: 'moto2' },
              { name: 'Moto3', slug: 'moto3' },
              { name: 'MiniGP', slug: 'minigp' },
              { name: 'F1', slug: 'f1' },
              { name: 'BSB', slug: 'bsb' },
              { name: 'ARRC', slug: 'arrc' },
              { name: 'IDC', slug: 'idc' },
              { name: 'MotoE', slug: 'motoe' },
            ].map((cat) => (
              <a
                key={cat.slug}
                href={`/${cat.slug}`}
                className="bg-secondary border border-default hover:border-brand text-primary hover:text-brand transition-all p-3 rounded text-center font-medium text-sm"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bike Classes */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3 text-muted uppercase tracking-wider text-sm">Bike Class</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {[
              { name: 'Superbike', slug: 'superbike' },
              { name: 'Supersport', slug: 'supersport' },
              { name: 'Supermatic', slug: 'supermatic' },
              { name: 'Naked Bike', slug: 'naked' },
              { name: 'Adventure', slug: 'adventure' },
              { name: 'Cruiser', slug: 'cruiser' },
            ].map((cat) => (
              <a
                key={cat.slug}
                href={`/${cat.slug}`}
                className="bg-secondary border border-default hover:border-brand text-primary hover:text-brand transition-all p-3 rounded text-center font-medium text-sm"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>

        {/* Review */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3 text-muted uppercase tracking-wider text-sm">Review</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {[
              { name: 'Bike Review', slug: 'bike-review' },
              { name: 'Gear Review', slug: 'gear-review' },
              { name: 'Helmet Review', slug: 'helmet-review' },
              { name: 'Accessory', slug: 'accessory-review' },
              { name: 'Comparison', slug: 'comparison' },
            ].map((cat) => (
              <a
                key={cat.slug}
                href={`/${cat.slug}`}
                className="bg-secondary border border-default hover:border-brand text-primary hover:text-brand transition-all p-3 rounded text-center font-medium text-sm"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>

        {/* Racing */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3 text-muted uppercase tracking-wider text-sm">Racing</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
            {[
              { name: 'Teams', slug: 'official-teams' },
              { name: 'School', slug: 'racing-school' },
              { name: 'Riders', slug: 'active-riders' },
            ].map((cat) => (
              <a
                key={cat.slug}
                href={`/${cat.slug}`}
                className="bg-secondary border border-default hover:border-brand text-primary hover:text-brand transition-all p-3 rounded text-center font-medium text-sm"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>

        {/* Result & Standing */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3 text-muted uppercase tracking-wider text-sm">Result & Standing</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {[
              { name: 'WSBK', slug: 'wsbk-results' },
              { name: 'MotoGP', slug: 'motogp-results' },
              { name: 'Moto2', slug: 'moto2-results' },
              { name: 'Moto3', slug: 'moto3-results' },
              { name: 'MiniGP', slug: 'minigp-results' },
              { name: 'F1', slug: 'f1-results' },
              { name: 'BSB', slug: 'bsb-results' },
              { name: 'ARRC', slug: 'arrc-results' },
              { name: 'IDC', slug: 'idc-results' },
              { name: 'MotoE', slug: 'motoe-results' },
            ].map((cat) => (
              <a
                key={cat.slug}
                href={`/${cat.slug}`}
                className="bg-secondary border border-default hover:border-brand text-primary hover:text-brand transition-all p-3 rounded text-center font-medium text-sm"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>

        {/* Content & Community */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3 text-muted uppercase tracking-wider text-sm">Content & Community</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
            {[
              { name: 'News', slug: 'news' },
              { name: 'Workshop', slug: 'workshop' },
              { name: 'Touring', slug: 'touring' },
            ].map((cat) => (
              <a
                key={cat.slug}
                href={`/${cat.slug}`}
                className="bg-secondary border border-default hover:border-brand text-primary hover:text-brand transition-all p-3 rounded text-center font-medium text-sm"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
