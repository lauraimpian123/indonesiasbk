import ComingSoonStandings from '@/components/standings/ComingSoonStandings'

const champions = [
  { year: 2025, name: 'Tommy Bridewell', nationality: 'GBR', team: 'Honda Racing UK' },
  { year: 2024, name: 'Glenn Irwin', nationality: 'GBR', team: 'Hager PBM Ducati' },
  { year: 2023, name: 'Tommy Bridewell', nationality: 'GBR', team: 'Honda Racing UK' },
  { year: 2022, name: 'Bradley Ray', nationality: 'GBR', team: 'Rich Energy OMG Racing' },
]

export default function BSBStandingsPage() {
  return (
    <ComingSoonStandings
      category="BSB"
      fullName="British Superbike Championship"
      description="The UK's premier motorcycle racing series. Known for incredibly close racing and as a stepping stone to World Superbike and MotoGP."
      champions={champions}
      eta="Mid-2026"
      relatedLink={{ text: 'View ARRC Standings', href: '/standings/arrc' }}
    />
  )
}

export const metadata = {
  title: 'BSB 2026 Standings - Coming Soon | IndonesiaSBK',
  description: 'British Superbike Championship 2026 standings page coming soon. Check back for live race results.',
}
