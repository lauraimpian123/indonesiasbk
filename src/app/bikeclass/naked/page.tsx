import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Naked Bike Terbaik 2024-2025 | Harga & Spesifikasi',
  description: 'Daftar motor naked/street fighter terbaik tersedia dan tidak tersedia di Indonesia. Motor tanpa fairing dengan handling lincah.',
  keywords: 'naked bike, street fighter, kawasaki z900, yamaha mt-09, cb650r, harga naked bike',
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
    model: 'Z900',
    year: 2024,
    price: 'Rp 280 Juta',
    engine: '948cc Inline-4',
    power: '125 HP @ 9,500 rpm',
    weight: '210 kg',
    topSpeed: '230 km/h',
  },
  {
    brand: 'Yamaha',
    model: 'MT-09',
    year: 2024,
    price: 'Rp 310 Juta',
    engine: '890cc Triple',
    power: '119 HP @ 10,000 rpm',
    weight: '189 kg',
    topSpeed: '230 km/h',
  },
  {
    brand: 'Honda',
    model: 'CB650R',
    year: 2024,
    price: 'Rp 260 Juta',
    engine: '649cc Inline-4',
    power: '95 HP @ 12,000 rpm',
    weight: '202 kg',
    topSpeed: '200 km/h',
  },
  {
    brand: 'Triumph',
    model: 'Street Triple RS',
    year: 2024,
    price: 'Rp 450 Juta',
    engine: '765cc Triple',
    power: '123 HP @ 11,700 rpm',
    weight: '166 kg',
    topSpeed: '240 km/h',
  },
  {
    brand: 'KTM',
    model: '890 Duke R',
    year: 2024,
    price: 'Rp 350 Juta',
    engine: '890cc Twin',
    power: '121 HP @ 9,250 rpm',
    weight: '169 kg',
    topSpeed: '240 km/h',
  },
];

const unavailableBikes: Bike[] = [
  {
    brand: 'Ducati',
    model: 'Streetfighter V4 S',
    year: 2024,
    price: '~Rp 1 Miliar',
    engine: '1103cc V4',
    power: '208 HP @ 12,750 rpm',
    weight: '178 kg (dry)',
    topSpeed: '280 km/h',
  },
  {
    brand: 'Aprilia',
    model: 'Tuono V4 1100',
    year: 2024,
    price: '~Rp 650 Juta',
    engine: '1077cc V4',
    power: '175 HP @ 11,500 rpm',
    weight: '184 kg (dry)',
    topSpeed: '270 km/h',
  },
  {
    brand: 'MV Agusta',
    model: 'Brutale 1000 RR',
    year: 2024,
    price: '~Rp 1.2 Miliar',
    engine: '998cc Inline-4',
    power: '208 HP @ 13,000 rpm',
    weight: '186 kg (dry)',
    topSpeed: '300 km/h',
  },
];

const articles = [
  { title: 'Kawasaki Z900 vs Yamaha MT-09: Duel Naked Bike', slug: 'z900-vs-mt09' },
  { title: 'Triumph Street Triple RS: Naked Bike Premium Terbaik', slug: 'triumph-street-triple-rs' },
  { title: 'KTM 890 Duke R: Naked Bike Austriayang Agresif', slug: 'ktm-890-duke-r' },
  { title: 'Tips Riding Naked Bike untuk Pemula', slug: 'riding-naked-bike-pemula' },
];

function BikeCard({ bike, available }: { bike: Bike; available: boolean }) {
  return (
    <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-[#ffc400]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,196,0,0.3)]">
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
      <p className="text-2xl font-bold text-[#ffc400] mb-4">{bike.price}</p>

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

export default function NakedPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">💪</span>
            <h1 className="text-5xl font-bebas text-[#ffc400] uppercase tracking-tight">
              Naked Bike
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Street fighter tanpa fairing. Posisi riding tegak, handling lincah, torsi besar, cocok
            untuk daily riding dan weekend fun.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-[#ffc400]">●</span>
              <span>Engine: 650-1100cc</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#ffc400]">●</span>
              <span>Power: 95-210 HP</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#ffc400]">●</span>
              <span>Top Speed: 200-300 km/h</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#ffc400]">●</span>
              <span>Weight: 165-210 kg</span>
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
                className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-[#ffc400]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,196,0,0.3)]"
              >
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <span className="text-sm text-[#ffc400] font-bold">Baca Selengkapnya →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
