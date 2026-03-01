import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getArticlesByCategory } from '@/data/articles'
import { getCategoryBySlug } from '@/data/categories'

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const categoryData = getCategoryBySlug(category)
  
  if (!categoryData) {
    return notFound()
  }

  // Get articles for this category (case-insensitive matching)
  const articles = getArticlesByCategory(categoryData.name)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-3 uppercase tracking-tight">
          {categoryData.name}
        </h1>
        <p className="text-white/70 text-lg">{categoryData.description}</p>
      </div>

      {/* Articles Grid */}
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link key={article.id} href={`/article/${article.slug}`} className="group">
              <article className="bg-secondary border border-default rounded-lg overflow-hidden hover:border-brand transition-colors">
                {/* Image */}
                <div className="relative aspect-video">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-5">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="bg-brand text-white px-3 py-1 rounded-sm text-xs font-bold uppercase">
                      {article.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-xl font-bold text-white group-hover:text-brand transition-colors mb-3 line-clamp-2 leading-tight">
                    {article.title}
                  </h2>
                  
                  {/* Excerpt */}
                  <p className="text-white/70 text-sm line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>
                  
                  {/* Meta */}
                  <div className="flex items-center gap-3 text-white/60 text-xs">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.views} views</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-white/40 text-6xl mb-4">📰</div>
          <h2 className="text-2xl font-bold text-white mb-2">Belum Ada Artikel</h2>
          <p className="text-white/60">Artikel untuk kategori ini akan segera hadir</p>
          <Link href="/" className="inline-block mt-6 bg-brand text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-secondary transition-colors">
            Kembali ke Beranda
          </Link>
        </div>
      )}
    </div>
  )
}

// Generate static paths for known categories
export async function generateStaticParams() {
  const knownCategories = [
    'wsbk',
    'motogp',
    'f1',
    'superbike',
    'supersport',
    'bike-review',
    'gear-review',
    'helmet-review',
    'tech',
    'lifestyle',
  ]

  return knownCategories.map((category) => ({
    category,
  }))
}
