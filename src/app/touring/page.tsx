import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Touring Routes & Tips Indonesia 2024-2025 | IndonesiaSBK',
  description: 'Panduan touring motor sport di Indonesia. Rute terbaik, tips riding, hotel recommendations, bengkel darurat, dan komunitas riding.',
  keywords: 'touring motor indonesia, rute touring, riding tips, komunitas motor',
};

interface TouringRoute {
  id: string;
  name: string;
  region: string;
  distance: string;
  duration: string;
  difficulty: string;
  bestSeason: string;
  highlights: string[];
  image: string;
  description: string;
}

const routes: TouringRoute[] = [
  {
    id: '1',
    name: 'Java Trans Island',
    region: 'Java',
    distance: '~1,200 km',
    duration: '4-6 Days',
    difficulty: 'Moderate',
    bestSeason: 'Apr - Oct (Dry Season)',
    highlights: [
      'Jakarta → Bandung → Yogyakarta → Surabaya',
      'Mix of toll roads & mountain passes',
      'Historical sites & cultural stops',
      'Good road conditions',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    description: 'Classic trans Java route dengan perfect balance antara highway cruising dan mountain twisties.',
  },
  {
    id: '2',
    name: 'Bali Coastal Loop',
    region: 'Bali',
    distance: '~350 km',
    duration: '2-3 Days',
    difficulty: 'Easy',
    bestSeason: 'Year Round',
    highlights: [
      'Denpasar → Uluwatu → Amed → Lovina',
      'Coastal roads dengan sea views',
      'Twisty mountain sections',
      'Beach stops & temples',
    ],
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop',
    description: 'Scenic coastal touring dengan mix of beach vibes dan mountain carving di Bali.',
  },
  {
    id: '3',
    name: 'Flores East to West',
    region: 'Flores, NTT',
    distance: '~650 km',
    duration: '5-7 Days',
    difficulty: 'Hard',
    bestSeason: 'May - Sep',
    highlights: [
      'Labuan Bajo → Ruteng → Ende → Maumere',
      'Extreme mountain roads',
      'Komodo National Park access',
      'Remote adventure touring',
    ],
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop',
    description: 'Epic adventure touring untuk experienced rider. Challenging roads, limited services, stunning views.',
  },
  {
    id: '4',
    name: 'Sumatra West Coast Highway',
    region: 'Sumatra',
    distance: '~800 km',
    duration: '4-5 Days',
    difficulty: 'Moderate-Hard',
    bestSeason: 'Jun - Aug',
    highlights: [
      'Banda Aceh → Medan → Padang → Bengkulu',
      'Coastal highway dengan ocean views',
      'Diverse landscapes & cultures',
      'Fresh seafood stops',
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    description: 'Long-distance touring dengan spectacular coastal scenery dan cultural diversity.',
  },
  {
    id: '5',
    name: 'Sulawesi Trans-Central',
    region: 'Sulawesi',
    distance: '~900 km',
    duration: '5-6 Days',
    difficulty: 'Hard',
    bestSeason: 'Apr - Oct',
    highlights: [
      'Makassar → Toraja → Tentena → Manado',
      'Extreme elevation changes',
      'Cultural experiences Toraja',
      'Remote mountain passes',
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    description: 'Adventure touring untuk expert rider. Challenging terrain, cultural immersion, limited support.',
  },
  {
    id: '6',
    name: 'East Java Volcano Circle',
    region: 'East Java',
    distance: '~450 km',
    duration: '3-4 Days',
    difficulty: 'Moderate',
    bestSeason: 'Apr - Nov',
    highlights: [
      'Surabaya → Bromo → Ijen → Banyuwangi',
      'Multiple volcano viewpoints',
      'Twisty mountain roads',
      'Coffee plantation stops',
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    description: 'Scenic volcano touring dengan twisty roads dan stunning sunrise viewpoints.',
  },
];

function RouteCard({ route }: { route: TouringRoute }) {
  const difficultyColor =
    route.difficulty === 'Easy'
      ? 'text-green-400 bg-green-500/20'
      : route.difficulty === 'Moderate'
      ? 'text-yellow-400 bg-yellow-500/20'
      : 'text-red-400 bg-red-500/20';

  return (
    <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-[#00e5ff]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]">
      <div className="relative h-56">
        <Image
          src={route.image}
          alt={route.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${difficultyColor}`}>
            {route.difficulty}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-3xl font-bebas text-white drop-shadow-lg">
            {route.name}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-white/10">
          <div>
            <p className="text-xs text-gray-500">Distance</p>
            <p className="text-sm font-bold text-white">{route.distance}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Duration</p>
            <p className="text-sm font-bold text-white">{route.duration}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Region</p>
            <p className="text-sm font-bold text-[#00e5ff]">{route.region}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Best Season</p>
            <p className="text-sm font-bold text-white">{route.bestSeason}</p>
          </div>
        </div>

        <p className="text-sm text-gray-300 mb-4">{route.description}</p>

        <div className="mb-4">
          <h4 className="text-xs font-bold text-[#ffc400] mb-2">✨ HIGHLIGHTS</h4>
          <ul className="text-xs text-gray-400 space-y-1">
            {route.highlights.map((highlight, i) => (
              <li key={i}>• {highlight}</li>
            ))}
          </ul>
        </div>

        <Link
          href={`/touring/${route.id}`}
          className="block w-full text-center py-2 bg-[#00e5ff]/20 hover:bg-[#00e5ff] hover:text-black text-[#00e5ff] font-bold rounded transition-colors"
        >
          View Detailed Route
        </Link>
      </div>
    </div>
  );
}

export default function TouringPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Breadcrumb */}
      <div className="border-b border-white/10 bg-black/80">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-[#ff1744] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Touring Routes & Tips</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 border-b border-white/10 bg-gradient-to-b from-[#00e5ff]/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-7xl">🗺️</span>
            <div>
              <h1 className="text-6xl font-bebas text-[#00e5ff] uppercase tracking-tight mb-2">
                Touring Routes Indonesia
              </h1>
              <p className="text-xl text-gray-400">
                Epic Motorcycle Adventures Across the Archipelago
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mb-8">
            Panduan lengkap touring motor sport di Indonesia. Dari scenic coastal roads hingga 
            challenging mountain passes dengan tips riding, hotel recommendations, dan emergency contacts.
          </p>
        </div>
      </section>

      {/* Routes Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-8">
            Popular Touring Routes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route) => (
              <RouteCard key={route.id} route={route} />
            ))}
          </div>
        </div>
      </section>

      {/* Touring Tips */}
      <section className="py-12 border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-8">
            Essential Touring Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg">
              <div className="text-4xl mb-3">🛠️</div>
              <h3 className="text-xl font-bold text-white mb-3">Pre-Departure Check</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>✓ Full service (oil, coolant, brake)</li>
                <li>✓ Check tire pressure & tread depth</li>
                <li>✓ Test all lights & signals</li>
                <li>✓ Chain tension & lubrication</li>
                <li>✓ Carry basic tools & spare parts</li>
                <li>✓ Emergency contact numbers</li>
              </ul>
            </div>
            <div className="p-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg">
              <div className="text-4xl mb-3">🎒</div>
              <h3 className="text-xl font-bold text-white mb-3">Packing Essentials</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>✓ Riding gear (jaket, gloves, boots)</li>
                <li>✓ Rain gear (waterproof)</li>
                <li>✓ First aid kit</li>
                <li>✓ Powerbank & phone mount</li>
                <li>✓ Sunscreen & lip balm</li>
                <li>✓ Hydration pack</li>
              </ul>
            </div>
            <div className="p-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-3">Safety on the Road</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>✓ Ride within your limits</li>
                <li>✓ Take breaks every 2 hours</li>
                <li>✓ Stay hydrated</li>
                <li>✓ Avoid riding at night in remote areas</li>
                <li>✓ Local SIM card for GPS & emergency</li>
                <li>✓ Share your route with someone</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-6">
            Emergency Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-[#ff1744]/20 border border-[#ff1744]/50 rounded-lg">
              <h3 className="text-sm font-bold text-white mb-2">🚨 Police</h3>
              <p className="text-2xl font-bebas text-[#ff1744]">110</p>
            </div>
            <div className="p-4 bg-[#ff1744]/20 border border-[#ff1744]/50 rounded-lg">
              <h3 className="text-sm font-bold text-white mb-2">🚑 Ambulance</h3>
              <p className="text-2xl font-bebas text-[#ff1744]">118 / 119</p>
            </div>
            <div className="p-4 bg-[#ff1744]/20 border border-[#ff1744]/50 rounded-lg">
              <h3 className="text-sm font-bold text-white mb-2">🔥 Fire Dept</h3>
              <p className="text-2xl font-bebas text-[#ff1744]">113</p>
            </div>
            <div className="p-4 bg-[#ff1744]/20 border border-[#ff1744]/50 rounded-lg">
              <h3 className="text-sm font-bold text-white mb-2">📞 Search & Rescue</h3>
              <p className="text-2xl font-bebas text-[#ff1744]">115</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bebas text-white mb-4">
            Share Your Touring Experience!
          </h2>
          <p className="text-gray-400 mb-6">
            Punya rute touring favorit? Bagikan pengalaman kamu untuk inspire riders lainnya.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#00e5ff] hover:bg-[#00e5ff]/80 text-black font-bold rounded-lg transition-colors"
          >
            Submit Route
          </Link>
        </div>
      </section>
    </main>
  );
}
