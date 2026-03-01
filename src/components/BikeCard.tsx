import Image from 'next/image';
import { BikeSpec } from '@/data/bikes-superbike';

interface BikeCardProps {
  bike: BikeSpec;
}

export default function BikeCard({ bike }: BikeCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-black/80 backdrop-blur-md border border-gray-800 hover:border-[#ff1744] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,23,68,0.4)]">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
        <Image
          src={bike.image}
          alt={`${bike.brand} ${bike.model} ${bike.year}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Availability Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span
            className={`text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md ${
              bike.available
                ? 'bg-green-500/30 text-green-300 border border-green-400/50'
                : 'bg-gray-500/30 text-gray-300 border border-gray-400/50'
            }`}
          >
            {bike.available ? '✓ Tersedia' : '⊗ Tidak Tersedia'}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title & Price */}
        <div className="mb-4">
          <h3 className="text-2xl font-bebas text-white mb-1">
            {bike.brand} {bike.model}
          </h3>
          <p className="text-sm text-gray-400 mb-2">Model {bike.year}</p>
          <p className="text-3xl font-black text-[#ff1744]">{bike.price}</p>
        </div>

        {/* Key Specs */}
        <div className="space-y-2 mb-4 pb-4 border-b border-gray-800">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Engine</span>
            <span className="text-white font-semibold">{bike.engine}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Power</span>
            <span className="text-white font-semibold">{bike.power}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Weight</span>
            <span className="text-white font-semibold">{bike.weight}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Top Speed</span>
            <span className="text-white font-semibold">{bike.topSpeed}</span>
          </div>
        </div>

        {/* Pros (Top 3) */}
        <div className="mb-4">
          <p className="text-xs text-gray-400 mb-2 font-semibold">✓ Keunggulan:</p>
          <ul className="text-sm space-y-1">
            {bike.pros.slice(0, 3).map((pro, idx) => (
              <li key={idx} className="flex items-start text-gray-300">
                <span className="text-green-400 mr-2 mt-0.5">✓</span>
                <span className="line-clamp-2">{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* View Details Button */}
        <button className="w-full mt-4 bg-[#ff1744] hover:bg-[#ff1744]/80 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,23,68,0.5)]">
          Lihat Detail
        </button>
      </div>
    </div>
  );
}
