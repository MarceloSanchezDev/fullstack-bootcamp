const Part = ({part}) => {
    return(
        <>
            <p><b>Part:</b> {part.part}</p>
            <p><b>Number of exercises:</b> {part.exercises}</p>
        </>
    )
}

export default Part