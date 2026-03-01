import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Supersport Middleweight 2024-2025 | Motor 600cc',
  description: 'Daftar supersport 600cc terbaik. Balance power dan handling untuk street dan track day dengan inline-4 screaming engine.',
  keywords: 'supersport 600, motor 600cc, ninja zx-6r, r6, cbr600rr',
};

const availableBikes = [
  { brand: 'Kawasaki', model: 'Ninja ZX-6R', year: 2024, price: 'Rp 325 Juta', engine: '636cc Inline-4', power: '130 HP @ 13,500 rpm', weight: '196 kg', topSpeed: '260 km/h' },
  { brand: 'Yamaha', model: 'YZF-R6', year: 2024, price: 'Rp 300 Juta', engine: '599cc Inline-4', power: '118 HP @ 14,500 rpm', weight: '190 kg', topSpeed: '262 km/h' },
];

const unavailableBikes = [
  { brand: 'Honda', model: 'CBR600RR', year: 2024, price: '~Rp 280 Juta', engine: '599cc Inline-4', power: '121 HP @ 14,000 rpm', weight: '194 kg', topSpeed: '260 km/h' },
  { brand: 'Triumph', model: 'Daytona 660', year: 2024, price: '~Rp 350 Juta', engine: '660cc Triple', power: '95 HP @ 11,250 rpm', weight: '201 kg', topSpeed: '240 km/h' },
];

function BikeCard({ bike, available }: any) {
  return (
    <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-[#ff1744]/50 transition-all">
      <span className={`text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block ${available ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}`}>
        {available ? '✓ Tersedia' : '⊗ Tidak Tersedia'}
      </span>
      <h3 className="text-xl font-bebas text-white mb-1">{bike.brand} {bike.model}</h3>
      <p className="text-sm text-gray-400 mb-2">Model {bike.year}</p>
      <p className="text-2xl font-bold text-[#ff1744] mb-4">{bike.price}</p>
      <div className="space-y-2 text-sm">
        <div className="flex gap-2 text-gray-300"><span>🔧</span><span>{bike.engine}</span></div>
        <div className="flex gap-2 text-gray-300"><span>⚡</span><span>{bike.power}</span></div>
        <div className="flex gap-2 text-gray-300"><span>⚖️</span><span>{bike.weight}</span></div>
        <div className="flex gap-2 text-gray-300"><span>🏁</span><span>{bike.topSpeed}</span></div>
      </div>
    </div>
  );
}

export default function MiddleweightPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="border-b border-white/10 bg-black/80"><div className="container mx-auto px-4 py-3"><div className="flex items-center gap-2 text-sm text-gray-400">
        <Link href="/">Home</Link><span>/</span><Link href="/bikeclass/supersport">Supersport</Link><span>/</span><span className="text-white">Middleweight</span>
      </div></div></div>
      <section className="py-12 border-b border-white/10"><div className="container mx-auto px-4">
        <h1 className="text-5xl font-bebas text-[#ff1744] mb-4">Middleweight Supersport 600cc</h1>
        <p className="text-xl text-gray-300 mb-4">Supersport 600cc dengan inline-4 screaming engine. Perfect balance power dan handling untuk track day dengan budget friendly.</p>
      </div></section>
      <section className="py-12 border-b border-white/10"><div className="container mx-auto px-4">
        <h2 className="text-3xl font-bebas text-white mb-8">🇮🇩 TERSEDIA DI INDONESIA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableBikes.map((bike, i) => <BikeCard key={i} bike={bike} available={true} />)}
        </div>
      </div></section>
      <section className="py-12"><div className="container mx-auto px-4">
        <h2 className="text-3xl font-bebas text-white mb-8">🌍 TIDAK TERSEDIA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {unavailableBikes.map((bike, i) => <BikeCard key={i} bike={bike} available={false} />)}
        </div>
      </div></section>
    </main>
  );
}
