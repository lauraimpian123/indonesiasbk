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
