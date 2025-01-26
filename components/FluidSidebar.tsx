"use client";

import { Home, TreesIcon as Tree } from "lucide-react";
import { usePathname } from 'next/navigation'
import Link from "next/link";

export function Sidebar() {
    const pathname = usePathname();
    const currentPage = pathname.slice(1);
    return (
        <div className="fixed left-0 top-0 h-full w-16 bg-gray-900 flex flex-col items-center py-4 space-y-4">
            <Link href="#home" className={`p-2 rounded-full ${currentPage === "" ? "bg-orange-fiery" : "bg-gray-800"}`}>
                <Home className="w-6 h-6 text-silver-glossy" />
            </Link>
            <Link
                href="#results"
                className={`p-2 rounded-full ${currentPage === "results" ? "bg-orange-fiery" : "bg-gray-800"}`}
            >
                <Tree className="w-6 h-6 text-silver-glossy" />
            </Link>
        </div>
    );
}

