const Paragraph = ({text, className}: {text: string, className?: string}) => {
    return (
        <p className={`${className ?? ''} text-lg text-neutral-400 font-sans`}>
            {text}
        </p>
    )
}

export default Paragraph;