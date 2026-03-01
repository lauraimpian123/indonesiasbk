import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { supermatics } from '@/data/bikes-supermatic';
import BikeCard from '@/components/BikeCard';
import BuyingGuide from '@/components/BuyingGuide';

export const metadata: Metadata = {
  title: 'Supermatic (Scooter Matic) Indonesia 2026: Review & Harga Lengkap',
  description: 'Panduan lengkap scooter matic premium di Indonesia 2026. Review Honda ADV 160, Yamaha NMAX, PCX 160, Aerox 155, BMW C400 GT, Yamaha TMAX dengan harga dan spesifikasi.',
  keywords: 'supermatic, scooter matic, honda adv 160, yamaha nmax, pcx 160, aerox 155, bmw c400gt, yamaha tmax, harga matic 2026',
};

const availableBikes = supermatics.filter(b => b.available);
const unavailableBikes = supermatics.filter(b => !b.available);

const articles = [
  { title: 'Honda ADV 160 vs Yamaha NMAX: Mana Lebih Worth It?', slug: 'adv160-vs-nmax' },
  { title: 'Yamaha TMAX 560: King of Sport Scooter', slug: 'yamaha-tmax-review' },
  { title: 'BMW C 400 GT: Premium Maxi Scooter untuk Touring', slug: 'bmw-c400gt-review' },
  { title: 'PCX 160 vs NMAX Turbo: Battle of Best Seller', slug: 'pcx-vs-nmax' },
];

export default function SupermaticPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative py-16 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero/supermatic-hero.webp" alt="Supermatic Hero" fill className="object-cover opacity-30" priority />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🛵</span>
            <h1 className="text-5xl md:text-6xl font-bebas text-[#ff1744] uppercase">Supermatic</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mb-6">
            Scooter matic premium dengan fitur canggih dan performa tinggi. Engine 125-160cc untuk lokal, hingga 750cc 
            untuk maxi scooter. CVT transmission otomatis, praktis untuk commuting. Comfortable, storage luas, teknologi modern.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-gray-700">
              <span className="text-[#ff1744]">●</span>
              <span className="text-gray-300">Engine: 125-750cc</span>
            </div>
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-gray-700">
              <span className="text-[#ff1744]">●</span>
              <span className="text-gray-300">Power: 8-58 HP</span>
            </div>
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-gray-700">
              <span className="text-[#ff1744]">●</span>
              <span className="text-gray-300">Top Speed: 95-170 km/h</span>
            </div>
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-gray-700">
              <span className="text-[#ff1744]">●</span>
              <span className="text-gray-300">Weight: 108-261 kg</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-6">KARAKTERISTIK SUPERMATIC</h2>
          <p className="text-gray-300 leading-relaxed max-w-4xl">
            Supermatic (scooter matic premium) adalah evolusi dari matic konvensional. Di Indonesia, kategori ini didominasi 
            model 125-160cc seperti Honda ADV 160, Yamaha NMAX, PCX 160, dan Aerox 155 dengan harga Rp 26-38 juta. Fitur 
            unggulan: Smart Key, ABS, Traction Control, TFT display, Y-Connect/Honda Connect. CVT transmission membuat riding 
            sangat mudah (gas-rem saja), cocok untuk semua level. Storage under-seat luas (20-25L), praktis untuk belanja/ 
            commute. Konsumsi BBM irit (30-45 km/L), biaya maintenance rendah. Di pasar global, ada maxi scooter premium 
            seperti Yamaha TMAX 560 (560cc, 47 HP, Rp 350 juta), Honda Forza 750 (745cc, 58 HP, DCT, Rp 400 juta), BMW C 400 
            GT (350cc, 34 HP, touring-oriented). Maxi scooter menawarkan performa sport bike dengan comfort scooter, ideal 
            untuk long-distance touring. Kategori ini perfect untuk urban mobility, commuting harian, dan riders yang 
            prioritize convenience over sportiness.
          </p>
        </div>
      </section>

      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-2 flex items-center gap-3">
            <span>🇮🇩</span>
            <span>TERSEDIA DI INDONESIA ({availableBikes.length})</span>
          </h2>
          <p className="text-gray-400 mb-8">Scooter matic dijual resmi dengan garansi dan layanan purna jual.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableBikes.map((bike, idx) => <BikeCard key={idx} bike={bike} />)}
          </div>
        </div>
      </section>

      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-2 flex items-center gap-3">
            <span>🌍</span>
            <span>TIDAK TERSEDIA DI INDONESIA ({unavailableBikes.length})</span>
          </h2>
          <p className="text-gray-400 mb-8">Maxi scooter premium tidak dijual resmi. Harga estimasi impor.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unavailableBikes.map((bike, idx) => <BikeCard key={idx} bike={bike} />)}
          </div>
        </div>
      </section>

      <BuyingGuide
        category="Supermatic"
        ideal={[
          'Commuter harian di kota macet (praktis & irit)',
          'Beginner yang baru belajar naik motor',
          'Riders yang prioritize convenience over performance',
          'Ibu-ibu, pekerja kantoran, pelajar/mahasiswa',
          'Short-distance touring & urban exploration'
        ]}
        notIdeal={[
          'Track day atau spirited riding (handling terbatas)',
          'Long-distance touring serius (lebih baik ADV bike)',
          'Off-road atau adventure riding',
          'Riders yang cari sensasi manual transmission',
          'Budget sangat terbatas (matic lebih mahal dari bebek)'
        ]}
        tips={[
          'Honda ADV 160 & PCX 160 paling irit & reliable, perfect daily commute',
          'Yamaha NMAX Turbo & Aerox 155 lebih sporty, fun to ride',
          'Cek under-seat storage — 20L minimum untuk practicality',
          'Fitur ABS wajib untuk safety (rem mendadak saat hujan)',
          'Smart Key sangat convenient, tapi jaga spare key baik-baik',
          'Service interval 4000-6000km, biaya Rp 150-300k (affordable)',
          'Ban depan-belakang ganti bersamaan tiap 15,000-20,000km'
        ]}
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-8">ARTIKEL TERKAIT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article, idx) => (
              <Link key={idx} href={`/article/${article.slug}`} className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-[#ff1744]/50 transition-all">
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-3">{article.title}</h3>
                <span className="text-sm text-[#ff1744] font-bold">Baca Selengkapnya →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
