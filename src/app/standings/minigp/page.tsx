import ComingSoonStandings from '@/components/standings/ComingSoonStandings'

const champions = [
  { year: 2025, name: 'Alvaro Carpe', nationality: 'ESP' },
  { year: 2024, name: 'Marcos Uriarte', nationality: 'ESP' },
  { year: 2023, name: 'Hakim Danish', nationality: 'MAS' },
  { year: 2022, name: 'Izan Rodriguez', nationality: 'ESP' },
]

export default function MiniGPStandingsPage() {
  return (
    <ComingSoonStandings
      category="MiniGP"
      fullName="FIM MiniGP World Series"
      description="Youth racing on Ohvale 160cc bikes. The official Dorna-backed series that discovers future Moto3, Moto2, and MotoGP stars."
      champions={champions}
      eta="Q3 2026"
      relatedLink={{ text: 'View Moto3 Standings', href: '/standings/moto3' }}
    />
  )
}

export const metadata = {
  title: 'MiniGP 2026 Standings - Coming Soon | IndonesiaSBK',
  description: 'FIM MiniGP World Series 2026 standings page coming soon. Youth racing talent on display.',
}
