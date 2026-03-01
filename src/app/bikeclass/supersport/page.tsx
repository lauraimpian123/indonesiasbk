import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { supersports } from '@/data/bikes-supersport';
import BikeCard from '@/components/BikeCard';
import BuyingGuide from '@/components/BuyingGuide';

export const metadata: Metadata = {
  title: 'Supersport Indonesia 2026: Review, Harga & Spesifikasi Lengkap',
  description: 'Panduan lengkap motor supersport di Indonesia 2026. Review 14+ supersport terbaik: Kawasaki Ninja ZX-6R, Yamaha R7, R6, CBR650R, Aprilia RS 660 dengan harga dan spesifikasi.',
  keywords: 'supersport, motor supersport, kawasaki ninja zx-6r, yamaha r7, yamaha r6, honda cbr650r, aprilia rs 660, harga supersport 2026',
};

const availableBikes = supersports.filter(b => b.available);
const unavailableBikes = supersports.filter(b => !b.available);

const articles = [
  { title: 'Kawasaki ZX-6R vs Yamaha R6: Duel Supersport 600cc', slug: 'zx6r-vs-r6' },
  { title: 'Yamaha R7: Perfect Entry-Level Supersport?', slug: 'yamaha-r7-review' },
  { title: 'Aprilia RS 660: Supersport dengan Elektronik Superbike', slug: 'aprilia-rs660-review' },
  { title: 'Honda CBR650R: Inline-4 Terakhir di 650cc', slug: 'cbr650r-review' },
];

export default function SupersportPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative py-16 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero/supersport-hero.webp" alt="Supersport Hero" fill className="object-cover opacity-30" priority />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🏍️</span>
            <h1 className="text-5xl md:text-6xl font-bebas text-[#ff1744] uppercase">Supersport</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mb-6">
            Motor sport menengah yang balance antara performa dan usability. Engine 600-750cc dengan power 70-150 HP. 
            Lebih tame dari superbike, cocok untuk track day beginner dan fun riding. Handling tajam dengan bobot ringan.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-gray-700">
              <span className="text-[#ff1744]">●</span>
              <span className="text-gray-300">Engine: 600-750cc</span>
            </div>
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-gray-700">
              <span className="text-[#ff1744]">●</span>
              <span className="text-gray-300">Power: 70-150 HP</span>
            </div>
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-gray-700">
              <span className="text-[#ff1744]">●</span>
              <span className="text-gray-300">Top Speed: 200-270 km/h</span>
            </div>
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-gray-700">
              <span className="text-[#ff1744]">●</span>
              <span className="text-gray-300">Weight: 170-210 kg</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-6">KARAKTERISTIK SUPERSPORT</h2>
          <p className="text-gray-300 leading-relaxed max-w-4xl">
            Supersport adalah sweet spot bagi banyak riders — menawarkan performa tinggi tanpa ekstremitas superbike. 
            Engine 600-750cc menghasilkan 70-150 HP, cukup kencang untuk track day namun tetap manageable di jalan raya. 
            Riding position lebih comfortable dibanding superbike, memungkinkan penggunaan harian yang lebih praktis. 
            Handling sangat nimble dengan bobot ringan (170-210kg), ideal untuk belajar cornering technique. Konsumsi BBM 
            lebih irit (15-20 km/L), maintenance cost lebih rendah, dan insurance lebih murah. Kategori ini cocok untuk 
            intermediate riders yang ingin upgrade dari sport 250-400cc atau track day enthusiast yang prioritize handling 
            over raw power. Ban, brake pad, dan spare parts lebih affordable dibanding superbike.
          </p>
        </div>
      </section>

      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-2 flex items-center gap-3">
            <span>🇮🇩</span>
            <span>TERSEDIA DI INDONESIA ({availableBikes.length})</span>
          </h2>
          <p className="text-gray-400 mb-8">Motor dijual resmi dengan garansi dan layanan purna jual.</p>
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
          <p className="text-gray-400 mb-8">Motor tidak dijual resmi. Harga estimasi dari pasar internasional.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unavailableBikes.map((bike, idx) => <BikeCard key={idx} bike={bike} />)}
          </div>
        </div>
      </section>

      <BuyingGuide
        category="Supersport"
        ideal={[
          'Intermediate riders dengan pengalaman 1-2 tahun',
          'Track day beginner yang belajar cornering',
          'Weekend riders yang cari fun & handling',
          'Budget-conscious performance enthusiast',
          'Daily commute dengan occasional spirited riding'
        ]}
        notIdeal={[
          'Absolute beginner (mulai dari 250-400cc dulu)',
          'Touring jarak jauh (riding position tetap agresif)',
          'Riders yang cari top speed & raw power (pilih superbike)',
          'Penggunaan macet-macetan kota setiap hari',
          'Riders dengan tinggi badan <160cm (seat height tinggi)'
        ]}
        tips={[
          'Pilih twin-cylinder (R7, CBR650R) untuk torque lebih usable di jalan raya',
          'Inline-4 (ZX-6R, R6) lebih fun di RPM tinggi, cocok untuk track',
          'Test ride wajib untuk cek ergonomi — tiap model beda posisi riding',
          'Budgetkan ban tiap 5000-8000km (±Rp 3-5 juta sepasang)',
          'Join track day community untuk improve riding skills dengan aman',
          'Cek insurance cost — supersport lebih murah dibanding superbike',
          'Pertimbangkan resale value (Yamaha & Kawasaki paling stabil)'
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
