const Title = ({title}: {title: string}) => {
    return (
        <h1 className="text-4xl md:text-5xl font-bold leading-tight font-mono">
            {title}<span className="text-amber-500">.</span>
        </h1>
    )
}

export default Title;