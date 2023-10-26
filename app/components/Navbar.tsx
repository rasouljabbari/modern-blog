import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="w-full bg-gray-100 sticky top-0 z-20">
            <div className="container mx-auto p-4">
                <Link href="/" className="text-xl font-bold text-slate-950 no-underline">Modern Blog </Link>
            </div>
        </nav>
    );
};

export default Navbar;