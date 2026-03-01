import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Adventure On-Road 2024-2025 | Motor Touring Sport',
  description: 'Daftar adventure bike on-road terbaik. Sport-touring dengan comfort tinggi untuk long-distance rides di aspal.',
  keywords: 'adventure touring, multistrada, ninja 1000sx, sport touring',
};

const bikes = [
  { brand: 'Ducati', model: 'Multistrada V4', available: true, price: 'Rp 900 Juta', power: '170 HP', engine: '1158cc V4' },
  { brand: 'Kawasaki', model: 'Ninja 1000SX', available: true, price: 'Rp 400 Juta', power: '142 HP', engine: '1043cc Inline-4' },
  { brand: 'Yamaha', model: 'Tracer 9 GT', available: true, price: 'Rp 350 Juta', power: '119 HP', engine: '890cc CP3' },
  { brand: 'BMW', model: 'S1000XR', available: false, price: '~Rp 750 Juta', power: '165 HP', engine: '999cc Inline-4' },
];

export default function OnRoadPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="border-b border-white/10 bg-black/80"><div className="container mx-auto px-4 py-3">
        <div className="flex gap-2 text-sm text-gray-400">
          <Link href="/">Home</Link><span>/</span><Link href="/bikeclass/adventure">Adventure</Link><span>/</span><span className="text-white">On-Road</span>
        </div>
      </div></div>
      <section className="py-12"><div className="container mx-auto px-4">
        <h1 className="text-5xl font-bebas text-[#00e5ff] mb-4">Adventure On-Road / Sport-Touring</h1>
        <p className="text-xl text-gray-300 mb-8">Adventure bike fokus aspal dengan comfort dan luggage capacity. Perfect untuk touring jarak jauh dengan sporty handling.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikes.map((bike, i) => (
            <div key={i} className="bg-black/80 border border-white/10 rounded-lg p-6">
              <span className={`text-xs px-3 py-1 rounded-full mb-4 inline-block ${bike.available ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}`}>
                {bike.available ? '✓ Tersedia' : '⊗ Tidak Tersedia'}
              </span>
              <h3 className="text-xl font-bebas text-white">{bike.brand} {bike.model}</h3>
              <p className="text-2xl font-bold text-[#00e5ff] my-2">{bike.price}</p>
              <p className="text-sm text-gray-300">⚡ {bike.power} • 🔧 {bike.engine}</p>
            </div>
          ))}
        </div>
      </div></section>
    </main>
  );
}
