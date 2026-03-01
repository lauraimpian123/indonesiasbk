import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Superbike Limited Edition 2024-2025 | Motor Langka Eksklusif',
  description: 'Koleksi superbike limited edition dan special edition. Homologation specials, MotoGP replicas, anniversary models dengan produksi terbatas.',
  keywords: 'superbike limited edition, motor langka, homologation special, motogp replica',
};

interface Bike {
  brand: string;
  model: string;
  year: number;
  price: string;
  engine: string;
  power: string;
  weight: string;
  production: string;
}

const availableBikes: Bike[] = [
  {
    brand: 'Ducati',
    model: 'Superleggera V4',
    year: 2023,
    price: 'Rp 3+ Miliar',
    engine: '998cc V4',
    power: '224 HP @ 15,250 rpm',
    weight: '159 kg (dry)',
    production: '500 units worldwide',
  },
  {
    brand: 'BMW',
    model: 'M1000RR 50 Jahre',
    year: 2024,
    price: 'Rp 1.5 Miliar',
    engine: '999cc Inline-4',
    power: '212 HP @ 14,500 rpm',
    weight: '192 kg',
    production: 'Limited Anniversary Edition',
  },
  {
    brand: 'Yamaha',
    model: 'YZF-R1 GYTR',
    year: 2024,
    price: 'Rp 900 Juta',
    engine: '998cc Inline-4',
    power: '200 HP @ 13,500 rpm',
    weight: '199 kg',
    production: 'Race-spec homologation',
  },
];

const unavailableBikes: Bike[] = [
  {
    brand: 'Ducati',
    model: 'Desmosedici RR',
    year: 2008,
    price: 'Rp 2-5 Miliar (used)',
    engine: '989cc V4 (MotoGP engine)',
    power: '200 HP @ 13,800 rpm',
    weight: '171 kg (dry)',
    production: '1,500 units',
  },
  {
    brand: 'Honda',
    model: 'RC213V-S',
    year: 2016,
    price: 'Rp 4-8 Miliar (used)',
    engine: '999cc V4 (MotoGP derived)',
    power: '159 HP (street) / 215 HP (track kit)',
    weight: '170 kg',
    production: '~300 units',
  },
  {
    brand: 'MV Agusta',
    model: 'F4 Claudio',
    year: 2019,
    price: '~Rp 2.5 Miliar',
    engine: '998cc Inline-4',
    power: '212 HP @ 13,600 rpm',
    weight: '183 kg (dry)',
    production: '100 units',
  },
  {
    brand: 'Kawasaki',
    model: 'Ninja H2R (Track Only)',
    year: 2024,
    price: '~Rp 1.8 Miliar',
    engine: '998cc Inline-4 Supercharged',
    power: '310 HP @ 14,000 rpm',
    weight: '216 kg',
    production: 'Track-only production',
  },
];

function BikeCard({ bike, available }: { bike: Bike; available: boolean }) {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-[#ffc400]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,196,0,0.3)]">
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
        <span className="bg-[#ffc400]/20 text-[#ffc400] text-xs font-bold px-3 py-1 rounded-full">
          LIMITED
        </span>
      </div>

      <h3 className="text-xl font-bebas text-white mb-1">
        {bike.brand} {bike.model}
      </h3>
      <p className="text-sm text-gray-400 mb-2">Model {bike.year}</p>
      <p className="text-2xl font-bold text-[#ffc400] mb-2">{bike.price}</p>
      <p className="text-xs text-[#00e5ff] mb-4">📦 {bike.production}</p>

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
      </div>
    </div>
  );
}

export default function LimitedEditionPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="border-b border-white/10 bg-black/40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-[#ff1744] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/bikeclass/superbike" className="hover:text-[#ff1744] transition-colors">Superbike</Link>
            <span>/</span>
            <span className="text-white">Limited Edition</span>
          </div>
        </div>
      </div>

      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">💎</span>
            <h1 className="text-5xl font-bebas text-[#ffc400] uppercase tracking-tight">
              Limited Edition Superbike
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mb-4">
            Koleksi superbike eksklusif dengan produksi terbatas. Homologation specials, MotoGP replicas, 
            anniversary editions dengan parts unik dan collector value tinggi.
          </p>
          <Link href="/bikeclass/superbike" className="inline-flex items-center gap-2 text-[#ffc400] hover:text-white transition-colors">
            ← Kembali ke Superbike
          </Link>
        </div>
      </section>

      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-2 flex items-center gap-3">
            <span>🇮🇩</span>
            <span>TERSEDIA DI INDONESIA</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Limited edition yang bisa dibeli resmi di Indonesia (terbatas & pre-order).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableBikes.map((bike, index) => (
              <BikeCard key={index} bike={bike} available={true} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-2 flex items-center gap-3">
            <span>🌍</span>
            <span>TIDAK TERSEDIA / SOLD OUT</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Legendary limited editions yang tidak dijual resmi atau sudah sold out worldwide.
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
