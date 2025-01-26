"use client";

import * as React from "react";
import { addDays, subMonths, subYears, format, startOfToday } from "date-fns";
import type { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

type DateOption = "1 month" | "6 months" | "1 year";

export function DateRangePicker({
    className,
    date,
    setDate,
}: React.HTMLAttributes<HTMLDivElement> & {
    date: DateRange | undefined;
    setDate: (date: DateRange | undefined) => void;
}) {
    const today = startOfToday();
    const endDate = addDays(today, -1);
    const [selectedOption, setSelectedOption] = React.useState<DateOption | null>(null);

    const handleOptionSelect = (option: DateOption) => {
        let startDate: Date;
        switch (option) {
            case "1 month":
                startDate = subMonths(endDate, 1);
                break;
            case "6 months":
                startDate = subMonths(endDate, 6);
                break;
            case "1 year":
                startDate = subYears(endDate, 1);
                break;
        }
        setDate({ from: startDate, to: endDate });
        setSelectedOption(option);
    };

    const isValidDateRange = date?.from && date?.to && date.from < date.to;

    return (
        <div className={cn("space-y-4", className)}>
            <div className="flex items-center space-x-4">
                {["1 month", "6 months", "1 year"].map((option) => (
                    <Button
                        key={option}
                        onClick={() => handleOptionSelect(option as DateOption)}
                        variant={"default"}
                        className={cn("bg-black text-silver-glossy hover:bg-rose-600/30 outline-rose-800", selectedOption === option ? "bg-rose-800 hover:bg-rose-700" : "")}
                    >
                        {option}
                    </Button>
                ))}
            </div>
        </div>
    );
}

