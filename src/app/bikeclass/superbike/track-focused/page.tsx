import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Superbike Track-Focused 2024-2025 | Motor Balap Track Day',
  description: 'Daftar superbike track-oriented terbaik untuk sirkuit dan track day. Motor racing murni dengan aerodinamika dan elektronik canggih.',
  keywords: 'superbike track, track day, motor balap sirkuit, superbike racing, panigale v4r',
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
    model: 'Panigale V4 R',
    year: 2025,
    price: 'Rp 1.8 Miliar',
    engine: '998cc V4 (WSBK Spec)',
    power: '221 HP @ 15,250 rpm',
    weight: '172 kg (dry)',
    topSpeed: '320+ km/h',
  },
  {
    brand: 'BMW',
    model: 'M1000RR',
    year: 2024,
    price: 'Rp 1.3 Miliar',
    engine: '999cc Inline-4',
    power: '212 HP @ 14,500 rpm',
    weight: '192 kg',
    topSpeed: '306 km/h',
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
    brand: 'Yamaha',
    model: 'YZF-R1M',
    year: 2024,
    price: 'Rp 750 Juta',
    engine: '998cc Inline-4 Crossplane',
    power: '200 HP @ 13,500 rpm',
    weight: '202 kg',
    topSpeed: '299 km/h',
  },
  {
    brand: 'Kawasaki',
    model: 'Ninja ZX-10RR',
    year: 2024,
    price: 'Rp 750 Juta',
    engine: '998cc Inline-4',
    power: '203 HP @ 13,200 rpm',
    weight: '206 kg',
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
    brand: 'Ducati',
    model: 'Superleggera V4',
    year: 2023,
    price: '~Rp 3 Miliar',
    engine: '998cc V4',
    power: '224 HP @ 15,250 rpm',
    weight: '159 kg (dry)',
    topSpeed: '320+ km/h',
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

export default function TrackFocusedPage() {
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
            <span className="text-white">Track-Focused</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🏁</span>
            <h1 className="text-5xl font-bebas text-[#ff1744] uppercase tracking-tight">
              Track-Focused Superbike
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mb-4">
            Superbike khusus track day dan sirkuit dengan aerodinamika canggih, suspensi racing-spec, 
            dan elektronik traction control level WorldSBK. Dirancang untuk lap time maksimal.
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
              <span>Racing Winglets</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#ff1744]">●</span>
              <span>Öhlins Suspension</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#ff1744]">●</span>
              <span>Lightweight Components</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#ff1744]">●</span>
              <span>Race ECU Mapping</span>
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
