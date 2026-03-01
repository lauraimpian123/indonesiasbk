import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Supersport Lightweight 2024-2025 | Motor 300-400cc',
  description: 'Daftar supersport lightweight 300-400cc terbaik. Beginner-friendly dengan handling nimble dan harga terjangkau untuk entry sport bike.',
  keywords: 'supersport 300, motor 400cc, ninja 400, r3, cbr300',
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
    model: 'Ninja 400',
    year: 2024,
    price: 'Rp 105 Juta',
    engine: '399cc Parallel-Twin',
    power: '48 HP @ 9,600 rpm',
    weight: '173 kg',
    topSpeed: '180 km/h',
  },
  {
    brand: 'Yamaha',
    model: 'YZF-R3',
    year: 2024,
    price: 'Rp 95 Juta',
    engine: '321cc Parallel-Twin',
    power: '42 HP @ 10,750 rpm',
    weight: '169 kg',
    topSpeed: '180 km/h',
  },
  {
    brand: 'KTM',
    model: 'RC 390',
    year: 2024,
    price: 'Rp 115 Juta',
    engine: '373cc Single-Cylinder',
    power: '44 HP @ 9,000 rpm',
    weight: '172 kg',
    topSpeed: '175 km/h',
  },
  {
    brand: 'Kawasaki',
    model: 'Ninja 250SL/Z250SL',
    year: 2024,
    price: 'Rp 65 Juta',
    engine: '249cc Single-Cylinder',
    power: '28 HP @ 9,700 rpm',
    weight: '151 kg',
    topSpeed: '140 km/h',
  },
];

const unavailableBikes: Bike[] = [
  {
    brand: 'Honda',
    model: 'CBR300R',
    year: 2023,
    price: '~Rp 90 Juta',
    engine: '286cc Single-Cylinder',
    power: '31 HP @ 8,500 rpm',
    weight: '165 kg',
    topSpeed: '165 km/h',
  },
  {
    brand: 'Suzuki',
    model: 'GSX-R250',
    year: 2023,
    price: '~Rp 70 Juta',
    engine: '248cc Parallel-Twin',
    power: '25 HP @ 8,000 rpm',
    weight: '178 kg',
    topSpeed: '150 km/h',
  },
  {
    brand: 'Aprilia',
    model: 'RS 457',
    year: 2024,
    price: '~Rp 120 Juta',
    engine: '457cc Parallel-Twin',
    power: '47 HP @ 9,400 rpm',
    weight: '175 kg',
    topSpeed: '185 km/h',
  },
];

function BikeCard({ bike, available }: { bike: Bike; available: boolean }) {
  return (
    <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-[#00e5ff]/50 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${available ? 'bg-green-500/20 text-green-400 border border-green-500/50' : 'bg-gray-500/20 text-gray-400 border border-gray-500/50'}`}>
          {available ? '✓ Tersedia' : '⊗ Tidak Tersedia'}
        </span>
      </div>
      <h3 className="text-xl font-bebas text-white mb-1">{bike.brand} {bike.model}</h3>
      <p className="text-sm text-gray-400 mb-2">Model {bike.year}</p>
      <p className="text-2xl font-bold text-[#00e5ff] mb-4">{bike.price}</p>
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2 text-gray-300"><span>🔧</span><span>{bike.engine}</span></div>
        <div className="flex items-center gap-2 text-gray-300"><span>⚡</span><span>{bike.power}</span></div>
        <div className="flex items-center gap-2 text-gray-300"><span>⚖️</span><span>{bike.weight}</span></div>
        <div className="flex items-center gap-2 text-gray-300"><span>🏁</span><span>{bike.topSpeed}</span></div>
      </div>
    </div>
  );
}

export default function LightweightPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="border-b border-white/10 bg-black/80">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-[#ff1744] transition-colors">Home</Link><span>/</span>
            <Link href="/bikeclass/supersport" className="hover:text-[#ff1744] transition-colors">Supersport</Link><span>/</span>
            <span className="text-white">Lightweight</span>
          </div>
        </div>
      </div>
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4"><span className="text-6xl">🏍️</span>
            <h1 className="text-5xl font-bebas text-[#00e5ff] uppercase tracking-tight">Lightweight Supersport</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mb-4">
            Supersport 300-400cc dengan handling nimble dan harga terjangkau. Perfect untuk beginner rider atau daily commuting dengan fun factor tinggi.
          </p>
        </div>
      </section>
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-8 flex items-center gap-3"><span>🇮🇩</span><span>TERSEDIA DI INDONESIA</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableBikes.map((bike, index) => (<BikeCard key={index} bike={bike} available={true} />))}
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-8 flex items-center gap-3"><span>🌍</span><span>TIDAK TERSEDIA DI INDONESIA</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unavailableBikes.map((bike, index) => (<BikeCard key={index} bike={bike} available={false} />))}
          </div>
        </div>
      </section>
    </main>
  );
}
