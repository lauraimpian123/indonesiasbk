import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Racing Teams & Manufacturers Indonesia 2024-2025 | IndonesiaSBK',
  description: 'Daftar lengkap tim balap dan manufacturer di Indonesia. Honda Racing, Yamaha Racing Indonesia, Kawasaki, Pertamina Mandalika SAG.',
  keywords: 'racing teams indonesia, tim balap motor, yamaha racing, honda racing, mandalika racing',
};

interface RacingTeam {
  id: string;
  name: string;
  category: string;
  manufacturer: string;
  logo: string;
  riders: string[];
  championships: string[];
  established: string;
  website: string;
  description: string;
}

const teams: RacingTeam[] = [
  {
    id: '1',
    name: 'Pertamina Mandalika SAG Team',
    category: 'Moto2',
    manufacturer: 'Kalex',
    logo: '🏁',
    riders: ['Zulfahmi Khairuddin', 'John McPhee'],
    championships: ['Moto2 World Championship'],
    established: '2022',
    website: 'mandalikasag.com',
    description: 'Tim balap Indonesia pertama di Moto2 dengan dukungan Pertamina dan Mandalika Racing Team.',
  },
  {
    id: '2',
    name: 'Yamaha Racing Indonesia',
    category: 'National Championship',
    manufacturer: 'Yamaha',
    logo: '🏍️',
    riders: ['Galang Hendra Pratama', 'Wahyu Aji Trilaksana'],
    championships: ['Asia Road Racing Championship', 'Indonesia Superbike Championship'],
    established: '2010',
    website: 'yamaha-racing.co.id',
    description: 'Tim racing official Yamaha Indonesia yang konsisten berjuang di ARRC dan IDC.',
  },
  {
    id: '3',
    name: 'Astra Honda Racing Team',
    category: 'National Championship',
    manufacturer: 'Honda',
    logo: '🏍️',
    riders: ['Andi Gilang', 'Gerry Salim'],
    championships: ['Asia Production 250cc', 'Honda Dream Cup'],
    established: '2008',
    website: 'astra-honda.com/racing',
    description: 'Tim balap official Honda dengan program talent scouting terbaik di Indonesia.',
  },
  {
    id: '4',
    name: 'Kawasaki Racing Team Indonesia',
    category: 'National Championship',
    manufacturer: 'Kawasaki',
    logo: '🏍️',
    riders: ['Reynaldo Ratukore', 'Ahmad Yudhistira'],
    championships: ['Indonesia Superbike Championship'],
    established: '2015',
    website: 'kawasaki-racing.co.id',
    description: 'Tim racing Kawasaki dengan dominasi di kelas superbike Indonesia.',
  },
  {
    id: '5',
    name: 'Motul Respiro Yamaha',
    category: 'Regional Championship',
    manufacturer: 'Yamaha',
    logo: '🏍️',
    riders: ['Anggi Setiawan', 'M. Adenanta Putra'],
    championships: ['IDC SuperSport 600cc'],
    established: '2018',
    website: '',
    description: 'Tim independen dengan dukungan Motul dan Respiro yang kompetitif di kelas supersport.',
  },
  {
    id: '6',
    name: 'Webike Idemitsu Honda Team Asia',
    category: 'Moto2 / Moto3',
    manufacturer: 'Honda',
    logo: '🏁',
    riders: ['Ai Ogura', 'Somkiat Chantra'],
    championships: ['Moto2 World Championship'],
    established: '2014',
    website: 'teamasia-racing.com',
    description: 'Tim Asia dengan base di Indonesia yang berkompetisi di level World Championship.',
  },
];

function TeamCard({ team }: { team: RacingTeam }) {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-[#ff1744]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,23,68,0.3)]">
      <div className="flex items-start justify-between mb-4">
        <div className="text-5xl">{team.logo}</div>
        <div className="flex flex-col items-end gap-2">
          <span className="bg-[#ff1744] text-white text-xs font-bold px-3 py-1 rounded-full">
            {team.category}
          </span>
          <span className="bg-white/10 text-gray-400 text-xs px-3 py-1 rounded-full">
            Est. {team.established}
          </span>
        </div>
      </div>

      <h3 className="text-2xl font-bebas text-white mb-2">{team.name}</h3>
      <p className="text-sm text-gray-400 mb-1">Manufacturer: {team.manufacturer}</p>
      {team.website && (
        <a
          href={`https://${team.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#00e5ff] hover:text-white transition-colors"
        >
          {team.website} →
        </a>
      )}

      <p className="text-sm text-gray-300 mt-4 mb-4">{team.description}</p>

      <div className="space-y-3">
        <div>
          <h4 className="text-xs font-bold text-[#ffc400] mb-2">🏆 CHAMPIONSHIPS</h4>
          <ul className="text-xs text-gray-400 space-y-1">
            {team.championships.map((championship, i) => (
              <li key={i}>• {championship}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-[#00e5ff] mb-2">👤 RIDERS</h4>
          <ul className="text-xs text-gray-400 space-y-1">
            {team.riders.map((rider, i) => (
              <li key={i}>• {rider}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/10">
        <Link
          href={`/racing/teams/${team.id}`}
          className="text-[#ff1744] hover:text-white text-sm font-bold transition-colors"
        >
          View Team Profile →
        </Link>
      </div>
    </div>
  );
}

export default function RacingTeamsPage() {
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
            <span className="text-white">Racing Teams</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🏁</span>
            <h1 className="text-5xl font-bebas text-[#ff1744] uppercase tracking-tight">
              Racing Teams & Manufacturers
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mb-6">
            Direktori lengkap tim balap motor di Indonesia. Dari World Championship MotoGP hingga 
            regional racing series dengan informasi rider, achievement, dan kontak.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/racing/riders"
              className="px-4 py-2 bg-white/10 hover:bg-[#ff1744] text-white rounded-lg transition-colors text-sm"
            >
              View Riders
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
            <button className="px-4 py-2 bg-[#ff1744] text-white font-bold rounded-lg">
              All Teams
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              World Championship
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              National
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              Regional
            </button>
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturers Section */}
      <section className="py-12 border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-8">
            Manufacturers in Indonesia
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg text-center hover:border-[#ff1744]/50 transition-colors">
              <div className="text-4xl mb-3">🏍️</div>
              <h3 className="text-xl font-bold text-white mb-1">Honda</h3>
              <p className="text-xs text-gray-400">3 Teams</p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg text-center hover:border-[#ff1744]/50 transition-colors">
              <div className="text-4xl mb-3">🏍️</div>
              <h3 className="text-xl font-bold text-white mb-1">Yamaha</h3>
              <p className="text-xs text-gray-400">2 Teams</p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg text-center hover:border-[#ff1744]/50 transition-colors">
              <div className="text-4xl mb-3">🏍️</div>
              <h3 className="text-xl font-bold text-white mb-1">Kawasaki</h3>
              <p className="text-xs text-gray-400">1 Team</p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg text-center hover:border-[#ff1744]/50 transition-colors">
              <div className="text-4xl mb-3">🏍️</div>
              <h3 className="text-xl font-bold text-white mb-1">Kalex</h3>
              <p className="text-xs text-gray-400">1 Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bebas text-white mb-4">
            Tim Racing Belum Terdaftar?
          </h2>
          <p className="text-gray-400 mb-6">
            Daftarkan tim racing kamu di database IndonesiaSBK.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#ff1744] hover:bg-[#ff1744]/80 text-white font-bold rounded-lg transition-colors"
          >
            Register Team
          </Link>
        </div>
      </section>
    </main>
  );
}
