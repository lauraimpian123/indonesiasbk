'use client'

import { useState } from 'react'

interface ExportToolsProps {
  standingsData: any
  category: string
  year: number
}

export default function ExportTools({ standingsData, category, year }: ExportToolsProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyTable = () => {
    // Create text representation of standings
    const text = standingsData
      .map((rider: any, index: number) => 
        `${index + 1}. ${rider.name || rider.rider?.name} - ${rider.points || rider.total_points} pts`
      )
      .join('\n')

    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownloadPDF = () => {
    alert('PDF export coming soon! This feature will allow you to download standings as PDF.')
  }

  const handleShareSocial = (platform: string) => {
    const url = window.location.href
    const text = `Check out ${category.toUpperCase()} ${year} Standings on IndonesiaSBK!`
    
    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
    }

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400')
    }
  }

  const handleGenerateImage = () => {
    alert('Image generation coming soon! This feature will create a shareable image of the standings.')
  }

  return (
    <div className="card">
      <h3 className="text-xl font-black uppercase text-brand mb-4 flex items-center gap-2">
        <span>📤</span>
        EXPORT & SHARE
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Copy Table */}
        <button
          onClick={handleCopyTable}
          className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm font-bebas tracking-wider uppercase hover:bg-white/10 hover:border-[#00e5ff] transition-all flex items-center justify-center gap-2"
        >
          {copied ? '✓ COPIED!' : '📋 COPY TABLE'}
        </button>

        {/* Download PDF */}
        <button
          onClick={handleDownloadPDF}
          className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm font-bebas tracking-wider uppercase hover:bg-white/10 hover:border-[#ff1744] transition-all flex items-center justify-center gap-2"
        >
          📄 DOWNLOAD PDF
        </button>

        {/* Generate Image */}
        <button
          onClick={handleGenerateImage}
          className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm font-bebas tracking-wider uppercase hover:bg-white/10 hover:border-[#ffc400] transition-all flex items-center justify-center gap-2"
        >
          🖼️ GENERATE IMAGE
        </button>

        {/* Share Dropdown */}
        <div className="relative group">
          <button className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm font-bebas tracking-wider uppercase hover:bg-white/10 hover:border-[#76ff03] transition-all flex items-center justify-center gap-2">
            📱 SHARE
          </button>
          
          {/* Dropdown Menu */}
          <div className="absolute bottom-full left-0 right-0 mb-2 bg-black/95 border border-white/10 rounded-lg shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
            <button
              onClick={() => handleShareSocial('twitter')}
              className="w-full px-4 py-2 text-left hover:bg-white/10 transition-all text-sm flex items-center gap-2"
            >
              <span>🐦</span> Twitter
            </button>
            <button
              onClick={() => handleShareSocial('facebook')}
              className="w-full px-4 py-2 text-left hover:bg-white/10 transition-all text-sm flex items-center gap-2"
            >
              <span>📘</span> Facebook
            </button>
            <button
              onClick={() => handleShareSocial('whatsapp')}
              className="w-full px-4 py-2 text-left hover:bg-white/10 transition-all text-sm flex items-center gap-2"
            >
              <span>💬</span> WhatsApp
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-center text-muted">
        Share these standings with fellow motorsport fans!
      </div>
    </div>
  )
}
