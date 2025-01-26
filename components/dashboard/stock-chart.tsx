"use client"

import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import useSWR from "swr"
import { fetcher } from "@/lib/utils"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        color: "#333",
      },
    },
    y: {
      grid: {
        color: "#333",
      },
    },
  },
}

export function StockChart() {
  const { data: datapoints, error } = useSWR("/api/v1/bot-overview", fetcher, {
    fallbackData: [235, 280, 250, 290, 260, 270, 300]
  });
  const data = {
    labels: ["May", "Jun", "Aug", "Sep", "Nov", "Dec", "Feb"],
    datasets: [
      {
        data: datapoints?.map((point: any) => point.price),
        borderColor: "#22c55e",
        tension: 0.2,
      },
    ],
  }

  return (
    <div className="h-auto w-full">
      <Line options={options} data={data} />
    </div>
  )
}

