const Statistics = ({good,neutral,bad,total,average,positive}) => {
    
    return (
        <>
        <h1>statistics</h1>
        {total === 0 ? 
        <h2>there are no votes</h2>
        : 
        <div>
                <p>good : {good}</p>
                <p>neutral: {neutral}</p>
                <p>bad: {bad}</p>
                <p>all: {total}</p>       
                <p>average: {average}</p>
                <p>positive : {positive}%</p>
        </div>}
        </>
    )
}

export default Statistics