// const Hello = ({name, age}) => {
//   const bornYear = () => new Date().getFullYear() - age
//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were prob born in {bornYear()}</p>
//     </div>
//   )
// }


// import {useState} from 'react'

// const Display = ({counter}) => <div>{counter}</div>
// const Button = (props) => {
//   return (
//   <div>
//     <button onClick={props.onClick}>
//       {props.text}
//     </button>
//   </div>
//   )
// }

// const App = () => {
//   const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   console.log(`yar I have a ${count} inch peg leg`)
  //   setCount(count+1)
  // }

//   console.log("rendering" , count)
//     return (
//       <div>
//         <Display counter = {count}/>
//         <Button onClick = {() => setCount(count + 1)} text = "Up"/>
//         <Button onClick = {() => setCount(count - 1)} text = "Down"/>
//       </div>
//     )
// }

// export default App

import {useState} from 'react'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [allClicks, setAll] = useState([])
  const [ratio, setRatio] = useState({left:0, right:0})

  const handleLeft = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
    setRatio({...ratio, left:ratio.left+1})
  }

  const handleRight = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    setRatio({...ratio, right:ratio.right+1})
  }

  const History = (props)=> {
    if(allClicks.length === 0) {
      return (
        <div>Use the app by pressing on the keys </div>
      )
    }
    return (
      <div>
        button presses: {props.allClicks.join(' ')}
      </div>
    )

  }

  const Button = (props) => {
    return (
      <div>
        <button onClick = {props.handler}>{props.text}</button>
      </div>
    )
  }

  const Ratio = (props) => {
    console.log(typeof NaN)
    if( isNaN( props.ratios.left/props.ratios.right)) {
      return (
        <div>L over R: None yet</div>
      )
    }
    return (
      <div>L over R: {props.ratios.left/props.ratios.right}</div>
    )
  }

  return (
    <div>
      {left}
      <Button handler = {handleLeft} text = {"left"}/>
      <Button handler = {handleRight} text = {"right"}/>
      {right}
      <History allClicks = {allClicks} />
      <Ratio ratios = {ratio} />
    </div>
  )
}
console.log(0/0)
export default App