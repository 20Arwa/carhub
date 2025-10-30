"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Logo from "./ui/logo";

const Header = () => {
    const { theme, setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleMood = () => {
        if (!mounted) return
        theme === "light" ? setTheme("dark") : setTheme("light")
    }

    if (!mounted) return null 

    return (
        <header className="container">
        <nav className="flex justify-between items-center py-6">
            <button onClick={() => window.location.href = "/"}>
                <Logo />
            </button>

            {/* Toggle Color Mood */}
            <button
            className="color-mood main-btn h-8 p-1 flex justify-between items-center gap-x-3 relative bg-[var(--color-main)] lg:bg-white"
            onClick={handleMood}
            >
            <Sun
                size={25}
                strokeWidth={2}
                className={`z-10 ${
                resolvedTheme === "light"
                    ? "text-[var(--color-main)] lg:text-white"
                    : "text-stone-300 lg:text-stone-400"
                }`}
            />
            <Moon
                size={25}
                strokeWidth={2}
                className={`z-10 ${
                resolvedTheme === "dark"
                    ? "text-[var(--color-main)] lg:text-white"
                    : "text-stone-300 lg:text-stone-400"
                }`}
            />
            <span
                className={`
                absolute w-1/2 h-full rounded-full top-0 z-0 transition duration-700 bg-white lg:bg-[var(--color-main)]
                ${resolvedTheme === "dark" ? "translate-x-[90%]" : "-translate-x-1"}
                `}
            />
            </button>
        </nav>
        </header>
    )
}
export default Header
