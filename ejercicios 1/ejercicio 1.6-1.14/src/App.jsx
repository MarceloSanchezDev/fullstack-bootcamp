import { useState } from 'react'
import Statistics from './Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handlerClickGood = () => {
    setGood(good + 1)
    setTotal(total + 1)

  }
  const handlerClickNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }
  const handlerClickBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  const average = (good + neutral - bad) / total 
  const positive = (total / good) * 100

  return (
    <>
    <div>
      <h1>give feedback</h1>
      <button onClick={handlerClickGood}>good</button>
      <button onClick={handlerClickNeutral}>neutral</button>
      <button onClick={handlerClickBad}>bad</button>
    </div>
    <Statistics
      good= {good}
      neutral={neutral}
      bad={bad}
      total={total}
      average={average}
      positive={positive} />
    </>
    
  )
}

export default App