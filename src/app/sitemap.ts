import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://indonesiasbk.com'
  
  // Static pages
  const staticPages = [
    '',
    '/motorsport/wsbk',
    '/motorsport/motogp',
    '/motorsport/moto2',
    '/motorsport/moto3',
    '/motorsport/minigp',
    '/motorsport/f1',
    '/motorsport/bsb',
    '/motorsport/arrc',
    '/motorsport/idc',
    '/motorsport/motoe',
    '/bike-class/superbike',
    '/bike-class/supersport',
    '/bike-class/supermatic',
    '/bike-class/naked',
    '/bike-class/adventure',
    '/bike-class/cruiser',
    '/review',
    '/review/bike',
    '/review/gear',
    '/review/helmet',
    '/review/accessory',
    '/review/comparison',
    '/racing/teams',
    '/racing/school',
    '/racing/riders',
    '/standings',
    '/standings/motogp',
    '/standings/wsbk',
    '/standings/moto2',
    '/standings/moto3',
    '/standings/minigp',
    '/standings/f1',
    '/standings/bsb',
    '/standings/arrc',
    '/standings/idc',
    '/standings/motoe',
    '/workshop',
    '/touring',
    '/tech',
    '/live',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'hourly' : 'daily' as const,
    priority: route === '' ? 1.0 : route.includes('/standings') ? 0.9 : 0.8,
  }))

  // TODO: Add dynamic article URLs from database
  // const articles = await fetchArticlesFromDB()
  // const articlePages = articles.map((article) => ({
  //   url: `${baseUrl}/article/${article.slug}`,
  //   lastModified: article.updatedAt,
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.7,
  // }))

  return [
    ...staticPages,
    // ...articlePages,
  ]
}
