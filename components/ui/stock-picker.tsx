"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn, fetcher } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import useSWR from "swr";


interface Stock {
    Exchange: string;
    Name: string;
    Ticker: string;
}

interface StockSelectProps {
    onStockSelect: (stock: Stock | null) => void;
}

export function StockSelect({ onStockSelect }: StockSelectProps) {
    const [query, setQuery] = React.useState("");
    console.log("Query: ", query);
    const { data: stocks, isLoading } = useSWR("/api/v1/stocks?query=" + query, fetcher, {
        dedupingInterval: 500,
        fallbackData: [],
    });
    console.log("Data: ", stocks);
    const [open, setOpen] = React.useState(false);
    const [selectedStock, setSelectedStock] = React.useState<Stock | null>(null);

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {selectedStock ? selectedStock.Ticker : "Select stock..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
                    <CommandInput placeholder="Search framework..." onInput={(e) => setQuery(e.currentTarget.value)} />
            <CommandList>
                        <CommandEmpty>{isLoading ? "Loading... " : "No framework found."}</CommandEmpty>
              <CommandGroup>
                {stocks.map((stock: Stock) => (
                  <CommandItem
                    key={stock.Ticker}
                    value={stock.Ticker}
                    onSelect={(currentValue) => {
                        setSelectedStock(selectedStock?.Ticker === stock.Ticker ? null : stock);
                        onStockSelect(stock);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedStock?.Ticker === stock.Ticker ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {stock.Name} ({stock.Ticker})
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
}

