import { useState } from 'react'
import Display from './Display'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  return (
    <div>
      <Display counter={counter}/>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>

      <button onClick={() => setCounter(0)}>
        zero
      </button>
    </div>
  )
}

export default App