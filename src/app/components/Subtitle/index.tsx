const Subtitle = ({ text, className }: { text: string, className?: string }) => {
    return (
        <h2 className={`text-3xl font-semibold ${className ?? ''}`}>{text}<span className="text-amber-500">.</span></h2>
    )
}

export default Subtitle;