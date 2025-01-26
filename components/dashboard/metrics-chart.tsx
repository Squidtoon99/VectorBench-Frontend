"use client"

import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: "#333",
      },
    },
  },
}

export function MetricsCharts() {
  const months = ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"]

  const incomeData = {
    labels: months,
    datasets: [
      {
        label: "Revenue",
        data: [8, 7, 6, 9, 8, 8, 10, 12, 13, 14, 13],
        backgroundColor: "#06b6d4",
      },
      {
        label: "Operating Income",
        data: [2, 1.5, 1, 2, 2.5, 2, 2.5, 3, 3, 3.5, 3],
        backgroundColor: "#f87171",
      },
    ],
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="bg-zinc-900 p-4 rounded-lg">
        <h3 className="text-sm font-medium mb-4">Income Overview</h3>
        <Bar options={options} data={incomeData} />
      </div>
      <div className="bg-zinc-900 p-4 rounded-lg">
        <h3 className="text-sm font-medium mb-4">Net Income</h3>
        <Bar
          options={options}
          data={{
            labels: months,
            datasets: [
              {
                label: "Net Income",
                data: [1, 1, 1.5, 2, 3, 4, 5, 6, 7, 8, 8],
                backgroundColor: "#06b6d4",
              },
            ],
          }}
        />
      </div>
      <div className="bg-zinc-900 p-4 rounded-lg">
        <h3 className="text-sm font-medium mb-4">Vehicles Delivered</h3>
        <Bar
          options={options}
          data={{
            labels: months,
            datasets: [
              {
                label: "Model 3 and Model Y",
                data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 70],
                backgroundColor: "#f87171",
              },
              {
                label: "Model S, Model X, and Cybertruck",
                data: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                backgroundColor: "#818cf8",
              },
            ],
          }}
        />
      </div>
    </div>
  )
}

