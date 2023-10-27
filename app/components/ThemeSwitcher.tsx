"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";


export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();


    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return null;
    }


    return (
        <button
            className={`w-fit h-10 px-3 text-sm rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "light" ? "Dark" : "Light"}
        </button>
    );
};