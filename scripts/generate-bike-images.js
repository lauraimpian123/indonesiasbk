#!/usr/bin/env node

/**
 * Generate placeholder images for bikes
 * Creates professional gradient backgrounds with bike branding
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const colors = {
  superbike: { start: '#ff1744', end: '#d50000' },
  supersport: { start: '#2979ff', end: '#0d47a1' },
  supermatic: { start: '#00e676', end: '#00c853' },
  naked: { start: '#ff9100', end: '#ff6f00' },
  adventure: { start: '#ffd600', end: '#f57f17' },
  cruiser: { start: '#9c27b0', end: '#6a1b9a' }
};

async function generatePlaceholder(category, bikeName, width = 1200, height = 800) {
  const outputDir = path.join(__dirname, '../public/images/bikes', category);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const color = colors[category] || { start: '#666', end: '#333' };
  
  // Create SVG with gradient
  const svg = `
    <svg width="${width}" height="${height}">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color.start};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color.end};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="48" font-weight="bold" 
            fill="white" text-anchor="middle" dominant-baseline="middle" opacity="0.3">
        ${bikeName}
      </text>
    </svg>
  `;

  const outputPath = path.join(outputDir, `${bikeName.toLowerCase().replace(/\s+/g, '-')}.webp`);
  
  await sharp(Buffer.from(svg))
    .webp({ quality: 85 })
    .toFile(outputPath);
  
  console.log(`✓ Generated: ${outputPath}`);
}

async function generateHeroImage(category, width = 1920, height = 600) {
  const outputDir = path.join(__dirname, '../public/images/hero');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const color = colors[category] || { start: '#666', end: '#333' };
  
  const svg = `
    <svg width="${width}" height="${height}">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color.start};stop-opacity:0.9" />
          <stop offset="100%" style="stop-color:${color.end};stop-opacity:0.9" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="96" font-weight="bold" 
            fill="white" text-anchor="middle" dominant-baseline="middle" opacity="0.4">
        ${category.toUpperCase()}
      </text>
    </svg>
  `;

  const outputPath = path.join(outputDir, `${category}-hero.webp`);
  
  await sharp(Buffer.from(svg))
    .webp({ quality: 85 })
    .toFile(outputPath);
  
  console.log(`✓ Generated hero: ${outputPath}`);
}

module.exports = { generatePlaceholder, generateHeroImage };

// If run directly
if (require.main === module) {
  console.log('🎨 Generating placeholder images...\n');
  
  (async () => {
    // Generate hero images
    for (const category of Object.keys(colors)) {
      await generateHeroImage(category);
    }
    
    console.log('\n✅ Hero images generated!');
    console.log('\n💡 Bike images will be generated as needed.');
  })();
}
