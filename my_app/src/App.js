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
  const arrayOfExercises = courseArray.map((item)=> item.exercises)
  const initialvalue = 0
  const courseSum = arrayOfExercises.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
  initialvalue
  );
  return (
    <div>
      <b>total of {courseSum} exercises</b>
    </div>
  )
}
const Course = (props) => {
  console.log(props)
  const courseA = []
  props.course.forEach((course) => {
    console.log(course)
      courseA.push(<div>
      <Header course = {course} />
      <Content courseArray = {course.parts}/>
      <CourseCount courseArray = {course.parts}/>
    </div>)
  })
  return (
    [courseA]
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course course = {courses} />
}

export default App