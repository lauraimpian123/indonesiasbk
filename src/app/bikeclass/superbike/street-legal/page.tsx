import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Superbike Street-Legal 2024-2025 | Motor Balap Harian',
  description: 'Daftar superbike street-legal terbaik untuk penggunaan harian. Balance performance tinggi dengan comfort dan practicality.',
  keywords: 'superbike street, motor harian, superbike indonesia, sport touring',
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
    model: 'Panigale V4 S',
    year: 2025,
    price: 'Rp 1.2 Miliar',
    engine: '1103cc V4',
    power: '216 HP @ 13,000 rpm',
    weight: '195 kg',
    topSpeed: '305 km/h',
  },
  {
    brand: 'Yamaha',
    model: 'YZF-R1',
    year: 2024,
    price: 'Rp 600 Juta',
    engine: '998cc Inline-4',
    power: '200 HP @ 13,500 rpm',
    weight: '202 kg',
    topSpeed: '299 km/h',
  },
  {
    brand: 'Kawasaki',
    model: 'Ninja ZX-10R',
    year: 2024,
    price: 'Rp 550 Juta',
    engine: '998cc Inline-4',
    power: '203 HP @ 13,200 rpm',
    weight: '207 kg',
    topSpeed: '299 km/h',
  },
  {
    brand: 'BMW',
    model: 'S1000RR',
    year: 2024,
    price: 'Rp 950 Juta',
    engine: '999cc Inline-4',
    power: '210 HP @ 13,750 rpm',
    weight: '197 kg',
    topSpeed: '299 km/h',
  },
  {
    brand: 'Honda',
    model: 'CBR1000RR',
    year: 2024,
    price: 'Rp 450 Juta',
    engine: '999cc Inline-4',
    power: '189 HP @ 13,000 rpm',
    weight: '201 kg',
    topSpeed: '290 km/h',
  },
];

const unavailableBikes: Bike[] = [
  {
    brand: 'Suzuki',
    model: 'GSX-R1000R',
    year: 2024,
    price: '~Rp 500 Juta',
    engine: '999cc Inline-4',
    power: '202 HP @ 13,200 rpm',
    weight: '203 kg',
    topSpeed: '299 km/h',
  },
  {
    brand: 'Aprilia',
    model: 'RSV4 1100',
    year: 2025,
    price: '~Rp 800 Juta',
    engine: '1099cc V4',
    power: '217 HP @ 13,000 rpm',
    weight: '204 kg',
    topSpeed: '300+ km/h',
  },
];

function BikeCard({ bike, available }: { bike: Bike; available: boolean }) {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-[#ff1744]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,23,68,0.3)]">
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
      <p className="text-2xl font-bold text-[#ff1744] mb-4">{bike.price}</p>

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

export default function StreetLegalPage() {
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
            <Link href="/bikeclass/superbike" className="hover:text-[#ff1744] transition-colors">
              Superbike
            </Link>
            <span>/</span>
            <span className="text-white">Street-Legal</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🏍️</span>
            <h1 className="text-5xl font-bebas text-[#ff1744] uppercase tracking-tight">
              Street-Legal Superbike
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mb-4">
            Superbike dengan performance tinggi tapi masih nyaman untuk penggunaan harian. 
            Electronic aids lengkap, riding mode multiple, dan comfort features untuk touring.
          </p>
          <Link 
            href="/bikeclass/superbike" 
            className="inline-flex items-center gap-2 text-[#ff1744] hover:text-white transition-colors"
          >
            ← Kembali ke Superbike
          </Link>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-[#ff1744]">●</span>
              <span>Multiple Ride Modes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#ff1744]">●</span>
              <span>Street Ergonomics</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#ff1744]">●</span>
              <span>Cruise Control</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#ff1744]">●</span>
              <span>ABS Cornering</span>
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
    </main>
  );
}
