import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Adventure Bike Terbaik 2024-2025 | Harga & Spesifikasi',
  description: 'Daftar motor adventure/dual-sport terbaik tersedia dan tidak tersedia di Indonesia. Motor untuk on-road dan off-road touring.',
  keywords: 'adventure bike, dual sport, bmw gs, africa twin, tenere 700, harga adventure bike',
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
    brand: 'BMW',
    model: 'R 1300 GS',
    year: 2024,
    price: 'Rp 850 Juta',
    engine: '1300cc Boxer-Twin',
    power: '145 HP @ 7,750 rpm',
    weight: '237 kg',
    topSpeed: '220 km/h',
  },
  {
    brand: 'Honda',
    model: 'CRF1100L Africa Twin',
    year: 2024,
    price: 'Rp 550 Juta',
    engine: '1084cc Twin',
    power: '102 HP @ 7,500 rpm',
    weight: '238 kg',
    topSpeed: '190 km/h',
  },
  {
    brand: 'Yamaha',
    model: 'Ténéré 700',
    year: 2024,
    price: 'Rp 280 Juta',
    engine: '689cc Twin',
    power: '73 HP @ 9,000 rpm',
    weight: '205 kg',
    topSpeed: '180 km/h',
  },
  {
    brand: 'KTM',
    model: '890 Adventure R',
    year: 2024,
    price: 'Rp 400 Juta',
    engine: '890cc Twin',
    power: '105 HP @ 8,000 rpm',
    weight: '196 kg',
    topSpeed: '200 km/h',
  },
  {
    brand: 'Triumph',
    model: 'Tiger 900 Rally Pro',
    year: 2024,
    price: 'Rp 450 Juta',
    engine: '888cc Triple',
    power: '95 HP @ 8,750 rpm',
    weight: '201 kg',
    topSpeed: '200 km/h',
  },
];

const unavailableBikes: Bike[] = [
  {
    brand: 'Ducati',
    model: 'DesertX Discovery',
    year: 2024,
    price: '~Rp 550 Juta',
    engine: '937cc Twin',
    power: '110 HP @ 9,250 rpm',
    weight: '202 kg (dry)',
    topSpeed: '200 km/h',
  },
  {
    brand: 'Harley-Davidson',
    model: 'Pan America 1250',
    year: 2024,
    price: '~Rp 750 Juta',
    engine: '1252cc V-Twin',
    power: '150 HP @ 8,750 rpm',
    weight: '242 kg',
    topSpeed: '215 km/h',
  },
  {
    brand: 'Aprilia',
    model: 'Tuareg 660',
    year: 2024,
    price: '~Rp 350 Juta',
    engine: '659cc Twin',
    power: '80 HP @ 9,250 rpm',
    weight: '187 kg (dry)',
    topSpeed: '190 km/h',
  },
];

const articles = [
  { title: 'BMW R 1300 GS: Raja Adventure Bike Dunia', slug: 'bmw-r1300gs-review' },
  { title: 'Yamaha Ténéré 700: Adventure Bike Terjangkau Terbaik', slug: 'tenere-700-review' },
  { title: 'Tips Touring Jarak Jauh dengan Adventure Bike', slug: 'touring-adventure-bike' },
  { title: 'Africa Twin vs Tiger 900: Perbandingan Adventure Bike', slug: 'africa-twin-vs-tiger' },
];

function BikeCard({ bike, available }: { bike: Bike; available: boolean }) {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-[#76ff03]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(118,255,3,0.3)]">
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
      <p className="text-2xl font-bold text-[#76ff03] mb-4">{bike.price}</p>

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

export default function AdventurePage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🗺️</span>
            <h1 className="text-5xl font-bebas text-[#76ff03] uppercase tracking-tight">
              Adventure Bike
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Dual-sport untuk on-road dan off-road. Ground clearance tinggi, suspensi panjang,
            kapasitas tangki besar, cocok untuk touring jarak jauh.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-[#76ff03]">●</span>
              <span>Engine: 650-1300cc</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#76ff03]">●</span>
              <span>Power: 70-150 HP</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#76ff03]">●</span>
              <span>Top Speed: 180-220 km/h</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#76ff03]">●</span>
              <span>Weight: 185-245 kg</span>
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
                className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-[#76ff03]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(118,255,3,0.3)]"
              >
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <span className="text-sm text-[#76ff03] font-bold">Baca Selengkapnya →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
