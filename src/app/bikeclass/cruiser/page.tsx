import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cruiser Bike Terbaik 2024-2025 | Harga & Spesifikasi',
  description: 'Daftar motor cruiser terbaik tersedia dan tidak tersedia di Indonesia. Motor dengan posisi riding santai untuk long-distance cruising.',
  keywords: 'cruiser, harley davidson, indian motorcycle, honda rebel, harga cruiser bike',
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
    brand: 'Harley-Davidson',
    model: 'Sportster S',
    year: 2024,
    price: 'Rp 650 Juta',
    engine: '1252cc V-Twin',
    power: '121 HP @ 7,500 rpm',
    weight: '228 kg',
    topSpeed: '200 km/h',
  },
  {
    brand: 'Indian',
    model: 'Scout',
    year: 2024,
    price: 'Rp 550 Juta',
    engine: '1133cc V-Twin',
    power: '100 HP @ 8,100 rpm',
    weight: '255 kg',
    topSpeed: '185 km/h',
  },
  {
    brand: 'Honda',
    model: 'Rebel 1100',
    year: 2024,
    price: 'Rp 380 Juta',
    engine: '1084cc Twin',
    power: '87 HP @ 7,000 rpm',
    weight: '233 kg',
    topSpeed: '180 km/h',
  },
  {
    brand: 'Kawasaki',
    model: 'Vulcan S',
    year: 2024,
    price: 'Rp 180 Juta',
    engine: '649cc Twin',
    power: '61 HP @ 7,500 rpm',
    weight: '229 kg',
    topSpeed: '170 km/h',
  },
];

const unavailableBikes: Bike[] = [
  {
    brand: 'Harley-Davidson',
    model: 'Road Glide',
    year: 2024,
    price: '~Rp 1.2 Miliar',
    engine: '1923cc V-Twin',
    power: '125 HP @ 5,020 rpm',
    weight: '365 kg',
    topSpeed: '180 km/h',
  },
  {
    brand: 'Indian',
    model: 'Challenger',
    year: 2024,
    price: '~Rp 950 Juta',
    engine: '1768cc V-Twin',
    power: '122 HP @ 5,000 rpm',
    weight: '357 kg',
    topSpeed: '190 km/h',
  },
  {
    brand: 'Triumph',
    model: 'Rocket 3',
    year: 2024,
    price: '~Rp 850 Juta',
    engine: '2458cc Triple',
    power: '165 HP @ 6,000 rpm',
    weight: '292 kg',
    topSpeed: '220 km/h',
  },
];

const articles = [
  { title: 'Harley-Davidson Sportster S: Cruiser Modern dengan Performa Tinggi', slug: 'sportster-s-review' },
  { title: 'Indian Scout vs Honda Rebel: Perbandingan Cruiser Mid-Size', slug: 'scout-vs-rebel' },
  { title: 'Triumph Rocket 3: Cruiser dengan Mesin Terbesar di Dunia', slug: 'triumph-rocket-3' },
  { title: 'Tips Riding Cruiser untuk Jarak Jauh', slug: 'riding-cruiser-jarak-jauh' },
];

function BikeCard({ bike, available }: { bike: Bike; available: boolean }) {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-[#ff6600]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,102,0,0.3)]">
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
      <p className="text-2xl font-bold text-[#ff6600] mb-4">{bike.price}</p>

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

export default function CruiserPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🛣️</span>
            <h1 className="text-5xl font-bebas text-[#ff6600] uppercase tracking-tight">
              Cruiser
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Motor dengan posisi riding santai, footpeg ke depan, handebar lebar. Torsi
            rendah-menengah, cocok untuk long-distance cruising dan city riding.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-[#ff6600]">●</span>
              <span>Engine: 650-2500cc</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#ff6600]">●</span>
              <span>Power: 60-165 HP</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#ff6600]">●</span>
              <span>Top Speed: 170-220 km/h</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#ff6600]">●</span>
              <span>Weight: 225-365 kg</span>
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
                className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-[#ff6600]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,102,0,0.3)]"
              >
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <span className="text-sm text-[#ff6600] font-bold">Baca Selengkapnya →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
