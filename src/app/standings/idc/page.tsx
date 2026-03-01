import ComingSoonStandings from '@/components/standings/ComingSoonStandings'

const champions = [
  { year: 2025, name: 'Andi Gilang', nationality: 'INA' },
  { year: 2024, name: 'Irfan Ardiansyah', nationality: 'INA' },
  { year: 2023, name: 'Herjun Atna Firdaus', nationality: 'INA' },
  { year: 2022, name: 'Adenanta Putra', nationality: 'INA' },
]

export default function IDCStandingsPage() {
  return (
    <ComingSoonStandings
      category="IDC"
      fullName="Indonesia Ducati Championship"
      description="Indonesia's premier Ducati one-make racing series. Featuring Panigale V4 battles across Indonesia's best circuits with local talent."
      champions={champions}
      eta="Q3 2026"
      relatedLink={{ text: 'View ARRC Standings', href: '/standings/arrc' }}
    />
  )
}

export const metadata = {
  title: 'IDC 2026 Standings - Coming Soon | IndonesiaSBK',
  description: 'Indonesia Ducati Championship 2026 standings page coming soon. Check back for Indonesian racing action.',
}
