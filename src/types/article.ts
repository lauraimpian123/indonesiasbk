/**
 * Article Type Definitions for IndonesiaSBK.com
 * 
 * This defines the structure of all article objects across the site.
 * Used in articles-wave2.ts, articles-wave3.ts, and future article imports.
 */

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  keywords: string[];
  content: string;
}

export interface ArticleMetadata {
  slug: string;
  title: string;
  category: string;
  date: string;
}

/**
 * Category types for motorsport articles
 */
export type MotorsportCategory = 
  | 'MotoGP' 
  | 'Moto2' 
  | 'Moto3' 
  | 'MotoE'
  | 'WSBK' 
  | 'BSB' 
  | 'ARRC' 
  | 'IDC'
  | 'MiniGP'
  | 'F1'
  | 'Superbike'
  | 'Review';

/**
 * Helper type for article with optional content (for listings)
 */
export type ArticlePreview = Omit<Article, 'content'>;
