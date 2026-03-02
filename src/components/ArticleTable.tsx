export default function ArticleTable({ headers, rows, caption }: { 
  headers: string[], 
  rows: string[][], 
  caption?: string 
}) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse bg-black/40 backdrop-blur-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-[#ff1744]/20 border-b border-[#ff1744]/30">
            {headers.map((header, i) => (
              <th 
                key={i}
                className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {rows.map((row, i) => (
            <tr 
              key={i}
              className="hover:bg-white/5 transition-colors"
            >
              {row.map((cell, j) => (
                <td 
                  key={j}
                  className={`px-6 py-4 text-sm ${j === 0 ? 'font-semibold text-[#ff1744]' : 'text-gray-300'}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {caption && (
        <p className="mt-2 text-xs text-gray-500 italic">{caption}</p>
      )}
    </div>
  )
}
