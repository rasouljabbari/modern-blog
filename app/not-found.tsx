import Link from "next/link";

export default function NotFound() {
    return(
        <div className="w-full h-96 flex items-center flex-col justify-center gap-8">
            <h2 className="font-bold text-3xl text-rose-700 hover:text-rose-600">Page Not Found</h2>
            <p className="text-lg">
                <Link className="text-blue-400 text-xl" href='/'>back to homepage</Link>
            </p>
        </div>
    )
}