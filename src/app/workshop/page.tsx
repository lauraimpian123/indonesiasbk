import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Workshop & Modifikasi Motor Sport 2024-2025 | IndonesiaSBK',
  description: 'Direktori bengkel modifikasi motor sport terbaik di Indonesia. ECU remap, exhaust, suspension upgrade, custom build untuk track & street.',
  keywords: 'workshop motor sport, bengkel modifikasi, ecu remap indonesia, exhaust custom',
};

interface Workshop {
  id: string;
  name: string;
  location: string;
  specialization: string[];
  services: string[];
  priceRange: string;
  rating: number;
  image: string;
  contact: {
    phone: string;
    instagram: string;
  };
  description: string;
}

const workshops: Workshop[] = [
  {
    id: '1',
    name: 'Takumi Speed Shop',
    location: 'Jakarta Selatan',
    specialization: ['ECU Remap', 'Dyno Tuning', 'Track Setup'],
    services: [
      'ECU Flash & Custom Mapping',
      'Dyno Power Run',
      'Suspension Setup',
      'Full Exhaust System',
      'Track Day Preparation',
    ],
    priceRange: 'Rp 2 - 20 Juta',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop',
    contact: {
      phone: '+62 812-3456-7890',
      instagram: '@takumispeed',
    },
    description: 'Specialist ECU tuning dan track setup dengan dyno Dynojet 250i. Trusted by race teams.',
  },
  {
    id: '2',
    name: 'Akrapovic Official Dealer Indonesia',
    location: 'Jakarta, Surabaya, Bali',
    specialization: ['Exhaust System', 'Titanium Fabrication'],
    services: [
      'Full Akrapovic Racing System',
      'Custom Exhaust Design',
      'Slip-On Installation',
      'Carbon Part Supply',
    ],
    priceRange: 'Rp 5 - 50 Juta',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop',
    contact: {
      phone: '+62 813-4567-8901',
      instagram: '@akrapovic_indonesia',
    },
    description: 'Authorized dealer Akrapovic exhaust system dengan installation certified technician.',
  },
  {
    id: '3',
    name: 'Öhlins Service Center Indonesia',
    location: 'Jakarta, Bandung',
    specialization: ['Suspension Tuning', 'Fork Service', 'Shock Rebuild'],
    services: [
      'Öhlins Installation & Setup',
      'Fork/Shock Rebuild',
      'Spring Rate Calculation',
      'Race Setup Consultation',
      'Track Day Setup',
    ],
    priceRange: 'Rp 3 - 30 Juta',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop',
    contact: {
      phone: '+62 814-5678-9012',
      instagram: '@ohlins_indonesia',
    },
    description: 'Official Öhlins service center dengan certified technician untuk premium suspension.',
  },
  {
    id: '4',
    name: 'TTS Motorsport',
    location: 'Tangerang',
    specialization: ['Brake System', 'Brembo Upgrade', 'Race Parts'],
    services: [
      'Brembo Brake System Upgrade',
      'Brake Pad Selection',
      'Braided Brake Line',
      'Master Cylinder Upgrade',
      'Track Brake Setup',
    ],
    priceRange: 'Rp 5 - 25 Juta',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop',
    contact: {
      phone: '+62 815-6789-0123',
      instagram: '@tts_motorsport',
    },
    description: 'Specialist brake system upgrade dengan produk Brembo, AP Racing, dan Nissin.',
  },
  {
    id: '5',
    name: 'Carbon Creations Indonesia',
    location: 'Surabaya',
    specialization: ['Carbon Fiber Parts', 'Custom Fabrication'],
    services: [
      'Carbon Fiber Fairings',
      'Custom Tank Cover',
      'Tail Section',
      'Winglets Fabrication',
      'Lightweight Parts',
    ],
    priceRange: 'Rp 2 - 15 Juta',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop',
    contact: {
      phone: '+62 816-7890-1234',
      instagram: '@carbon_creations_id',
    },
    description: 'Custom carbon fiber parts fabrication dengan autoclave process untuk quality maksimal.',
  },
  {
    id: '6',
    name: 'Race DNA Workshop',
    location: 'Bandung',
    specialization: ['Full Build', 'Race Prep', 'Restoration'],
    services: [
      'Complete Race Build',
      'Engine Blueprint',
      'Transmission Upgrade',
      'Weight Reduction Program',
      'Track Day Support',
    ],
    priceRange: 'Rp 10 - 100 Juta+',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop',
    contact: {
      phone: '+62 817-8901-2345',
      instagram: '@racedna_workshop',
    },
    description: 'Premium workshop untuk complete race bike build dari konsep hingga track-ready.',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-lg ${
            star <= rating ? 'text-[#ffc400]' : 'text-gray-600'
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function WorkshopCard({ workshop }: { workshop: Workshop }) {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-[#ff1744]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,23,68,0.3)]">
      <div className="relative h-48">
        <Image
          src={workshop.image}
          alt={workshop.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4">
          <StarRating rating={workshop.rating} />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bebas text-white mb-1">{workshop.name}</h3>
        <p className="text-sm text-gray-400 mb-4">📍 {workshop.location}</p>

        <p className="text-sm text-gray-300 mb-4">{workshop.description}</p>

        <div className="mb-4">
          <h4 className="text-xs font-bold text-[#ff1744] mb-2">🔧 SPECIALIZATION</h4>
          <div className="flex flex-wrap gap-2">
            {workshop.specialization.map((spec, i) => (
              <span
                key={i}
                className="text-xs bg-[#ff1744]/20 text-[#ff1744] px-2 py-1 rounded"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-xs font-bold text-[#00e5ff] mb-2">✓ SERVICES</h4>
          <ul className="text-xs text-gray-400 space-y-1">
            {workshop.services.slice(0, 4).map((service, i) => (
              <li key={i}>• {service}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4 pt-4 border-t border-white/10">
          <p className="text-xs text-gray-500 mb-1">Price Range</p>
          <p className="text-sm font-bold text-[#ffc400]">{workshop.priceRange}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>📞</span>
            <a href={`tel:${workshop.contact.phone}`} className="hover:text-white transition-colors">
              {workshop.contact.phone}
            </a>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>📱</span>
            <a
              href={`https://instagram.com/${workshop.contact.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {workshop.contact.instagram}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorkshopPage() {
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
            <span className="text-white">Workshop & Modifikasi</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 border-b border-white/10 bg-gradient-to-b from-[#ff1744]/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-7xl">🔧</span>
            <div>
              <h1 className="text-6xl font-bebas text-[#ff1744] uppercase tracking-tight mb-2">
                Workshop & Modifikasi
              </h1>
              <p className="text-xl text-gray-400">
                Trusted Motor Sport Workshops in Indonesia
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mb-8">
            Direktori bengkel modifikasi motor sport terpercaya di Indonesia. Dari ECU remap, 
            exhaust system, suspension upgrade, hingga complete race bike build dengan parts 
            berkualitas dan technician berpengalaman.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-sm font-bold text-[#ff1744] mb-1">🏁 Track Ready</h3>
              <p className="text-xs text-gray-400">Setup khusus untuk track day & racing</p>
            </div>
            <div className="p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-sm font-bold text-[#ff1744] mb-1">⚡ Performance</h3>
              <p className="text-xs text-gray-400">Power gains dengan dyno tuning</p>
            </div>
            <div className="p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-sm font-bold text-[#ff1744] mb-1">🛡️ Safety First</h3>
              <p className="text-xs text-gray-400">Brake & suspension upgrade</p>
            </div>
            <div className="p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-sm font-bold text-[#ff1744] mb-1">💎 Premium Parts</h3>
              <p className="text-xs text-gray-400">Original aftermarket brands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b border-white/10 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-[#ff1744] text-white font-bold rounded-lg">
              All Workshops
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              ECU Tuning
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              Exhaust
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              Suspension
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              Brake System
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              Full Build
            </button>
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-8">
            Recommended Workshops
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((workshop) => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </div>
        </div>
      </section>

      {/* Modification Guide */}
      <section className="py-12 border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-8">
            Modification Priority Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-3">1. Safety First</h3>
              <p className="text-sm text-gray-400 mb-3">
                Prioritas pertama: brake dan suspension upgrade untuk handling dan stopping power.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Brake pads high-performance</li>
                <li>• Braided brake lines</li>
                <li>• Suspension adjustment/upgrade</li>
                <li>• Fresh tires dengan compound sesuai</li>
              </ul>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">2. Performance</h3>
              <p className="text-sm text-gray-400 mb-3">
                Setelah safety oke, tingkatkan power dengan tuning yang proper dan measurable.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Dyno baseline power run</li>
                <li>• Exhaust system (slip-on/full)</li>
                <li>• ECU flash/custom mapping</li>
                <li>• Air filter upgrade</li>
              </ul>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-xl font-bold text-white mb-3">3. Aesthetics</h3>
              <p className="text-sm text-gray-400 mb-3">
                Last priority tapi tetap penting: looks dan weight reduction dengan carbon parts.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Carbon fiber parts</li>
                <li>• Custom paint/wrap</li>
                <li>• Lightweight wheels</li>
                <li>• LED lighting upgrade</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bebas text-white mb-4">
            Punya Workshop Modifikasi?
          </h2>
          <p className="text-gray-400 mb-6">
            Daftarkan workshop kamu di database IndonesiaSBK untuk exposure lebih luas.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#ff1744] hover:bg-[#ff1744]/80 text-white font-bold rounded-lg transition-colors"
          >
            Submit Workshop
          </Link>
        </div>
      </section>
    </main>
  );
}
