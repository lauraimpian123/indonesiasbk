import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bike Comparison Tool 2024-2025 | Bandingkan Motor Sport | IndonesiaSBK',
  description: 'Tool perbandingan motor sport side-by-side. Compare specs, harga, performa, fitur dari berbagai brand dan kelas.',
  keywords: 'compare motor, perbandingan motor sport, bike comparison, vs superbike',
};

interface ComparisonPair {
  id: string;
  title: string;
  bike1: {
    brand: string;
    model: string;
    image: string;
  };
  bike2: {
    brand: string;
    model: string;
    image: string;
  };
  category: string;
  views: string;
}

const popularComparisons: ComparisonPair[] = [
  {
    id: '1',
    title: 'Ultimate Superbike Showdown',
    bike1: { brand: 'Ducati', model: 'Panigale V4 R', image: '🏍️' },
    bike2: { brand: 'BMW', model: 'M1000RR', image: '🏍️' },
    category: 'Superbike',
    views: '12.5K',
  },
  {
    id: '2',
    title: 'Japanese Superbike Battle',
    bike1: { brand: 'Yamaha', model: 'YZF-R1M', image: '🏍️' },
    bike2: { brand: 'Honda', model: 'CBR1000RR-R SP', image: '🏍️' },
    category: 'Superbike',
    views: '10.2K',
  },
  {
    id: '3',
    title: 'Middleweight Champions',
    bike1: { brand: 'Kawasaki', model: 'Ninja ZX-6R', image: '🏍️' },
    bike2: { brand: 'Yamaha', model: 'YZF-R6', image: '🏍️' },
    category: 'Supersport',
    views: '8.9K',
  },
  {
    id: '4',
    title: 'Streetfighter Smackdown',
    bike1: { brand: 'Ducati', model: 'Streetfighter V4', image: '🏍️' },
    bike2: { brand: 'KTM', model: '1290 Super Duke R', image: '🏍️' },
    category: 'Naked',
    views: '7.8K',
  },
  {
    id: '5',
    title: 'Adventure Touring Face-Off',
    bike1: { brand: 'BMW', model: 'R1250GS', image: '🏍️' },
    bike2: { brand: 'Ducati', model: 'Multistrada V4', image: '🏍️' },
    category: 'Adventure',
    views: '6.5K',
  },
  {
    id: '6',
    title: 'Entry Supersport Battle',
    bike1: { brand: 'Yamaha', model: 'YZF-R3', image: '🏍️' },
    bike2: { brand: 'Kawasaki', model: 'Ninja 400', image: '🏍️' },
    category: 'Supersport',
    views: '9.3K',
  },
];

function ComparisonCard({ comparison }: { comparison: ComparisonPair }) {
  return (
    <Link
      href={`/review/comparison/${comparison.id}`}
      className="block bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-[#00e5ff]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="bg-[#00e5ff]/20 text-[#00e5ff] text-xs font-bold px-3 py-1 rounded-full">
          {comparison.category}
        </span>
        <span className="text-xs text-gray-500">{comparison.views} views</span>
      </div>

      <h3 className="text-xl font-bebas text-white mb-4">{comparison.title}</h3>

      <div className="flex items-center justify-between">
        <div className="flex-1 text-center">
          <div className="text-4xl mb-2">{comparison.bike1.image}</div>
          <p className="text-sm font-bold text-white">{comparison.bike1.brand}</p>
          <p className="text-xs text-gray-400">{comparison.bike1.model}</p>
        </div>

        <div className="px-4">
          <span className="text-2xl text-[#ff1744] font-bold">VS</span>
        </div>

        <div className="flex-1 text-center">
          <div className="text-4xl mb-2">{comparison.bike2.image}</div>
          <p className="text-sm font-bold text-white">{comparison.bike2.brand}</p>
          <p className="text-xs text-gray-400">{comparison.bike2.model}</p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/10">
        <span className="text-[#00e5ff] text-sm font-bold hover:text-white transition-colors">
          Lihat Perbandingan →
        </span>
      </div>
    </Link>
  );
}

export default function ComparisonPage() {
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
            <Link href="/review/bike" className="hover:text-[#ff1744] transition-colors">
              Review
            </Link>
            <span>/</span>
            <span className="text-white">Comparison</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">⚖️</span>
            <h1 className="text-5xl font-bebas text-[#00e5ff] uppercase tracking-tight">
              Bike Comparison Tool
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mb-6">
            Bandingkan motor sport side-by-side. Specs detail, harga, performa, fitur elektronik, 
            dan kesimpulan objektif untuk membantu keputusan pembelian.
          </p>

          {/* Comparison Tool Form */}
          <div className="mt-8 p-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
            <h2 className="text-2xl font-bebas text-white mb-6">
              Buat Perbandingan Custom
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">
                  Motor Pertama
                </label>
                <select className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg text-white focus:border-[#00e5ff] focus:outline-none">
                  <option>Pilih Brand</option>
                  <option>Ducati</option>
                  <option>BMW</option>
                  <option>Yamaha</option>
                  <option>Honda</option>
                  <option>Kawasaki</option>
                  <option>KTM</option>
                  <option>Aprilia</option>
                </select>
                <select className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg text-white focus:border-[#00e5ff] focus:outline-none mt-3">
                  <option>Pilih Model</option>
                  <option>Panigale V4 R</option>
                  <option>Streetfighter V4</option>
                  <option>Monster 1200</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">
                  Motor Kedua
                </label>
                <select className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg text-white focus:border-[#00e5ff] focus:outline-none">
                  <option>Pilih Brand</option>
                  <option>Ducati</option>
                  <option>BMW</option>
                  <option>Yamaha</option>
                  <option>Honda</option>
                  <option>Kawasaki</option>
                  <option>KTM</option>
                  <option>Aprilia</option>
                </select>
                <select className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg text-white focus:border-[#00e5ff] focus:outline-none mt-3">
                  <option>Pilih Model</option>
                  <option>M1000RR</option>
                  <option>S1000RR</option>
                  <option>M1000R</option>
                </select>
              </div>
            </div>

            <button className="mt-6 w-full md:w-auto px-8 py-3 bg-[#00e5ff] hover:bg-[#00e5ff]/80 text-black font-bold rounded-lg transition-colors">
              Compare Now
            </button>
          </div>
        </div>
      </section>

      {/* Popular Comparisons */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-8">
            Perbandingan Populer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularComparisons.map((comparison) => (
              <ComparisonCard key={comparison.id} comparison={comparison} />
            ))}
          </div>
        </div>
      </section>

      {/* How We Compare */}
      <section className="py-12 border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-6">
            Metodologi Perbandingan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-white mb-2">Performance</h3>
              <p className="text-sm text-gray-400">
                Power, torque, top speed, acceleration 0-100 km/h dari test langsung.
              </p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <div className="text-3xl mb-3">🎛️</div>
              <h3 className="text-lg font-bold text-white mb-2">Tech & Features</h3>
              <p className="text-sm text-gray-400">
                Elektronik, ride modes, traction control, ABS, quick shifter.
              </p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <div className="text-3xl mb-3">🏍️</div>
              <h3 className="text-lg font-bold text-white mb-2">Handling</h3>
              <p className="text-sm text-gray-400">
                Suspensi, chassis, geometri, feedback dari track dan street testing.
              </p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-white mb-2">Value</h3>
              <p className="text-sm text-gray-400">
                Harga, cost of ownership, service interval, availability parts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bebas text-white mb-4">
            Mau Perbandingan Spesifik?
          </h2>
          <p className="text-gray-400 mb-6">
            Request comparison antara 2 motor yang ingin kamu bandingkan.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#00e5ff] hover:bg-[#00e5ff]/80 text-black font-bold rounded-lg transition-colors"
          >
            Request Comparison
          </Link>
        </div>
      </section>
    </main>
  );
}
