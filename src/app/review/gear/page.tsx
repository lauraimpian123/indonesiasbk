import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Review Riding Gear 2024-2025 | Jaket, Sarung Tangan, Sepatu | IndonesiaSBK',
  description: 'Review lengkap riding gear untuk motor sport. Jaket, gloves, boots, proteksi dengan rating keamanan dan kenyamanan.',
  keywords: 'review riding gear, jaket touring, gloves review, sepatu motor',
};

interface GearReview {
  id: string;
  brand: string;
  name: string;
  category: string;
  rating: number;
  price: string;
  image: string;
  safetyRating: string;
  excerpt: string;
  pros: string[];
  cons: string[];
}

const gearReviews: GearReview[] = [
  {
    id: '1',
    brand: 'Alpinestars',
    name: 'GP Pro V3 Leather Suit',
    category: 'Racing Suit',
    rating: 5,
    price: 'Rp 15 Juta',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    safetyRating: 'CE Level 2',
    excerpt: 'One-piece racing suit dengan Tech-Air 5 airbag system dan kangaroo leather.',
    pros: ['Proteksi maksimal', 'Airbag terintegrasi', 'Material premium'],
    cons: ['Harga sangat tinggi', 'Tidak untuk daily riding'],
  },
  {
    id: '2',
    brand: 'Dainese',
    name: 'Super Speed 3 Leather Jacket',
    category: 'Jacket',
    rating: 5,
    price: 'Rp 8.5 Juta',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=600&fit=crop',
    safetyRating: 'CE Level 2',
    excerpt: 'Premium leather jacket dengan D-air compatible dan titanium shoulder plates.',
    pros: ['Fit sangat baik', 'Ventilasi optimal', 'D-air ready'],
    cons: ['Harga premium', 'Berat untuk touring jauh'],
  },
  {
    id: '3',
    brand: 'Rev\'it',
    name: 'Sand 4 H2O Touring Jacket',
    category: 'Touring Jacket',
    rating: 4.5,
    price: 'Rp 6.5 Juta',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    safetyRating: 'CE Level 1',
    excerpt: 'All-weather touring jacket dengan Hydratex waterproof dan Knox armor.',
    pros: ['Waterproof terbukti', 'Ventilasi baik', 'Kantong banyak'],
    cons: ['Kurang sporty', 'Thermal liner berat'],
  },
  {
    id: '4',
    brand: 'Alpinestars',
    name: 'SP-2 V3 Gloves',
    category: 'Gloves',
    rating: 5,
    price: 'Rp 2.5 Juta',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=600&fit=crop',
    safetyRating: 'CE Level 2',
    excerpt: 'Racing gloves dengan kangaroo leather, carbon knuckle, dan dual wrist closure.',
    pros: ['Proteksi knuckle maksimal', 'Feel presisi', 'Durable'],
    cons: ['Harga tinggi', 'Tidak cocok touring'],
  },
  {
    id: '5',
    brand: 'TCX',
    name: 'RT-Race Pro Air Boots',
    category: 'Boots',
    rating: 4.5,
    price: 'Rp 5 Juta',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=600&fit=crop',
    safetyRating: 'CE Certified',
    excerpt: 'Racing boots dengan microfiber, shin plate reinforcement, dan dual closure.',
    pros: ['Proteksi maksimal', 'Ventilasi baik', 'Shifter pad presisi'],
    cons: ['Sizing kecil', 'Break-in period panjang'],
  },
  {
    id: '6',
    brand: 'Knox',
    name: 'Handroid MkIV Gloves',
    category: 'Gloves',
    rating: 4,
    price: 'Rp 3 Juta',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=600&fit=crop',
    safetyRating: 'CE Level 2',
    excerpt: 'Exoskeleton gloves dengan Knox Scaphoid Protection System (SPS).',
    pros: ['Proteksi scaphoid terbaik', 'Desain futuristik', 'Durable'],
    cons: ['Bulky', 'Feel kurang natural'],
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

function GearCard({ gear }: { gear: GearReview }) {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-[#00e5ff]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]">
      <div className="relative h-56">
        <Image
          src={gear.image}
          alt={`${gear.brand} ${gear.name}`}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-[#00e5ff] text-black text-xs font-bold px-3 py-1 rounded-full">
            {gear.category}
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {gear.safetyRating}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bebas text-white mb-1">
          {gear.brand} {gear.name}
        </h3>
        <p className="text-xl font-bold text-[#00e5ff] mb-3">{gear.price}</p>

        <StarRating rating={gear.rating} />

        <p className="text-gray-300 text-sm mt-4 mb-4 line-clamp-2">
          {gear.excerpt}
        </p>

        <div className="space-y-3 mb-4">
          <div>
            <h4 className="text-xs font-bold text-green-400 mb-1">✓ PROS</h4>
            <ul className="text-xs text-gray-400 space-y-1">
              {gear.pros.slice(0, 2).map((pro, i) => (
                <li key={i}>• {pro}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-red-400 mb-1">✗ CONS</h4>
            <ul className="text-xs text-gray-400 space-y-1">
              {gear.cons.slice(0, 2).map((con, i) => (
                <li key={i}>• {con}</li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href={`/review/gear/${gear.id}`}
          className="block w-full text-center py-2 bg-[#00e5ff]/20 hover:bg-[#00e5ff] hover:text-black text-[#00e5ff] font-bold rounded transition-colors"
        >
          Baca Review Lengkap
        </Link>
      </div>
    </div>
  );
}

export default function GearReviewPage() {
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
            <Link href="/review/bike" className="hover:text-[#ff1744] transition-colors">
              Review
            </Link>
            <span>/</span>
            <span className="text-white">Riding Gear</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🧥</span>
            <h1 className="text-5xl font-bebas text-[#00e5ff] uppercase tracking-tight">
              Review Riding Gear
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mb-6">
            Ulasan lengkap riding gear dengan fokus pada proteksi, kenyamanan, dan durabilitas. 
            Semua gear diuji langsung di jalanan dan sirkuit Indonesia.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-green-500">●</span>
              <span>CE Certified Safety</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-green-500">●</span>
              <span>Real World Testing</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-green-500">●</span>
              <span>Indonesian Climate Focus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b border-white/10 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-[#00e5ff] text-black font-bold rounded-lg">
              All Gear
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              Jackets
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              Gloves
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              Boots
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              Suits
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gearReviews.map((gear) => (
              <GearCard key={gear.id} gear={gear} />
            ))}
          </div>
        </div>
      </section>

      {/* Safety Info */}
      <section className="py-12 border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-6">
            Safety Rating Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-xl font-bold text-green-400 mb-2">CE Level 2</h3>
              <p className="text-gray-400 text-sm">
                Proteksi tertinggi untuk racing dan track day. Impact protection maksimal 
                dengan material armor yang telah teruji.
              </p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">CE Level 1</h3>
              <p className="text-gray-400 text-sm">
                Proteksi standar untuk street riding dan touring. Cukup untuk penggunaan 
                harian dengan margin keamanan yang baik.
              </p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-xl font-bold text-[#00e5ff] mb-2">CE Certified</h3>
              <p className="text-gray-400 text-sm">
                Telah memenuhi standar keamanan Eropa. Minimum requirement untuk gear 
                berkualitas yang layak digunakan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
