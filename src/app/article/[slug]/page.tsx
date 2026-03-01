import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Article database (in real app, this would come from PostgreSQL)
const articles: Record<string, any> = {
  'ducati-vs-bmw-superbike': {
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
- Ingin elektronik terbaik di kelasnya
- Butuh motor daily-rideable (relatif)
- Servis cost jadi pertimbangan
- Prioritas performa + practicality

Kedua motor ini **sama-sama luar biasa**. Tidak ada pilihan salah. Cuma soal preferensi: emosi (Ducati) atau logika (BMW).

Yang jelas, kalau punya budget segitu... **beli keduanya!** 😎
    `,
  },
  
  'honda-adv-160-review': {
    title: 'Honda ADV 160: Skutik Adventure Terlaris Indonesia',
    category: 'Supermatic',
    categoryColor: '#9c27b0',
    author: 'King Apex Wheelie',
    date: '2026-02-28',
    readingTime: '6 min',
    heroImage: '/images/hero/2026-03-01-20-21-25-hero-superbike.webp',
    excerpt: 'Kenapa Honda ADV 160 jadi skutik adventure terlaris? Review lengkap fitur, performa, dan value for money.',
    content: `
## Fenomena ADV 160 di Indonesia

Honda ADV 160 adalah **skutik adventure paling laris** di Indonesia sejak launching 2020. Penjualan konsisten 5,000+ unit/bulan, mengalahkan kompetitor seperti Yamaha Aerox dan PCX 160.

Kenapa? Kombinasi **practicality + adventure styling + reliability Honda**.

Harga **Rp 39 jutaan** (OTR Jakarta) memang premium untuk skutik 160cc, tapi masih terjangkau untuk middle-class riders yang ingin naik kelas dari Vario/Beat.

## Mesin: Cukup untuk Daily Riding

Engine 156cc eSP+ menghasilkan **15.8 HP @ 8,500 rpm** dan **13.8 Nm @ 6,500 rpm**. Bukan angka yang bikin wow, tapi **cukup banget** untuk:
- Commuting Jakarta-Bekasi setiap hari
- Touring weekend ke Puncak/Bandung
- Isi triple (bonceng + barang belanjaan)

> "ADV 160 itu motor yang bikin kamu confident kemana-mana. Gak cepet, tapi gak lemot. Just right." — ADV 160 owner testimonial

Akselerasi 0-60 km/h dalam **6.2 detik**. Top speed **120 km/h** (GPS-verified). Konsumsi BBM rata-rata **38-42 km/liter** (riding style moderate).

## Fitur: Adventure dalam Skutik

Inilah yang bikin ADV 160 beda:

### 1. Ground Clearance 16.5 cm
Tertinggi di kelas skutik 160cc. Berani lewat banjir 10-15 cm, polisi tidur tinggi, atau jalan rusak.

### 2. Ban Dual-Purpose
Ukuran **110/80-14 (depan)** dan **120/80-14 (belakang)** dengan pattern semi-knobby. Grip bagus di aspal basah, bisa diajak offroad ringan (tanah/kerikil).

### 3. Smart Key System
Keyless entry dengan proximity sensor. Bawa kunci di kantong, pencet tombol starter, motor nyala. Fitur premium yang seharusnya jadi standard semua motor.

### 4. LCD Speedometer
Full digital dengan:
- Speedometer + odometer + trip meter
- Fuel gauge akurat (bukan estimasi)
- Eco indicator (riding efficiency)
- Service reminder

### 5. USB Charger
Di bawah stang, protected dari hujan. Bisa charge HP sambil riding—must-have untuk ojol atau riders yang depend on GPS.

## Riding Experience: Comfort & Confidence

Posisi riding **upright** dengan handebar tinggi. Tidak se-aggresif Aerox, tidak se-relax PCX. **Goldilocks zone** untuk touring + city riding.

Suspensi **telescopic fork (depan)** dan **twin shock (belakang)** dengan travel cukup panjang. Nyaman di jalan rusak, stabil di highway.

Ground clearance tinggi bikin **confidence boost** saat hujan atau lewat jalan jelek. Gak perlu mikir polisi tidur, langsung gas aja.

## Kompetitor: ADV 160 vs The Rest

### ADV 160 vs Yamaha Aerox 155
- **ADV**: Ground clearance tinggi, adventure styling, practical
- **Aerox**: Top speed lebih tinggi, handling sporty, lebih fun to ride
- **Verdict**: ADV untuk daily + touring, Aerox untuk fun riding

### ADV 160 vs Honda PCX 160
- **ADV**: Ground clearance, adventure look, all-terrain capability
- **PCX**: Lebih premium, lebih halus, lebih cocok city cruising
- **Verdict**: ADV untuk riders aktif, PCX untuk comfort seekers

### ADV 160 vs Forza 250
- **Forza**: Lebih kencang, lebih premium, maxi-scooter
- **ADV**: Lebih terjangkau, lebih lincah, lebih fuel efficient
- **Verdict**: Forza untuk highway touring, ADV untuk mixed use

## Kekurangan: Nothing's Perfect

### 1. Under-seat Storage Terbatas
Hanya muat helm half-face + jas hujan. Gak cukat untuk helm full-face. Solusi: pakai box belakang aftermarket.

### 2. Tidak Ada ABS
Hanya CBS (Combi Brake System). Di harga Rp 39 juta, ABS seharusnya jadi standard. Kompetitor kayak PCX 160 CBS sudah kasih ABS.

### 3. Plastik Body Agak Flimsy
Panel body gampang penyok kalau kena benturan ringan. Perlu extra careful saat parkir.

## Kesimpulan: Worth It atau Tidak?

**Honda ADV 160 adalah skutik terbaik untuk Indonesian riders** yang butuh motor:
- ✅ Daily commuting reliable
- ✅ Weekend touring capable
- ✅ All-terrain confidence
- ✅ Resale value tinggi (Honda brand)
- ✅ Suku cadang murah & gampang

Apakah worth Rp 39 juta? **YES**, kalau kamu butuh motor versatile yang bisa jadi "only bike" untuk semua kebutuhan.

Apakah ada yang lebih baik? Depends on needs:
- **Fun riding**: Yamaha Aerox 155
- **Premium comfort**: Honda PCX 160
- **Speed demon**: Yamaha NMAX Turbo

Tapi untuk **all-around best**? ADV 160 still the king. 👑
    `,
  },

  'z900-vs-mt09': {
    title: 'Kawasaki Z900 vs Yamaha MT-09: Duel Naked Bike',
    category: 'Naked Bike',
    categoryColor: '#ffc400',
    author: 'King Apex Wheelie',
    date: '2026-02-27',
    readingTime: '7 min',
    heroImage: '/images/hero/2026-03-01-20-21-15-hero-wsbk.webp',
    excerpt: 'Perbandingan lengkap dua naked bike terbaik di kelasnya. Inline-4 Kawasaki vs Triple Yamaha—mana yang lebih fun?',
    content: `
## Naked Bike Wars: 4-Cylinder vs 3-Cylinder

Kawasaki Z900 dan Yamaha MT-09 adalah **dua naked bike paling populer** di segment menengah-atas. Keduanya dijual resmi di Indonesia dengan harga bersaing: **Z900 Rp 280 juta**, **MT-09 Rp 310 juta**.

Filosofi engineering berbeda: **Z900** pakai inline-4 (smooth & high-revving), **MT-09** pakai triple (torquey & characterful).

## Engine: Smoothness vs Character

### Kawasaki Z900: 948cc Inline-4
Mesin **948cc inline-4** menghasilkan **125 HP @ 9,500 rpm** dan **98.6 Nm @ 7,700 rpm**. Power delivery **linear dan smooth** seperti superbike—predictable, easy to control.

Sound engine? **Screaming inline-4**. Di 10,000 rpm, suara Z900 bikin bulu kuduk merinding. Exhaust aftermarket (Akrapovic/Yoshimura) bikin makin ganas.

Redline di **11,000 rpm**. Rev range lebar, bisa cruising santai 3,000 rpm atau attack corners di 9,000+ rpm.

### Yamaha MT-09: 890cc CP3 Triple
Mesin **890cc crossplane triple** (CP3) menghasilkan **119 HP @ 10,000 rpm** dan **93 Nm @ 7,000 rpm**. Tenaga lebih kecil dari Z900, tapi **torque curve lebih gemuk** di low-mid range.

Yang bikin MT-09 spesial adalah **crossplane crankshaft**—teknologi dari YZF-R1. Firing order irregular (0°-270°-180°-270°) menciptakan **karakter unique**: sound seperti V-twin, power delivery seperti inline-4.

> "The CP3 engine is pure emotion. Every throttle input feels alive, raw, connected." — MT-09 review, Motorcycle News UK

## Performa: Speed vs Agility

### Akselerasi
- **Z900**: 0-100 km/h dalam **3.1 detik**
- **MT-09**: 0-100 km/h dalam **3.3 detik**

Z900 sedikit lebih cepat karena power lebih besar, tapi perbedaan 0.2 detik hampir tidak terasa di real-world riding.

### Top Speed
- **Z900**: **240 km/h** (GPS-verified)
- **MT-09**: **235 km/h** (GPS-verified)

Keduanya electronically limited. Dengan ECU flash + full exhaust, bisa tembus 250+ km/h.

### Wheelie Capability
MT-09 **lebih gampang wheelie** karena torque bawah lebih besar. Z900 butuh rev lebih tinggi untuk angkat roda depan.

## Handling: Stability vs Playfulness

### Kawasaki Z900
Wheelbase **1,450 mm** (lebih panjang) bikin motor lebih **stable** di kecepatan tinggi. Cocok untuk:
- Highway cruising
- Long-distance touring
- Riders yang prioritas comfort + stability

Rake angle **24.5°** dan trail **104 mm**—setup neutral yang confidence-inspiring.

### Yamaha MT-09
Wheelbase **1,430 mm** (lebih pendek) bikin motor lebih **agile**. Rasanya seperti naked bike ukuran 600cc—super lincah, turn-in cepat.

Cocok untuk:
- City riding (lane-splitting)
- Twisty mountain roads
- Riders yang suka flick-flick cornering

Tapi di highway 140+ km/h, MT-09 sedikit kurang stable. Perlu grip stang lebih kencang.

## Elektronik: Old-School vs Modern

### Kawasaki Z900
- **Riding Modes**: 4 (Sport, Road, Rain, Manual)
- **Traction Control**: 3 level + off
- **ABS**: Dual-channel (non-cornering)
- **TFT Display**: 4.3" full-color

Sistem elektronik **adequate** tapi tidak cutting-edge. Kawasaki lebih fokus ke "raw riding experience" daripada elektronik canggih.

### Yamaha MT-09
- **Riding Modes**: 3 (Sport, Street, Rain) + 2 custom
- **Traction Control**: Adjustable (IMU-based)
- **Slide Control**: Yes (IMU-based)
- **Quickshifter**: Bi-directional (up/down)
- **ABS**: Cornering ABS (IMU-based)
- **TFT Display**: 3.5" full-color

MT-09 gen terbaru (2021+) punya **6-axis IMU** yang enable cornering ABS, slide control, dan wheelie control. Jauh lebih advanced dari Z900.

## Harga & Value

| Spesifikasi | Kawasaki Z900 | Yamaha MT-09 |
|-------------|---------------|--------------|
| Harga | Rp 280 jt | Rp 310 jt |
| Tenaga | 125 HP | 119 HP |
| Torsi | 98.6 Nm | 93 Nm |
| Bobot | 210 kg | 189 kg |
| Elektronik | Good | Excellent |
| Quickshifter | Optional | Standard |

MT-09 lebih mahal **Rp 30 juta**, tapi dapat:
- ✅ IMU 6-axis + cornering ABS
- ✅ Quickshifter bi-directional
- ✅ 21 kg lebih ringan
- ✅ CP3 engine yang unique

Z900 lebih murah, dapat:
- ✅ Inline-4 smooth & high-revving
- ✅ 6 HP lebih besar
- ✅ Lebih stable di highway

## Kesimpulan: Pilih Mana?

**Pilih Kawasaki Z900 jika**:
- Suka smooth inline-4 engine
- Prioritas stability + comfort
- Budget lebih hemat Rp 30 juta
- Riding style smooth & predictable
- Banyak highway cruising

**Pilih Yamaha MT-09 jika**:
- Suka engine berkarakter (CP3 triple)
- Prioritas agility + fun factor
- Budget cukup untuk elektronik canggih
- Riding style aggressive & playful
- Banyak twisty roads / city riding

Personally? **MT-09 all day.** Engine CP3 terlalu addictive, handling terlalu fun. Tapi Z900 tetap excellent choice—especially untuk touring atau riders yang baru naik dari 600cc.

Either way, **you can't go wrong.** Keduanya adalah naked bike terbaik di kelasnya. 🏍️
    `,
  },
};

// Generate static paths for all articles
export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }));
}

// Generate metadata for each article
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} | IndonesiaSBK`,
    description: article.excerpt,
    keywords: `${article.category.toLowerCase()}, ${article.title.toLowerCase()}`,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.heroImage],
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  // Related articles (same category, excluding current)
  const relatedArticles = Object.entries(articles)
    .filter(([articleSlug, a]) => a.category === article.category && articleSlug !== slug)
    .slice(0, 3)
    .map(([slug, a]) => ({ slug, ...a }));

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] md:h-[70vh]">
        <Image
          src={article.heroImage}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto max-w-4xl">
            <Link
              href={`/${article.category.toLowerCase().replace(' ', '-')}`}
              className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: `${article.categoryColor}20`,
                color: article.categoryColor,
                border: `1px solid ${article.categoryColor}50`,
              }}
            >
              {article.category}
            </Link>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bebas text-white leading-tight mb-4">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <span>✍️</span>
                <span>{article.author}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <span>📅</span>
                <span>{new Date(article.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <span>⏱️</span>
                <span>{article.readingTime} read</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Author Info */}
          <div className="mb-12 p-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff1744] to-[#ffc400] flex items-center justify-center text-2xl font-bebas">
                KA
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{article.author}</h3>
                <p className="text-sm text-gray-400">
                  Mantan pembalap profesional, jurnalis motorsport, dan enthusiast sejati.
                </p>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <article 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-bebas prose-headings:text-white prose-headings:uppercase prose-headings:tracking-tight
              prose-h2:text-4xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-white prose-strong:font-bold
              prose-blockquote:border-l-4 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-400
              prose-ul:text-gray-300 prose-ol:text-gray-300
              prose-li:mb-2
              prose-table:border-collapse prose-table:border prose-table:border-white/20
              prose-th:border prose-th:border-white/20 prose-th:px-4 prose-th:py-2 prose-th:bg-white/5
              prose-td:border prose-td:border-white/20 prose-td:px-4 prose-td:py-2"
            style={{
              '--tw-prose-quote-borders': article.categoryColor,
            } as any}
            dangerouslySetInnerHTML={{ __html: article.content.split('\n').map((line: string) => {
              if (line.startsWith('## ')) {
                return `<h2>${line.slice(3)}</h2>`;
              } else if (line.startsWith('### ')) {
                return `<h3>${line.slice(4)}</h3>`;
              } else if (line.startsWith('> ')) {
                return `<blockquote><p>${line.slice(2)}</p></blockquote>`;
              } else if (line.startsWith('| ')) {
                // Simple table handling (would need proper markdown parser in production)
                return line;
              } else if (line.trim().startsWith('-')) {
                return `<li>${line.trim().slice(2)}</li>`;
              } else if (line.trim()) {
                return `<p>${line}</p>`;
              }
              return '';
            }).join('') }}
          />

          {/* Share Buttons */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-gray-400 mb-4">Bagikan artikel ini:</p>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-[#1DA1F2]/20 border border-[#1DA1F2]/50 text-[#1DA1F2] rounded-lg hover:bg-[#1DA1F2]/30 transition-all duration-300">
                Twitter
              </button>
              <button className="px-6 py-2 bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] rounded-lg hover:bg-[#25D366]/30 transition-all duration-300">
                WhatsApp
              </button>
              <button className="px-6 py-2 bg-[#0088cc]/20 border border-[#0088cc]/50 text-[#0088cc] rounded-lg hover:bg-[#0088cc]/30 transition-all duration-300">
                Telegram
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 border-t border-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bebas text-white mb-8 uppercase tracking-tight">
              Artikel {article.category} Lainnya
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/article/${related.slug}`}
                  className="group bg-black/80 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-all duration-300"
                  style={{
                    boxShadow: `0 0 0 0 ${article.categoryColor}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 20px ${article.categoryColor}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 0 0 ${article.categoryColor}`;
                  }}
                >
                  <div className="relative h-48">
                    <Image
                      src={related.heroImage}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-[--color]"
                        style={{ '--color': article.categoryColor } as any}>
                      {related.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                      {related.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{related.readingTime} read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            image: article.heroImage,
            datePublished: article.date,
            dateModified: article.date,
            author: {
              '@type': 'Person',
              name: article.author,
            },
            publisher: {
              '@type': 'Organization',
              name: 'IndonesiaSBK',
              logo: {
                '@type': 'ImageObject',
                url: 'https://indonesiasbk.com/logo.png',
              },
            },
            description: article.excerpt,
          }),
        }}
      />
    </main>
  );
}
