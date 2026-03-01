import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans, Space_Mono } from 'next/font/google'
import './globals.css'
import MegaMenuNavbar from '@/components/MegaMenuNavbar'
import { WebVitals } from '@/components/WebVitals'

// Font optimization with display swap
const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'], 
  variable: '--font-bebas',
  display: 'swap',
  preload: true,
})

const dmSans = DM_Sans({ 
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'], 
  variable: '--font-dm-sans',
  display: 'swap',
  preload: true,
})

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'], 
  variable: '--font-space-mono',
  display: 'swap',
  preload: false, // Only load when needed
})

export const metadata: Metadata = {
  metadataBase: new URL('https://indonesiasbk.com'),
  title: {
    default: 'IndonesiaSBK — Portal Motorsport #1 Indonesia',
    template: '%s | IndonesiaSBK'
  },
  description: 'Berita motorsport terlengkap: WSBK, MotoGP, Moto2, Moto3, F1, BSB, ARRC. Review motor, gear, helm, teknologi. Update harian standings & race results.',
  keywords: [
    'wsbk',
    'motogp', 
    'moto2',
    'moto3',
    'f1',
    'superbike',
    'supersport',
    'ducati',
    'yamaha',
    'honda',
    'kawasaki',
    'bmw',
    'review motor',
    'berita balap',
    'motorsport indonesia',
    'sbk indonesia',
    'mandalika',
    'sentul',
    'arrc',
    'idc',
    'helmet review',
    'gear review',
    'racing news'
  ],
  authors: [{ name: 'Tim IndonesiaSBK', url: 'https://indonesiasbk.com' }],
  creator: 'IndonesiaSBK',
  publisher: 'IndonesiaSBK',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://indonesiasbk.com',
    siteName: 'IndonesiaSBK',
    title: 'IndonesiaSBK — Portal Motorsport #1 Indonesia',
    description: 'WSBK, MotoGP, F1, Review Motor & Gear. Berita balap terlengkap, update harian standings, analisis mendalam.',
    images: [
      {
        url: '/images/hero/2026-03-01-20-21-10-hero-motogp.webp',
        width: 2816,
        height: 1536,
        alt: 'IndonesiaSBK - Portal Motorsport Indonesia',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IndonesiaSBK — Portal Motorsport #1 Indonesia',
    description: 'WSBK, MotoGP, F1, Review Motor & Gear. Berita balap terlengkap.',
    images: ['/images/hero/2026-03-01-20-21-10-hero-motogp.webp'],
  },
  alternates: {
    canonical: 'https://indonesiasbk.com',
  },
  verification: {
    google: 'your-google-site-verification-code', // Replace with actual code from Google Search Console
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${bebasNeue.variable} ${dmSans.variable} ${spaceMono.variable}`}>
      <head>
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/images/hero/2026-03-01-20-21-10-hero-motogp.webp"
          as="image"
          type="image/webp"
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#0a0a0f" />
        
        {/* Performance hints */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
      </head>
      <body className="font-dm-sans">
        {/* Web Vitals Monitoring */}
        <WebVitals />
        
        {/* Page Load Indicator - Inline critical CSS */}
        <style dangerouslySetInnerHTML={{__html: `
          .page-loading {
            position: fixed;
            inset: 0;
            background: #0a0a0f;
            z-index: 99999;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 1;
            transition: opacity 0.5s ease;
            pointer-events: none;
          }
          .page-loading.loaded {
            opacity: 0;
          }
          .loader-logo {
            font-family: var(--font-bebas);
            font-size: 48px;
            letter-spacing: 4px;
            animation: pulse 0.8s ease-in-out infinite;
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 1; }
          }
        `}} />
        
        {/* Loading Screen */}
        <div className="page-loading" id="page-loading">
          <div className="loader-logo">
            <span style={{color: '#f5f5fa'}}>INDONESIA</span>
            <span style={{color: '#ff1744'}}>SBK</span>
          </div>
        </div>

        <script dangerouslySetInnerHTML={{__html: `
          window.addEventListener('load', function() {
            setTimeout(function() {
              document.getElementById('page-loading').classList.add('loaded');
              setTimeout(function() {
                document.getElementById('page-loading').remove();
              }, 500);
            }, 300);
          });
        `}} />
        
        {/* Mega Menu Navbar */}
        <MegaMenuNavbar />
        
        {/* Main Content */}
        <main className="min-h-screen pt-4">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-black border-t border-white/10 mt-16">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-bebas text-white mb-4 tracking-wider">
                  <span className="text-white">INDONESIA</span>
                  <span className="text-[#ff1744]">SBK</span>
                </h3>
                <p className="text-white/60 max-w-md leading-relaxed">
                  Portal berita motorsport terlengkap di Indonesia. Dari paddock WSBK, MotoGP, F1 sampai jalanan Indonesia. 
                  Review jujur, berita cepat, analisis mendalam.
                </p>
                
                {/* Social Links */}
                <div className="flex gap-4 mt-6">
                  <a href="https://twitter.com/indonesiasbk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#ff1744] transition-colors flex items-center justify-center">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
                  </a>
                  <a href="https://instagram.com/indonesiasbk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#ff1744] transition-colors flex items-center justify-center">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="https://youtube.com/@indonesiasbk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#ff1744] transition-colors flex items-center justify-center">
                    <span className="sr-only">YouTube</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4 uppercase tracking-wide text-sm">Motorsport</h4>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li><a href="/motorsport/wsbk" className="hover:text-[#ff1744] transition-colors">WSBK / Superbike</a></li>
                  <li><a href="/motorsport/motogp" className="hover:text-[#ff1744] transition-colors">MotoGP</a></li>
                  <li><a href="/motorsport/f1" className="hover:text-[#ff1744] transition-colors">Formula 1</a></li>
                  <li><a href="/standings" className="hover:text-[#ff1744] transition-colors">Standings</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4 uppercase tracking-wide text-sm">Konten</h4>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li><a href="/review" className="hover:text-[#ff1744] transition-colors">Review & Test</a></li>
                  <li><a href="/bike-class" className="hover:text-[#ff1744] transition-colors">Bike Class</a></li>
                  <li><a href="/tech" className="hover:text-[#ff1744] transition-colors">Tech & EV</a></li>
                  <li><a href="/touring" className="hover:text-[#ff1744] transition-colors">Touring</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white/40 text-sm text-center md:text-left">
                © {new Date().getFullYear()} IndonesiaSBK. Made with ❤️ for motorsport fans.
              </div>
              <div className="flex gap-4 text-white/40 text-xs">
                <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
