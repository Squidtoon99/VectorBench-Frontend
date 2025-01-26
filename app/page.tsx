import Image from 'next/image'
import Link from "next/link"
import { ArrowBigRight } from 'lucide-react'
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between p-24">
      <div className="relative text-2xl ml-8 lg:text-4xl font-bold flex-col place-items-left before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        Powerful bot<span className="text-orange-400 ml-2
before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-orange-200 after:via-orange-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-orange-700 before:dark:opacity-10 after:dark:from-orange-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">testing and optimization</span>
      </div>

      <div className="grid text-center lg:mb-0 mt-8 lg:grid-cols-4 lg:text-left gap-6">
        <a
          href="/start"
          className="group rounded-lg mb-4 border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Tune{' '}
            
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Configure Stock Tickers and Time Series Data
          </p>
        </a>

        <a
          href="/start"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Train{' '}
            
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Measure your bot's performance and adjust your trading strategy
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Track
            
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Setup graphs to track bot accuracy and performance
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Connect your bot to real-time data and start sending live trades
          </p>
        </a>
      </div>
    </main>
  )
}