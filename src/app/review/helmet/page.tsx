import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Review Helm Motor Sport 2024-2025 | Full Face, Modular | IndonesiaSBK',
  description: 'Review helm motor sport terlengkap. Full face, modular, dengan rating safety SNELL, ECE, DOT. Aero, ventilasi, dan visor anti fog.',
  keywords: 'review helm motor, helm full face, helm racing, shoei x-fifteen, arai rx-7v',
};

interface HelmetReview {
  id: string;
  brand: string;
  model: string;
  rating: number;
  price: string;
  image: string;
  safetyRating: string[];
  weight: string;
  excerpt: string;
  pros: string[];
  cons: string[];
}

const helmetReviews: HelmetReview[] = [
  {
    id: '1',
    brand: 'Shoei',
    model: 'X-Fifteen',
    rating: 5,
    price: 'Rp 12 Juta',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    safetyRating: ['SNELL M2020D', 'ECE 22.06', 'JIS'],
    weight: '1,570g',
    excerpt: 'Racing helmet MotoGP dengan aerodinamika teruji di kecepatan 300+ km/h dan emergency quick release.',
    pros: ['Aerodinamika terbaik', 'Ventilasi maksimal', 'Quiet di high speed'],
    cons: ['Harga sangat tinggi', 'Sizing sempit', 'Field of view terbatas'],
  },
  {
    id: '2',
    brand: 'Arai',
    model: 'RX-7V Evo',
    rating: 5,
    price: 'Rp 11 Juta',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    safetyRating: ['SNELL M2015', 'ECE 22.05', 'JIS'],
    weight: '1,600g',
    excerpt: 'Hand-made racing helmet dengan round shell design dan superior impact absorption.',
    pros: ['Build quality terbaik', 'Comfort luar biasa', 'Ventilasi smooth'],
    cons: ['Harga premium', 'Design konservatif', 'Berat sedikit lebih'],
  },
  {
    id: '3',
    brand: 'AGV',
    model: 'Pista GP RR',
    rating: 5,
    price: 'Rp 18 Juta',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    safetyRating: ['FIM Racing', 'ECE 22.06'],
    weight: '1,430g',
    excerpt: 'MotoGP replica helm dengan 100% carbon fiber shell dan Valentino Rossi development.',
    pros: ['Paling ringan', 'Aero winglets', 'MotoGP proven'],
    cons: ['Harga sangat mahal', 'Visor system kompleks'],
  },
  {
    id: '4',
    brand: 'HJC',
    model: 'RPHA 1N',
    rating: 4.5,
    price: 'Rp 7.5 Juta',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    safetyRating: ['SNELL M2020D', 'ECE 22.06', 'DOT'],
    weight: '1,460g',
    excerpt: 'Premium carbon racing helmet dengan value terbaik dan tech dari MotoGP riders.',
    pros: ['Harga kompetitif', 'Ringan', 'Ventilasi baik'],
    cons: ['Build quality dibawah Shoei/Arai', 'Noise sedikit tinggi'],
  },
  {
    id: '5',
    brand: 'Shoei',
    model: 'Neotec 3',
    rating: 4.5,
    price: 'Rp 10 Juta',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    safetyRating: ['ECE 22.06', 'DOT'],
    weight: '1,750g',
    excerpt: 'Modular helmet terbaik untuk touring dengan sun visor internal dan Sena SRL-3 ready.',
    pros: ['Modular convenience', 'Quiet operation', 'Bluetooth ready'],
    cons: ['Berat', 'Harga tinggi', 'Tidak untuk racing'],
  },
  {
    id: '6',
    brand: 'Bell',
    model: 'Race Star Flex DLX',
    rating: 4,
    price: 'Rp 8 Juta',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    safetyRating: ['SNELL M2015', 'ECE 22.05', 'DOT'],
    weight: '1,540g',
    excerpt: 'Racing helmet dengan Flex impact liner system untuk rotational impact protection.',
    pros: ['Flex liner tech', 'Fit bagus', 'Harga ok'],
    cons: ['Ventilasi biasa', 'Visor mechanism agak stiff'],
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

function HelmetCard({ helmet }: { helmet: HelmetReview }) {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-[#ffc400]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,196,0,0.3)]">
      <div className="relative h-56">
        <Image
          src={helmet.image}
          alt={`${helmet.brand} ${helmet.model}`}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {helmet.safetyRating.map((rating, i) => (
            <span
              key={i}
              className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded"
            >
              {rating}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bebas text-white mb-1">
          {helmet.brand} {helmet.model}
        </h3>
        <div className="flex items-center gap-3 mb-3">
          <p className="text-xl font-bold text-[#ffc400]">{helmet.price}</p>
          <span className="text-sm text-gray-400">• {helmet.weight}</span>
        </div>

        <StarRating rating={helmet.rating} />

        <p className="text-gray-300 text-sm mt-4 mb-4 line-clamp-2">
          {helmet.excerpt}
        </p>

        <div className="space-y-3 mb-4">
          <div>
            <h4 className="text-xs font-bold text-green-400 mb-1">✓ PROS</h4>
            <ul className="text-xs text-gray-400 space-y-1">
              {helmet.pros.slice(0, 2).map((pro, i) => (
                <li key={i}>• {pro}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-red-400 mb-1">✗ CONS</h4>
            <ul className="text-xs text-gray-400 space-y-1">
              {helmet.cons.slice(0, 2).map((con, i) => (
                <li key={i}>• {con}</li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href={`/review/helmet/${helmet.id}`}
          className="block w-full text-center py-2 bg-[#ffc400]/20 hover:bg-[#ffc400] hover:text-black text-[#ffc400] font-bold rounded transition-colors"
        >
          Baca Review Lengkap
        </Link>
      </div>
    </div>
  );
}

export default function HelmetReviewPage() {
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
            <span className="text-white">Helmet</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🪖</span>
            <h1 className="text-5xl font-bebas text-[#ffc400] uppercase tracking-tight">
              Review Helm Motor Sport
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mb-6">
            Ulasan mendalam helm racing dan touring dengan fokus pada safety rating, aerodinamika, 
            ventilasi, dan kenyamanan untuk iklim tropis Indonesia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-sm font-bold text-[#ffc400] mb-1">SNELL M2020D</h3>
              <p className="text-xs text-gray-400">Racing standard tertinggi</p>
            </div>
            <div className="p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-sm font-bold text-[#ffc400] mb-1">ECE 22.06</h3>
              <p className="text-xs text-gray-400">European standard terbaru</p>
            </div>
            <div className="p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-sm font-bold text-[#ffc400] mb-1">FIM Racing</h3>
              <p className="text-xs text-gray-400">MotoGP approved</p>
            </div>
            <div className="p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-sm font-bold text-[#ffc400] mb-1">JIS T 8133</h3>
              <p className="text-xs text-gray-400">Japanese standard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helmetReviews.map((helmet) => (
              <HelmetCard key={helmet.id} helmet={helmet} />
            ))}
          </div>
        </div>
      </section>

      {/* Helmet Buying Guide */}
      <section className="py-12 border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-6">
            Panduan Memilih Helm Racing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-xl font-bold text-[#ffc400] mb-3">1. Safety First</h3>
              <p className="text-gray-400 text-sm mb-2">
                Prioritas utama: cari helm dengan sertifikasi SNELL, ECE 22.06, atau minimal DOT.
              </p>
              <p className="text-gray-400 text-sm">
                ✓ SNELL untuk racing<br />
                ✓ ECE 22.06 untuk street<br />
                ✓ Hindari helm tanpa sertifikasi
              </p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-xl font-bold text-[#ffc400] mb-3">2. Fit & Comfort</h3>
              <p className="text-gray-400 text-sm mb-2">
                Helm harus pas di kepala tanpa pressure points. Jangan kompromi dengan ukuran.
              </p>
              <p className="text-gray-400 text-sm">
                ✓ Try sebelum beli<br />
                ✓ Snug tapi tidak sakit<br />
                ✓ Cheek pads menyentuh pipi
              </p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-xl font-bold text-[#ffc400] mb-3">3. Ventilasi</h3>
              <p className="text-gray-400 text-sm mb-2">
                Penting untuk iklim Indonesia yang panas. Cek intake/exhaust vents.
              </p>
              <p className="text-gray-400 text-sm">
                ✓ Multiple air vents<br />
                ✓ Adjustable airflow<br />
                ✓ Chin vent untuk defogging
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
