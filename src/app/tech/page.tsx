import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Technical Articles & Guides 2024-2025 | IndonesiaSBK',
  description: 'Artikel teknis motor sport. How-to guides, maintenance tips, suspension setup, tire pressure, brake bleeding, oil selection untuk rider Indonesia.',
  keywords: 'technical guide motor, maintenance tips, suspension setup, how to motorcycle',
};

interface TechArticle {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  readTime: string;
  excerpt: string;
  icon: string;
  tags: string[];
}

const articles: TechArticle[] = [
  {
    id: '1',
    title: 'Panduan Lengkap Tire Pressure untuk Track Day',
    category: 'Track Setup',
    difficulty: 'Intermediate',
    readTime: '8 min',
    excerpt: 'Cold pressure, hot pressure, heat cycling, dan cara membaca wear pattern untuk optimal grip dan life.',
    icon: '🏍️',
    tags: ['Track Day', 'Tires', 'Setup'],
  },
  {
    id: '2',
    title: 'Suspension Setup: SAG, Rebound, Compression Explained',
    category: 'Suspension',
    difficulty: 'Advanced',
    readTime: '12 min',
    excerpt: 'Step-by-step guide setting up suspension dari basic sag measurement hingga fine-tuning clickers.',
    icon: '⚙️',
    tags: ['Suspension', 'Setup', 'Handling'],
  },
  {
    id: '3',
    title: 'Brake Bleeding: DOT 4 vs DOT 5.1 Fluid',
    category: 'Brake System',
    difficulty: 'Intermediate',
    readTime: '6 min',
    excerpt: 'Cara bleeding brake system yang benar dan pemilihan brake fluid sesuai penggunaan.',
    icon: '🛑',
    tags: ['Brakes', 'Maintenance', 'DIY'],
  },
  {
    id: '4',
    title: 'Chain Maintenance: Cleaning, Lubing, Tension',
    category: 'Maintenance',
    difficulty: 'Beginner',
    readTime: '5 min',
    excerpt: 'Basic chain maintenance untuk durability dan smooth power transfer. Produk recommended dan interval.',
    icon: '🔗',
    tags: ['Chain', 'Maintenance', 'Beginner'],
  },
  {
    id: '5',
    title: 'Engine Oil Selection Guide for Sport Bikes',
    category: 'Engine',
    difficulty: 'Intermediate',
    readTime: '10 min',
    excerpt: 'Viscosity, API rating, synthetic vs semi-synthetic, dan oil untuk iklim tropis Indonesia.',
    icon: '🛢️',
    tags: ['Engine', 'Oil', 'Maintenance'],
  },
  {
    id: '6',
    title: 'Quick Shifter Installation & Setup',
    category: 'Electronics',
    difficulty: 'Advanced',
    readTime: '15 min',
    excerpt: 'Install dan setup quick shifter aftermarket dengan kill time adjustment untuk smooth shifting.',
    icon: '⚡',
    tags: ['Electronics', 'Quick Shifter', 'Installation'],
  },
  {
    id: '7',
    title: 'Brake Pad Selection: Street vs Track Compounds',
    category: 'Brake System',
    difficulty: 'Intermediate',
    readTime: '7 min',
    excerpt: 'Perbedaan compound brake pad untuk street riding, spirited riding, dan track day dengan operating temperature.',
    icon: '🔥',
    tags: ['Brakes', 'Track Day', 'Street'],
  },
  {
    id: '8',
    title: 'Coolant System Maintenance & Overheating Prevention',
    category: 'Engine',
    difficulty: 'Beginner',
    readTime: '6 min',
    excerpt: 'Perawatan coolant system, bleeding air pocket, dan mengatasi overheating di traffic Jakarta.',
    icon: '🌡️',
    tags: ['Coolant', 'Engine', 'Maintenance'],
  },
  {
    id: '9',
    title: 'ECU Flash vs Piggyback: Pros & Cons',
    category: 'Electronics',
    difficulty: 'Advanced',
    readTime: '12 min',
    excerpt: 'Perbandingan ECU flash, piggyback, dan full standalone ECU untuk power tuning dengan budget berbeda.',
    icon: '💻',
    tags: ['ECU', 'Tuning', 'Performance'],
  },
  {
    id: '10',
    title: 'Track Day Tire Warmers: Do You Need Them?',
    category: 'Track Setup',
    difficulty: 'Intermediate',
    readTime: '8 min',
    excerpt: 'Manfaat tire warmers, alternatif untuk budget riders, dan proper warm-up procedure tanpa warmers.',
    icon: '🔥',
    tags: ['Track Day', 'Tires', 'Safety'],
  },
  {
    id: '11',
    title: 'Throttle Body Cleaning & Idle Speed Adjustment',
    category: 'Engine',
    difficulty: 'Intermediate',
    readTime: '9 min',
    excerpt: 'Cleaning throttle body untuk smooth throttle response dan idle stability dengan tools sederhana.',
    icon: '🧼',
    tags: ['Throttle', 'Maintenance', 'DIY'],
  },
  {
    id: '12',
    title: 'Aftermarket Exhaust: Sound, Power, dan Legal Issues',
    category: 'Exhaust',
    difficulty: 'Intermediate',
    readTime: '10 min',
    excerpt: 'Dampak exhaust system ke power, sound level, dan aspek legal penggunaan di jalanan Indonesia.',
    icon: '🔊',
    tags: ['Exhaust', 'Performance', 'Legal'],
  },
];

function ArticleCard({ article }: { article: TechArticle }) {
  const difficultyColor =
    article.difficulty === 'Beginner'
      ? 'text-green-400 bg-green-500/20'
      : article.difficulty === 'Intermediate'
      ? 'text-yellow-400 bg-yellow-500/20'
      : 'text-red-400 bg-red-500/20';

  return (
    <Link
      href={`/tech/${article.id}`}
      className="block bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-[#ffc400]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,196,0,0.3)]"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="text-4xl">{article.icon}</div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#ffc400]/20 text-[#ffc400] text-xs font-bold px-2 py-1 rounded">
              {article.category}
            </span>
            <span className={`text-xs font-bold px-2 py-1 rounded ${difficultyColor}`}>
              {article.difficulty}
            </span>
          </div>
          <h3 className="text-lg font-bebas text-white mb-2">{article.title}</h3>
        </div>
      </div>

      <p className="text-sm text-gray-300 mb-4">{article.excerpt}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {article.tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-white/10 text-gray-400 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <span className="text-xs text-gray-500">📖 {article.readTime} read</span>
        <span className="text-[#ffc400] text-sm font-bold hover:text-white transition-colors">
          Read Article →
        </span>
      </div>
    </Link>
  );
}

export default function TechPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Breadcrumb */}
      <div className="border-b border-white/10 bg-black/40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-[#ff1744] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Technical Articles</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 border-b border-white/10 bg-gradient-to-b from-[#ffc400]/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-7xl">📚</span>
            <div>
              <h1 className="text-6xl font-bebas text-[#ffc400] uppercase tracking-tight mb-2">
                Technical Articles & Guides
              </h1>
              <p className="text-xl text-gray-400">
                Learn, Maintain, and Optimize Your Sport Bike
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mb-8">
            Koleksi artikel teknis dan how-to guides untuk rider Indonesia. Dari basic maintenance 
            hingga advanced setup untuk track day dengan bahasa yang mudah dipahami.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b border-white/10 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-[#ffc400] text-black font-bold rounded-lg">
              All Articles
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              Maintenance
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              Track Setup
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              Performance
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              Electronics
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              DIY
            </button>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-12 border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-8">
            Popular Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-lg font-bold text-white mb-2">Basic Maintenance</h3>
              <p className="text-sm text-gray-400 mb-3">
                Oil change, chain care, tire pressure, coolant check.
              </p>
              <span className="text-xs text-[#ffc400]">12 Articles</span>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <div className="text-4xl mb-3">🏁</div>
              <h3 className="text-lg font-bold text-white mb-2">Track Day Prep</h3>
              <p className="text-sm text-gray-400 mb-3">
                Suspension setup, tire warmers, brake bleeding, safety.
              </p>
              <span className="text-xs text-[#ffc400]">8 Articles</span>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-white mb-2">Performance Tuning</h3>
              <p className="text-sm text-gray-400 mb-3">
                ECU flash, exhaust, air filter, dyno tuning.
              </p>
              <span className="text-xs text-[#ffc400]">10 Articles</span>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-lg font-bold text-white mb-2">Safety Upgrades</h3>
              <p className="text-sm text-gray-400 mb-3">
                Brake upgrade, lighting, crash protection.
              </p>
              <span className="text-xs text-[#ffc400]">6 Articles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Levels */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-6">
            Article Difficulty Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-black/40 backdrop-blur-md border border-green-500/30 rounded-lg">
              <h3 className="text-xl font-bold text-green-400 mb-2">Beginner</h3>
              <p className="text-sm text-gray-400">
                Basic maintenance tasks yang bisa dilakukan sendiri dengan tools standard. 
                No special knowledge required.
              </p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-yellow-500/30 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Intermediate</h3>
              <p className="text-sm text-gray-400">
                Requires some mechanical knowledge dan specialized tools. Recommended untuk 
                yang sudah familiar dengan basic maintenance.
              </p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-red-500/30 rounded-lg">
              <h3 className="text-xl font-bold text-red-400 mb-2">Advanced</h3>
              <p className="text-sm text-gray-400">
                Complex procedures yang memerlukan experience, specialized tools, dan 
                technical understanding. Mungkin perlu workshop help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bebas text-white mb-4">
            Ada Topik yang Ingin Dibahas?
          </h2>
          <p className="text-gray-400 mb-6">
            Request technical article atau how-to guide yang ingin kamu baca.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#ffc400] hover:bg-[#ffc400]/80 text-black font-bold rounded-lg transition-colors"
          >
            Request Article
          </Link>
        </div>
      </section>
    </main>
  );
}
