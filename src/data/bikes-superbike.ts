export interface BikeSpec {
  brand: string;
  model: string;
  year: number;
  price: string;
  available: boolean;
  
  // Basic specs
  engine: string;
  power: string;
  torque: string;
  weight: string;
  topSpeed: string;
  
  // Detailed specs
  transmission: string;
  fuelCapacity: string;
  seatHeight: string;
  wheelbase: string;
  
  // Features
  features: string[];
  
  // Pros & Cons
  pros: string[];
  cons: string[];
  
  // Image
  image: string;
}

export const superbikes: BikeSpec[] = [
  // === AVAILABLE IN INDONESIA ===
  {
    brand: 'Ducati',
    model: 'Panigale V4',
    year: 2026,
    price: 'Rp 1.200.000.000',
    available: true,
    engine: '1103cc V4 Desmosedici Stradale',
    power: '214 HP @ 13,000 rpm',
    torque: '124 Nm @ 9,500 rpm',
    weight: '198 kg',
    topSpeed: '300+ km/h',
    transmission: '6-speed',
    fuelCapacity: '16 L',
    seatHeight: '830 mm',
    wheelbase: '1469 mm',
    features: [
      'Riding Modes (Race, Sport, Street, Wet)',
      'Cornering ABS EVO',
      'Ducati Traction Control EVO 3',
      'Quick Shift Up/Down EVO 2',
      'TFT Dashboard 5-inch',
      'Ducati Wheelie Control EVO',
      'Engine Brake Control EVO'
    ],
    pros: [
      'Tenaga luar biasa powerful dan responsif',
      'Handling sangat presisi dengan chassis dari MotoGP',
      'Teknologi elektronik tercanggih di kelasnya'
    ],
    cons: [
      'Harga sangat mahal',
      'Riding position agresif (tidak nyaman untuk harian)',
      'Service cost dan spare parts sangat mahal'
    ],
    image: '/images/bikes/superbike/ducati-panigale-v4.webp'
  },
  {
    brand: 'BMW',
    model: 'S1000RR',
    year: 2026,
    price: 'Rp 850.000.000',
    available: true,
    engine: '999cc Inline-4',
    power: '210 HP @ 13,500 rpm',
    torque: '113 Nm @ 11,000 rpm',
    weight: '197 kg',
    topSpeed: '299 km/h',
    transmission: '6-speed',
    fuelCapacity: '16.5 L',
    seatHeight: '824 mm',
    wheelbase: '1457 mm',
    features: [
      'Dynamic Traction Control (DTC)',
      'ABS Pro with Cornering Function',
      'Dynamic Damping Control (DDC)',
      'Launch Control',
      'Pit Lane Limiter',
      'HP Shift Assistant Pro',
      '6.5-inch TFT Display'
    ],
    pros: [
      'Elektronik sangat canggih dan mudah digunakan',
      'Performa stabil dan predictable',
      'Build quality premium khas BMW'
    ],
    cons: [
      'Desain kurang agresif dibanding rival',
      'Harga parts mahal',
      'Berat sedikit lebih tinggi'
    ],
    image: '/images/bikes/superbike/bmw-s1000rr.webp'
  },
  {
    brand: 'Honda',
    model: 'CBR1000RR-R Fireblade SP',
    year: 2026,
    price: 'Rp 1.100.000.000',
    available: true,
    engine: '999cc Inline-4',
    power: '217 HP @ 14,500 rpm',
    torque: '113 Nm @ 12,500 rpm',
    weight: '201 kg',
    topSpeed: '299 km/h',
    transmission: '6-speed',
    fuelCapacity: '16 L',
    seatHeight: '830 mm',
    wheelbase: '1455 mm',
    features: [
      'Riding Mode Select System',
      'Honda Selectable Torque Control (HSTC)',
      'Cornering ABS',
      'Throttle By Wire',
      'Engine Brake Control',
      'Quick Shifter',
      'Full-color TFT meter'
    ],
    pros: [
      'DNA RC213V MotoGP yang proven',
      'Top speed limiter bisa dilepas (track mode)',
      'Handling sangat tajam dan agile'
    ],
    cons: [
      'Harga tinggi untuk brand Jepang',
      'Posisi riding sangat ekstrem',
      'Tidak nyaman untuk penggunaan harian'
    ],
    image: '/images/bikes/superbike/honda-cbr1000rr-r.webp'
  },
  {
    brand: 'Kawasaki',
    model: 'Ninja ZX-10R',
    year: 2026,
    price: 'Rp 650.000.000',
    available: true,
    engine: '998cc Inline-4',
    power: '203 HP @ 13,200 rpm',
    torque: '114.9 Nm @ 11,400 rpm',
    weight: '207 kg',
    topSpeed: '299 km/h',
    transmission: '6-speed',
    fuelCapacity: '17 L',
    seatHeight: '835 mm',
    wheelbase: '1450 mm',
    features: [
      'Kawasaki Traction Control (KTRC)',
      'Kawasaki Cornering Management Function (KCMF)',
      'Kawasaki Launch Control Mode (KLCM)',
      'Quick Shifter',
      'Electronic Suspension (KECS)',
      'TFT Color Display 4.3-inch'
    ],
    pros: [
      'Harga paling terjangkau di kategori superbike',
      'Proven di WorldSBK dengan banyak juara',
      'Parts dan service lebih affordable'
    ],
    cons: [
      'Power output sedikit di bawah rival',
      'Desain sudah agak dated',
      'Elektronik tidak secanggih Ducati/BMW'
    ],
    image: '/images/bikes/superbike/kawasaki-ninja-zx10r.webp'
  },
  {
    brand: 'Yamaha',
    model: 'YZF-R1M',
    year: 2026,
    price: 'Rp 750.000.000',
    available: true,
    engine: '998cc Inline-4 Crossplane',
    power: '200 HP @ 13,500 rpm',
    torque: '112.4 Nm @ 11,500 rpm',
    weight: '202 kg',
    topSpeed: '299 km/h',
    transmission: '6-speed',
    fuelCapacity: '17 L',
    seatHeight: '855 mm',
    wheelbase: '1405 mm',
    features: [
      'Yamaha Ride Control (YRC)',
      'Slide Control System (SCS)',
      'Launch Control System (LCS)',
      'Quick Shift System (QSS)',
      'Öhlins Electronic Racing Suspension (ERS)',
      'Carbon Fiber Cowl & Fuel Tank',
      '7-inch TFT Display'
    ],
    pros: [
      'Crossplane engine dengan karakter unik',
      'Öhlins suspension yang adjustable',
      'M1 MotoGP vibes dengan suara khas'
    ],
    cons: [
      'Power output paling rendah di kelas',
      'Harga premium dengan performa standar',
      'Seat height tinggi (855mm)'
    ],
    image: '/images/bikes/superbike/yamaha-r1m.webp'
  },
  {
    brand: 'Ducati',
    model: 'Panigale V2',
    year: 2026,
    price: 'Rp 650.000.000',
    available: true,
    engine: '955cc V2 Superquadro',
    power: '155 HP @ 10,750 rpm',
    torque: '104 Nm @ 9,000 rpm',
    weight: '200 kg',
    topSpeed: '270 km/h',
    transmission: '6-speed',
    fuelCapacity: '17 L',
    seatHeight: '840 mm',
    wheelbase: '1436 mm',
    features: [
      'Ducati Traction Control EVO',
      'Cornering ABS EVO',
      'Ducati Quick Shift (DQS) Up/Down EVO',
      'Riding Modes',
      'Engine Brake Control (EBC) EVO',
      '4.3-inch TFT Display'
    ],
    pros: [
      'Lebih tame dan usable untuk street',
      'Handling lebih mudah dari V4',
      'Harga lebih terjangkau dari flagship'
    ],
    cons: [
      'Power jauh di bawah superbike 1000cc',
      'Masih mahal untuk twin-cylinder',
      'Bukan true superbike (lebih ke supersport+)'
    ],
    image: '/images/bikes/superbike/ducati-panigale-v2.webp'
  },
  {
    brand: 'BMW',
    model: 'M1000RR',
    year: 2026,
    price: 'Rp 1.400.000.000',
    available: true,
    engine: '999cc Inline-4',
    power: '212 HP @ 14,500 rpm',
    torque: '113 Nm @ 11,000 rpm',
    weight: '192 kg',
    topSpeed: '306 km/h',
    transmission: '6-speed',
    fuelCapacity: '16.5 L',
    seatHeight: '832 mm',
    wheelbase: '1457 mm',
    features: [
      'M Carbon Wheels',
      'M GPS Lap Trigger',
      'M Winglets',
      'BMW ShiftCam Technology',
      'Full M Package Electronics',
      'Pit Lane Limiter',
      'Launch Control Pro'
    ],
    pros: [
      'Teknologi M Division dari BMW Motorsport',
      'Carbon wheels super ringan',
      'Top speed tertinggi di kelas'
    ],
    cons: [
      'Harga paling mahal di lineup BMW',
      'Overkill untuk street riding',
      'Maintenance interval pendek (track-oriented)'
    ],
    image: '/images/bikes/superbike/bmw-m1000rr.webp'
  },

  // === NOT AVAILABLE IN INDONESIA ===
  {
    brand: 'Aprilia',
    model: 'RSV4 1100 Factory',
    year: 2026,
    price: '~Rp 950.000.000',
    available: false,
    engine: '1099cc V4',
    power: '217 HP @ 13,200 rpm',
    torque: '122 Nm @ 10,500 rpm',
    weight: '199 kg (dry)',
    topSpeed: '305 km/h',
    transmission: '6-speed',
    fuelCapacity: '18.5 L',
    seatHeight: '845 mm',
    wheelbase: '1439 mm',
    features: [
      'Aprilia Performance Ride Control (aPRC)',
      'Multi-map Cornering ABS',
      'Wheelie Control',
      'Traction Control',
      'Launch Control',
      'Quick Shift',
      'Öhlins NIX-30 Fork & TTX Shock'
    ],
    pros: [
      'V4 engine compact dan powerful',
      'WorldSBK proven technology',
      'Handling superior dengan geometri perfect'
    ],
    cons: [
      'Tidak tersedia di Indonesia',
      'Brand awareness rendah di Asia',
      'Parts dan service sulit'
    ],
    image: '/images/bikes/superbike/aprilia-rsv4-factory.webp'
  },
  {
    brand: 'MV Agusta',
    model: 'F4 RR',
    year: 2026,
    price: '~Rp 1.500.000.000',
    available: false,
    engine: '998cc Inline-4',
    power: '212 HP @ 13,600 rpm',
    torque: '111 Nm @ 10,600 rpm',
    weight: '175 kg (dry)',
    topSpeed: '310 km/h',
    transmission: '6-speed',
    fuelCapacity: '17 L',
    seatHeight: '830 mm',
    wheelbase: '1430 mm',
    features: [
      'MVICS Motor & Vehicle Integrated Control System',
      '8-level Traction Control',
      'Cornering ABS',
      'Quick Shifter Up/Down',
      'Launch Control',
      'MV EAS 3.0 (Electronic Suspension)',
      '5.5-inch TFT Display'
    ],
    pros: [
      'Desain paling cantik di dunia',
      'Exhaust note orgasmic',
      'Eksklusivitas tinggi (limited production)'
    ],
    cons: [
      'Harga sangat mahal',
      'Reliability questionable',
      'Dealer dan service network minimal'
    ],
    image: '/images/bikes/superbike/mv-agusta-f4-rr.webp'
  },
  {
    brand: 'Suzuki',
    model: 'GSX-R1000R',
    year: 2026,
    price: '~Rp 600.000.000',
    available: false,
    engine: '999cc Inline-4',
    power: '202 HP @ 13,200 rpm',
    torque: '117.6 Nm @ 10,800 rpm',
    weight: '203 kg',
    topSpeed: '299 km/h',
    transmission: '6-speed',
    fuelCapacity: '16 L',
    seatHeight: '825 mm',
    wheelbase: '1420 mm',
    features: [
      'Suzuki Drive Mode Selector (SDMS)',
      'Motion Track Anti-lock Brake System',
      'Traction Control System',
      'Launch Control',
      'Quick Shift System',
      'Bi-directional Quick Shift',
      'Showa BFF Fork'
    ],
    pros: [
      'Value for money terbaik',
      'Proven reliability',
      'Seat height paling rendah (825mm)'
    ],
    cons: [
      'Suzuki stop production untuk Indonesia',
      'Desain sudah tidak update',
      'Elektronik kurang modern'
    ],
    image: '/images/bikes/superbike/suzuki-gsxr1000r.webp'
  },
  {
    brand: 'Triumph',
    model: 'Daytona Moto2 765',
    year: 2026,
    price: '~Rp 700.000.000',
    available: false,
    engine: '765cc Inline-3',
    power: '130 HP @ 12,250 rpm',
    torque: '80 Nm @ 9,250 rpm',
    weight: '165 kg (dry)',
    topSpeed: '250 km/h',
    transmission: '6-speed',
    fuelCapacity: '15 L',
    seatHeight: '810 mm',
    wheelbase: '1405 mm',
    features: [
      'Moto2-spec Engine',
      'Öhlins NIX30 Fork',
      'Öhlins TTX36 Shock',
      'Brembo Stylema Calipers',
      'Limited Edition (765 units worldwide)',
      'Carbon Fiber Bodywork',
      'Quick Shifter'
    ],
    pros: [
      'Limited edition collector item',
      'Moto2 Championship homologation',
      'Triple engine yang unik dan karakterful'
    ],
    cons: [
      'Bukan true superbike (750cc)',
      'Power output rendah',
      'Sangat langka dan susah dicari'
    ],
    image: '/images/bikes/superbike/triumph-daytona-moto2.webp'
  },
  {
    brand: 'Kawasaki',
    model: 'Ninja H2R',
    year: 2026,
    price: '~Rp 1.800.000.000',
    available: false,
    engine: '998cc Inline-4 Supercharged',
    power: '310 HP @ 14,000 rpm',
    torque: '165 Nm @ 12,500 rpm',
    weight: '216 kg',
    topSpeed: '400+ km/h',
    transmission: '6-speed with Slipper Clutch',
    fuelCapacity: '17 L',
    seatHeight: '825 mm',
    wheelbase: '1455 mm',
    features: [
      'Supercharged Engine',
      'Kawasaki Engine Brake Control',
      'Kawasaki Launch Control Mode',
      'Cornering Management Function',
      'Ohlins Electronic Steering Damper',
      'Carbon Fiber Fairings',
      'Track-Only (Not Street Legal)'
    ],
    pros: [
      'Power paling gila (310 HP)',
      'Top speed tertinggi (400+ km/h)',
      'Supercharged technology'
    ],
    cons: [
      'Hanya untuk track (illegal di jalan)',
      'Harga ekstrem mahal',
      'Sangat berbahaya untuk rider biasa'
    ],
    image: '/images/bikes/superbike/kawasaki-h2r.webp'
  },
  {
    brand: 'Honda',
    model: 'RC213V-S',
    year: 2022,
    price: '~Rp 4.000.000.000',
    available: false,
    engine: '999cc V4',
    power: '159 HP @ 10,750 rpm (street legal)',
    torque: '87.1 Nm @ 10,500 rpm',
    weight: '170 kg (dry)',
    topSpeed: '270 km/h (street), 300+ km/h (race kit)',
    transmission: '6-speed',
    fuelCapacity: '16 L',
    seatHeight: '820 mm',
    wheelbase: '1461 mm',
    features: [
      'MotoGP-derived V4 Engine',
      'Race Kit Available (215 HP)',
      'Öhlins TTX36 GP Shock',
      'Marchesini Forged Wheels',
      'PGM-DSFI Injection',
      'Extremely Limited Production'
    ],
    pros: [
      'Literal MotoGP bike untuk jalan raya',
      'Desain paling exotic',
      'Ultimate collector item'
    ],
    cons: [
      'Harga ridiculous (4 miliar)',
      'Power rendah (street legal version)',
      'Discontinued (last production 2022)'
    ],
    image: '/images/bikes/superbike/honda-rc213v-s.webp'
  },
  {
    brand: 'Ducati',
    model: 'Superleggera V4',
    year: 2023,
    price: '~Rp 2.500.000.000',
    available: false,
    engine: '998cc V4 Desmosedici Stradale',
    power: '224 HP @ 15,250 rpm',
    torque: '116 Nm @ 11,750 rpm',
    weight: '159 kg (dry)',
    topSpeed: '300+ km/h',
    transmission: '6-speed',
    fuelCapacity: '16 L',
    seatHeight: '830 mm',
    wheelbase: '1469 mm',
    features: [
      'Carbon Fiber Frame, Swingarm, Wheels',
      'Biplane Wings (MotoGP aero)',
      'Öhlins NPX Pressurized Fork',
      'Öhlins TTX36 Shock',
      'Brembo Stylema R Calipers',
      'Limited to 500 units worldwide'
    ],
    pros: [
      'Berat teringan di dunia (159kg)',
      'Power tertinggi untuk Panigale (224 HP)',
      'Full carbon construction'
    ],
    cons: [
      'Harga insane (2.5 miliar)',
      'Limited production (sold out)',
      'Terlalu precious untuk dipakai'
    ],
    image: '/images/bikes/superbike/ducati-superleggera-v4.webp'
  }
];
