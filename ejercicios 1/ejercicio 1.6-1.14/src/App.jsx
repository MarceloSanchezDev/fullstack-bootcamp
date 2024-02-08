import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
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
  const positive = total / good

  return (
    <>
    <div>
      <h1>give feedback</h1>
      <button onClick={handlerClickGood}>good</button>
      <button onClick={handlerClickNeutral}>neutral</button>
      <button onClick={handlerClickBad}>bad</button>
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
    </div>
    </>
    
  )
}

export default App