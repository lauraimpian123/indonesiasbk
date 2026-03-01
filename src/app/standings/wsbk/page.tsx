import ComingSoonStandings from '@/components/standings/ComingSoonStandings'

const champions = [
  { year: 2025, name: 'Alvaro Bautista', nationality: 'ESP', team: 'Aruba.it Racing Ducati' },
  { year: 2024, name: 'Toprak Razgatlioglu', nationality: 'TUR', team: 'ROKiT BMW Motorrad' },
  { year: 2023, name: 'Alvaro Bautista', nationality: 'ESP', team: 'Aruba.it Racing Ducati' },
  { year: 2022, name: 'Alvaro Bautista', nationality: 'ESP', team: 'Aruba.it Racing Ducati' },
]

export default function WSBKStandingsPage() {
  return (
    <ComingSoonStandings
      category="WSBK"
      fullName="World Superbike Championship"
      description="Production-based motorcycle racing at its finest. The ultimate battle between Ducati, BMW, Kawasaki, Honda, and Yamaha."
      champions={champions}
      eta="Mid-2026"
      relatedLink={{ text: 'View MotoGP Standings', href: '/standings/motogp' }}
    />
  )
}

export const metadata = {
  title: 'WSBK 2026 Standings - Coming Soon | IndonesiaSBK',
  description: 'World Superbike Championship 2026 standings page coming soon. Check back for live race results and rider standings.',
}
