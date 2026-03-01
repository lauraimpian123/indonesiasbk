import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { superbikes } from '@/data/bikes-superbike';
import BikeCard from '@/components/BikeCard';
import BuyingGuide from '@/components/BuyingGuide';

export const metadata: Metadata = {
  title: 'Superbike Indonesia 2026: Review, Harga & Spesifikasi Lengkap',
  description: 'Panduan lengkap superbike di Indonesia 2026. Review 14+ superbike terbaik: Ducati Panigale V4, BMW S1000RR, Yamaha R1M, Honda Fireblade dengan harga, spesifikasi lengkap, pros/cons.',
  keywords: 'superbike, superbike indonesia, harga superbike, ducati panigale v4, bmw s1000rr, yamaha r1m, honda fireblade, kawasaki zx-10r, review superbike 2026',
};

const availableBikes = superbikes.filter(b => b.available);
const unavailableBikes = superbikes.filter(b => !b.available);

const articles = [
  { title: 'Ducati Panigale V4 vs BMW S1000RR: Duel Superbike Eropa', slug: 'ducati-vs-bmw-superbike' },
  { title: 'Teknologi Winglet di MotoGP yang Masuk Superbike Produksi', slug: 'winglet-motogp-superbike' },
  { title: 'Review Honda CBR1000RR-R: Superbike dengan DNA RC213V', slug: 'honda-fireblade-review' },
  { title: 'Kawasaki ZX-10R: WorldSBK Champion untuk Jalanan', slug: 'kawasaki-zx10r-review' },
];

export default function SuperbikePage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-16 border-b border-white/10">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/superbike-hero.webp"
            alt="Superbike Hero"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🏁</span>
            <h1 className="text-5xl md:text-6xl font-bebas text-[#ff1744] uppercase tracking-tight">
              Superbike
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mb-6">
            Motor sport berperforma tinggi dengan teknologi racing langsung dari MotoGP dan WorldSBK. 
            Dirancang untuk track day dengan posisi menunduk agresif, engine 1000cc+, dan tenaga 
            luar biasa (150-220 HP). Superbike adalah puncak teknologi motorsport untuk jalanan.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-gray-700">
              <span className="text-[#ff1744]">●</span>
              <span className="text-gray-300">Engine: 1000cc+ Inline-4 / V4</span>
            </div>
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-gray-700">
              <span className="text-[#ff1744]">●</span>
              <span className="text-gray-300">Power: 150-220 HP</span>
            </div>
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-gray-700">
              <span className="text-[#ff1744]">●</span>
              <span className="text-gray-300">Top Speed: 280-310 km/h</span>
            </div>
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-gray-700">
              <span className="text-[#ff1744]">●</span>
              <span className="text-gray-300">Weight: 170-210 kg</span>
            </div>
          </div>
        </div>
      </section>

      {/* Characteristics */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-6">KARAKTERISTIK SUPERBIKE</h2>
          <p className="text-gray-300 leading-relaxed max-w-4xl">
            Superbike adalah kategori motor sport paling ekstrem yang legal untuk jalanan. Dibangun dengan 
            teknologi langsung dari racing (MotoGP, WorldSBK), superbike menawarkan performa yang mendekati 
            motor balap profesional. Engine berkapasitas 1000cc+ menghasilkan power 150-220 HP dengan torque 
            yang explosive. Riding position sangat agresif (menunduk) untuk aerodinamis maksimal di kecepatan 
            tinggi (280-310 km/h). Dilengkapi elektronik canggih seperti traction control, wheelie control, 
            cornering ABS, quick shifter, dan multiple riding modes. Suspensi premium (Öhlins, Showa) 
            fully-adjustable untuk handling presisi. Bukan untuk beginner — membutuhkan skill tinggi dan 
            pengalaman track day. Maintenance cost tinggi, konsumsi BBM boros (±10-15 km/L), dan tidak 
            nyaman untuk penggunaan harian. Superbike adalah ultimate dream machine untuk riders yang 
            mengejar performa absolut.
          </p>
        </div>
      </section>

      {/* Available Bikes */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-2 flex items-center gap-3">
            <span>🇮🇩</span>
            <span>TERSEDIA DI INDONESIA ({availableBikes.length})</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Motor yang dijual resmi oleh distributor di Indonesia dengan garansi dan layanan purna jual.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableBikes.map((bike, index) => (
              <BikeCard key={index} bike={bike} />
            ))}
          </div>
        </div>
      </section>

      {/* Not Available Bikes */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-2 flex items-center gap-3">
            <span>🌍</span>
            <span>TIDAK TERSEDIA DI INDONESIA ({unavailableBikes.length})</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Motor yang tidak dijual resmi di Indonesia. Harga estimasi berdasarkan konversi pasar internasional.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unavailableBikes.map((bike, index) => (
              <BikeCard key={index} bike={bike} />
            ))}
          </div>
        </div>
      </section>

      {/* Buying Guide */}
      <BuyingGuide
        category="Superbike"
        ideal={[
          'Riders berpengalaman dengan skill advanced',
          'Track day enthusiast dan weekend racer',
          'Collectors yang menghargai teknologi motorsport',
          'Riders dengan budget maintenance tinggi',
          'Yang mencari performa absolut dan adrenaline rush'
        ]}
        notIdeal={[
          'Beginner atau riders dengan pengalaman terbatas',
          'Penggunaan commuting harian (sangat tidak nyaman)',
          'Riders dengan budget terbatas (maintenance mahal)',
          'Touring jarak jauh (posisi agresif melelahkan)',
          'Pengendara di kota dengan macet parah'
        ]}
        tips={[
          'Test ride wajib! Posisi riding superbike sangat agresif, pastikan nyaman',
          'Budget maintenance 2-3x lipat dari motor sport biasa (service, ban, parts)',
          'Pertimbangkan track day insurance jika sering ke sirkuit',
          'Jangan beli sebagai motor pertama — gain experience dulu di 600-750cc',
          'Cek availability spare parts di Indonesia (Ducati & BMW mahal, Japanese lebih murah)',
          'Join komunitas superbike untuk tips maintenance dan riding skills',
          'Investasi riding gear premium (helmet, suit, gloves, boots) — safety first!'
        ]}
      />

      {/* Related Articles */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-8">ARTIKEL TERKAIT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article, index) => (
              <Link
                key={index}
                href={`/article/${article.slug}`}
                className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-[#ff1744]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,23,68,0.3)]"
              >
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-3">
                  {article.title}
                </h3>
                <span className="text-sm text-[#ff1744] font-bold">Baca Selengkapnya →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
