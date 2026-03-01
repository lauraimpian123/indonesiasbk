export default function HeroSkeleton() {
  return (
    <section className="relative min-h-screen flex items-center gradient-mesh overflow-hidden animate-pulse">
      <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12 py-32 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow skeleton */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-white/10 h-8 w-40 rounded"></div>
            <div className="bg-white/10 h-4 w-24 rounded"></div>
          </div>

          {/* Title skeleton */}
          <div className="space-y-4 mb-8">
            <div className="bg-white/20 h-16 lg:h-20 w-full rounded"></div>
            <div className="bg-white/20 h-16 lg:h-20 w-5/6 rounded"></div>
            <div className="bg-white/10 h-16 lg:h-20 w-4/6 rounded"></div>
          </div>

          {/* Description skeleton */}
          <div className="space-y-3 mb-8">
            <div className="bg-white/10 h-4 w-full rounded"></div>
            <div className="bg-white/10 h-4 w-11/12 rounded"></div>
            <div className="bg-white/10 h-4 w-4/6 rounded"></div>
          </div>

          {/* CTA skeleton */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 h-12 w-48 rounded"></div>
            <div className="bg-white/10 h-12 w-48 rounded"></div>
          </div>
        </div>

        {/* Floating cards skeleton - desktop only */}
        <div className="absolute right-12 bottom-32 space-y-3 hidden lg:block">
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-lg min-w-[200px] h-24"></div>
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-lg min-w-[200px] h-24"></div>
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-lg min-w-[200px] h-24"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  )
}
