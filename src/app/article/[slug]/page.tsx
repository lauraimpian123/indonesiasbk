import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getArticleBySlug, getRelatedArticles } from '@/data/articles'

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  // Get article from database
  const article = getArticleBySlug(slug)
  
  if (!article) {
    return notFound()
  }
  
  // Get related articles
  const relatedArticles = getRelatedArticles(slug, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative aspect-[21/9] w-full">
        <Image
          src={article.image}
          alt={article.title}
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
                <span className="badge-primary">{article.category}</span>
                <span className="text-subtle text-sm">{article.date}</span>
                <span className="text-muted text-sm">•</span>
                <span className="text-subtle text-sm">{article.readTime} read</span>
                <span className="text-muted text-sm">•</span>
                <span className="text-subtle text-sm flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {article.views}
                </span>
              </div>

              {/* Title - High Contrast */}
              <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                {article.title}
              </h1>

              {/* Author */}
              <div className="flex items-center space-x-3 mb-8 pb-8 border-b border-tertiary">
                <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white font-bold text-lg">
                  R
                </div>
                <div>
                  <div className="font-bold text-white">{article.author}</div>
                  <div className="text-sm text-white/70">Motorsport Journalist</div>
                </div>
              </div>

              {/* Content */}
              <div 
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
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
                      <h4 className="text-sm font-bold text-white group-hover:text-brand transition-colors line-clamp-2">
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
                    <h4 className="text-sm font-bold text-white group-hover:text-brand transition-colors line-clamp-2 mt-2">
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
