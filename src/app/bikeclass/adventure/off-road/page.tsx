import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Adventure Off-Road 2024-2025 | Motor Dual-Purpose',
  description: 'Daftar adventure bike off-road capable terbaik. Dual-purpose untuk trail riding dan touring dengan suspension travel tinggi.',
  keywords: 'adventure off road, dual purpose, r1250gs, africa twin, tenere 700',
};

const bikes = [
  { brand: 'BMW', model: 'R1250GS', available: false, price: '~Rp 800 Juta', power: '136 HP', engine: '1254cc Boxer-Twin' },
  { brand: 'Honda', model: 'Africa Twin', available: true, price: 'Rp 550 Juta', power: '102 HP', engine: '1084cc Parallel-Twin' },
  { brand: 'Yamaha', model: 'Tenere 700', available: true, price: 'Rp 300 Juta', power: '73 HP', engine: '689cc CP2' },
  { brand: 'KTM', model: '890 Adventure R', available: false, price: '~Rp 450 Juta', power: '105 HP', engine: '889cc Parallel-Twin' },
];

export default function OffRoadPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="border-b border-white/10 bg-black/40"><div className="container mx-auto px-4 py-3">
        <div className="flex gap-2 text-sm text-gray-400">
          <Link href="/">Home</Link><span>/</span><Link href="/bikeclass/adventure">Adventure</Link><span>/</span><span className="text-white">Off-Road</span>
        </div>
      </div></div>
      <section className="py-12"><div className="container mx-auto px-4">
        <h1 className="text-5xl font-bebas text-[#ffc400] mb-4">Adventure Off-Road / Dual-Purpose</h1>
        <p className="text-xl text-gray-300 mb-8">Adventure bike dengan off-road capability. Long-travel suspension, spoke wheels, untuk explore beyond asphalt.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikes.map((bike, i) => (
            <div key={i} className="bg-black/40 border border-white/10 rounded-lg p-6">
              <span className={`text-xs px-3 py-1 rounded-full mb-4 inline-block ${bike.available ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}`}>
                {bike.available ? '✓ Tersedia' : '⊗ Tidak Tersedia'}
              </span>
              <h3 className="text-xl font-bebas text-white">{bike.brand} {bike.model}</h3>
              <p className="text-2xl font-bold text-[#ffc400] my-2">{bike.price}</p>
              <p className="text-sm text-gray-300">⚡ {bike.power} • 🔧 {bike.engine}</p>
            </div>
          ))}
        </div>
      </div></section>
    </main>
  );
}
