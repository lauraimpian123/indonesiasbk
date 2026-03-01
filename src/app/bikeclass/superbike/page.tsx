import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Superbike Terbaik 2024-2025 | Harga & Spesifikasi',
  description: 'Daftar motor superbike terbaik tersedia dan tidak tersedia di Indonesia. Bandingkan harga, spesifikasi, dan performa racing.',
  keywords: 'superbike, motor superbike, harga superbike, superbike indonesia, ducati panigale, bmw s1000rr, yamaha r1',
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
    brand: 'Ducati',
    model: 'Panigale V4',
    year: 2025,
    price: 'Rp 1.2 Miliar',
    engine: '1103cc V4',
    power: '214 HP @ 13,000 rpm',
    weight: '174 kg (dry)',
    topSpeed: '300+ km/h',
  },
  {
    brand: 'BMW',
    model: 'S1000RR',
    year: 2024,
    price: 'Rp 850 Juta',
    engine: '999cc Inline-4',
    power: '210 HP @ 13,500 rpm',
    weight: '197 kg',
    topSpeed: '299 km/h',
  },
  {
    brand: 'Honda',
    model: 'CBR1000RR-R Fireblade SP',
    year: 2024,
    price: 'Rp 1.1 Miliar',
    engine: '999cc Inline-4',
    power: '217 HP @ 14,500 rpm',
    weight: '201 kg',
    topSpeed: '299 km/h',
  },
  {
    brand: 'Kawasaki',
    model: 'Ninja ZX-10R',
    year: 2024,
    price: 'Rp 650 Juta',
    engine: '998cc Inline-4',
    power: '203 HP @ 13,200 rpm',
    weight: '207 kg',
    topSpeed: '299 km/h',
  },
  {
    brand: 'Yamaha',
    model: 'YZF-R1M',
    year: 2024,
    price: 'Rp 750 Juta',
    engine: '998cc Inline-4',
    power: '200 HP @ 13,500 rpm',
    weight: '202 kg',
    topSpeed: '299 km/h',
  },
];

const unavailableBikes: Bike[] = [
  {
    brand: 'Aprilia',
    model: 'RSV4 Factory',
    year: 2025,
    price: '~Rp 900 Juta',
    engine: '1099cc V4',
    power: '217 HP @ 13,200 rpm',
    weight: '199 kg (dry)',
    topSpeed: '305 km/h',
  },
  {
    brand: 'MV Agusta',
    model: 'F4 RC',
    year: 2024,
    price: '~Rp 1.5 Miliar',
    engine: '998cc Inline-4',
    power: '212 HP @ 13,600 rpm',
    weight: '175 kg (dry)',
    topSpeed: '310 km/h',
  },
  {
    brand: 'Suzuki',
    model: 'GSX-R1000R',
    year: 2023,
    price: '~Rp 600 Juta',
    engine: '999cc Inline-4',
    power: '202 HP @ 13,200 rpm',
    weight: '203 kg',
    topSpeed: '299 km/h',
  },
];

const articles = [
  { title: 'Ducati Panigale V4 vs BMW S1000RR: Duel Superbike Eropa', slug: 'ducati-vs-bmw-superbike' },
  { title: 'Teknologi Winglet di MotoGP yang Masuk Superbike Produksi', slug: 'winglet-motogp-superbike' },
  { title: 'Review Honda CBR1000RR-R: Superbike dengan DNA RC213V', slug: 'honda-fireblade-review' },
  { title: 'Kawasaki ZX-10R 2024: Upgrade Signifikan dari Model Sebelumnya', slug: 'kawasaki-zx10r-2024' },
];

function BikeCard({ bike, available }: { bike: Bike; available: boolean }) {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-[#ff1744]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,23,68,0.3)]">
      {/* Availability Badge */}
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

      {/* Bike Info */}
      <h3 className="text-xl font-bebas text-white mb-1">
        {bike.brand} {bike.model}
      </h3>
      <p className="text-sm text-gray-400 mb-2">Model {bike.year}</p>
      <p className="text-2xl font-bold text-[#ff1744] mb-4">{bike.price}</p>

      {/* Specs */}
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2 text-gray-300">
          <span>🔧</span>
          <span>{bike.engine}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <span>⚡</span>
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

export default function SuperbikePage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🏁</span>
            <h1 className="text-5xl font-bebas text-[#ff1744] uppercase tracking-tight">
              Superbike
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Motor sport berperforma tinggi dengan teknologi racing. Posisi menunduk agresif,
            tenaga besar (150+ HP), cocok untuk track day dan riders berpengalaman.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-[#ff1744]">●</span>
              <span>Engine: 1000cc+</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#ff1744]">●</span>
              <span>Power: 150-220 HP</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#ff1744]">●</span>
              <span>Top Speed: 280-310 km/h</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#ff1744]">●</span>
              <span>Weight: 170-210 kg</span>
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
            Motor yang dijual resmi oleh distributor di Indonesia dengan garansi dan layanan purna
            jual.
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
            Motor yang tidak dijual resmi di Indonesia. Harga estimasi berdasarkan konversi pasar
            internasional.
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
                className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-[#ff1744]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,23,68,0.3)]"
              >
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <span className="text-sm text-[#ff1744] font-bold">Baca Selengkapnya →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
