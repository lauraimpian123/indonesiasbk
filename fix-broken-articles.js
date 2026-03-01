const fs = require('fs');

const content = fs.readFileSync('src/data/articles-phase2a.ts', 'utf8');

// Find the broken article and fix it
let fixed = content;

// Fix article: 5-pembalap-wsbk-terbaik-sepanjang-masa
const brokenPattern1 = /\{\s*title:\s*"5 Pembalap WSBK Terbaik[\s\S]*?wordCount: 1900,/;
const match1 = fixed.match(brokenPattern1);

if (match1) {
  const replacement = `{
      slug: "5-pembalap-wsbk-terbaik-sepanjang-masa",
      title: "5 Pembalap WSBK Terbaik Sepanjang Masa: Legenda Aspal yang Mengubah Sejarah",
      excerpt: "Dari Fogarty sampai Rea, ini 5 pembalap WSBK terbaik sepanjang masa yang bikin jantung deg-degan di tiap tikungan. Data lengkap + opini berani!",
      metaDescription: "Dari Fogarty sampai Rea, ini 5 pembalap WSBK terbaik sepanjang masa yang bikin jantung deg-degan di tiap tikungan. Data lengkap + opini berani!",
      author: "King Apex Wheelie",
      date: "2026-03-02",
      readTime: "12 min",
      category: "WSBK",
      image: "/images/featured/wsbk-5-pembalap-wsbk-terbaik-sepanjang-masa.webp",
      keywords: ["pembalap WSBK terbaik", "legenda WSBK", "juara WSBK", "Jonathan Rea", "Carl Fogarty"],`;
  
  fixed = fixed.replace(match1[0], replacement);
  console.log('✓ Fixed: 5-pembalap-wsbk-terbaik-sepanjang-masa');
}

// Find other broken articles (missing author/date/readTime/excerpt)
const slugs = [...fixed.matchAll(/slug:\s*"([^"]+)"/g)].map(m => m[1]);

console.log(`\nChecking ${slugs.length} articles for missing fields...`);

let issuesFound = [];
slugs.forEach((slug, idx) => {
  // Extract article block
  const slugIndex = fixed.indexOf(`slug: "${slug}"`);
  if (slugIndex === -1) return;
  
  let endIndex = fixed.indexOf('slug:', slugIndex + 1);
  if (endIndex === -1) endIndex = fixed.length;
  
  const block = fixed.substring(slugIndex, endIndex);
  
  const hasExcerpt = /excerpt:\s*"/.test(block);
  const hasAuthor = /author:\s*"/.test(block);
  const hasDate = /date:\s*"/.test(block);
  const hasReadTime = /readTime:\s*"/.test(block);
  
  if (!hasExcerpt || !hasAuthor || !hasDate || !hasReadTime) {
    issuesFound.push({
      slug,
      missing: {
        excerpt: !hasExcerpt,
        author: !hasAuthor,
        date: !hasDate,
        readTime: !hasReadTime
      }
    });
  }
});

if (issuesFound.length > 0) {
  console.log(`\n⚠️ Found ${issuesFound.length} articles with missing fields:`);
  issuesFound.forEach((issue, idx) => {
    const missing = Object.keys(issue.missing).filter(k => issue.missing[k]);
    console.log(`  ${idx+1}. ${issue.slug.substring(0,50)}...`);
    console.log(`     Missing: ${missing.join(', ')}`);
  });
}

fs.writeFileSync('src/data/articles-phase2a.ts', fixed);
console.log('\n✅ File updated!');
