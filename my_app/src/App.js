import { useState, useEffect } from 'react'

const randomAnecdote = (setter, list, current) => {
  let num = Math.floor(Math.random()*list.length)
  if(num === current) {
    return randomAnecdote(setter, list)
  }
  setter(num)
}

const increment = (setter, list, current) => {
  const copy = [...list]
  copy[current] += 1;
  setter(copy)
}

// const mostVotes = (list, state) => {
//   for(let i = 0; i < list.length; i++) {
//     // console.log("hello")
//     if(list[i]>=state) {
//       return i
//     }
//   }
// }


const instantiateVotes = (listLength) => {
  let arr = [];
  for(let i = 0; i < listLength; i++) {
    arr = arr.concat(0)
  }
  return arr
}

const Button = (props) => {
  return (
    <div>
      <button onClick={()=>props.fn(props.setter, props.list, props.current)}>{props.text}</button>
    </div>
  )
}
// const MyComponent = (props) => {
//   console.log(props)
//   let newdex = mostVotes(props.list, props.state)
//   console.log(newdex)
//   props.setter(newdex)
//   return (
//     <div>{props.quotes[newdex]}</div>
//   )

// }

const indexMost = (votes, most) => {
  let rtnval = null
  for(let i = 0; i < votes.length; i++) {
    if(votes[i] >= most) {
      most = votes[i]
      rtnval = i
    }
  }
  if(most===0) {
    return null
  }
  return rtnval
}

const AOfTheDay = (props) => {
  let votes = [props.votes]
  useEffect(() =>  {
    let thenew = indexMost(props.votes, props.index)
    props.newdex(thenew)
  }, [votes])

  return (
    <div>{props.anecdote[props.index]} {props.votes[props.index]}</div>
  )

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [votes, vote] = useState(instantiateVotes(anecdotes.length))
  const [index, newdex] = useState(0)
  // const [most, index] = useState(0)
  // const myComponent = () => {mostVotes(index, votes, most)}
  //<MyComponent setter = {index} list = {votes} state = {most} quotes = {anecdotes}/>
  return (
    <div>
      <Button fn={randomAnecdote} setter ={setSelected} list= {anecdotes} current = {selected} text = "click for wisdom"/>
      <Button text = "vote" fn = {increment} setter = {vote} list = {votes} current = {selected} />
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <h1>anecdote with the most votes</h1>
      <AOfTheDay votes = {votes} anecdote = {anecdotes} index = {index} newdex = {newdex}/>
    </div>
  )
}

export default App