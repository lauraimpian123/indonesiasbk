import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Review Motor Sport 2024-2025 | Tes & Ulasan Lengkap | IndonesiaSBK',
  description: 'Review mendalam motor sport terbaru. Performa, handling, fitur elektronik, dan pengalaman riding langsung dari jalanan Indonesia.',
  keywords: 'review motor sport, tes motor, ulasan motor racing, review superbike indonesia',
};

interface BikeReview {
  id: string;
  brand: string;
  model: string;
  year: number;
  rating: number;
  image: string;
  category: string;
  reviewDate: string;
  excerpt: string;
  pros: string[];
  cons: string[];
}

const reviews: BikeReview[] = [
  {
    id: '1',
    brand: 'Ducati',
    model: 'Panigale V4 R',
    year: 2025,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    category: 'Superbike',
    reviewDate: '2026-02-20',
    excerpt: 'Track-focused Italian masterpiece dengan V4 engine bertenaga 221 HP dan aerodinamika WorldSBK.',
    pros: ['Power delivery luar biasa', 'Elektronik lengkap', 'Handling presisi tinggi'],
    cons: ['Harga premium', 'Ergonomi agresif', 'Service cost tinggi'],
  },
  {
    id: '2',
    brand: 'BMW',
    model: 'M1000RR',
    year: 2024,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&h=600&fit=crop',
    category: 'Superbike',
    reviewDate: '2026-02-15',
    excerpt: 'Superbike Jerman dengan winglets karbon, M Competition Package, dan teknologi MotoGP.',
    pros: ['Build quality premium', 'Teknologi canggih', 'Track performance maksimal'],
    cons: ['Kompleks untuk pemula', 'Harga tinggi', 'Maintenance khusus'],
  },
  {
    id: '3',
    brand: 'Yamaha',
    model: 'YZF-R1M',
    year: 2024,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop',
    category: 'Superbike',
    reviewDate: '2026-02-10',
    excerpt: 'Crossplane crankshaft engine dengan Öhlins electronic suspension dan carbon fairing.',
    pros: ['Sound engine khas', 'Suspensi elektronik', 'Desain agresif'],
    cons: ['Power sedikit di bawah kompetitor', 'Harga premium'],
  },
  {
    id: '4',
    brand: 'Kawasaki',
    model: 'Ninja ZX-10RR',
    year: 2024,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop',
    category: 'Superbike',
    reviewDate: '2026-02-05',
    excerpt: 'WorldSBK homologation special dengan KRT chassis dan Showa suspension.',
    pros: ['Harga kompetitif', 'Proven WorldSBK tech', 'Reliability tinggi'],
    cons: ['Kurang fitur elektronik modern', 'Desain konservatif'],
  },
  {
    id: '5',
    brand: 'Honda',
    model: 'CBR1000RR-R Fireblade SP',
    year: 2024,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1591768575000-c7198cfc5cd4?w=800&h=600&fit=crop',
    category: 'Superbike',
    reviewDate: '2026-01-28',
    excerpt: 'HRC racing DNA dengan inline-4 berpower 217 HP dan aerodinamika MotoGP-inspired.',
    pros: ['Power traction optimal', 'MotoGP technology', 'Akurasi handling'],
    cons: ['Harga premium', 'Riding position ekstrem'],
  },
  {
    id: '6',
    brand: 'Kawasaki',
    model: 'Ninja ZX-6R',
    year: 2024,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop',
    category: 'Supersport',
    reviewDate: '2026-01-20',
    excerpt: 'Supersport 600cc klasik dengan inline-4 screaming engine dan handling tajam.',
    pros: ['Engine karakter tinggi', 'Handling nimble', 'Harga terjangkau'],
    cons: ['Power kalah dari 1000cc', 'Fitur elektronik terbatas'],
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-lg ${
            star <= rating ? 'text-[#ffc400]' : 'text-gray-600'
          }`}
        >
          ★
        </span>
      ))}
      <span className="text-sm text-gray-400 ml-2">{rating}/5</span>
    </div>
  );
}

function ReviewCard({ review }: { review: BikeReview }) {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-[#ff1744]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,23,68,0.3)]">
      <div className="relative h-56">
        <Image
          src={review.image}
          alt={`${review.brand} ${review.model}`}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-[#ff1744] text-white text-xs font-bold px-3 py-1 rounded-full">
            {review.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bebas text-white mb-1">
          {review.brand} {review.model}
        </h3>
        <p className="text-sm text-gray-400 mb-3">Model {review.year}</p>

        <StarRating rating={review.rating} />

        <p className="text-gray-300 text-sm mt-4 mb-4 line-clamp-2">
          {review.excerpt}
        </p>

        <div className="space-y-3 mb-4">
          <div>
            <h4 className="text-xs font-bold text-green-400 mb-1">✓ PROS</h4>
            <ul className="text-xs text-gray-400 space-y-1">
              {review.pros.slice(0, 2).map((pro, i) => (
                <li key={i}>• {pro}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-red-400 mb-1">✗ CONS</h4>
            <ul className="text-xs text-gray-400 space-y-1">
              {review.cons.slice(0, 2).map((con, i) => (
                <li key={i}>• {con}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <span className="text-xs text-gray-500">{review.reviewDate}</span>
          <Link
            href={`/review/bike/${review.id}`}
            className="text-[#00e5ff] hover:text-white text-sm font-bold transition-colors"
          >
            Baca Review →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BikeReviewPage() {
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
            <span className="text-white">Review Motor</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">📝</span>
            <h1 className="text-5xl font-bebas text-[#ff1744] uppercase tracking-tight">
              Review Motor Sport
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mb-6">
            Ulasan mendalam tentang motor sport terbaru. Tes langsung di jalanan dan sirkuit Indonesia 
            dengan fokus pada performa, handling, fitur, dan value for money.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/review/gear"
              className="px-4 py-2 bg-white/10 hover:bg-[#ff1744] text-white rounded-lg transition-colors text-sm"
            >
              Review Gear
            </Link>
            <Link
              href="/review/helmet"
              className="px-4 py-2 bg-white/10 hover:bg-[#ff1744] text-white rounded-lg transition-colors text-sm"
            >
              Review Helmet
            </Link>
            <Link
              href="/review/comparison"
              className="px-4 py-2 bg-white/10 hover:bg-[#00e5ff] text-white rounded-lg transition-colors text-sm"
            >
              Bike Comparison
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bebas text-white mb-4">
            Mau Review Motor Tertentu?
          </h2>
          <p className="text-gray-400 mb-6">
            Kontak kami untuk request review motor spesifik yang ingin kamu lihat.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#ff1744] hover:bg-[#ff1744]/80 text-white font-bold rounded-lg transition-colors"
          >
            Request Review
          </Link>
        </div>
      </section>
    </main>
  );
}
