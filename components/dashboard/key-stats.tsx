export function KeyStats() {
    const stats = [
      { label: "Rev. YY %", value: "13.2%" },
      { label: "RPS 3Y CAGR", value: "9.01%" },
      { label: "RPS 10Y CAGR", value: "18.3%" },
      { label: "EPS YY", value: "7.03%" },
      { label: "EPS 3Y CAGR", value: "15.43%" },
      { label: "EPS 10Y CAGR", value: "20.71%" },
      { label: "Gross Margin", value: "25.03%" },
      { label: "Op. Prof. Margin", value: "14.92%" },
      { label: "Profit Margin", value: "9.17%" },
      { label: "ROE", value: "31.03%" },
      { label: "ROA", value: "17.82%" },
      { label: "ROIC", value: "14.22%" },
    ]
  
    return (
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-medium text-zinc-400 mb-4">GROWTH (FY)</h3>
          <div className="space-y-2">
            {stats.slice(0, 6).map((stat) => (
              <div key={stat.label} className="flex justify-between">
                <span className="text-zinc-400">{stat.label}</span>
                <span className="font-medium">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-zinc-400 mb-4">PROFITABILITY (FY)</h3>
          <div className="space-y-2">
            {stats.slice(6).map((stat) => (
              <div key={stat.label} className="flex justify-between">
                <span className="text-zinc-400">{stat.label}</span>
                <span className="font-medium">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  