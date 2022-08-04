const Part = ({course}) => {
  return (
  <li>{course.name} {course.exercises}</li>
  )
}

const Content = ({courseArray}) => {
  return ( <ul>
  {courseArray.map((course)=>
    <Part key={course.id} course = {course}/>
  )}
  </ul>
  )

}
const Header = ({course}) => {
  return (
    <h1>{course.name}</h1>
  )

}
const CourseCount = ({courseArray}) => {
  let courseSum = 0
  for(let part of courseArray) {
    courseSum += part.exercises
  }
  return (
    <div>
      <b>total of {courseSum} exercises</b>
    </div>
  )
}
const Course = (props) => {
  return (
    <div>
      <Header course = {props.course} />
      <Content courseArray = {props.course.parts}/>
      <CourseCount courseArray = {props.course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course = {course} />
}

export default App