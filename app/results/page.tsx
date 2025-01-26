import { Star } from "lucide-react"
import { StockChart } from "@/components/dashboard/stock-chart"
import { KeyStats } from "@/components/dashboard/key-stats"
import { MetricsCharts } from "@/components/dashboard/metrics-chart"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  return (
    <>
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold">Tesla</h1>
                <span className="text-zinc-400">$TSLA</span>
              </div>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-2xl font-bold">$361.23</span>
                <span className="text-emerald-500">+36.32%</span>
              </div>
            </div>
            <Button variant="secondary" className="gap-2">
              <Star size={16} />
              Investor Relations
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <StockChart />
            </div>
            <div>
              <div className="bg-zinc-900 rounded-lg p-4">
                <h2 className="text-lg font-medium mb-4">Profile</h2>
                <p className="text-zinc-400 text-sm mb-4">
                  Tesla develops, licenses, and supports software, services, devices, and solutions worldwide. The
                  company operates in three segments: Productivity and Business Processes Intelligent Cloud, and More
                  Personal Computing.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs">Auto</span>
                  <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs">Tech</span>
                  <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs">Energy</span>
                </div>
              </div>
              <div className="mt-6">
                <KeyStats />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Bot metrics</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Annual (TTM)
                </Button>
                <Button variant="outline" size="sm">
                  Quarterly
                </Button>
              </div>
            </div>
            <MetricsCharts />
      </div>
      </>
  )
}

