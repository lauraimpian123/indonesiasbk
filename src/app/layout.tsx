import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'IndonesiaSBK — The Ultimate Ride',
  description: 'Berita, review, dan insight otomotif terdepan. SBK, MotoGP, mobil, motor, dan lifestyle automotive.',
  keywords: 'sbk, wsbk, motogp, superbike, review mobil, review motor, otomotif indonesia, berita otomotif',
  authors: [{ name: 'Tim IndonesiaSBK' }],
  openGraph: {
    title: 'IndonesiaSBK — The Ultimate Ride',
    description: 'Berita, review, dan insight otomotif terdepan',
    url: 'https://indonesiasbk.com',
    siteName: 'IndonesiaSBK',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IndonesiaSBK',
    description: 'The Ultimate Ride — Berita & Review Otomotif',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.variable}>
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <a href="/" className="text-2xl font-bold text-gradient-primary">
                  INDONESIASBK
                </a>
                <div className="hidden md:flex ml-10 space-x-8">
                  <a href="/sbk" className="text-text-muted hover:text-text-primary transition-colors">SBK</a>
                  <a href="/review" className="text-text-muted hover:text-text-primary transition-colors">Review</a>
                  <a href="/news" className="text-text-muted hover:text-text-primary transition-colors">News</a>
                  <a href="/tech" className="text-text-muted hover:text-text-primary transition-colors">Tech</a>
                  <a href="/lifestyle" className="text-text-muted hover:text-text-primary transition-colors">Lifestyle</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-text-muted hover:text-text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <footer className="bg-bg-secondary border-t border-border mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-gradient-primary mb-4">INDONESIASBK</h3>
                <p className="text-text-muted max-w-md">
                  The Ultimate Ride — Berita, review, dan insight otomotif terdepan. 
                  Dari paddock WSBK sampai jalanan Indonesia.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Kategori</h4>
                <ul className="space-y-2 text-text-muted">
                  <li><a href="/sbk" className="hover:text-text-primary transition-colors">SBK & Motorsport</a></li>
                  <li><a href="/review" className="hover:text-text-primary transition-colors">Review & Test</a></li>
                  <li><a href="/news" className="hover:text-text-primary transition-colors">Berita Otomotif</a></li>
                  <li><a href="/tech" className="hover:text-text-primary transition-colors">Tech & EV</a></li>
                  <li><a href="/lifestyle" className="hover:text-text-primary transition-colors">Lifestyle</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Tentang</h4>
                <ul className="space-y-2 text-text-muted">
                  <li><a href="/about" className="hover:text-text-primary transition-colors">Tentang Kami</a></li>
                  <li><a href="/contact" className="hover:text-text-primary transition-colors">Kontak</a></li>
                  <li><a href="/privacy" className="hover:text-text-primary transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-center text-text-muted text-sm">
              © {new Date().getFullYear()} IndonesiaSBK. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
