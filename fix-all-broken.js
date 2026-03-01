const fs = require('fs');
let content = fs.readFileSync('src/data/articles-phase2a.ts', 'utf8');

// Fix kawasaki-zx-10r
const pattern2 = /\{\s*title:\s*"Kawasaki ZX-10R[\s\S]*?wordCount: 1800,/;
const match2 = content.match(pattern2);
if (match2) {
  const replacement2 = `{
      slug: "kawasaki-zx-10r-legenda-hijau-wsbk",
      title: "Kawasaki ZX-10R: Legenda Hijau di WSBK yang Gak Pernah Kalah Gengsi",
      excerpt: "ZX-10R bukan sekadar motor balap—ini mesin dominasi Jonathan Rea & Kawasaki di WSBK. Tekno, evolusi, & kenapa motor hijau ini bikin lawan frustasi.",
      metaDescription: "ZX-10R bukan sekadar motor balap—ini mesin dominasi Jonathan Rea & Kawasaki di WSBK. Tekno, evolusi, & kenapa motor hijau ini bikin lawan frustasi.",
      author: "King Apex Wheelie",
      date: "2026-03-02",
      readTime: "11 min",
      category: "WSBK",
      image: "/images/featured/wsbk-kawasaki-zx-10r-legenda-hijau-wsbk.webp",
      keywords: ["Kawasaki ZX-10R WSBK", "ZX-10RR", "motor WSBK", "Kawasaki racing", "Jonathan Rea"],`;
  
  content = content.replace(match2[0], replacement2);
  console.log('✓ Fixed: kawasaki-zx-10r-legenda-hijau-wsbk');
}

// Find strategi-balap-wsbk article
const pattern3 = /\{\s*title:\s*"Strategi Balap WSBK[\s\S]*?wordCount: \d+,/;
const match3 = content.match(pattern3);
if (match3) {
  const replacement3 = `{
      slug: "strategi-balap-wsbk-3-race-format",
      title: "Strategi Balap WSBK: 3-Race Format yang Bikin Deg-Degan",
      excerpt: "WSBK bukan MotoGP—3 race per weekend bikin strategi lebih kompleks. Superpole Race, reverse grid, tyre management: ini rahasia juara WSBK.",
      metaDescription: "WSBK bukan MotoGP—3 race per weekend bikin strategi lebih kompleks. Superpole Race, reverse grid, tyre management: ini rahasia juara WSBK.",
      author: "King Apex Wheelie",
      date: "2026-03-02",
      readTime: "10 min",
      category: "WSBK",
      image: "/images/featured/wsbk-strategi-balap-wsbk-3-race-format.webp",
      keywords: ["strategi WSBK", "3-race format", "Superpole Race", "tyre management", "reverse grid"],`;
  
  content = content.replace(match3[0], replacement3);
  console.log('✓ Fixed: strategi-balap-wsbk-3-race-format');
}

fs.writeFileSync('src/data/articles-phase2a.ts', content);
console.log('\n✅ All broken articles fixed!');
