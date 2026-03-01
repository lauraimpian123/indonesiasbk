#!/usr/bin/env node
const { generatePlaceholder } = require('./generate-bike-images');

const bikes = {
  superbike: [
    'ducati-panigale-v4', 'bmw-s1000rr', 'honda-cbr1000rr-r', 'kawasaki-ninja-zx10r',
    'yamaha-r1m', 'ducati-panigale-v2', 'bmw-m1000rr', 'aprilia-rsv4-factory',
    'mv-agusta-f4-rr', 'suzuki-gsxr1000r', 'triumph-daytona-moto2', 'kawasaki-h2r',
    'honda-rc213v-s', 'ducati-superleggera-v4'
  ],
  supersport: [
    'kawasaki-ninja-zx6r', 'yamaha-r7', 'kawasaki-ninja-650', 'yamaha-r6',
    'honda-cbr650r', 'suzuki-gsxr750', 'triumph-daytona-660', 'aprilia-rs660',
    'mv-agusta-f3-800', 'kawasaki-ninja-zx4r', 'honda-cbr600rr', 'yamaha-r3',
    'ktm-rc390', 'ducati-panigale-v2-bayliss'
  ],
  supermatic: [
    'honda-adv160', 'yamaha-nmax-turbo', 'honda-pcx160', 'yamaha-aerox155',
    'suzuki-burgman-street', 'bmw-c400gt', 'yamaha-tmax560', 'honda-forza750',
    'vespa-gts300', 'kymco-ak550', 'honda-xadv750', 'piaggio-mp3-500'
  ],
  naked: [
    'kawasaki-z900', 'yamaha-mt09', 'ducati-streetfighter-v4', 'ktm-super-duke-1290',
    'triumph-speed-triple', 'honda-cb1000r', 'bmw-s1000r', 'aprilia-tuono-v4',
    'mv-agusta-brutale-1000', 'yamaha-mt10', 'kawasaki-z1000', 'suzuki-gsx-s1000'
  ],
  adventure: [
    'bmw-r1250gs', 'honda-africa-twin', 'yamaha-tenere-700', 'ktm-adventure-1290',
    'ducati-multistrada-v4', 'triumph-tiger-900', 'harley-pan-america', 'suzuki-vstrom-1050',
    'bmw-f850gs', 'kawasaki-versys-1000', 'ducati-desertx', 'aprilia-tuareg-660'
  ],
  cruiser: [
    'harley-sportster-s', 'indian-scout', 'yamaha-bolt', 'honda-rebel-1100',
    'kawasaki-vulcan-s', 'triumph-rocket-3', 'bmw-r18', 'harley-road-glide',
    'indian-challenger', 'moto-guzzi-california', 'triumph-bonneville', 'harley-fat-boy'
  ]
};

(async () => {
  console.log('🎨 Generating all bike placeholder images...\n');
  
  for (const [category, bikeList] of Object.entries(bikes)) {
    console.log(`\n📁 Category: ${category}`);
    for (const bikeName of bikeList) {
      await generatePlaceholder(category, bikeName);
    }
  }
  
  console.log('\n\n✅ All bike images generated!');
  console.log(`📊 Total: ${Object.values(bikes).reduce((sum, list) => sum + list.length, 0)} bikes`);
})();
