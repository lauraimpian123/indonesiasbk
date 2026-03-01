// Mock article database for IndonesiaSBK
export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  image: string
  date: string
  author: string
  readTime: string
  views: string
}

export const articles: Article[] = [
  {
    id: '1',
    slug: 'ducati-panigale-v4r-2026-ultimate-superbike',
    title: 'Ducati Panigale V4R 2026: The Ultimate Italian Superbike Masterpiece',
    excerpt: 'Dengan 230 HP dan teknologi MotoGP terdepan, Ducati Panigale V4R 2026 menetapkan standar baru untuk superbike jalanan.',
    content: `
      <p>Ducati kembali menggebrak dunia superbike dengan peluncuran Panigale V4R 2026 yang memukau. Motor sport flagship Italia ini hadir dengan sejumlah pembaruan signifikan yang membuatnya semakin mendekati performa motor balap MotoGP.</p>
      
      <h2>Performa yang Menggelegar</h2>
      <p>Dengan output power 230 HP pada 15.500 RPM, Panigale V4R 2026 ini adalah motor produksi paling powerful yang pernah dibuat Ducati. Mesin V4 Desmosedici Stradale R berkapasitas 998cc ini mampu menghasilkan torsi maksimal 112 Nm pada 11.500 RPM.</p>
      
      <h2>Teknologi dari Trek Balap</h2>
      <p>Ducati tak main-main dengan teknologi yang mereka tanamkan. Electronic package-nya lengkap: Ducati Traction Control EVO 3, Ducati Slide Control, Ducati Wheelie Control EVO, Ducati Power Launch, hingga Ducati Quick Shift up/down EVO 2.</p>
      
      <h2>Aerodinamika MotoGP</h2>
      <p>Winglet depan bergaya MotoGP menghasilkan downforce hingga 37kg pada kecepatan tinggi. Ini membantu stabilitas saat akselerasi brutal dan pengereman ekstrem di sirkuit.</p>
      
      <h2>Suspensi Elektronik Öhlins</h2>
      <p>Suspensi Öhlins Smart EC 2.0 dengan sensor IMU 6-axis menyesuaikan damping secara real-time berdasarkan kondisi riding. Setup suspensi bisa diubah langsung dari dashboard TFT 5 inci yang super responsif.</p>
      
      <h2>Harga dan Ketersediaan</h2>
      <p>Ducati Panigale V4R 2026 dibanderol dengan harga mulai dari Rp 1,2 miliar (off the road). Tersedia dalam skema warna Ducati Red iconic dan Racing Livery edisi terbatas.</p>
    `,
    category: 'SUPERBIKE',
    image: '/images/ducati-hero.png',
    date: '1 Maret 2026',
    author: 'Redaksi IndonesiaSBK',
    readTime: '5 min',
    views: '12.5K',
  },
  {
    id: '2',
    slug: 'motogp-losail',
    title: 'MotoGP Qatar: Marc Marquez Pole Position, Pecco Start Ketiga',
    excerpt: 'Sesi kualifikasi MotoGP Qatar 2026 ditutup dengan dominasi Marc Marquez yang merebut pole position dengan catatan waktu 1:50.123.',
    content: `
      <p>Marc Marquez kembali menunjukkan tajinya di Sirkuit Losail, Qatar. Rider Ducati Factory ini merebut pole position untuk balapan pembuka MotoGP 2026 dengan catatan waktu impresif 1:50.123, unggul 0.089 detik dari runner-up Jorge Martin (Aprilia).</p>
      
      <h2>Drama Kualifikasi</h2>
      <p>Sesi Q2 berlangsung dramatis dengan suhu trek mencapai 38 derajat Celcius. Pecco Bagnaia sempat memimpin di early run, namun crash di Turn 6 membuatnya gagal memperbaiki waktu. Ia harus puas start dari posisi ketiga.</p>
      
      <h2>Dominasi Ducati</h2>
      <p>Enam dari sepuluh posisi teratas dikuasai Ducati, menunjukkan dominasi pabrikan Bologna di trek yang menuntut akselerasi maksimal dan top speed tinggi. Yamaha dan KTM kesulitan mengimbangi kecepatan Desmosedici GP26.</p>
      
      <h2>Prediksi Balapan</h2>
      <p>Dengan degradasi ban menjadi isu kunci, race pace akan menentukan pemenang. Marquez optimis bisa mempertahankan posisi, sementara Bagnaia berencana agresif dari start untuk naik ke podium.</p>
    `,
    category: 'MOTOGP',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    date: '1 Maret 2026',
    author: 'Redaksi IndonesiaSBK',
    readTime: '4 min',
    views: '18.2K',
  },
  {
    id: '3',
    slug: 'ducati-panigale-v4r',
    title: 'Ducati Panigale V4R 2026: 230 HP, Teknologi MotoGP',
    excerpt: 'Model R terbaru dari Ducati hadir dengan power 230 HP dan teknologi langsung dari paddock MotoGP.',
    content: `
      <p>Ducati Panigale V4R 2026 adalah puncak dari engineering Italia. Dengan power output 230 HP dan berat hanya 172kg, motor ini menawarkan power-to-weight ratio yang luar biasa: 1.34 HP per kilogram.</p>
      
      <h2>Mesin Desmosedici Stradale R</h2>
      <p>Mesin V4 998cc dengan bore 81mm dan stroke 48.4mm menghasilkan 230 HP pada 15.500 RPM. Red line mencapai 16.500 RPM, tertinggi di kelasnya. Torsi puncak 112 Nm tersedia di 11.500 RPM.</p>
      
      <h2>Elektronik Canggih</h2>
      <p>Package elektronik mencakup: Cornering ABS EVO, DTC EVO 3, DWC EVO, DPL, DQS up/down EVO 2, dan Engine Brake Control EVO 2. Semua terintegrasi dengan IMU 6-axis Bosch.</p>
      
      <h2>Aerodinamika MotoGP</h2>
      <p>Winglet ganda depan menghasilkan 37kg downforce pada 270 km/jam. Fairing dirancang di wind tunnel yang sama dengan Desmosedici GP, menawarkan stabilitas maksimal di kecepatan tinggi.</p>
    `,
    category: 'SUPERBIKE',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop',
    date: '1 Maret 2026',
    author: 'Tim Review IndonesiaSBK',
    readTime: '6 min',
    views: '22.1K',
  },
  {
    id: '4',
    slug: 'f1-bahrain',
    title: 'F1 Bahrain: Hamilton Kuasai FP1, Leclerc Kedua',
    excerpt: 'Lewis Hamilton mendominasi sesi latihan pertama F1 Bahrain 2026, unggul tipis 0.034 detik dari Charles Leclerc.',
    content: `
      <p>Lewis Hamilton menunjukkan performa impresif di sesi Free Practice 1 GP Bahrain, membukukan waktu tercepat 1:29.876 dengan ban soft compound C5. Rider Ferrari ini unggul tipis 0.034 detik dari Charles Leclerc (Ferrari).</p>
      
      <h2>Kondisi Trek</h2>
      <p>Sesi dimulai dengan suhu udara 28 derajat dan trek 42 derajat. Kondisi ini memberikan grip optimal namun menuntut manajemen suhu ban yang tepat.</p>
      
      <h2>Persaingan Ketat</h2>
      <p>Top 5 hanya terpisah 0.198 detik, menunjukkan persaingan sangat ketat di musim ini. Red Bull, Mercedes, Ferrari, dan McLaren semua menunjukkan pace kompetitif.</p>
    `,
    category: 'F1',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    date: '1 Maret 2026',
    author: 'Redaksi IndonesiaSBK',
    readTime: '3 min',
    views: '15.3K',
  },
  {
    id: '5',
    slug: 'yamaha-r9-2026',
    title: 'Yamaha R9 2026: Pengganti R1 Resmi Meluncur',
    excerpt: 'Yamaha resmi meluncurkan R9 sebagai pengganti R1 yang legendaris. Dengan mesin 3-silinder 890cc, R9 menawarkan karakter baru.',
    content: `
      <p>Yamaha Motor Co. resmi mengumumkan R9 sebagai pengganti R1 yang telah discontinue akibat regulasi emisi Euro 5+. R9 menggunakan mesin 3-silinder 890cc CP3 yang sudah terbukti tangguh di MT-09 dan Tracer 9.</p>
      
      <h2>Spesifikasi</h2>
      <p>Mesin CP3 890cc menghasilkan 119 HP pada 10.000 RPM dan torsi 93 Nm pada 7.000 RPM. Meskipun power lebih rendah dari R1 (200 HP), torsi yang lebih besar dan delivery yang linear menjanjikan riding experience yang menyenangkan.</p>
      
      <h2>Teknologi</h2>
      <p>R9 dilengkapi dengan: 6-axis IMU, Cornering ABS, Traction Control 7 level, Slide Control, Wheelie Control, Quick Shift up/down, dan Ride-by-Wire dengan 4 riding mode.</p>
      
      <h2>Harga</h2>
      <p>Yamaha membanderol R9 mulai Rp 250 juta (OTR Jakarta), jauh lebih terjangkau dari R1 yang dulu dijual Rp 600+ juta.</p>
    `,
    category: 'BIKE NEWS',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    date: '29 Februari 2026',
    author: 'Tim IndonesiaSBK',
    readTime: '5 min',
    views: '28.7K',
  },
  {
    id: '6',
    slug: 'kawasaki-zx-10rr',
    title: 'Kawasaki ZX-10RR 2026: Lebih Ringan 5kg, Lebih Garang',
    excerpt: 'Kawasaki merilis update signifikan untuk ZX-10RR 2026. Bobot turun 5kg, power naik jadi 207 HP.',
    content: `
      <p>Kawasaki Heavy Industries mengumumkan pembaruan besar untuk ZX-10RR 2026. Model terbaru ini 5kg lebih ringan (193kg) namun power naik menjadi 207 HP, menjadikannya salah satu superbike paling kompetitif di trek balap.</p>
      
      <h2>Weight Reduction Program</h2>
      <p>Penurunan bobot dicapai melalui: chassis aluminium baru (1.2kg lebih ringan), swingarm magnesium (-800g), exhaust titanium full system (-2.1kg), dan battery lithium-ion (-900g).</p>
      
      <h2>Power Upgrade</h2>
      <p>Mesin inline-4 998cc kini menghasilkan 207 HP pada 13.200 RPM, naik 7 HP dari model sebelumnya. Upgrade ini dicapai melalui porting head baru, camshaft racing spec, dan ECU remapping.</p>
    `,
    category: 'SUPERBIKE',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    date: '28 Februari 2026',
    author: 'Redaksi IndonesiaSBK',
    readTime: '4 min',
    views: '19.4K',
  },
  {
    id: '7',
    slug: 'motogp-marquez',
    title: 'Marquez: "Ducati Sempurna, Target Juara Dunia Realistis"',
    excerpt: 'Marc Marquez optimis merebut gelar juara dunia MotoGP 2026 bersama Ducati Factory setelah performa impresif di pre-season.',
    content: `
      <p>Marc Marquez mengaku sangat puas dengan performa Ducati Desmosedici GP26 setelah mencatat waktu tercepat di official test Losail. Rider asal Spanyol ini menargetkan gelar juara dunia kedelapannya di musim 2026.</p>
      
      <h2>Adaptasi Sempurna</h2>
      <p>"Ducati adalah motor yang sempurna untuk gaya riding saya," ujar Marquez. "Akselerasi, handling, dan elektronik semuanya bekerja harmonis. Saya merasa seperti motor ini dirancang untuk saya."</p>
      
      <h2>Target Realistis</h2>
      <p>Marquez menargetkan minimal 5 kemenangan di separuh awal musim untuk membangun momentum. "Dengan motor seperti ini, target juara dunia sangat realistis," tambahnya dengan percaya diri.</p>
    `,
    category: 'MOTOGP',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    date: '27 Februari 2026',
    author: 'Redaksi IndonesiaSBK',
    readTime: '3 min',
    views: '31.2K',
  },
  {
    id: '8',
    slug: 'motogp-bagnaia-race-pace',
    title: 'Bagnaia: "Race Pace Lebih Penting dari Kualifikasi"',
    excerpt: 'Pecco Bagnaia fokus pada race pace untuk balapan Qatar, meski start dari posisi ketiga.',
    content: `
      <p>Francesco Bagnaia tidak terlalu khawatir dengan posisi start ketiga di GP Qatar. Rider juara bertahan MotoGP ini lebih fokus pada race pace dan strategi ban untuk 22 lap penuh.</p>
      
      <h2>Strategi Berbeda</h2>
      <p>"Kami punya strategi ban yang berbeda. Di long run kemarin, pace kami sangat konsisten," ujar Bagnaia. "Saya yakin bisa fight untuk podium, bahkan kemenangan."</p>
      
      <h2>Catatan Race Simulation</h2>
      <p>Di sesi FP2, Bagnaia mencatat average lap time 1:54.2 dalam race simulation 15 lap, hanya 0.3 detik lebih lambat dari best lap time Marquez.</p>
    `,
    category: 'MOTOGP',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    date: '27 Februari 2026',
    author: 'Redaksi IndonesiaSBK',
    readTime: '3 min',
    views: '24.5K',
  },
  {
    id: '9',
    slug: 'motogp-martin-aprilia',
    title: 'Jorge Martin Masih Adaptasi dengan Karakter Aprilia',
    excerpt: 'Jorge Martin butuh waktu lebih lama untuk beradaptasi dengan Aprilia RS-GP26, terutama di corner entry.',
    content: `
      <p>Jorge Martin mengakui masih butuh waktu untuk sepenuhnya beradaptasi dengan Aprilia RS-GP26. Rider yang pindah dari Ducati ini masih mencari setting ideal untuk karakternya.</p>
      
      <h2>Perbedaan Signifikan</h2>
      <p>"Aprilia punya karakter sangat berbeda dari Ducati," kata Martin. "Terutama di corner entry, saya harus lebih smooth. Tapi exit traction-nya luar biasa."</p>
      
      <h2>Progress Positif</h2>
      <p>Meski masih adaptasi, Martin berhasil qualify posisi 2 di Qatar, hanya 0.089 detik dari pole. "Kami di jalur yang tepat," ujarnya optimis.</p>
    `,
    category: 'MOTOGP',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    date: '26 Februari 2026',
    author: 'Redaksi IndonesiaSBK',
    readTime: '4 min',
    views: '18.9K',
  },
  {
    id: '10',
    slug: 'motogp-bastianini-comeback',
    title: 'Enea Bastianini Comeback Kuat Setelah Cedera',
    excerpt: 'Bastianini kembali dengan performa impresif setelah operasi bahu, qualify posisi 5 di Qatar.',
    content: `
      <p>Enea Bastianini membuktikan dirinya sudah 100% pulih dari operasi bahu dengan qualify posisi 5 di GP Qatar. Rider Ducati Factory ini menunjukkan pace sangat kompetitif.</p>
      
      <h2>Rehabilitasi Intensif</h2>
      <p>"Tiga bulan rehabilitasi sangat berat, tapi sekarang saya merasa lebih kuat dari sebelumnya," ujar Bestia. "Bahu tidak ada masalah sama sekali."</p>
      
      <h2>Target Podium</h2>
      <p>Bastianini menargetkan podium di race pertama musim ini. "Motor kami sangat kompetitif. Saya punya pace untuk fight di depan," katanya percaya diri.</p>
    `,
    category: 'MOTOGP',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    date: '26 Februari 2026',
    author: 'Redaksi IndonesiaSBK',
    readTime: '3 min',
    views: '16.2K',
  },
  {
    id: '11',
    slug: 'wsbk-phillip-island-preview',
    title: 'WSBK Phillip Island: Trek Paling Menantang di Kalender',
    excerpt: 'Sirkuit Phillip Island terkenal sebagai trek paling cepat dan berbahaya di WSBK, butuh keberanian ekstra.',
    content: `
      <p>Sirkuit Phillip Island di Australia dikenal sebagai salah satu trek paling menantang di kalender WSBK. Dengan rata-rata kecepatan 175 km/jam dan tikungan high-speed, trek ini menuntut keberanian maksimal.</p>
      
      <h2>Karakteristik Trek</h2>
      <p>Trek sepanjang 4.445 km ini memiliki 12 tikungan dengan elevasi signifikan. Turn 1 (Doohan Corner) dan Turn 12 (MG) adalah dua tikungan paling ikonik dan berbahaya.</p>
      
      <h2>Cuaca Tidak Menentu</h2>
      <p>Cuaca di Phillip Island sangat tidak menentu. Hujan tiba-tiba sering terjadi, membuat strategi ban menjadi krusial.</p>
    `,
    category: 'WSBK',
    image: '/images/hero/2026-03-01-20-21-15-hero-wsbk.webp',
    date: '27 Februari 2026',
    author: 'Redaksi IndonesiaSBK',
    readTime: '5 min',
    views: '14.8K',
  },
  {
    id: '12',
    slug: 'wsbk-razgatlioglu-dominan',
    title: 'Toprak Razgatlioglu Dominan di FP1 Phillip Island',
    excerpt: 'Toprak Razgatlioglu tercepat di FP1 WSBK Phillip Island, unggul 0.4 detik dari Bautista.',
    content: `
      <p>Toprak Razgatlioglu menunjukkan dominasi di sesi Free Practice 1 WSBK Phillip Island dengan catatan waktu 1:30.123, unggul 0.4 detik dari Alvaro Bautista di posisi kedua.</p>
      
      <h2>Performa BMW Impresif</h2>
      <p>"BMW M1000RR sangat cocok di trek ini," ujar Toprak. "Stabilitas di high-speed corner luar biasa, saya sangat percaya diri dengan motor."</p>
      
      <h2>Target Juara</h2>
      <p>Toprak menargetkan triple win di Phillip Island untuk membuka musim dengan sempurna. "Kami punya pace terbaik, target saya menang semua race," katanya ambisius.</p>
    `,
    category: 'WSBK',
    image: '/images/hero/2026-03-01-20-21-15-hero-wsbk.webp',
    date: '27 Februari 2026',
    author: 'Redaksi IndonesiaSBK',
    readTime: '4 min',
    views: '19.3K',
  },
  {
    id: '13',
    slug: 'wsbk-rea-yamaha-progress',
    title: 'Jonathan Rea Puas dengan Progress Yamaha R1',
    excerpt: 'Jonathan Rea merasa Yamaha R1 WSBK 2026 sudah jauh lebih kompetitif, terutama di corner speed.',
    content: `
      <p>Jonathan Rea mengaku puas dengan progress Yamaha R1 WSBK 2026. Setelah musim 2025 yang sulit, Yamaha melakukan upgrade besar-besaran di chassis dan elektronik.</p>
      
      <h2>Upgrade Signifikan</h2>
      <p>"Chassis baru memberikan feeling jauh lebih baik," kata Rea. "Corner speed kami sekarang bisa menyaingi Ducati dan BMW. Ini progress besar."</p>
      
      <h2>Target Realistis</h2>
      <p>Rea menargetkan minimal 3 podium di 6 race awal musim. "Kami butuh konsistensi dulu sebelum bicara gelar juara," ujarnya realistis.</p>
    `,
    category: 'WSBK',
    image: '/images/hero/2026-03-01-20-21-15-hero-wsbk.webp',
    date: '26 Februari 2026',
    author: 'Redaksi IndonesiaSBK',
    readTime: '3 min',
    views: '15.7K',
  },
  {
    id: '14',
    slug: 'motogp-acosta-rookie-sensasi',
    title: 'Pedro Acosta: Rookie Sensasi yang Bikin Veteran Khawatir',
    excerpt: 'Pedro Acosta tampil impresif di debut MotoGP-nya, qualify posisi 4 dan mengancam para juara dunia.',
    content: `
      <p>Pedro Acosta, rookie KTM berusia 20 tahun, membuat kejutan besar di kualifikasi GP Qatar dengan finish di posisi 4, hanya 0.2 detik dari pole position Marc Marquez.</p>
      
      <h2>Debut Spektakuler</h2>
      <p>"Saya tidak expect bisa sekencang ini di race pertama," ujar Acosta. "KTM RC16 sangat bagus, tim memberikan support luar biasa."</p>
      
      <h2>Ancaman untuk Veteran</h2>
      <p>Para veteran seperti Marquez dan Bagnaia mengakui Acosta sebagai ancaman serius. "Dia punya kecepatan mentah yang luar biasa," kata Marquez.</p>
    `,
    category: 'MOTOGP',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    date: '27 Februari 2026',
    author: 'Redaksi IndonesiaSBK',
    readTime: '4 min',
    views: '26.8K',
  },
  {
    id: '15',
    slug: 'wsbk-bautista-target-juara',
    title: 'Alvaro Bautista: "Target Juara Dunia Ketiga Berturut-turut"',
    excerpt: 'Alvaro Bautista yakin bisa merebut gelar juara dunia WSBK ketiga kalinya bersama Ducati.',
    content: `
      <p>Alvaro Bautista optimis merebut gelar juara dunia WSBK untuk ketiga kalinya berturut-turut. Rider Ducati berusia 38 tahun ini merasa masih di performa puncak.</p>
      
      <h2>Konsistensi Kunci Sukses</h2>
      <p>"Kunci juara di WSBK adalah konsistensi," ujar Bautista. "Bukan soal menang setiap race, tapi finish di podium secara konsisten."</p>
      
      <h2>Ducati Panigale V4R Terbaru</h2>
      <p>Bautista akan menggunakan Ducati Panigale V4R 2026 yang telah diupgrade dengan aero package baru dan elektronik lebih canggih.</p>
    `,
    category: 'WSBK',
    image: '/images/hero/2026-03-01-20-21-15-hero-wsbk.webp',
    date: '26 Februari 2026',
    author: 'Redaksi IndonesiaSBK',
    readTime: '4 min',
    views: '17.4K',
  },
]

// Helper function to get article by slug
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug)
}

// Category name mapping (slug -> article category)
const categoryMapping: Record<string, string[]> = {
  'wsbk': ['WSBK'],
  'motogp': ['MOTOGP', 'MOTO2', 'MOTO3'],
  'f1': ['F1'],
  'superbike': ['SUPERBIKE'],
  'supersport': ['SUPERSPORT'],
  'bike-review': ['BIKE REVIEW'],
  'gear-review': ['GEAR REVIEW'],
  'helmet-review': ['HELMET REVIEW'],
  'tech': ['TECH'],
  'lifestyle': ['LIFESTYLE', 'TOURING', 'MODIFIKASI'],
}

// Helper function to get articles by category
export function getArticlesByCategory(categoryName: string): Article[] {
  // Find matching category keys from mapping
  const categorySlug = categoryName.toLowerCase().replace(/ /g, '-')
  const validCategories = categoryMapping[categorySlug] || [categoryName.toUpperCase()]
  
  return articles.filter(article => 
    validCategories.some(cat => article.category.toUpperCase() === cat.toUpperCase())
  )
}

// Helper function to get related articles (same category, exclude current)
export function getRelatedArticles(currentSlug: string, limit: number = 3): Article[] {
  const current = getArticleBySlug(currentSlug)
  if (!current) return []
  
  return articles
    .filter(article => article.slug !== currentSlug && article.category === current.category)
    .slice(0, limit)
}
