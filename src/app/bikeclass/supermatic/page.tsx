import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Supermatic Terbaik 2024-2025 | Harga & Spesifikasi',
  description: 'Daftar motor matic premium terbaik tersedia dan tidak tersedia di Indonesia. Skutik dengan performa tinggi dan teknologi canggih.',
  keywords: 'supermatic, motor matic, honda adv 160, yamaha nmax, pcx 160, harga motor matic',
};

interface Bike {
  brand: string;
  model: string;
  year: number;
  price: string;
  engine: string;
  power: string;
  weight: string;
  topSpeed: string;
}

const availableBikes: Bike[] = [
  {
    brand: 'Honda',
    model: 'ADV 160',
    year: 2024,
    price: 'Rp 39 Juta',
    engine: '156cc Single',
    power: '15.8 HP @ 8,500 rpm',
    weight: '133 kg',
    topSpeed: '120 km/h',
  },
  {
    brand: 'Yamaha',
    model: 'NMAX Turbo',
    year: 2024,
    price: 'Rp 42 Juta',
    engine: '155cc Single',
    power: '15.4 HP @ 8,000 rpm',
    weight: '128 kg',
    topSpeed: '125 km/h',
  },
  {
    brand: 'Honda',
    model: 'PCX 160',
    year: 2024,
    price: 'Rp 33 Juta',
    engine: '156cc Single',
    power: '15.8 HP @ 8,500 rpm',
    weight: '131 kg',
    topSpeed: '115 km/h',
  },
  {
    brand: 'Yamaha',
    model: 'Aerox 155',
    year: 2024,
    price: 'Rp 28 Juta',
    engine: '155cc Single',
    power: '15.4 HP @ 8,000 rpm',
    weight: '125 kg',
    topSpeed: '120 km/h',
  },
];

const unavailableBikes: Bike[] = [
  {
    brand: 'BMW',
    model: 'C 400 GT',
    year: 2024,
    price: '~Rp 180 Juta',
    engine: '350cc Single',
    power: '34 HP @ 7,500 rpm',
    weight: '204 kg',
    topSpeed: '139 km/h',
  },
  {
    brand: 'Yamaha',
    model: 'TMAX 560',
    year: 2024,
    price: '~Rp 350 Juta',
    engine: '560cc Twin',
    power: '48 HP @ 7,500 rpm',
    weight: '220 kg',
    topSpeed: '175 km/h',
  },
  {
    brand: 'Honda',
    model: 'Forza 750',
    year: 2024,
    price: '~Rp 250 Juta',
    engine: '745cc Twin',
    power: '58 HP @ 6,750 rpm',
    weight: '235 kg',
    topSpeed: '170 km/h',
  },
];

const articles = [
  { title: 'Honda ADV 160: Skutik Adventure Terlaris Indonesia', slug: 'honda-adv-160-review' },
  { title: 'NMAX vs Aerox: Perbandingan Skutik Sport 155cc', slug: 'nmax-vs-aerox' },
  { title: 'PCX 160 Hybrid: Teknologi Masa Depan di Skutik Premium', slug: 'pcx-160-hybrid' },
  { title: 'Tips Modifikasi Supermatic untuk Touring', slug: 'modifikasi-supermatic-touring' },
];

function BikeCard({ bike, available }: { bike: Bike; available: boolean }) {
  return (
    <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-[#9c27b0]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(156,39,176,0.3)]">
      <div className="flex justify-between items-start mb-4">
        <span
          className={`text-xs font-bold px-3 py-1 rounded-full ${
            available
              ? 'bg-green-500/20 text-green-400 border border-green-500/50'
              : 'bg-gray-500/20 text-gray-400 border border-gray-500/50'
          }`}
        >
          {available ? '✓ Tersedia' : '⊗ Tidak Tersedia'}
        </span>
      </div>

      <h3 className="text-xl font-bebas text-white mb-1">
        {bike.brand} {bike.model}
      </h3>
      <p className="text-sm text-gray-400 mb-2">Model {bike.year}</p>
      <p className="text-2xl font-bold text-[#9c27b0] mb-4">{bike.price}</p>

      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2 text-gray-300">
          <span>🔧</span>
          <span>{bike.engine}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          
          <span>{bike.power}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <span>⚖️</span>
          <span>{bike.weight}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <span>🏁</span>
          <span>{bike.topSpeed}</span>
        </div>
      </div>
    </div>
  );
}

export default function SupermaticPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🚀</span>
            <h1 className="text-5xl font-bebas text-[#9c27b0] uppercase tracking-tight">
              Supermatic
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Skutik premium dengan performa tinggi. Transmisi otomatis, teknologi canggih, cocok
            untuk commuting cepat dan touring ringan.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-[#9c27b0]">●</span>
              <span>Engine: 150-750cc</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#9c27b0]">●</span>
              <span>Power: 15-60 HP</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#9c27b0]">●</span>
              <span>Top Speed: 115-175 km/h</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#9c27b0]">●</span>
              <span>Weight: 120-240 kg</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tersedia di Indonesia */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-2 flex items-center gap-3">
            <span>🇮🇩</span>
            <span>TERSEDIA DI INDONESIA</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Motor yang dijual resmi oleh distributor di Indonesia dengan garansi dan layanan purna jual.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableBikes.map((bike, index) => (
              <BikeCard key={index} bike={bike} available={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Tidak Tersedia di Indonesia */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-2 flex items-center gap-3">
            <span>🌍</span>
            <span>TIDAK TERSEDIA DI INDONESIA</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Motor yang tidak dijual resmi di Indonesia. Harga estimasi berdasarkan konversi pasar internasional.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unavailableBikes.map((bike, index) => (
              <BikeCard key={index} bike={bike} available={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-8">ARTIKEL TERKAIT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article, index) => (
              <Link
                key={index}
                href={`/article/${article.slug}`}
                className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-[#9c27b0]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(156,39,176,0.3)]"
              >
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <span className="text-sm text-[#9c27b0] font-bold">Baca Selengkapnya →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
