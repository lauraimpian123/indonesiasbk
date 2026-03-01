import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Indonesian Racing Riders Database 2024-2025 | IndonesiaSBK',
  description: 'Database rider balap Indonesia. Dari MotoGP, Moto2, Moto3, WSBK, ARRC hingga championship national. Profile lengkap & statistik.',
  keywords: 'rider indonesia, pembalap indonesia, andi gilang, gerry salim, galang hendra',
};

interface Rider {
  id: string;
  name: string;
  number: number;
  nationality: string;
  team: string;
  category: string;
  championships: string[];
  achievements: string[];
  image: string;
  age: number;
  status: 'Active' | 'Retired';
  social: {
    instagram?: string;
    twitter?: string;
  };
}

const riders: Rider[] = [
  {
    id: '1',
    name: 'Andi Gilang',
    number: 55,
    nationality: '🇮🇩 Indonesia',
    team: 'Astra Honda Racing Team',
    category: 'Moto3 / Asia Talent Cup',
    championships: ['Asia Talent Cup 2018'],
    achievements: [
      'Moto3 World Championship (2019-2021)',
      'Asia Talent Cup Champion',
      'IDC Champion Multiple Times',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    age: 23,
    status: 'Active',
    social: {
      instagram: '@andigilang_55',
      twitter: '@andigilang55',
    },
  },
  {
    id: '2',
    name: 'Gerry Salim',
    number: 23,
    nationality: '🇮🇩 Indonesia',
    team: 'Astra Honda Racing Team',
    category: 'Moto3',
    championships: ['Asia Production 250cc 2019'],
    achievements: [
      'Moto3 World Championship Rider',
      'ARRC AP250 Champion',
      'IDC Multiple Podiums',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    age: 24,
    status: 'Active',
    social: {
      instagram: '@gerrysalim23',
    },
  },
  {
    id: '3',
    name: 'Galang Hendra Pratama',
    number: 8,
    nationality: '🇮🇩 Indonesia',
    team: 'Yamaha Racing Indonesia',
    category: 'Asia Road Racing Championship',
    championships: ['ARRC ASB1000 2016-2018'],
    achievements: [
      '3x ARRC Superbike Champion',
      'Yamaha Thailand Racing Team',
      'Fastest Indonesian at World Level',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    age: 28,
    status: 'Active',
    social: {
      instagram: '@galanghendra8',
    },
  },
  {
    id: '4',
    name: 'Zulfahmi Khairuddin',
    number: 63,
    nationality: '🇲🇾 Malaysia',
    team: 'Pertamina Mandalika SAG Team',
    category: 'Moto2',
    championships: [],
    achievements: [
      'Moto2 World Championship Rider',
      'First Malaysian in Moto2',
      'ARRC SuperSports Champion',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    age: 29,
    status: 'Active',
    social: {
      instagram: '@zulfahmi_63',
    },
  },
  {
    id: '5',
    name: 'Wahyu Aji Trilaksana',
    number: 32,
    nationality: '🇮🇩 Indonesia',
    team: 'Yamaha Racing Indonesia',
    category: 'ARRC SuperSports 600',
    championships: [],
    achievements: [
      'ARRC SS600 Multiple Podiums',
      'IDC Supersport Champion',
      'Asia Road Racing Regular',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    age: 25,
    status: 'Active',
    social: {
      instagram: '@wahyuaji_32',
    },
  },
  {
    id: '6',
    name: 'Reynaldo Ratukore',
    number: 1,
    nationality: '🇮🇩 Indonesia',
    team: 'Kawasaki Racing Team',
    category: 'IDC Superbike',
    championships: ['IDC Superbike 2022-2023'],
    achievements: [
      'Multi-time IDC Champion',
      'Fastest Lap Records',
      'Kawasaki Factory Rider',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    age: 27,
    status: 'Active',
    social: {
      instagram: '@reynaldo_ratukore',
    },
  },
  {
    id: '7',
    name: 'Ahmad Yudhistira',
    number: 17,
    nationality: '🇮🇩 Indonesia',
    team: 'Yamaha Racing Indonesia',
    category: 'ARRC ASB1000',
    championships: [],
    achievements: [
      'ARRC Superbike Podium Finisher',
      'IDC Champion',
      'Track Record Holder Sentul',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    age: 26,
    status: 'Active',
    social: {
      instagram: '@ahmadyudhistira17',
    },
  },
  {
    id: '8',
    name: 'Anggi Setiawan',
    number: 21,
    nationality: '🇮🇩 Indonesia',
    team: 'Motul Respiro Yamaha',
    category: 'IDC SuperSport 600',
    championships: ['IDC SS600 2021'],
    achievements: [
      'IDC Supersport Champion',
      'ARRC Regular',
      'Young Talent Indonesia',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    age: 22,
    status: 'Active',
    social: {
      instagram: '@anggisetiawan21',
    },
  },
];

function RiderCard({ rider }: { rider: Rider }) {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-[#ffc400]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,196,0,0.3)]">
      <div className="relative h-64 bg-gradient-to-b from-black/20 to-black/80">
        <Image
          src={rider.image}
          alt={rider.name}
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full ${
              rider.status === 'Active'
                ? 'bg-green-500 text-white'
                : 'bg-gray-500 text-white'
            }`}
          >
            {rider.status}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="text-6xl font-black text-white/30 font-bebas">
            #{rider.number}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bebas text-white mb-1">{rider.name}</h3>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm text-gray-400">{rider.nationality}</span>
          <span className="text-gray-600">•</span>
          <span className="text-sm text-gray-400">{rider.age} years old</span>
        </div>

        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-1">Current Team</p>
          <p className="text-sm font-bold text-[#ffc400]">{rider.team}</p>
        </div>

        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-1">Category</p>
          <p className="text-sm text-gray-300">{rider.category}</p>
        </div>

        {rider.championships.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-bold text-[#ffc400] mb-2">
              🏆 CHAMPIONSHIPS
            </h4>
            <ul className="text-xs text-gray-400 space-y-1">
              {rider.championships.map((championship, i) => (
                <li key={i}>• {championship}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-4">
          <h4 className="text-xs font-bold text-green-400 mb-2">
            ✓ KEY ACHIEVEMENTS
          </h4>
          <ul className="text-xs text-gray-400 space-y-1">
            {rider.achievements.slice(0, 3).map((achievement, i) => (
              <li key={i}>• {achievement}</li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-white/10 flex items-center gap-4">
          {rider.social.instagram && (
            <a
              href={`https://instagram.com/${rider.social.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              📱 {rider.social.instagram}
            </a>
          )}
          {rider.social.twitter && (
            <a
              href={`https://twitter.com/${rider.social.twitter.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              🐦 {rider.social.twitter}
            </a>
          )}
        </div>

        <Link
          href={`/racing/riders/${rider.id}`}
          className="block mt-4 w-full text-center py-2 bg-[#ffc400]/20 hover:bg-[#ffc400] hover:text-black text-[#ffc400] font-bold rounded transition-colors"
        >
          View Full Profile
        </Link>
      </div>
    </div>
  );
}

export default function RacingRidersPage() {
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
            <span className="text-white">Racing Riders</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🏁</span>
            <h1 className="text-5xl font-bebas text-[#ffc400] uppercase tracking-tight">
              Indonesian Racing Riders
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mb-6">
            Database lengkap rider balap Indonesia dari berbagai championship. Profile, statistik, 
            achievement, dan social media untuk follow perjalanan racing mereka.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/racing/teams"
              className="px-4 py-2 bg-white/10 hover:bg-[#ff1744] text-white rounded-lg transition-colors text-sm"
            >
              View Teams
            </Link>
            <Link
              href="/racing/school"
              className="px-4 py-2 bg-white/10 hover:bg-[#00e5ff] text-white rounded-lg transition-colors text-sm"
            >
              Racing Schools
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b border-white/10 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-[#ffc400] text-black font-bold rounded-lg">
              All Riders
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              World Championship
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              ARRC
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              IDC
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              Active
            </button>
          </div>
        </div>
      </section>

      {/* Riders Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {riders.map((rider) => (
              <RiderCard key={rider.id} rider={rider} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-8">
            Indonesian Riders Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg text-center">
              <div className="text-4xl font-black text-[#ffc400] font-bebas mb-2">
                8+
              </div>
              <p className="text-sm text-gray-400">Active World Championship Riders</p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg text-center">
              <div className="text-4xl font-black text-[#ffc400] font-bebas mb-2">
                15+
              </div>
              <p className="text-sm text-gray-400">ARRC Competitors</p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg text-center">
              <div className="text-4xl font-black text-[#ffc400] font-bebas mb-2">
                50+
              </div>
              <p className="text-sm text-gray-400">IDC Licensed Racers</p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg text-center">
              <div className="text-4xl font-black text-[#ffc400] font-bebas mb-2">
                3
              </div>
              <p className="text-sm text-gray-400">ARRC Champions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bebas text-white mb-4">
            Rider Profile Belum Terdaftar?
          </h2>
          <p className="text-gray-400 mb-6">
            Daftarkan profile rider kamu di database IndonesiaSBK.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#ffc400] hover:bg-[#ffc400]/80 text-black font-bold rounded-lg transition-colors"
          >
            Submit Rider Profile
          </Link>
        </div>
      </section>
    </main>
  );
}
