import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Racing School Indonesia 2024-2025 | Sekolah Balap Motor | IndonesiaSBK',
  description: 'Daftar sekolah balap motor terbaik di Indonesia. Track day, basic racing course, advanced riding technique di Sentul, Mandalika.',
  keywords: 'racing school indonesia, sekolah balap motor, track day indonesia, sentul racing school',
};

interface RacingSchool {
  id: string;
  name: string;
  location: string;
  circuit: string;
  courses: string[];
  price: string;
  duration: string;
  level: string;
  image: string;
  contact: {
    phone: string;
    email: string;
    instagram: string;
  };
  description: string;
  features: string[];
}

const schools: RacingSchool[] = [
  {
    id: '1',
    name: 'Indonesia Superbike Academy',
    location: 'Sentul, Bogor',
    circuit: 'Sentul International Circuit',
    courses: ['Basic Racing Course', 'Intermediate Track Day', 'Advanced Race Craft'],
    price: 'Rp 2.5 - 8 Juta',
    duration: '1-3 Days',
    level: 'Beginner to Advanced',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    contact: {
      phone: '+62 812-3456-7890',
      email: 'info@indonesiasbk-academy.com',
      instagram: '@idc_racing',
    },
    description: 'Racing school official Indonesia Superbike Championship dengan instruktur berpengalaman WorldSBK.',
    features: ['Professional Instructors', 'Safety Gear Provided', 'Video Analysis', 'Telemetry Data'],
  },
  {
    id: '2',
    name: 'Yamaha Racing School Indonesia',
    location: 'Mandalika, NTB',
    circuit: 'Pertamina Mandalika International Circuit',
    courses: ['YZF-R15 Track Day', 'YZF-R25 Racing Basics', 'R3 Cup Training'],
    price: 'Rp 3 - 6 Juta',
    duration: '1-2 Days',
    level: 'Beginner to Intermediate',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    contact: {
      phone: '+62 813-4567-8901',
      email: 'racing@yamaha-motor.co.id',
      instagram: '@yamaha_racing_id',
    },
    description: 'Official Yamaha racing program dengan armada motor Yamaha R15, R25, R3 di sirkuit MotoGP Mandalika.',
    features: ['Yamaha Bike Fleet', 'MotoGP Circuit', 'Race License Path', 'ARRC Rider Alumni'],
  },
  {
    id: '3',
    name: 'Astra Honda Riding Academy',
    location: 'Sentul, Bogor',
    circuit: 'Sentul Karting Circuit',
    courses: ['CBR150R Basic', 'CBR250RR Track Day', 'Road Safety Course'],
    price: 'Rp 1.5 - 5 Juta',
    duration: '1 Day',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    contact: {
      phone: '+62 814-5678-9012',
      email: 'academy@astra-honda.com',
      instagram: '@ahrt_official',
    },
    description: 'Honda racing academy fokus pada safety riding dan basic racing technique untuk pemula.',
    features: ['Beginner Friendly', 'Safety First', 'Honda Bike Fleet', 'Certificate'],
  },
  {
    id: '4',
    name: 'MSBK Track Day Mandalika',
    location: 'Mandalika, NTB',
    circuit: 'Pertamina Mandalika Circuit',
    courses: ['Open Track Day', 'Cornering Clinic', 'Lap Time Attack'],
    price: 'Rp 1 - 3 Juta',
    duration: '1 Day',
    level: 'All Levels',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    contact: {
      phone: '+62 815-6789-0123',
      email: 'trackday@msbk.id',
      instagram: '@msbk_official',
    },
    description: 'Track day organizer reguler di Mandalika dengan safety marshal dan ambulance standby.',
    features: ['Bring Your Own Bike', 'Multiple Sessions', 'Photo/Video Service', 'Timing System'],
  },
  {
    id: '5',
    name: 'California Superbike School Indonesia',
    location: 'Sentul, Bogor',
    circuit: 'Sentul International Circuit',
    courses: ['Level 1 Fundamentals', 'Level 2 Techniques', 'Level 3 Advanced', 'Level 4 Mastery'],
    price: 'Rp 8 - 12 Juta',
    duration: '1-2 Days',
    level: 'All Levels',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    contact: {
      phone: '+62 816-7890-1234',
      email: 'indonesia@superbikeschool.com',
      instagram: '@cssturnology',
    },
    description: 'World-renowned riding school dengan metodologi Keith Code dan instruktur internasional.',
    features: ['International Standard', 'BMW S1000RR Fleet', 'Video Review', 'Track Insurance'],
  },
  {
    id: '6',
    name: 'Kawasaki Team Green Racing Camp',
    location: 'Jakarta & Sentul',
    circuit: 'Various',
    courses: ['Ninja 250 Track Experience', 'ZX-6R Racing Course', 'Team Green Cup Prep'],
    price: 'Rp 2 - 5 Juta',
    duration: '1-2 Days',
    level: 'Beginner to Intermediate',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    contact: {
      phone: '+62 817-8901-2345',
      email: 'teamgreen@kawasaki-motor.co.id',
      instagram: '@teamgreen_indonesia',
    },
    description: 'Kawasaki racing program dengan talent scouting untuk kompetisi national.',
    features: ['Kawasaki Fleet', 'Competition Path', 'Sponsorship Opportunities', 'Youth Program'],
  },
];

function SchoolCard({ school }: { school: RacingSchool }) {
  return (
    <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-[#00e5ff]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]">
      <div className="relative h-48">
        <Image
          src={school.image}
          alt={school.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-[#00e5ff] text-black text-xs font-bold px-3 py-1 rounded-full">
            {school.level}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bebas text-white mb-2">{school.name}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <span>📍</span>
          <span>{school.location} • {school.circuit}</span>
        </div>

        <p className="text-sm text-gray-300 mb-4">{school.description}</p>

        <div className="space-y-3 mb-4">
          <div>
            <h4 className="text-xs font-bold text-[#ffc400] mb-2">📚 COURSES</h4>
            <ul className="text-xs text-gray-400 space-y-1">
              {school.courses.map((course, i) => (
                <li key={i}>• {course}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <div>
              <p className="text-xs text-gray-500">Price Range</p>
              <p className="text-sm font-bold text-[#00e5ff]">{school.price}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Duration</p>
              <p className="text-sm font-bold text-white">{school.duration}</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-green-400 mb-2">✓ FEATURES</h4>
            <div className="flex flex-wrap gap-2">
              {school.features.map((feature, i) => (
                <span
                  key={i}
                  className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>📞</span>
            <a href={`tel:${school.contact.phone}`} className="hover:text-white transition-colors">
              {school.contact.phone}
            </a>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>📧</span>
            <a href={`mailto:${school.contact.email}`} className="hover:text-white transition-colors">
              {school.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>📱</span>
            <a
              href={`https://instagram.com/${school.contact.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {school.contact.instagram}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RacingSchoolPage() {
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
            <span className="text-white">Racing Schools</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🏫</span>
            <h1 className="text-5xl font-bebas text-[#00e5ff] uppercase tracking-tight">
              Racing School Indonesia
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mb-6">
            Direktori sekolah balap motor di Indonesia. Track day, basic riding course, hingga 
            advanced race craft training di sirkuit Sentul dan Mandalika dengan instruktur profesional.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-sm font-bold text-[#00e5ff] mb-1">Safety First</h3>
              <p className="text-xs text-gray-400">Semua school prioritaskan keamanan rider</p>
            </div>
            <div className="p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-sm font-bold text-[#00e5ff] mb-1">Pro Instructors</h3>
              <p className="text-xs text-gray-400">Instruktur berpengalaman racing national/world</p>
            </div>
            <div className="p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-sm font-bold text-[#00e5ff] mb-1">All Levels</h3>
              <p className="text-xs text-gray-400">Dari pemula sampai advanced racer</p>
            </div>
            <div className="p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-sm font-bold text-[#00e5ff] mb-1">Race License</h3>
              <p className="text-xs text-gray-400">Path menuju kompetisi resmi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schools Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schools.map((school) => (
              <SchoolCard key={school.id} school={school} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Racing School */}
      <section className="py-12 border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-6">
            Kenapa Ikut Racing School?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-2">Safety Skills</h3>
              <p className="text-sm text-gray-400">
                Belajar teknik riding yang benar dan aman. Emergency braking, counter-steering, 
                body position yang proper untuk menghindari crash.
              </p>
            </div>
            <div className="p-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">Lap Time Improvement</h3>
              <p className="text-sm text-gray-400">
                Instruktur profesional akan identifikasi kesalahan dan bantu kamu improve lap time 
                dengan teknik cornering, throttle control, dan racing line.
              </p>
            </div>
            <div className="p-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-xl font-bold text-white mb-2">Competition Ready</h3>
              <p className="text-sm text-gray-400">
                Jalan menuju kompetisi resmi dimulai dari sini. Dapatkan race license dan 
                pengalaman untuk ikut IDC, ARRC, atau championship lainnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bebas text-white mb-4">
            Punya Racing School?
          </h2>
          <p className="text-gray-400 mb-6">
            Daftarkan racing school kamu di database IndonesiaSBK.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#00e5ff] hover:bg-[#00e5ff]/80 text-black font-bold rounded-lg transition-colors"
          >
            Submit School
          </Link>
        </div>
      </section>
    </main>
  );
}
