import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Naked Standard 2024-2025 | Motor Naked Harian',
  description: 'Daftar naked bike standard terbaik untuk harian. Balance performance dan comfort dengan harga terjangkau.',
  keywords: 'naked standard, mt-07, ninja 650, sv650',
};

const bikes = [
  { brand: 'Yamaha', model: 'MT-07', available: true, price: 'Rp 180 Juta', power: '73 HP', engine: '689cc CP2' },
  { brand: 'Yamaha', model: 'MT-09', available: true, price: 'Rp 250 Juta', power: '119 HP', engine: '890cc CP3' },
  { brand: 'Kawasaki', model: 'Z650', available: true, price: 'Rp 140 Juta', power: '68 HP', engine: '649cc Parallel-Twin' },
  { brand: 'Suzuki', model: 'SV650', available: false, price: '~Rp 150 Juta', power: '76 HP', engine: '645cc V-Twin' },
];

export default function StandardPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="border-b border-white/10 bg-black/40"><div className="container mx-auto px-4 py-3">
        <div className="flex gap-2 text-sm text-gray-400">
          <Link href="/">Home</Link><span>/</span><Link href="/bikeclass/naked">Naked</Link><span>/</span><span className="text-white">Standard</span>
        </div>
      </div></div>
      <section className="py-12"><div className="container mx-auto px-4">
        <h1 className="text-5xl font-bebas text-[#00e5ff] mb-4">Naked Standard</h1>
        <p className="text-xl text-gray-300 mb-8">Naked bike middleweight dengan comfort tinggi. Perfect untuk daily commuting dan weekend rides.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikes.map((bike, i) => (
            <div key={i} className="bg-black/40 border border-white/10 rounded-lg p-6">
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
