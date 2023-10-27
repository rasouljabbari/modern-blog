import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Navbar = () => {
    return (
        <nav className="w-full dark:bg-slate-900 bg-slate-100 sticky top-0 z-20">
            <div className="container mx-auto p-4 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-slate-950 dark:text-gray-50 no-underline">Snapp Kitchen</Link>
                <ThemeSwitcher />
            </div>
        </nav>
    );
};

export default Navbar;