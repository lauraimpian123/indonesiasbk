// Category definitions for IndonesiaSBK
export interface Category {
  slug: string
  name: string
  description: string
}

export const categories: Record<string, Category> = {
  'wsbk': {
    slug: 'wsbk',
    name: 'World Superbike (WSBK)',
    description: 'Berita, hasil balapan, dan analisis lengkap World Superbike Championship',
  },
  'motogp': {
    slug: 'motogp',
    name: 'MotoGP',
    description: 'Liputan lengkap MotoGP: berita terkini, hasil balapan, dan analisis rider',
  },
  'f1': {
    slug: 'f1',
    name: 'Formula 1',
    description: 'Berita Formula 1, hasil balapan, dan perkembangan teknologi F1 terbaru',
  },
  'superbike': {
    slug: 'superbike',
    name: 'Superbike',
    description: 'Review dan berita superbike terbaru dari berbagai pabrikan',
  },
  'supersport': {
    slug: 'supersport',
    name: 'Supersport',
    description: 'Liputan motor supersport 600cc hingga 1000cc',
  },
  'bike-review': {
    slug: 'bike-review',
    name: 'Review Motor',
    description: 'Review mendalam motor terbaru dari berbagai segmen',
  },
  'gear-review': {
    slug: 'gear-review',
    name: 'Review Gear',
    description: 'Review jaket, sarung tangan, boots, dan perlengkapan riding lainnya',
  },
  'helmet-review': {
    slug: 'helmet-review',
    name: 'Review Helm',
    description: 'Review helm terbaru dari berbagai brand dengan test safety',
  },
  'tech': {
    slug: 'tech',
    name: 'Technology & EV',
    description: 'Teknologi terbaru di dunia otomotif dan perkembangan motor listrik',
  },
  'lifestyle': {
    slug: 'lifestyle',
    name: 'Lifestyle',
    description: 'Touring, modifikasi, kafe bikers, dan gaya hidup pengendara motor',
  },
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories[slug.toLowerCase()]
}
