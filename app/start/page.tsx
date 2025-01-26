"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { DateRange } from "react-day-picker";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import { BotSelect } from "@/components/ui/bot-select";
import { StockSelect } from "@/components/ui/stock-picker";
import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

const bots: { value: string; label: string; }[] = [
  {
    value: "random",
    label: "Random Bot",
  },
  {
    value: "momentum",
    label: "Momentum Bot",
  },
  {
    value: "mean-reversion",
    label: "Mean Reversion Bot",
  }
];

export default function Home() {
  const {push} = useRouter();
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [selectedStock, setSelectedStock] = useState<{
    Ticker: string;
    Name: string;
    Exchange: string;
  } | null>(null);
  const [selectedBots, setSelectedBots] = useState<string[]>([]);

  const ready = dateRange && selectedStock?.Ticker === "TSLA"

  const handleRun = () => {
    console.log("Running simulation with:", {
      startDate: dateRange?.from, // "2024-01-01"
      endDate: dateRange?.to,
      selectedStock, // ["TSLA", "AAPL"]
      selectedBots, // ["random", "momentum", "mean-reversion"]
    });
    push("/results");
  };

  return (
    <div className="flex">
      {" "}
      {/* Add margin to account for sidebar */}
      <section id="home" className="h-full">
        <header className="p-6 bg-black">
          <h1 className="text-3xl font-bold text-orange-fiery glow">
            VectorBench
          </h1>
        </header>
        <main className="container mx-auto p-6">
          <Card className="bg-black border border-black">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-fiery glow">
                Market Trading Bot Simulation
              </CardTitle>
              <CardDescription className="text-silver-glossy">
                Configure your simulation parameters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <label className="text-sm font-medium text-silver-glossy mr-2">
                      Simulation Timeline
                    </label>
                    <CheckCircle2 className={cn("w-5 h-5", dateRange ? "text-green-500" : "text-yellow-500")} />
                  </div>
                  <div className="border border-black rounded-md p-4">
                    <DateRangePicker date={dateRange} setDate={setDateRange} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <label className="text-sm font-medium text-silver-glossy mr-2">
                      Select Stock
                    </label>
                    {
                      <CheckCircle2 className={cn("w-5 h-5", selectedStock?.Ticker === "TSLA" ? "text-green-500" : "text-yellow-500")} />
                    }
                  </div>
                  <div className="border border-black rounded-md p-4">
                    <StockSelect onStockSelect={setSelectedStock} />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-silver-glossy">
                    Comparison Bots
                  </label>
                  <div className="border border-black rounded-md p-4">
                    <BotSelect />
                  </div>
                </div>
                <Button
                  onClick={handleRun}
                  variant={"outline"}
                  disabled={!ready}
                  className={cn("w-full font-bold outline-white", ready && "bg-rose-600")}
                >
                  Test
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </section>
    </div>
  );
}
