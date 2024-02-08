import StatisticLine from './StatisticLine'

const Statistics = ({good,neutral,bad,total,average,positive}) => {
    
    return (
        <>
        <h1>statistics</h1>
        {total === 0 ? 
        <h2>there are no votes</h2>
        : 
        <div>
            
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="total" value={total} />  
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive} />
        </div>}
        </>
    )
}

export default Statistics