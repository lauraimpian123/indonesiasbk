import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://indonesiasbk.com'
  
  const categories = [
    'wsbk', 'motogp', 'moto2', 'moto3', 'f1', 'bsb', 'arrc', 'idc',
    'superbike', 'supersport', 'naked',
    'bike-review', 'gear-review', 'helmet-review'
  ]
  
  const categoryPages = categories.map(cat => ({
    url: `${baseUrl}/${cat}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1,
    },
    ...categoryPages,
    {
      url: `${baseUrl}/article/ducati-panigale-v4r-2026-ultimate-superbike`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}
