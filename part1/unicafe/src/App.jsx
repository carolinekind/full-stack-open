import { useState } from 'react'
import Button from './Button'
import Header from './Header'

function App() {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    console.log(neutral)
  }
  const handleBad = () => setBad(bad + 1)


 

  return (
    <div>
      <Header text="Give Feedback"/>
        <Button onClick={handleGood} text='Good'/>
        <Button onClick={handleNeutral} text='Neutral'/>
        <Button onClick={handleBad} text='Bad'/>

        <Header text="Statistics"/>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>

    </div>
  )
}

export default App
