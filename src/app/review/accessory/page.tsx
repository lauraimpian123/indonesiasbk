import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Review Aksesori Motor Sport 2024-2025 | Kneepad, Back Protector | IndonesiaSBK',
  description: 'Review aksesori motor sport terlengkap. Knee slider, back protector, airbag vest, tail bag, tank pad dengan rating proteksi.',
  keywords: 'aksesori motor, knee slider, back protector, airbag vest, tank bag',
};

interface AccessoryReview {
  id: string;
  brand: string;
  name: string;
  category: string;
  rating: number;
  price: string;
  image: string;
  excerpt: string;
  pros: string[];
  cons: string[];
}

const accessoryReviews: AccessoryReview[] = [
  {
    id: '1',
    brand: 'Dainese',
    name: 'D-air Smart Airbag',
    category: 'Safety',
    rating: 5,
    price: 'Rp 12 Juta',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    excerpt: 'Standalone airbag vest dengan sensor elektronik dan deployment dalam 45ms.',
    pros: ['Proteksi maksimal', 'Bisa dipakai di semua jaket', 'Recharge system'],
    cons: ['Harga sangat tinggi', 'Butuh charging', 'Sedikit bulky'],
  },
  {
    id: '2',
    brand: 'Alpinestars',
    name: 'Nucleon KR-Cell Back Protector',
    category: 'Safety',
    rating: 5,
    price: 'Rp 2.5 Juta',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    excerpt: 'CE Level 2 back protector dengan CellFusion technology dan breathable design.',
    pros: ['Proteksi Level 2', 'Ventilasi baik', 'Fit berbagai body type'],
    cons: ['Harga lumayan', 'Installation agak ribet'],
  },
  {
    id: '3',
    brand: 'Sena',
    name: '50S Bluetooth Headset',
    category: 'Electronics',
    rating: 4.5,
    price: 'Rp 6 Juta',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600&fit=crop',
    excerpt: 'Premium Bluetooth intercom dengan Harman Kardon speakers dan mesh networking.',
    pros: ['Audio quality terbaik', 'Mesh intercom', 'Range jauh'],
    cons: ['Harga mahal', 'Kompleks untuk setup', 'Battery life biasa'],
  },
  {
    id: '4',
    brand: 'Kriega',
    name: 'US-20 Drypack Tailbag',
    category: 'Luggage',
    rating: 5,
    price: 'Rp 3 Juta',
    image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&h=600&fit=crop',
    excerpt: 'Waterproof tailbag dengan Quadloc harness system dan tanpa rack mounting.',
    pros: ['100% waterproof', 'No rack needed', 'Expandable capacity'],
    cons: ['Harga premium', 'Installation learning curve'],
  },
  {
    id: '5',
    brand: 'Stompgrip',
    name: 'Volcano Tank Grips',
    category: 'Ergonomics',
    rating: 4,
    price: 'Rp 800 Ribu',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    excerpt: 'Tank pad dengan aggressive texture untuk knee grip saat cornering.',
    pros: ['Grip luar biasa', 'Easy installation', 'Banyak pilihan warna'],
    cons: ['Bisa lecet pada jaket/jeans', 'Susah dibersihkan'],
  },
  {
    id: '6',
    brand: 'Oxford',
    name: 'Heaterz Heated Grips',
    category: 'Comfort',
    rating: 4,
    price: 'Rp 1.5 Juta',
    image: 'https://images.unsplash.com/photo-1625555960683-f25f6440c051?w=800&h=600&fit=crop',
    excerpt: 'Heated grips dengan 5 temperature settings untuk touring di daerah dingin.',
    pros: ['Cocok untuk touring pegunungan', 'Easy controls', 'Reliable'],
    cons: ['Install butuh kabel tambahan', 'Tidak cocok untuk cuaca panas'],
  },
  {
    id: '7',
    brand: 'SW-Motech',
    name: 'Legend Gear Tail Bag',
    category: 'Luggage',
    rating: 4,
    price: 'Rp 2 Juta',
    image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&h=600&fit=crop',
    excerpt: 'Versatile tail bag dengan rain cover dan strap system untuk sport bike.',
    pros: ['Kapasitas besar', 'Build quality baik', 'Rain cover included'],
    cons: ['Tidak full waterproof', 'Strap kadang kendor'],
  },
  {
    id: '8',
    brand: 'Alpinestars',
    name: 'GP Pro Knee Sliders',
    category: 'Track',
    rating: 5,
    price: 'Rp 600 Ribu',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    excerpt: 'MotoGP spec knee sliders dengan compound material tahan lama.',
    pros: ['MotoGP proven', 'Consistent wear', 'Good feel'],
    cons: ['Cepat habis di track day', 'Harus diganti berkala'],
  },
  {
    id: '9',
    brand: 'RAM Mounts',
    name: 'X-Grip Phone Holder',
    category: 'Electronics',
    rating: 4,
    price: 'Rp 900 Ribu',
    image: 'https://images.unsplash.com/photo-1512941675424-1c17dabfdddc?w=800&h=600&fit=crop',
    excerpt: 'Universal phone mount dengan ball joint system untuk vibrasi minimal.',
    pros: ['Grip kuat', 'Universal fit', 'Anti-vibration'],
    cons: ['Price sedikit tinggi untuk mount', 'Ball joint kadang kendor'],
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

function AccessoryCard({ accessory }: { accessory: AccessoryReview }) {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-[#ff1744]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,23,68,0.3)]">
      <div className="relative h-48">
        <Image
          src={accessory.image}
          alt={`${accessory.brand} ${accessory.name}`}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-[#ff1744] text-white text-xs font-bold px-3 py-1 rounded-full">
            {accessory.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bebas text-white mb-1">
          {accessory.brand} {accessory.name}
        </h3>
        <p className="text-lg font-bold text-[#ff1744] mb-3">{accessory.price}</p>

        <StarRating rating={accessory.rating} />

        <p className="text-gray-300 text-sm mt-4 mb-4 line-clamp-2">
          {accessory.excerpt}
        </p>

        <div className="space-y-3 mb-4">
          <div>
            <h4 className="text-xs font-bold text-green-400 mb-1">✓ PROS</h4>
            <ul className="text-xs text-gray-400 space-y-1">
              {accessory.pros.slice(0, 2).map((pro, i) => (
                <li key={i}>• {pro}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-red-400 mb-1">✗ CONS</h4>
            <ul className="text-xs text-gray-400 space-y-1">
              {accessory.cons.slice(0, 2).map((con, i) => (
                <li key={i}>• {con}</li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href={`/review/accessory/${accessory.id}`}
          className="block w-full text-center py-2 bg-[#ff1744]/20 hover:bg-[#ff1744] hover:text-white text-[#ff1744] font-bold rounded transition-colors"
        >
          Read Full Review
        </Link>
      </div>
    </div>
  );
}

export default function AccessoryReviewPage() {
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
            <span className="text-white">Aksesori</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🎒</span>
            <h1 className="text-5xl font-bebas text-[#ff1744] uppercase tracking-tight">
              Review Aksesori Motor
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mb-6">
            Ulasan aksesori motor sport dari safety gear, luggage, electronics, hingga ergonomic 
            upgrades untuk meningkatkan riding experience dan keamanan.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b border-white/10 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-[#ff1744] text-white font-bold rounded-lg">
              All Accessories
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              Safety
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              Luggage
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              Electronics
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              Track
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              Comfort
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessoryReviews.map((accessory) => (
              <AccessoryCard key={accessory.id} accessory={accessory} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Info */}
      <section className="py-12 border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-6">
            Kategori Aksesori
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-xl font-bold text-[#ff1744] mb-3">Safety First</h3>
              <p className="text-gray-400 text-sm">
                Airbag vest, back protector, knee sliders — proteksi tambahan yang bisa 
                menyelamatkan nyawa di track atau di jalan.
              </p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-xl font-bold text-[#00e5ff] mb-3">Tech & Comfort</h3>
              <p className="text-gray-400 text-sm">
                Bluetooth intercom, heated grips, phone mounts — aksesori elektronik 
                untuk meningkatkan kenyamanan touring jarak jauh.
              </p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-xl font-bold text-[#ffc400] mb-3">Luggage Solutions</h3>
              <p className="text-gray-400 text-sm">
                Tail bag, tank bag, saddle bag — solusi penyimpanan untuk sport bike 
                tanpa mengorbankan aerodinamika dan look.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
