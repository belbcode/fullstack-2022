import React from "react"

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
    const courseA = []
    props.course.forEach((course, index) => {
      console.log(course)
        courseA.push(<div key={index}>
        <Header course = {course} />
        <Content courseArray = {course.parts}/>
        <CourseCount courseArray = {course.parts}/>
      </div>)
    })
    return (
      [courseA]
    )
  }

export default Course 