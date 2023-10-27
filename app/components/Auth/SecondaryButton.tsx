"use client";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function SecondaryButton({ onClick, children, className = "" }: Props) {
  return (
    <button
      type="button"
      className={`border hover:bg-white dark:hover:bg-slate-700 transition-all duration-200 my-1 h-10 px-2 flex items-center gap-6 rounded-xl bg-muted text-sm font-semibold capitalize leading-tight hover:cursor-pointer focus:outline ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
