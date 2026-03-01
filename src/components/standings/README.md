# Standings Components

Advanced UI components for motorsport championship standings pages.

## Component List

### 1. `StandingsYearSelector.tsx`
Year dropdown selector with highlight for current year.

**Props:**
- `years: number[]` - Available years
- `currentYear: number` - Currently selected year
- `onYearChange: (year: number) => void` - Year change handler

**Usage:**
```tsx
<StandingsYearSelector
  years={[2026, 2025, 2024, 2023]}
  currentYear={selectedYear}
  onYearChange={setSelectedYear}
/>
```

---

### 2. `StandingsTabsAdvanced.tsx`
Reusable tab navigation system.

**Props:**
- `tabs: Tab[]` - Array of tab definitions
- `activeTab: string` - Currently active tab ID
- `onTabChange: (tabId: string) => void` - Tab change handler
- `children: ReactNode` - Tab content

**Usage:**
```tsx
<StandingsTabsAdvanced
  tabs={[
    { id: 'riders', label: 'Riders', icon: '🏍️' },
    { id: 'teams', label: 'Teams', icon: '👥' }
  ]}
  activeTab={activeTab}
  onTabChange={setActiveTab}
>
  {/* Content */}
</StandingsTabsAdvanced>
```

---

### 3. `FilterControls.tsx`
Search, sort, and filter controls.

**Props:**
- `sortOptions: string[]` - Available sort options
- `currentSort: string` - Current sort selection
- `onSortChange: (sort: string) => void` - Sort change handler
- `searchPlaceholder?: string` - Search input placeholder
- `onSearch: (query: string) => void` - Search handler
- `showIndonesianOnly: boolean` - Indonesian filter state
- `onToggleIndonesian: () => void` - Indonesian filter toggle

**Usage:**
```tsx
<FilterControls
  sortOptions={['Points', 'Wins', 'Podiums']}
  currentSort={sortBy}
  onSortChange={setSortBy}
  searchPlaceholder="Search rider..."
  onSearch={setSearchQuery}
  showIndonesianOnly={showIndonesianOnly}
  onToggleIndonesian={() => setShowIndonesianOnly(!showIndonesianOnly)}
/>
```

---

### 4. `RaceCalendar.tsx`
Next/last race display with countdown timer.

**Props:**
- `nextRace: Race` - Next race info (name, date)
- `lastRace?: Race` - Last race info (name, date, winner)

**Usage:**
```tsx
<RaceCalendar
  nextRace={{ name: 'Argentina GP', date: '2026-03-23' }}
  lastRace={{ name: 'Thailand GP', date: '2026-03-01', winner: 'Bezzecchi' }}
/>
```

---

### 5. `RiderStatsCard.tsx`
Expandable rider detail card.

**Props:**
- `rider: RiderStats` - Rider data
- `isExpanded: boolean` - Expansion state
- `onToggle: () => void` - Toggle handler

**Usage:**
```tsx
<RiderStatsCard
  rider={{
    name: 'Pedro Acosta',
    number: 31,
    nationality: 'ESP',
    team: 'Red Bull GASGAS Tech3',
    points: 85,
    wins: 2,
    podiums: 5,
    poles: 1
  }}
  isExpanded={expandedRider === 'Pedro Acosta'}
  onToggle={() => toggleRider('Pedro Acosta')}
/>
```

---

### 6. `ComparisonTool.tsx`
Side-by-side rider comparison (up to 3 riders).

**Props:**
- `riders: Rider[]` - Array of riders to compare

**Usage:**
```tsx
<ComparisonTool
  riders={standings.map(r => ({
    name: r.rider.name,
    points: r.points,
    wins: r.wins,
    podiums: r.podiums,
    poles: r.poles
  }))}
/>
```

---

### 7. `ChampionsWidget.tsx`
Historical champions list.

**Props:**
- `category: string` - Championship category
- `champions: Champion[]` - Array of champions

**Usage:**
```tsx
<ChampionsWidget
  category="MotoGP"
  champions={[
    { year: 2025, name: 'Marc Marquez', nationality: 'ESP' },
    { year: 2024, name: 'Francesco Bagnaia', nationality: 'ITA' }
  ]}
/>
```

---

### 8. `LiveIndicator.tsx`
Last updated timestamp with auto-refresh toggle.

**Props:**
- `lastUpdated: string` - ISO timestamp
- `nextUpdate?: string` - Next update description
- `dataSource?: string` - Data source name

**Usage:**
```tsx
<LiveIndicator
  lastUpdated="2026-03-01T18:00:00Z"
  nextUpdate="After Argentina GP"
  dataSource="Official MotoGP"
/>
```

---

### 9. `PointsProgressionChart.tsx`
Line chart showing cumulative points progression.

**Props:**
- `riders: RiderProgress[]` - Rider data with race results
- `title?: string` - Chart title

**Usage:**
```tsx
<PointsProgressionChart
  riders={[
    {
      name: 'Acosta',
      color: '#ff1744',
      results: [
        { round: 1, raceName: 'Qatar', points: 25 },
        { round: 2, raceName: 'Americas', points: 20 }
      ]
    }
  ]}
  title="Top 5 Riders - Points Progression"
/>
```

---

### 10. `ExportTools.tsx`
Export and share standings.

**Props:**
- `standingsData: any` - Raw standings data
- `category: string` - Championship category
- `year: number` - Championship year

**Usage:**
```tsx
<ExportTools
  standingsData={filteredStandings}
  category="motogp"
  year={2026}
/>
```

---

### 11. `ComingSoonStandings.tsx`
Full-page "coming soon" template.

**Props:**
- `category: string` - Championship category
- `fullName: string` - Full championship name
- `description: string` - Category description
- `champions: Champion[]` - Historical champions
- `eta?: string` - Expected launch date
- `relatedLink?: { text: string; href: string }` - Related page link

**Usage:**
```tsx
<ComingSoonStandings
  category="WSBK"
  fullName="World Superbike Championship"
  description="Production-based motorcycle racing..."
  champions={championsList}
  eta="Mid-2026"
  relatedLink={{ text: 'View MotoGP', href: '/standings/motogp' }}
/>
```

---

## Design Tokens

### Colors
```tsx
Primary:   #ff1744  // Red
Secondary: #00e5ff  // Cyan
Accent:    #ffc400  // Gold
Success:   #76ff03  // Green
```

### Animations
```tsx
fadeIn: 'fadeIn 0.3s ease-in-out'
```

---

## Best Practices

1. **State Management:** Use React `useState` for component state
2. **TypeScript:** Always define prop interfaces
3. **Responsive:** Mobile-first design approach
4. **Accessibility:** Include ARIA labels where needed
5. **Performance:** Lazy load heavy components (charts)

---

## Notes

- All components use Tailwind CSS for styling
- Dark mode is default (no light mode toggle needed)
- Indonesian rider highlights use 🇮🇩 emoji + red accent
- Charts require `recharts` dependency
- Export features (PDF, image) are placeholders for future implementation

---

**Last Updated:** March 1, 2026
