import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { articlesPhase2A } from '@/data/articles-phase2a';
import { articlesPhase2B } from '@/data/articles-phase2b';
import articlesWave2 from '@/data/articles-wave2';
import articlesWave3 from '@/data/articles-wave3';
import articlesRealRace from '@/data/articles-real-race';
import { articlesMotogpLatest } from '@/data/articles-motogp-latest';

// Combine all articles into one database
const allArticles = [...articlesPhase2A, ...articlesPhase2B, ...articlesWave2, ...articlesWave3, ...articlesRealRace, ...articlesMotogpLatest];

// Convert array to Record for easy lookup
const articles: Record<string, any> = {};
allArticles.forEach(article => {
  if (article && article.slug) {
    articles[article.slug] = article;
  }
});

// Add original hardcoded articles for backward compatibility
articles['ducati-vs-bmw-superbike'] = {
  title: 'Ducati Panigale V4 vs BMW S1000RR: Duel Superbike Eropa',
  category: 'Superbike',
  categoryColor: '#ff1744',
  author: 'King Apex Wheelie',
  date: '2026-03-01',
  readingTime: '8 min',
  heroImage: '/images/hero/2026-03-01-20-21-10-hero-motogp.webp',
  excerpt: 'Dua superbike Eropa terbaik berhadapan langsung. Mana yang lebih unggul: tenaga V4 Ducati atau elektronik canggih BMW?',
  content: `
## Pendahuluan: Clash of Titans

Ducati Panigale V4 dan BMW S1000RR adalah dua nama yang selalu muncul ketika membahas superbike terbaik di dunia. Kedua motor ini mewakili filosofi engineering yang berbeda: Ducati dengan mesin V4 khas MotoGP, BMW dengan teknologi elektronik terdepan.

Di Indonesia, kedua motor ini dijual resmi dengan harga fantastis. Ducati Panigale V4 dibanderol **Rp 1.2 miliar**, sementara BMW S1000RR lebih terjangkau di **Rp 850 juta**. Tapi apakah selisih harga Rp 350 juta itu justified?

## Performa: V4 vs Inline-4

### Ducati Panigale V4: 214 HP dari MotoGP

Mesin 1103cc V4 Desmosedici Stradale adalah jantung Panigale V4. Mesin yang sama (versi race) mengantarkan Francesco Bagnaia juara MotoGP 2023. Output **214 HP @ 13,000 rpm** dengan karakter power delivery yang agresif.

> "The V4 screams like a MotoGP bike. You can feel the Desmosedici DNA in every twist of the throttle." — Rider testimonial

Counter-rotating crankshaft mengurangi gyroscopic effect, membuat motor lebih lincah saat cornering. Bobot kering hanya **174 kg**—luar biasa ringan untuk motor dengan tenaga segitu.

### BMW S1000RR: 210 HP dengan Elektronik Terdepan

BMW S1000RR mengandalkan mesin 999cc inline-4 dengan **210 HP @ 13,500 rpm**. Power delivery lebih linear dibanding V4, lebih mudah dikontrol untuk rider yang belum sangat berpengalaman.

Yang membedakan BMW adalah **suite elektronik**:
- **Dynamic Damping Control (DDC)**: Suspensi adaptif yang adjust otomatis
- **Dynamic Traction Control (DTC)**: 9 level traction control
- **Shift Assist Pro**: Quickshifter naik-turun tanpa kopling
- **Riding Modes**: Rain, Road, Dynamic, Race, Race Pro (1-3)

## Handling: Agility vs Stability

**Ducati** unggul di agility. Wheelbase 1,469 mm dan rake angle 24.5° membuat motor sangat responsive. Cocok untuk circuit dengan banyak tikungan tajam seperti Sentul.

**BMW** lebih stable di kecepatan tinggi. Elektronik suspensi DDC membuat motor selalu composed, bahkan di trek bumpy. Ideal untuk long-distance touring atau track day di sirkuit fast seperti Mandalika.

## Desain: Italian Flair vs German Precision

Ducati Panigale V4 adalah karya seni. Single-sided swingarm, winglet aero, dan lampu LED signature menciptakan **presence** yang sulit dilupakan. Setiap panel bodywork dirancang di wind tunnel.

BMW S1000RR lebih fungsional. Asymmetric headlight yang iconic, panel body aero-optimized, dan posisi riding yang lebih upright (untuk superbike). Tidak se-flashy Ducati, tapi tetap menawan.

## Harga & Value

| Spesifikasi | Ducati Panigale V4 | BMW S1000RR |
|-------------|-------------------|-------------|
| Harga | Rp 1.2 M | Rp 850 jt |
| Tenaga | 214 HP | 210 HP |
| Bobot | 174 kg (dry) | 197 kg |
| Elektronik | Good | Excellent |
| Service Cost | High | Medium |

BMW menawarkan **value** lebih baik. Elektronik lebih canggih, harga lebih murah Rp 350 juta, dan biaya servis lebih terjangkau.

Ducati menawarkan **prestige**. Brand heritage MotoGP, sound V4 yang unique, dan desain yang bikin kepala menoleh.

## Kesimpulan: Mana yang Harus Dipilih?

**Pilih Ducati Panigale V4 jika**:
- Budget unlimited
- Ingin motor dengan DNA MotoGP asli
- Prioritas agility dan sound engine
- Track day adalah main activity
- Suka jadi center of attention

**Pilih BMW S1000RR jika**:
- Budget lebih rasional
- Ingin elektronik terdepan
- Prioritas comfort untuk long-distance
- Biaya servis jadi pertimbangan
- Value for money penting

Kedua motor ini **phenomenal** di kelasnya masing-masing. Pilihan akhir tergantung prioritas dan budget kamu. Test ride keduanya sebelum decide—karena feeling saat naik motor itu personal.
  `
};

articles['marc-marquez-2026'] = {
  title: 'Marc Márquez di Ducati 2026: Era Baru Sang Alien',
  category: 'MotoGP',
  categoryColor: '#ff1744',
  author: 'King Apex Wheelie',
  date: '2026-02-28',
  readingTime: '10 min',
  heroImage: '/images/hero/2026-03-01-20-21-10-hero-motogp.webp',
  excerpt: 'Perpindahan Marc Márquez ke Ducati mengubah lanskap MotoGP. Apakah kombinasi 8x world champion dan motor terbaik grid akan unstoppable?',
  content: `
## The Biggest Transfer in MotoGP History

Ketika Marc Márquez mengumumkan kepindahannya dari Honda ke Ducati untuk musim 2026, dunia MotoGP terguncang. Ini bukan sekadar perpindahan rider biasa—ini adalah **8-time world champion** yang meninggalkan tim tempat dia meraih semua gelar, untuk bergabung dengan rival terbesar mereka.

## Kenapa Márquez Pindah?

Honda RC213V yang dulunya dominan di era 2013-2019 kini jadi motor paling sulit di grid. Márquez mengalami **3 musim terburuk** kariernya (2021-2023), dengan injuries yang terus berulang akibat crashes mencoba kompensasi motor yang underperforming.

Di sisi lain, Ducati Desmosedici GP26 adalah **motor terbaik** di grid 3 tahun berturut-turut. 6 dari 8 rider Ducati finish di top 10 championship 2025. Matematik sederhana: Márquez butuh motor yang bisa menang, Ducati punya motor itu.

## Adaptasi ke Desmosedici: Cepat & Impressive

Tes Valencia Desember 2025 membuktikan skeptis salah. Márquez langsung **3rd fastest** di hari pertama, hanya 0.2 detik dari pole position time race sebelumnya. Crew chief Frankie Carchedi (mantan engineer Bagnaia) terkesima:

> "Marc adapted to the Ducati in 15 laps. Most riders need a full season. He's a freak of nature."

Yang bikin impressive: Márquez langsung **comfortable with rear grip character** Desmosedici yang sangat berbeda dari Honda. RC213V terkenal dengan front-end feel yang tajam, Desmosedici sebaliknya—rear traction luar biasa kuat, tapi front feel lebih muted.

## Racing Style: Will It Work on Ducati?

Márquez terkenal dengan **aggressive save** dan late braking yang spectacular. Ducati lebih rewarding untuk **smooth, calculated riding** ala Bagnaia atau Martin.

Tapi data tes menunjukkan Márquez sudah adjust:
- **Braking points** 5-10 meter lebih dalam dari Bagnaia (signature MM93)
- **Corner entry speed** 3-5 km/jam lebih tinggi (masih aggressive)
- **Throttle application** lebih smooth dari era Honda (adaptasi!)

Kombinasi **Márquez aggression + Ducati stability** bisa jadi formula yang belum pernah ada sebelumnya.

## Factory Ducati vs Gresini: The Politics

Márquez tidak langsung ke Factory Ducati. Dia start di **Gresini Racing** (satellite team) untuk musim 2026, dengan **full factory support**—motor spec identik dengan Bagnaia.

Ini strategi cerdas Ducati:
1. **Test the waters**: Lihat apakah Márquez bisa adapt sebelum komit full factory seat
2. **Manage internal rivalry**: Hindari konflik Márquez-Bagnaia terlalu dini
3. **Commercial genius**: Gresini dapat boost exposure, Ducati dapat flexibilitas

Tapi semua orang tahu: kalau Márquez menang atau fight for championship 2026, **dia naik ke Factory 2027**.

## Predictions: Can Márquez Win #9?

**The Case FOR:**
✓ Motor terbaik di grid (Desmosedici GP26)
✓ Full factory support (bukan satellite treatment)
✓ Márquez masih **31 tahun**, prime age untuk MotoGP
✓ Crew chief experienced (Frankie Carchedi)
✓ Motivation tinggi (prove Honda wrong)

**The Case AGAINST:**
✗ 3 tahun tanpa podium (2021-2023)—confidence bisa jadi issue
✗ Body masih belum 100% (arm pump occasional, shoulder mobility limited)
✗ Kompetisi brutal: Bagnaia, Martin, Bastianini, Acosta semua punya motor menang
✗ Adaptasi mid-season sulit (trek baru, setup baru, team baru)

**Realistic prediction:** Márquez akan **top 5 championship 2026**, dengan **2-3 race wins**. Championship #9 lebih realistis untuk **2027** kalau dia naik Factory dan sudah full adapt.

## Impact on MotoGP: The Márquez Effect

Perpindahan ini mengubah **power dynamics** paddock:
- **Honda** desperate, butuh rebuild total (rumor datangkan Joan Mir tidak cukup)
- **Ducati** punya 3 world champions (Bagnaia, Márquez, Bastianini)—internal rivalry tinggi
- **Aprilia & KTM** tertekan—harus kompetisi dengan Ducati armada
- **Sponsorship** meledak—Gresini Racing naik value 200% karena Márquez

Dan yang paling penting: **ratings naik**. Fans Honda akan nonton Ducati sekarang. Rivalitas Márquez-Bagnaia = **box office**.

## Kesimpulan: A New Chapter

Marc Márquez di Ducati adalah **gamble** untuk keduanya. Tapi early signs sangat positif. Kalau Márquez bisa adapt penuh dan stay healthy, kita akan saksikan **salah satu comeback terbesar** dalam sejarah motorsport.

**The Alien is back. And this time, he's riding red.**
  `
};

articles['motogp-calendar-2026'] = {
  title: 'Kalender MotoGP 2026: 22 Seri, 2 Sirkuit Baru',
  category: 'MotoGP',
  categoryColor: '#ff1744',
  author: 'King Apex Wheelie',
  date: '2026-02-25',
  readingTime: '7 min',
  heroImage: '/images/hero/2026-03-01-20-21-10-hero-motogp.webp',
  excerpt: '22 race dalam 9 bulan. Dari Losail hingga Valencia, termasuk debut sirkuit Kazakhstan dan kembalinya India GP. Ini kalender paling padat dalam sejarah MotoGP.',
  content: `
## 22 Races, 9 Months, Pure Adrenaline

MotoGP 2026 adalah **musim terpanjang** dalam sejarah championship. 22 seri di 17 negara, dengan **2 sirkuit baru** dan kembalinya beberapa trek klasik. Dorna Sports push limit untuk ekspansi global, tapi apakah ini terlalu much?

## Highlights: What's New in 2026?

### 🆕 Kazakhstan GP (Sokol International Circuit)
Debut di bulan Juli. Sirkuit 4.5 km di Almaty dengan **18 corner** dan straight 1.2 km. FIM homologation selesai November 2025. Expected lap time: ~1:42. Climate challenge: altitude 900m, udara tipis = less power.

### 🔙 India GP Returns (Buddh International Circuit)
Setelah hiatus 2 tahun karena pandemi, India GP kembali. Buddh Circuit (5.1 km, 16 corner) adalah salah satu **fastest track** di kalender. Sektor 1-2 high-speed, sektor 3 technical. Lap record: 1:25 (Marini, 2023).

### 📅 22 Races: The Full Calendar

**March:**
- 9 Mar: Qatar GP (Losail) — Night race, season opener
- 23 Mar: Indonesia GP (Mandalika) 🇮🇩
- 30 Mar: Argentina GP (Termas de Río Hondo)

**April:**
- 13 Apr: Americas GP (COTA, Texas)
- 27 Apr: Portugal GP (Portimão)

**May:**
- 11 May: Spain GP (Jerez)
- 18 May: France GP (Le Mans)
- 25 May: Italy GP (Mugello)

**June:**
- 8 Jun: Catalunya GP (Barcelona)
- 22 Jun: Germany GP (Sachsenring)
- 29 Jun: Netherlands GP (Assen) — "Cathedral of Speed"

**July:**
- 13 Jul: Kazakhstan GP (Sokol) 🆕
- 20 Jul: Great Britain GP (Silverstone)

**August:**
- 10 Aug: Austria GP (Red Bull Ring)
- 17 Aug: India GP (Buddh) 🔙
- 31 Aug: San Marino GP (Misano)

**September:**
- 14 Sep: Aragon GP (MotorLand Aragón)
- 21 Sep: Japan GP (Motegi)

**October:**
- 5 Oct: Australia GP (Phillip Island)
- 19 Oct: Thailand GP (Buriram)
- 26 Oct: Malaysia GP (Sepang)

**November:**
- 9 Nov: Valencia GP (Circuit Ricardo Tormo) — Season finale

## The Grind: Is 22 Races Too Much?

**Riders divided:**

**Pro-expansion camp** (Bagnaia, Márquez):
- More races = more chances to recover from bad weekends
- Financial benefit (bonuses per race)
- Global exposure untuk sponsors

**Anti-expansion camp** (Quartararo, Miller):
- Physical toll terlalu tinggi (risk of burnout)
- Less time untuk testing & development
- Travel schedule brutal (3 flyaway races back-to-back di Oktober)

**Crew chiefs mostly against**: 22 races = mechanics bekerja 280+ hari setahun. Turnover tinggi, quality of life menurun.

## Indonesia GP: Home Race yang Special

**Mandalika** (23 Maret) jadi sorotan karena:
- Mario Suryo Aji debut full-season di Moto2 (Idemitsu Honda Team Asia)
- Veda Ega Pratama rookie di Moto3 (Honda Team Asia)
- Expected crowd: **150,000+ spectators** (terbesar di Asia Tenggara)

Turn 10-11 (downhill left-right combo) adalah **signature corner** Mandalika—high-speed, butuh balls of steel. Crash rate tertinggi di situ.

## Circuit Insights: Fastest vs Most Technical

**Fastest circuits** (avg speed >160 km/jam):
1. **Phillip Island** (Australia) — 169 km/jam avg
2. **Mugello** (Italy) — 166 km/jam avg
3. **Red Bull Ring** (Austria) — 164 km/jam avg

**Most technical** (cornering precision critical):
1. **Sachsenring** (Germany) — 13 corner, 10 left-hander
2. **Jerez** (Spain) — Low-speed corners, rear grip critical
3. **Valencia** (Ricardo Tormo) — Tight, slow, overtaking difficult

**Best for overtaking:**
1. **Losail** (Qatar) — Long back straight, 3 DRS zones
2. **COTA** (USA) — Multiple lines di Turn 1, 11, 12
3. **Sepang** (Malaysia) — Wide track, heavy braking zones

## Weather Wild Cards

**High rain risk:**
- **Le Mans** (France, May) — 60% historical rain chance
- **Silverstone** (UK, July) — British weather unpredictable
- **Phillip Island** (Australia, October) — Spring season, coastal wind

**Extreme heat:**
- **Losail** (Qatar) — Night race untuk avoid 45°C day heat
- **Sepang** (Malaysia) — 35°C + 80% humidity = physical hell
- **Buriram** (Thailand) — Dehydration risk tinggi

## Championship Implications

Dengan 22 races, **consistency > speed**. Di era 19-20 races, rider bisa afford 2-3 DNF dan masih fight for title. Sekarang? **Maximum 1 DNF** kalau mau realistic shot.

Math: 22 races × 25 points = **550 points maximum**. Historical data: championship winner butuh ~420-450 points (76-82% dari max). Artinya kamu harus **podium 18 dari 22 races**.

**Pressure tinggi. Margin error kecil. Mental strength jadi factor.**

## Kesimpulan: Embrace the Chaos

22 races adalah **marathon, not a sprint**. Rider harus manage:
- Physical fitness (endurance training critical)
- Mental resilience (avoid mid-season burnout)
- Team coordination (mechanics rotation untuk avoid exhaustion)

Untuk fans? **9 bulan non-stop MotoGP action**. Weekends tanpa racing jadi rare. Ideal untuk addicts, overwhelming untuk casual viewers.

**Buckle up. 2026 will be a wild ride.**
  `
};

// Generate static params for all articles (enables static generation at build time)
export async function generateStaticParams() {
  // Get all article slugs from our database
  const slugs = Object.keys(articles);
  
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  
  if (!article) {
    return {
      title: 'Article Not Found | IndonesiaSBK',
    };
  }

  return {
    title: `${article.title} | IndonesiaSBK`,
    description: article.excerpt || article.metaDescription || article.title,
    keywords: article.keywords || [],
    openGraph: {
      title: article.title,
      description: article.excerpt || article.metaDescription || article.title,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      images: article.image || article.heroImage,
    },
  };
}

export default async function ArticlePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px]">
        <Image
          src={article.image || article.heroImage}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        {/* Article Header */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4 text-sm">
              <span 
                className="px-3 py-1 rounded-full font-bold uppercase tracking-wider"
                style={{ 
                  backgroundColor: article.categoryColor || '#ff1744',
                  color: '#000'
                }}
              >
                {article.category}
              </span>
              <span className="text-gray-400">{article.date}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">{article.readTime || article.readingTime}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight font-['Bebas_Neue']">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              {article.excerpt}
            </p>
            
            <div className="flex items-center gap-3 text-gray-400">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-white">
                {article.author.split(' ').map((n: string) => n[0]).join('')}
              </div>
              <span className="font-semibold">{article.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="prose prose-invert prose-lg max-w-none
          prose-headings:font-['Bebas_Neue'] prose-headings:tracking-wide
          prose-h2:text-4xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-red-500
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-cyan-400
          prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
          prose-strong:text-white prose-strong:font-bold
          prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300
          prose-blockquote:border-l-4 prose-blockquote:border-red-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-400
          prose-ul:list-disc prose-ul:ml-6 prose-ul:text-gray-300
          prose-ol:list-decimal prose-ol:ml-6 prose-ol:text-gray-300
          prose-li:mb-2
          prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-cyan-400">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              table: ({ children }) => (
                <div className="overflow-x-auto my-8">
                  <table className="min-w-full border border-gray-700 rounded-lg overflow-hidden">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-gradient-to-r from-gray-800 to-gray-900">
                  {children}
                </thead>
              ),
              th: ({ children }) => (
                <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider border-b border-gray-700">
                  {children}
                </th>
              ),
              tbody: ({ children }) => (
                <tbody className="bg-black/40 backdrop-blur-sm divide-y divide-gray-800">
                  {children}
                </tbody>
              ),
              td: ({ children }) => (
                <td className="px-6 py-4 text-gray-300 text-sm">
                  {children}
                </td>
              ),
              tr: ({ children }) => (
                <tr className="hover:bg-gray-900/50 transition-colors">
                  {children}
                </tr>
              ),
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>

        {/* Tags/Keywords */}
        {article.keywords && article.keywords.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {article.keywords.map((keyword: string, index: number) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full text-sm text-gray-300 transition-colors cursor-pointer"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Share & Back */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex justify-between items-center">
          <Link 
            href="/"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors"
          >
            ← Kembali ke Home
          </Link>
          
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
              Share
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}
