import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handlerClickGood = () => {
    setGood(good + 1)
    console.log(good)
  }
  const handlerClickNeutral = () => {
    setNeutral(neutral + 1)
    console.log(neutral)
  }
  const handlerClickBad = () => {
    setBad(bad + 1)
    console.log(bad)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handlerClickGood}>good</button>
      <button onClick={handlerClickNeutral}>neutral</button>
      <button onClick={handlerClickBad}>bad</button>
      <h1>statistics</h1>
      <p>good : {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
    </div>
  )
}

export default App