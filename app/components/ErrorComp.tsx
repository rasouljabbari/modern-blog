interface ErrorProps {
    error: Error
}

export default function ErrorComp({ error }: ErrorProps) {

    return (
        <div className="space-y-6">
            <h2 className="text-2xl">An Error Occurred</h2>
            <p className="w-full font-bold text-rose-800 dark:text-rose-400 p-2">{error.message}</p>
        </div>
    )
}