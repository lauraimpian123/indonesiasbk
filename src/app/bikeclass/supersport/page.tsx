import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Supersport Terbaik 2024-2025 | Harga & Spesifikasi',
  description: 'Daftar motor supersport terbaik tersedia dan tidak tersedia di Indonesia. Motor sport menengah dengan handling tajam dan efisien.',
  keywords: 'supersport, motor supersport, kawasaki ninja, yamaha r7, cbr650r, harga supersport',
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
    brand: 'Kawasaki',
    model: 'Ninja ZX-6R',
    year: 2024,
    price: 'Rp 350 Juta',
    engine: '636cc Inline-4',
    power: '128 HP @ 13,500 rpm',
    weight: '196 kg',
    topSpeed: '250 km/h',
  },
  {
    brand: 'Yamaha',
    model: 'YZF-R7',
    year: 2024,
    price: 'Rp 250 Juta',
    engine: '689cc Parallel-Twin',
    power: '73 HP @ 8,750 rpm',
    weight: '188 kg',
    topSpeed: '220 km/h',
  },
  {
    brand: 'Honda',
    model: 'CBR650R',
    year: 2024,
    price: 'Rp 280 Juta',
    engine: '649cc Inline-4',
    power: '95 HP @ 12,000 rpm',
    weight: '208 kg',
    topSpeed: '220 km/h',
  },
  {
    brand: 'Suzuki',
    model: 'GSX-R750',
    year: 2023,
    price: 'Rp 320 Juta',
    engine: '750cc Inline-4',
    power: '148 HP @ 13,200 rpm',
    weight: '190 kg',
    topSpeed: '260 km/h',
  },
];

const unavailableBikes: Bike[] = [
  {
    brand: 'Triumph',
    model: 'Daytona 660',
    year: 2024,
    price: '~Rp 300 Juta',
    engine: '660cc Triple',
    power: '95 HP @ 11,250 rpm',
    weight: '189 kg',
    topSpeed: '235 km/h',
  },
  {
    brand: 'Aprilia',
    model: 'RS 660',
    year: 2024,
    price: '~Rp 280 Juta',
    engine: '659cc Parallel-Twin',
    power: '100 HP @ 10,500 rpm',
    weight: '183 kg',
    topSpeed: '240 km/h',
  },
  {
    brand: 'MV Agusta',
    model: 'F3 800',
    year: 2024,
    price: '~Rp 450 Juta',
    engine: '798cc Triple',
    power: '148 HP @ 13,250 rpm',
    weight: '173 kg',
    topSpeed: '260 km/h',
  },
];

const articles = [
  { title: 'Kawasaki Ninja ZX-6R: Raja Supersport 600cc', slug: 'kawasaki-zx6r-review' },
  { title: 'Yamaha R7 vs Honda CBR650R: Perbandingan Supersport', slug: 'r7-vs-cbr650r' },
  { title: 'Tips Modifikasi Supersport untuk Track Day', slug: 'modifikasi-supersport-track' },
  { title: 'Supersport vs Superbike: Mana yang Cocok untuk Pemula?', slug: 'supersport-vs-superbike' },
];

function BikeCard({ bike, available }: { bike: Bike; available: boolean }) {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-[#00e5ff]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]">
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
      <p className="text-2xl font-bold text-[#00e5ff] mb-4">{bike.price}</p>

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

export default function SupersportPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">💎</span>
            <h1 className="text-5xl font-bebas text-[#00e5ff] uppercase tracking-tight">
              Supersport
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Motor sport menengah (600-750cc) dengan handling tajam. Lebih mudah dikendarai
            sehari-hari, efisien, cocok untuk riders yang naik kelas dari sport kecil.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-[#00e5ff]">●</span>
              <span>Engine: 600-750cc</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#00e5ff]">●</span>
              <span>Power: 70-150 HP</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#00e5ff]">●</span>
              <span>Top Speed: 220-260 km/h</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#00e5ff]">●</span>
              <span>Weight: 180-210 kg</span>
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
                className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-[#00e5ff]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
              >
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <span className="text-sm text-[#00e5ff] font-bold">Baca Selengkapnya →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
