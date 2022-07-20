import { useState } from 'react'

// const Button = (props) => {
//   return (
//   <div>
//     <button onClick = {props.hook}>{props.text}</button>
//   </div>
//   )
// }

// const Count = (props) => {
//   if(props.count === 0) {

//   }
//   return (
//     <div>
//       {props.text} {props.count}
//     </div>
//   )
// }

// const Average = (props) => {
//     let total = 0;
//     props.list.forEach(element => {
//       total += element
//     });
//     const average = (props.list[0] - props.list[2]) / total
//     const percent = (props.list[0]/ total)*100
//   return  (
//       <div>
//         <div>
//           Average {average}
//         </div>
//         <div>
//           Positive {percent}%
//         </div>
//       </div>
//     )
// }

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <h1>Give Feedback</h1>
//       <Button hook = {() => setGood(good+1)} text = "Good"/>
//       <Button hook = {() => setNeutral(neutral+1)} text = "Neutral"/>
//       <Button hook = {() => setBad(bad+1)} text = "Bad"/>
//       <h1>Statistics</h1>
//       <Count count = {good} text = "good"/>
//       <Count count = {neutral} text = "neutral"/>
//       <Count count = {bad} text = "bad"/>
//       <Average list = {[good, neutral, bad]} />
//     </div>
//   )
// }


const ButtonSec = (props) => {
  let elements = []
  props.list.forEach(element => {
    elements.push(<div key={element.text}><button onClick ={element.set}>{element.text}</button></div>)
  });
  return elements
}

const TotalSec = (props) => {
  let elements = [];
  let count = 0
  for(let element of props.list) {
    count += element.total
    elements.push(<td key={element.name}> {element.name} {element.total}</td>);
  }
  if(count === 0) {
    return (
      <div>No feedback yet</div>
    )
  }
  return elements
}

const Stats = (props) => {
  const total = (props) => {
    let count = 0
    Object.values(props).forEach(value => {
      count += value
    })
    return count
  };
  const average = (props.good - props.bad) / total(props)
  const percent = (prop.good/total)*100
  return (
    <div>
      <div>Average: {average}</div>
      <div>Percent: {percent}</div>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const theList = [
    {set : () => {setGood(good+1)}, text : "Good" },
    {set : () => {setNeutral(neutral+1)}, text : "Neutral"},
    {set : () => {setBad(bad+1)}, text: "Bad"}
  ]
  const theTotals = [
    {name: "Good", total: good},
    {name: "Neutral", total: neutral},
    {name: "Bad", total: bad}
  ]

  return (
    <div>
      <h1>Give Feedback</h1>
      <ButtonSec list = {theList} />
      <h1>Statistics</h1>
      <table>
        <col>
          <TotalSec list = {theTotals}/>
        </col>
        <col>

        </col>

      </table>
    </div>
  )
}

export default App