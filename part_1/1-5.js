const Header = (props) => {
  return [
  <h1>{props.course}</h1>
  ]
}
const Content = (props) => {
  //console.log(props.parts)
  return (
    <div>
    <Format array = {props.parts}/>
    </div>
  )
}
const Format = (props) => {
  console.log(props)
  let array = [];
  props.array.forEach((element)=> {
    array.push(<p>{element.name} {element.exercises}</p>)
  })
  return array

}
const Total = (props) => {
  let sumtotal = 0;
  props.parts.forEach(element => {
    sumtotal += element.exercises
  })
  return [
  <p>The total number of exercises is {sumtotal}</p>
  ]
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ],
  }

  return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
  )
}

export default App