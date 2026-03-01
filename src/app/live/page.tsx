import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Live Race Streaming 2024-2025 | Nonton MotoGP, ARRC, IDC | IndonesiaSBK',
  description: 'Panduan lengkap live streaming balapan motor. MotoGP, WSBK, ARRC, IDC dengan schedule, channel, dan subscription info.',
  keywords: 'live motogp streaming, nonton arrc, idc live, race streaming indonesia',
};

interface Championship {
  id: string;
  name: string;
  logo: string;
  category: string;
  schedule: string;
  platforms: {
    name: string;
    type: string;
    subscription: string;
    quality: string;
  }[];
  description: string;
}

const championships: Championship[] = [
  {
    id: '1',
    name: 'MotoGP World Championship',
    logo: '🏁',
    category: 'World Championship',
    schedule: 'Mar - Nov (20 Rounds)',
    platforms: [
      {
        name: 'VideoPass (Official)',
        type: 'Subscription',
        subscription: '€139.99/season atau €29.99/month',
        quality: '1080p HD + Onboard Cameras',
      },
      {
        name: 'Fox Sports Indonesia',
        type: 'Cable TV',
        subscription: 'via IndiHome, First Media, Transvision',
        quality: '1080i HD',
      },
      {
        name: 'Vision+ (Streaming)',
        type: 'Free/Premium',
        subscription: 'Free dengan ads atau Rp 39k/month',
        quality: '720p/1080p',
      },
    ],
    description: 'Premier class racing dengan Ducati, Honda, Yamaha, KTM, Aprilia. Indonesian riders in Moto2/Moto3.',
  },
  {
    id: '2',
    name: 'WorldSBK Superbike Championship',
    logo: '🏍️',
    category: 'World Championship',
    schedule: 'Feb - Oct (12 Rounds)',
    platforms: [
      {
        name: 'WorldSBK VideoPass',
        type: 'Subscription',
        subscription: '€49.99/season',
        quality: '1080p HD',
      },
      {
        name: 'YouTube WorldSBK (Highlights)',
        type: 'Free',
        subscription: 'Free',
        quality: '1080p',
      },
    ],
    description: 'Production-based superbike racing dengan Ducati Panigale V4R, BMW M1000RR, Kawasaki ZX-10RR.',
  },
  {
    id: '3',
    name: 'Asia Road Racing Championship',
    logo: '🏁',
    category: 'Regional Championship',
    schedule: 'Apr - Nov (6 Rounds)',
    platforms: [
      {
        name: 'ARRC Official YouTube',
        type: 'Free',
        subscription: 'Free',
        quality: '1080p HD',
      },
      {
        name: 'FIM Asia Facebook Live',
        type: 'Free',
        subscription: 'Free',
        quality: '720p',
      },
    ],
    description: 'Regional championship dengan banyak rider Indonesia. ASB1000, SS600, AP250, UB150 classes.',
  },
  {
    id: '4',
    name: 'Indonesia Superbike Championship',
    logo: '🇮🇩',
    category: 'National Championship',
    schedule: 'Mar - Nov (8 Rounds)',
    platforms: [
      {
        name: 'IDC Official YouTube',
        type: 'Free',
        subscription: 'Free',
        quality: '1080p',
      },
      {
        name: 'RCTI+ Streaming',
        type: 'Free',
        subscription: 'Free dengan registrasi',
        quality: '720p',
      },
    ],
    description: 'National championship di Sentul dan Mandalika dengan kelas superbike, supersport, underbone.',
  },
  {
    id: '5',
    name: 'Formula 1 World Championship',
    logo: '🏎️',
    category: 'Motorsport (Bonus)',
    schedule: 'Mar - Nov (24 Races)',
    platforms: [
      {
        name: 'F1 TV Pro',
        type: 'Subscription',
        subscription: '$79.99/year atau $12.99/month',
        quality: '1080p + Onboard Cameras',
      },
      {
        name: 'Vision+',
        type: 'Premium',
        subscription: 'Rp 39k/month',
        quality: '1080p',
      },
    ],
    description: 'F1 untuk motorsport fans. Live race, practice, qualifying dengan multiple camera angles.',
  },
];

function ChampionshipCard({ championship }: { championship: Championship }) {
  return (
    <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-[#ff1744]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,23,68,0.3)]">
      <div className="flex items-start justify-between mb-4">
        <div className="text-5xl">{championship.logo}</div>
        <span className="bg-[#ff1744]/20 text-[#ff1744] text-xs font-bold px-3 py-1 rounded-full">
          {championship.category}
        </span>
      </div>

      <h3 className="text-2xl font-bebas text-white mb-2">{championship.name}</h3>
      <p className="text-sm text-gray-400 mb-4">📅 {championship.schedule}</p>

      <p className="text-sm text-gray-300 mb-6">{championship.description}</p>

      <div className="space-y-4">
        <h4 className="text-xs font-bold text-[#00e5ff] mb-2">📺 STREAMING PLATFORMS</h4>
        {championship.platforms.map((platform, i) => (
          <div
            key={i}
            className="p-4 bg-black/60 border border-white/10 rounded-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <h5 className="text-sm font-bold text-white">{platform.name}</h5>
              <span className="text-xs bg-[#ffc400]/20 text-[#ffc400] px-2 py-1 rounded">
                {platform.type}
              </span>
            </div>
            <p className="text-xs text-gray-400 mb-1">
              💰 {platform.subscription}
            </p>
            <p className="text-xs text-gray-500">🎥 {platform.quality}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LivePage() {
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
            <span className="text-white">Live Race Streaming</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 border-b border-white/10 bg-gradient-to-b from-[#ff1744]/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-7xl">📡</span>
            <div>
              <h1 className="text-6xl font-bebas text-[#ff1744] uppercase tracking-tight mb-2">
                Live Race Streaming
              </h1>
              <p className="text-xl text-gray-400">
                Watch Motorcycle Racing from Anywhere
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mb-8">
            Panduan lengkap untuk nonton balapan motor live streaming. Dari MotoGP, WorldSBK, 
            hingga ARRC dan IDC dengan info subscription, schedule, dan platform terbaik untuk Indonesia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-sm font-bold text-[#ff1744] mb-1">🌍 World Coverage</h3>
              <p className="text-xs text-gray-400">MotoGP, WSBK, dan championship internasional</p>
            </div>
            <div className="p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-sm font-bold text-[#ff1744] mb-1">🇮🇩 Local Racing</h3>
              <p className="text-xs text-gray-400">ARRC dan IDC dengan Indonesian riders</p>
            </div>
            <div className="p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-sm font-bold text-[#ff1744] mb-1">📱 Multiple Platforms</h3>
              <p className="text-xs text-gray-400">TV, streaming app, YouTube options</p>
            </div>
            <div className="p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg">
              <h3 className="text-sm font-bold text-[#ff1744] mb-1">🆓 Free & Premium</h3>
              <p className="text-xs text-gray-400">Pilihan gratis dan berbayar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Championships */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-8">
            Available Championships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {championships.map((championship) => (
              <ChampionshipCard key={championship.id} championship={championship} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-8">
            Quick Access Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://www.motogp.com/en/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg hover:border-[#ff1744]/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-2">MotoGP Official</h3>
              <p className="text-sm text-gray-400 mb-3">
                Official MotoGP website dengan VideoPass subscription dan highlights.
              </p>
              <span className="text-[#ff1744] text-sm font-bold">Visit Site →</span>
            </a>

            <a
              href="https://www.youtube.com/@ARRC"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg hover:border-[#ff1744]/50 transition-colors"
            >
              <div className="text-4xl mb-3">📺</div>
              <h3 className="text-xl font-bold text-white mb-2">ARRC YouTube</h3>
              <p className="text-sm text-gray-400 mb-3">
                Free live streaming ARRC dengan Indonesian riders competing.
              </p>
              <span className="text-[#ff1744] text-sm font-bold">Watch Free →</span>
            </a>

            <a
              href="https://www.visionplus.id"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg hover:border-[#ff1744]/50 transition-colors"
            >
              <div className="text-4xl mb-3">📱</div>
              <h3 className="text-xl font-bold text-white mb-2">Vision+ App</h3>
              <p className="text-sm text-gray-400 mb-3">
                Streaming app Indonesia dengan MotoGP, F1, dan sports content.
              </p>
              <span className="text-[#ff1744] text-sm font-bold">Download App →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Viewing Tips */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bebas text-white mb-8">
            Streaming Tips for Indonesia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg">
              <div className="text-4xl mb-3">📶</div>
              <h3 className="text-xl font-bold text-white mb-3">Internet Speed</h3>
              <p className="text-sm text-gray-400">
                Minimum 5 Mbps untuk 720p, 10 Mbps untuk 1080p. Gunakan WiFi atau 4G/5G 
                stabil untuk avoid buffering saat race.
              </p>
            </div>
            <div className="p-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg">
              <div className="text-4xl mb-3">🕐</div>
              <h3 className="text-xl font-bold text-white mb-3">Time Zone</h3>
              <p className="text-sm text-gray-400">
                Indonesia GMT+7/+8/+9. MotoGP Eropa biasanya malam (21:00-23:00 WIB). 
                Asia & Australia races siang/sore (14:00-17:00 WIB).
              </p>
            </div>
            <div className="p-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-bold text-white mb-3">Budget Options</h3>
              <p className="text-sm text-gray-400">
                Free: YouTube (ARRC, IDC, highlights). Budget: Vision+ Rp 39k/bulan untuk 
                MotoGP. Premium: VideoPass untuk full access + onboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bebas text-white mb-4">
            Never Miss a Race!
          </h2>
          <p className="text-gray-400 mb-6">
            Subscribe newsletter untuk race schedule reminder dan streaming links.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#ff1744] hover:bg-[#ff1744]/80 text-white font-bold rounded-lg transition-colors"
          >
            Subscribe Newsletter
          </Link>
        </div>
      </section>
    </main>
  );
}
