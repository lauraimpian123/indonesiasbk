import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Naked Streetfighter 2024-2025 | Motor Supernaked',
  description: 'Daftar streetfighter dan supernaked terbaik. Superbike tanpa fairing dengan power tinggi dan agresive styling.',
  keywords: 'streetfighter, supernaked, ducati streetfighter, mt-10',
};

const bikes = [
  { brand: 'Ducati', model: 'Streetfighter V4', available: true, price: 'Rp 900 Juta', power: '208 HP', engine: '1103cc V4' },
  { brand: 'Yamaha', model: 'MT-10', available: true, price: 'Rp 400 Juta', power: '160 HP', engine: '998cc CP4' },
  { brand: 'BMW', model: 'S1000R', available: true, price: 'Rp 550 Juta', power: '165 HP', engine: '999cc Inline-4' },
  { brand: 'KTM', model: '1290 Super Duke R', available: false, price: '~Rp 600 Juta', power: '180 HP', engine: '1301cc V-Twin' },
];

export default function StreetfighterPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="border-b border-white/10 bg-black/80"><div className="container mx-auto px-4 py-3">
        <div className="flex gap-2 text-sm text-gray-400">
          <Link href="/">Home</Link><span>/</span><Link href="/bikeclass/naked">Naked</Link><span>/</span><span className="text-white">Streetfighter</span>
        </div>
      </div></div>
      <section className="py-12"><div className="container mx-auto px-4">
        <h1 className="text-5xl font-bebas text-[#ff1744] mb-4">Streetfighter & Supernaked</h1>
        <p className="text-xl text-gray-300 mb-8">Motor naked dengan power superbike. Agresif styling, upright ergonomics, wheelie machine.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikes.map((bike, i) => (
            <div key={i} className="bg-black/80 border border-white/10 rounded-lg p-6">
              <span className={`text-xs px-3 py-1 rounded-full mb-4 inline-block ${bike.available ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}`}>
                {bike.available ? '✓ Tersedia' : '⊗ Tidak Tersedia'}
              </span>
              <h3 className="text-xl font-bebas text-white">{bike.brand} {bike.model}</h3>
              <p className="text-2xl font-bold text-[#ff1744] my-2">{bike.price}</p>
              <p className="text-sm text-gray-300">⚡ {bike.power} • 🔧 {bike.engine}</p>
            </div>
          ))}
        </div>
      </div></section>
    </main>
  );
}
