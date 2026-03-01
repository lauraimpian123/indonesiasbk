import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import RunningTextMotoGP from '@/components/RunningTextMotoGP'
import RunningTextWSBK from '@/components/RunningTextWSBK'
import MegaMenuNavbar from '@/components/MegaMenuNavbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'IndonesiaSBK — Portal Motorsport Indonesia',
  description: 'Berita motorsport terlengkap di Indonesia. WSBK, MotoGP, F1, review motor, gear, dan teknologi otomotif terdepan.',
  keywords: 'sbk, wsbk, motogp, f1, superbike, supersport, review motor, berita balap, motorsport indonesia',
  authors: [{ name: 'Tim IndonesiaSBK' }],
  openGraph: {
    title: 'IndonesiaSBK — Portal Motorsport Indonesia',
    description: 'WSBK, MotoGP, F1, Review, Tech & Racing Lifestyle',
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
        {/* New Mega Menu Navbar */}
        <MegaMenuNavbar />
        
        {/* Running Text Bars */}
        <div className="sticky top-16 z-40">
          <RunningTextMotoGP />
          <RunningTextWSBK />
        </div>
        
        {/* Main Content */}
        <main className="min-h-screen pt-4">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-black border-t border-white/10 mt-16">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-black text-white mb-4">
                  <span className="text-white">INDONESIA</span>
                  <span className="text-[#ff1744]">SBK</span>
                </h3>
                <p className="text-white/60 max-w-md leading-relaxed">
                  Portal berita motorsport terlengkap di Indonesia. Dari paddock WSBK, MotoGP, F1 sampai jalanan Indonesia. 
                  Review jujur, berita cepat, analisis mendalam.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4 uppercase tracking-wide">Motorsport</h4>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li><a href="/motorsport/wsbk" className="hover:text-[#ff1744] transition-colors">WSBK / Superbike</a></li>
                  <li><a href="/motorsport/motogp" className="hover:text-[#ff1744] transition-colors">MotoGP</a></li>
                  <li><a href="/motorsport/f1" className="hover:text-[#ff1744] transition-colors">Formula 1</a></li>
                  <li><a href="/standings" className="hover:text-[#ff1744] transition-colors">Standings</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4 uppercase tracking-wide">Konten</h4>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li><a href="/review" className="hover:text-[#ff1744] transition-colors">Review & Test</a></li>
                  <li><a href="/bike-class" className="hover:text-[#ff1744] transition-colors">Bike Class</a></li>
                  <li><a href="/tech" className="hover:text-[#ff1744] transition-colors">Tech & EV</a></li>
                  <li><a href="/touring" className="hover:text-[#ff1744] transition-colors">Touring</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
              © {new Date().getFullYear()} IndonesiaSBK. Made with ❤️ for motorsport fans.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
