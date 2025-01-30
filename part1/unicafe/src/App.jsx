import { useState } from 'react'
import Button from './Button'
import Header from './Header'
import Statistic from './Statistic'

function App() {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)


 

  return (
    <div>
      <Header text="Give Feedback"/>
        <Button onClick={handleGood} text='Good'/>
        <Button onClick={handleNeutral} text='Neutral'/>
        <Button onClick={handleBad} text='Bad'/>

        <Header text="Statistics"/>
        <Statistic text="good" item={good}/>
        <Statistic text="neutral" item={neutral}/>
        <Statistic text="bad" item={bad}/>
          

    </div>
  )
}

export default App
