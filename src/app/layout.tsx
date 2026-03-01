import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import RunningTextMotoGP from '@/components/RunningTextMotoGP'
import RunningTextWSBK from '@/components/RunningTextWSBK'
import MegaMenu from '@/components/MegaMenu'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'IndonesiaSBK — Berita Otomotif, SBK, MotoGP, F1',
  description: 'Portal berita otomotif terlengkap. SBK, MotoGP, F1, review mobil & motor, teknologi EV, dan lifestyle automotive.',
  keywords: 'sbk, wsbk, motogp, f1, superbike, review mobil, review motor, otomotif indonesia, berita otomotif',
  authors: [{ name: 'Tim IndonesiaSBK' }],
  openGraph: {
    title: 'IndonesiaSBK — Berita Otomotif Terlengkap',
    description: 'SBK, MotoGP, F1, Review, News, Tech & Lifestyle',
    url: 'https://indonesiasbk.com',
    siteName: 'IndonesiaSBK',
    locale: 'id_ID',
    type: 'website',
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
        {/* MotoGP Running Text - Fixed at Top */}
        <div className="sticky top-0 z-50">
          <RunningTextMotoGP />
        </div>
        
        {/* Main Navbar */}
        <nav className="sticky top-[42px] z-40 bg-primary border-b border-default backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14">
              <div className="flex items-center space-x-8">
                <a href="/" className="text-2xl font-bold text-brand">
                  INDONESIASBK
                </a>
                <div className="hidden lg:flex space-x-6">
                  <a href="/" className="text-muted hover:text-primary transition-colors text-sm">Home</a>
                  <a href="/about" className="text-muted hover:text-primary transition-colors text-sm">Tentang</a>
                  <a href="/contact" className="text-muted hover:text-primary transition-colors text-sm">Kontak</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="text-muted hover:text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mega Menu */}
        <div className="sticky top-[98px] z-30 bg-secondary">
          <MegaMenu />
        </div>
        
        <main className="min-h-screen">
          {/* WSBK Running Text - In content area */}
          <RunningTextWSBK />
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-secondary border-t border-default mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-brand mb-4">INDONESIASBK</h3>
                <p className="text-muted max-w-md">
                  Portal berita otomotif terlengkap. Dari paddock SBK, MotoGP, F1 sampai jalanan Indonesia. 
                  Review jujur, berita cepat, analisis mendalam.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Motorsport</h4>
                <ul className="space-y-2 text-muted text-sm">
                  <li><a href="/sbk" className="hover:text-primary transition-colors">SBK / WSBK</a></li>
                  <li><a href="/motogp" className="hover:text-primary transition-colors">MotoGP</a></li>
                  <li><a href="/f1" className="hover:text-primary transition-colors">Formula 1</a></li>
                  <li><a href="/moto2" className="hover:text-primary transition-colors">Moto2 & Moto3</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Konten</h4>
                <ul className="space-y-2 text-muted text-sm">
                  <li><a href="/review" className="hover:text-primary transition-colors">Review & Test</a></li>
                  <li><a href="/news" className="hover:text-primary transition-colors">Berita Terkini</a></li>
                  <li><a href="/tech" className="hover:text-primary transition-colors">Tech & EV</a></li>
                  <li><a href="/lifestyle" className="hover:text-primary transition-colors">Lifestyle</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-default text-center text-subtle text-sm">
              © {new Date().getFullYear()} IndonesiaSBK. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
