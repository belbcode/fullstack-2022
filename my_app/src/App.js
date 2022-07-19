import { useState } from 'react'

const Button = (props) => {
  return (
  <div>
    <button onClick = {props.hook}>{props.text}</button>
  </div>
  )
}

const Count = (props) => {
  return (
    <div>
      {props.text} {props.count}
    </div>
  )
}

const Average = (props) => {
  console.log(props)
    let total = 0;
    props.list.forEach(element => {
      total += element
    });
    console.log()
    const average = (props.list[0] - props.list[2]) / total
    const percent = (props.list[0]/ total)*100
  return  (
      <div>
        <div>
          Average {average}
        </div>
        <div>
          Positive {percent}%
        </div>
      </div>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button hook = {() => setGood(good+1)} text = "Good"/>
      <Button hook = {() => setNeutral(neutral+1)} text = "Neutral"/>
      <Button hook = {() => setBad(bad+1)} text = "Bad"/>
      <h1>Statistics</h1>
      <Count count = {good} text = "good"/>
      <Count count = {neutral} text = "neutral"/>
      <Count count = {bad} text = "bad"/>
      <Average list = {[good, neutral, bad]} />
    </div>
  )
}

export default App