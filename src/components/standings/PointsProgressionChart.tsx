'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface RaceResult {
  round: number
  raceName: string
  points: number
}

interface RiderProgress {
  name: string
  color: string
  results: RaceResult[]
}

interface PointsProgressionChartProps {
  riders: RiderProgress[]
  title?: string
}

export default function PointsProgressionChart({ riders, title = 'Points Progression' }: PointsProgressionChartProps) {
  // Prepare data for chart
  const maxRounds = Math.max(...riders.map((r) => r.results.length))
  const chartData = Array.from({ length: maxRounds }, (_, i) => {
    const round = i + 1
    const dataPoint: any = { round }
    
    riders.forEach((rider) => {
      const result = rider.results.find((r) => r.round === round)
      // Calculate cumulative points
      const cumulativePoints = rider.results
        .filter((r) => r.round <= round)
        .reduce((sum, r) => sum + r.points, 0)
      dataPoint[rider.name] = cumulativePoints
    })
    
    return dataPoint
  })

  return (
    <div className="card">
      <h3 className="text-xl font-black uppercase text-brand mb-4 flex items-center gap-2">
        <span>📈</span>
        {title}
      </h3>

      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
            <XAxis 
              dataKey="round" 
              stroke="#ffffff40"
              tick={{ fill: '#ffffff60' }}
              label={{ value: 'Round', position: 'insideBottom', offset: -5, fill: '#ffffff60' }}
            />
            <YAxis 
              stroke="#ffffff40"
              tick={{ fill: '#ffffff60' }}
              label={{ value: 'Points', angle: -90, position: 'insideLeft', fill: '#ffffff60' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#000000ee', 
                border: '1px solid #ffffff20',
                borderRadius: '8px',
                padding: '12px'
              }}
              labelStyle={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '8px' }}
              itemStyle={{ color: '#ffffff' }}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="line"
            />
            {riders.map((rider) => (
              <Line
                key={rider.name}
                type="monotone"
                dataKey={rider.name}
                stroke={rider.color}
                strokeWidth={2}
                dot={{ fill: rider.color, r: 4 }}
                activeDot={{ r: 6 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
