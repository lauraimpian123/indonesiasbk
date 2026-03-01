import ComingSoonStandings from '@/components/standings/ComingSoonStandings'

const champions = [
  { year: 2025, name: 'Max Verstappen', nationality: 'NED', team: 'Oracle Red Bull Racing' },
  { year: 2024, name: 'Max Verstappen', nationality: 'NED', team: 'Oracle Red Bull Racing' },
  { year: 2023, name: 'Max Verstappen', nationality: 'NED', team: 'Oracle Red Bull Racing' },
  { year: 2022, name: 'Max Verstappen', nationality: 'NED', team: 'Oracle Red Bull Racing' },
]

export default function F1StandingsPage() {
  return (
    <ComingSoonStandings
      category="FORMULA 1"
      fullName="FIA Formula One World Championship"
      description="The pinnacle of motorsport. Four-wheeled racing at speeds exceeding 350 km/h with cutting-edge technology and legendary drivers."
      champions={champions}
      eta="Q2 2026"
      relatedLink={{ text: 'View MotoGP Standings', href: '/standings/motogp' }}
    />
  )
}

export const metadata = {
  title: 'Formula 1 2026 Standings - Coming Soon | IndonesiaSBK',
  description: 'Formula 1 World Championship 2026 standings page coming soon. Driver and constructor standings will be available soon.',
}
