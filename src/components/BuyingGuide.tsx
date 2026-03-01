interface BuyingGuideProps {
  category: string;
  ideal: string[];
  notIdeal: string[];
  tips: string[];
}

export default function BuyingGuide({ category, ideal, notIdeal, tips }: BuyingGuideProps) {
  return (
    <section className="py-12 border-b border-white/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bebas text-white mb-8">
          📖 PANDUAN MEMILIH {category.toUpperCase()}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Ideal For */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bebas text-green-400 mb-4 flex items-center gap-2">
              <span>✅</span>
              <span>COCOK UNTUK:</span>
            </h3>
            <ul className="space-y-2">
              {ideal.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-2 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Ideal For */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bebas text-red-400 mb-4 flex items-center gap-2">
              <span>❌</span>
              <span>TIDAK COCOK UNTUK:</span>
            </h3>
            <ul className="space-y-2">
              {notIdeal.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-300">
                  <span className="text-red-400 mr-2 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-[#ff1744]/10 border border-[#ff1744]/30 rounded-xl p-6">
          <h3 className="text-xl font-bebas text-[#ff1744] mb-4 flex items-center gap-2">
            <span>💡</span>
            <span>TIPS MEMBELI:</span>
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {tips.map((tip, idx) => (
              <li key={idx} className="flex items-start text-gray-300">
                <span className="text-[#ff1744] mr-2 mt-1 font-bold">{idx + 1}.</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
