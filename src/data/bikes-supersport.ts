import { BikeSpec } from './bikes-superbike';

export const supersports: BikeSpec[] = [
  // === AVAILABLE IN INDONESIA ===
  {
    brand: 'Kawasaki',
    model: 'Ninja ZX-6R',
    year: 2026,
    price: 'Rp 350.000.000',
    available: true,
    engine: '636cc Inline-4',
    power: '130 HP @ 13,500 rpm',
    torque: '70.8 Nm @ 11,000 rpm',
    weight: '196 kg',
    topSpeed: '260 km/h',
    transmission: '6-speed',
    fuelCapacity: '17 L',
    seatHeight: '830 mm',
    wheelbase: '1400 mm',
    features: [
      'Kawasaki Traction Control (KTRC)',
      'Power Mode Selection',
      'Kawasaki Quick Shifter',
      'ABS with Dual-Channel',
      'Digital Display',
      'High-RPM Cam Profile'
    ],
    pros: [
      'Engine 636cc paling powerful di kategori 600cc',
      'Harga terjangkau untuk supersport',
      'Proven reliability'
    ],
    cons: [
      'Desain sudah tidak update',
      'Elektronik basic dibanding rival',
      'Berat lebih tinggi'
    ],
    image: '/images/bikes/supersport/kawasaki-ninja-zx6r.webp'
  },
  {
    brand: 'Yamaha',
    model: 'YZF-R7',
    year: 2026,
    price: 'Rp 250.000.000',
    available: true,
    engine: '689cc Parallel-Twin',
    power: '73.4 HP @ 8,750 rpm',
    torque: '67 Nm @ 6,500 rpm',
    weight: '188 kg',
    topSpeed: '220 km/h',
    transmission: '6-speed',
    fuelCapacity: '13 L',
    seatHeight: '835 mm',
    wheelbase: '1395 mm',
    features: [
      'CP2 Crossplane-Concept Engine',
      'Ride-by-Wire Throttle',
      'Assist & Slipper Clutch',
      'ABS',
      'LCD Instrument Panel',
      'Deltabox Frame'
    ],
    pros: [
      'Engine CP2 yang karakterful',
      'Handling sangat nimble dan fun',
      'Harga entry-level friendly'
    ],
    cons: [
      'Power rendah (hanya 73 HP)',
      'Bukan true supersport (lebih ke sport twin)',
      'Top speed terbatas'
    ],
    image: '/images/bikes/supersport/yamaha-r7.webp'
  },
  {
    brand: 'Kawasaki',
    model: 'Ninja 650',
    year: 2026,
    price: 'Rp 180.000.000',
    available: true,
    engine: '649cc Parallel-Twin',
    power: '67.3 HP @ 8,000 rpm',
    torque: '64 Nm @ 6,700 rpm',
    weight: '193 kg',
    topSpeed: '210 km/h',
    transmission: '6-speed',
    fuelCapacity: '15 L',
    seatHeight: '790 mm',
    wheelbase: '1410 mm',
    features: [
      'Dual-Channel ABS',
      'Assist & Slipper Clutch',
      'Low-RPM Assist',
      'Digital/Analog Meter',
      'LED Lighting',
      'Economy Riding Indicator'
    ],
    pros: [
      'Sangat beginner-friendly',
      'Seat height rendah (790mm)',
      'Maintenance murah dan mudah'
    ],
    cons: [
      'Power sangat rendah untuk supersport',
      'Handling biasa saja',
      'Lebih cocok untuk touring/commuting'
    ],
    image: '/images/bikes/supersport/kawasaki-ninja-650.webp'
  },
  {
    brand: 'Yamaha',
    model: 'YZF-R6',
    year: 2024,
    price: 'Rp 400.000.000',
    available: true,
    engine: '599cc Inline-4',
    power: '117.3 HP @ 14,500 rpm',
    torque: '61.7 Nm @ 10,500 rpm',
    weight: '190 kg',
    topSpeed: '262 km/h',
    transmission: '6-speed',
    fuelCapacity: '17 L',
    seatHeight: '850 mm',
    wheelbase: '1375 mm',
    features: [
      'YCC-T (Yamaha Chip Controlled Throttle)',
      'D-Mode (Dual Mode)',
      'Traction Control System (TCS)',
      'Quick Shift System (QSS)',
      'ABS',
      'Deltabox Aluminum Frame'
    ],
    pros: [
      'True inline-4 supersport',
      'High-revving engine (14,500 rpm)',
      'Track-ready dari pabrik'
    ],
    cons: [
      'Riding position sangat agresif',
      'Tidak nyaman untuk street',
      'Production discontinued (last 2024)'
    ],
    image: '/images/bikes/supersport/yamaha-r6.webp'
  },
  {
    brand: 'Honda',
    model: 'CBR650R',
    year: 2026,
    price: 'Rp 220.000.000',
    available: true,
    engine: '649cc Inline-4',
    power: '95 HP @ 12,000 rpm',
    torque: '63 Nm @ 8,500 rpm',
    weight: '208 kg',
    topSpeed: '230 km/h',
    transmission: '6-speed',
    fuelCapacity: '15.4 L',
    seatHeight: '810 mm',
    wheelbase: '1450 mm',
    features: [
      'Inline-4 Engine (unik di 650cc class)',
      'Showa SFF-BP Fork',
      'Dual-Channel ABS',
      'Assist Slipper Clutch',
      'LED Lighting',
      'Digital/Analog Display'
    ],
    pros: [
      'Satu-satunya inline-4 di kategori 650cc',
      'Suara engine merdu',
      'Comfortable untuk touring'
    ],
    cons: [
      'Power tidak exceptional',
      'Berat paling tinggi (208kg)',
      'Handling kurang sporty'
    ],
    image: '/images/bikes/supersport/honda-cbr650r.webp'
  },
  {
    brand: 'Suzuki',
    model: 'GSX-R750',
    year: 2023,
    price: 'Rp 450.000.000',
    available: true,
    engine: '750cc Inline-4',
    power: '148 HP @ 12,000 rpm',
    torque: '86 Nm @ 10,000 rpm',
    weight: '190 kg',
    topSpeed: '270 km/h',
    transmission: '6-speed',
    fuelCapacity: '17 L',
    seatHeight: '810 mm',
    wheelbase: '1390 mm',
    features: [
      'Suzuki Drive Mode Selector',
      'Traction Control System',
      'ABS',
      'Quick Shift System',
      'Showa Big Piston Fork',
      'Brembo Brakes'
    ],
    pros: [
      'Sweet spot antara 600cc dan 1000cc',
      'Power dan handling balance',
      'Legendary GSX-R lineage'
    ],
    cons: [
      'Suzuki keluar dari Indonesia (limited stock)',
      'Desain sudah dated',
      'Spare parts mahal dan susah'
    ],
    image: '/images/bikes/supersport/suzuki-gsxr750.webp'
  },

  // === NOT AVAILABLE IN INDONESIA ===
  {
    brand: 'Triumph',
    model: 'Daytona 660',
    year: 2026,
    price: '~Rp 300.000.000',
    available: false,
    engine: '660cc Inline-3',
    power: '95 HP @ 11,250 rpm',
    torque: '69 Nm @ 8,250 rpm',
    weight: '185 kg',
    topSpeed: '240 km/h',
    transmission: '6-speed',
    fuelCapacity: '14 L',
    seatHeight: '810 mm',
    wheelbase: '1400 mm',
    features: [
      'Triple Engine Signature Sound',
      'Ride-by-Wire',
      'Traction Control',
      'ABS with Cornering Function',
      'TFT Display',
      'Quick Shifter'
    ],
    pros: [
      'Triple engine yang unik dan fun',
      'Balance performa dan usability',
      'Triumph build quality'
    ],
    cons: [
      'Tidak tersedia di Indonesia',
      'Power moderate',
      'Brand awareness rendah di Asia'
    ],
    image: '/images/bikes/supersport/triumph-daytona-660.webp'
  },
  {
    brand: 'Aprilia',
    model: 'RS 660',
    year: 2026,
    price: '~Rp 350.000.000',
    available: false,
    engine: '659cc Parallel-Twin',
    power: '100 HP @ 10,500 rpm',
    torque: '67 Nm @ 8,500 rpm',
    weight: '183 kg',
    topSpeed: '240 km/h',
    transmission: '6-speed',
    fuelCapacity: '15 L',
    seatHeight: '820 mm',
    wheelbase: '1370 mm',
    features: [
      'Aprilia Performance Ride Control (aPRC)',
      'Multi-level Traction Control',
      'Wheelie Control',
      'Engine Brake Control',
      'Cornering ABS',
      '5-inch TFT Display'
    ],
    pros: [
      'Elektronik level superbike',
      'Handling superior',
      'Desain modern dan aggressive'
    ],
    cons: [
      'Tidak ada dealer resmi di Indonesia',
      'Parts sangat susah',
      'Service network minimal'
    ],
    image: '/images/bikes/supersport/aprilia-rs660.webp'
  },
  {
    brand: 'MV Agusta',
    model: 'F3 800',
    year: 2026,
    price: '~Rp 600.000.000',
    available: false,
    engine: '798cc Inline-3',
    power: '148 HP @ 13,000 rpm',
    torque: '88 Nm @ 10,600 rpm',
    weight: '173 kg (dry)',
    topSpeed: '260 km/h',
    transmission: '6-speed',
    fuelCapacity: '16.5 L',
    seatHeight: '812 mm',
    wheelbase: '1380 mm',
    features: [
      'MVICS 2.0 Electronics',
      '8-level Traction Control',
      'Cornering ABS',
      'Quick Shift Up/Down',
      'Engine Brake Control',
      '5.5-inch TFT'
    ],
    pros: [
      'Desain paling cantik di kategori',
      'Triple engine dengan karakter unik',
      'Power output tinggi'
    ],
    cons: [
      'Harga sangat mahal',
      'Reliability issues',
      'Dealer network sangat limited'
    ],
    image: '/images/bikes/supersport/mv-agusta-f3-800.webp'
  },
  {
    brand: 'Kawasaki',
    model: 'Ninja ZX-4R',
    year: 2026,
    price: '~Rp 280.000.000',
    available: false,
    engine: '399cc Inline-4',
    power: '77 HP @ 14,500 rpm',
    torque: '39 Nm @ 12,000 rpm',
    weight: '189 kg',
    topSpeed: '220 km/h',
    transmission: '6-speed',
    fuelCapacity: '14 L',
    seatHeight: '785 mm',
    wheelbase: '1340 mm',
    features: [
      'Inline-4 Engine (smallest in world)',
      'Kawasaki Traction Control',
      'Power Mode Selection',
      'Quick Shifter',
      'ABS',
      'TFT Color Display'
    ],
    pros: [
      'Inline-4 termini di dunia (399cc)',
      'High-revving fun machine',
      'Affordable supersport experience'
    ],
    cons: [
      'Hanya dijual di Jepang',
      'Power rendah',
      'Limited market appeal'
    ],
    image: '/images/bikes/supersport/kawasaki-ninja-zx4r.webp'
  },
  {
    brand: 'Honda',
    model: 'CBR600RR',
    year: 2024,
    price: '~Rp 380.000.000',
    available: false,
    engine: '599cc Inline-4',
    power: '118 HP @ 14,000 rpm',
    torque: '64 Nm @ 11,500 rpm',
    weight: '196 kg',
    topSpeed: '260 km/h',
    transmission: '6-speed',
    fuelCapacity: '18 L',
    seatHeight: '820 mm',
    wheelbase: '1375 mm',
    features: [
      'Combined ABS',
      'HESD (Honda Electronic Steering Damper)',
      'Showa Big Piston Fork',
      'Unit Pro-Link Rear Suspension',
      'Dual-Stage Fuel Injection'
    ],
    pros: [
      'Legendary CBR heritage',
      'Balance handling dan comfort',
      'Honda reliability'
    ],
    cons: [
      'Production discontinued',
      'Elektronik outdated',
      'Tidak dijual di Indonesia'
    ],
    image: '/images/bikes/supersport/honda-cbr600rr.webp'
  },
  {
    brand: 'Yamaha',
    model: 'YZF-R3',
    year: 2026,
    price: '~Rp 120.000.000',
    available: false,
    engine: '321cc Parallel-Twin',
    power: '42 HP @ 10,750 rpm',
    torque: '29.6 Nm @ 9,000 rpm',
    weight: '169 kg',
    topSpeed: '180 km/h',
    transmission: '6-speed',
    fuelCapacity: '14 L',
    seatHeight: '780 mm',
    wheelbase: '1380 mm',
    features: [
      'Deltabox Frame',
      'Assist & Slipper Clutch',
      'ABS',
      'LCD Instrument Panel',
      'LED Lighting',
      'Forged Pistons'
    ],
    pros: [
      'Perfect beginner supersport',
      'Lightweight dan easy handling',
      'Affordable'
    ],
    cons: [
      'Tidak dijual di Indonesia (YZF-R25 sebagai pengganti)',
      'Power sangat rendah',
      'Lebih cocok untuk track day practice'
    ],
    image: '/images/bikes/supersport/yamaha-r3.webp'
  },
  {
    brand: 'KTM',
    model: 'RC 390',
    year: 2026,
    price: '~Rp 150.000.000',
    available: false,
    engine: '373cc Single-Cylinder',
    power: '43 HP @ 9,000 rpm',
    torque: '37 Nm @ 7,000 rpm',
    weight: '172 kg',
    topSpeed: '170 km/h',
    transmission: '6-speed',
    fuelCapacity: '13.7 L',
    seatHeight: '820 mm',
    wheelbase: '1347 mm',
    features: [
      'Ride-by-Wire',
      'Cornering ABS',
      'Traction Control',
      'Quick Shifter+',
      'TFT Display',
      'Supermoto Mode'
    ],
    pros: [
      'Teknologi canggih untuk harga entry',
      'Track-focused handling',
      'KTM performance DNA'
    ],
    cons: [
      'Single-cylinder (bukan twin)',
      'Tidak dijual di Indonesia',
      'Vibration tinggi'
    ],
    image: '/images/bikes/supersport/ktm-rc390.webp'
  },
  {
    brand: 'Ducati',
    model: 'Panigale V2 Bayliss',
    year: 2023,
    price: '~Rp 800.000.000',
    available: false,
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
      'Troy Bayliss Livery',
      'Öhlins Suspension',
      'Ducati Quick Shift EVO',
      'Cornering ABS EVO',
      'Ducati Traction Control EVO',
      'Limited Edition (333 units)'
    ],
    pros: [
      'Limited edition collector item',
      'Troy Bayliss legend tribute',
      'Premium Öhlins suspension'
    ],
    cons: [
      'Harga premium tinggi',
      'Sold out (limited 333 units)',
      'Terlalu sayang untuk dipakai'
    ],
    image: '/images/bikes/supersport/ducati-panigale-v2-bayliss.webp'
  }
];
