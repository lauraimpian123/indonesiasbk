import ComingSoonStandings from '@/components/standings/ComingSoonStandings'

const champions = [
  { year: 2025, name: 'Hector Garzo', nationality: 'ESP', team: 'Dynavolt Intact GP' },
  { year: 2024, name: 'Mattia Casadei', nationality: 'ITA', team: 'LCR E-Team' },
  { year: 2023, name: 'Mattia Casadei', nationality: 'ITA', team: 'LCR E-Team' },
  { year: 2022, name: 'Jordi Torres', nationality: 'ESP', team: 'Pons Racing' },
]

export default function MotoEStandingsPage() {
  return (
    <ComingSoonStandings
      category="MotoE"
      fullName="FIM Enel MotoE World Cup"
      description="The future of racing is electric. All-electric Ducati V21L bikes competing at MotoGP events with zero emissions and maximum excitement."
      champions={champions}
      eta="Mid-2026"
      relatedLink={{ text: 'View MotoGP Standings', href: '/standings/motogp' }}
    />
  )
}

export const metadata = {
  title: 'MotoE 2026 Standings - Coming Soon | IndonesiaSBK',
  description: 'FIM Enel MotoE World Cup 2026 standings page coming soon. Electric motorcycle racing action.',
}
