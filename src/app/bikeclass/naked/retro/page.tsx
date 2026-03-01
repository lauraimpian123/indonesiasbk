import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Naked Retro 2024-2025 | Motor Classic Modern',
  description: 'Daftar naked retro dan neo-classic terbaik. Modern engine dengan classic styling untuk timeless appeal.',
  keywords: 'naked retro, z900rs, xsr900, classic modern',
};

const bikes = [
  { brand: 'Kawasaki', model: 'Z900RS', available: true, price: 'Rp 350 Juta', power: '111 HP', engine: '948cc Inline-4' },
  { brand: 'Yamaha', model: 'XSR900', available: true, price: 'Rp 275 Juta', power: '119 HP', engine: '890cc CP3' },
  { brand: 'Triumph', model: 'Speed Twin', available: false, price: '~Rp 450 Juta', power: '96 HP', engine: '1200cc Parallel-Twin' },
  { brand: 'BMW', model: 'R nineT', available: false, price: '~Rp 550 Juta', power: '109 HP', engine: '1170cc Boxer-Twin' },
];

export default function RetroPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="border-b border-white/10 bg-black/40"><div className="container mx-auto px-4 py-3">
        <div className="flex gap-2 text-sm text-gray-400">
          <Link href="/">Home</Link><span>/</span><Link href="/bikeclass/naked">Naked</Link><span>/</span><span className="text-white">Retro</span>
        </div>
      </div></div>
      <section className="py-12"><div className="container mx-auto px-4">
        <h1 className="text-5xl font-bebas text-[#ffc400] mb-4">Naked Retro & Neo-Classic</h1>
        <p className="text-xl text-gray-300 mb-8">Modern performance dengan classic styling. Timeless design meets contemporary technology.</p>
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
