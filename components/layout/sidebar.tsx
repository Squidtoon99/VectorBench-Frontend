"use client";

import { Home, BarChartIcon as ChartBar, Newspaper, FileText, DollarSign, Bot } from "lucide-react";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"


export function Sidebar() {
  const pathname = usePathname();

  const items = [
    {
      href: "/",
      icon: <Home size={20} />,
      disabled: false
    },
    {
      href: "/start",
      icon: <Bot size={20} />,
      disabled: false
    },
    {
      href: "/results",
      icon: <ChartBar size={20} />,
      disabled: ["/start", "/"].includes(pathname)
    },
    {
      href: "/docs",
      icon: <FileText size={20} />,
      disabled: ["/start", "/"].includes(pathname)
    },
    {
      href: "/stats",
      icon: <DollarSign size={20} />,
      disabled: ["/start", "/"].includes(pathname)
    }
  ]
  const isActive = (path: string) => pathname === path;
  return (
    <div className="w-20 bg-zinc-900 border-r border-zinc-800 flex flex-col items-center py-4 fixed h-screen">
      <div className="flex flex-col items-center gap-6">
        <div className="text-amber-500 font-bold text-2xl">/\/\</div>
        <nav className="flex flex-col gap-4">
          {items.map(({ href, icon, disabled }) => (
            <Link
              key={href}
              href={disabled ? "#" : href}
              className={cn(
                "p-3 rounded-lg hover:bg-zinc-800 hover:text-white transition-colors",
                isActive(href) ? "text-rose-800 bg-zinc-800" : "text-zinc-400",
                disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer"
              )}
            
            >
              {icon}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto flex flex-col gap-4">
        {/* Company logos */}
        {["TSLA", "AAPL", "NVDA", "V", "META"].map((symbol) => (
          <div
            key={symbol}
            className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-xs font-medium"
          >
            {symbol}
          </div>
        ))}
      </div>
    </div>
  );
}

