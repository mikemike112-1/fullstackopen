import React from 'react'

const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part name = {props.parts[0].name} number = {props.parts[0].exercises}/> 
      <Part name = {props.parts[1].name} number = {props.parts[1].exercises}/> 
      <Part name = {props.parts[2].name} number = {props.parts[2].exercises}/> 

    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.name} {props.number}</p>
    </div>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.part1 + props.part2 + props.part3 }</p>
  )
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
  ]
}
  
  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} /> 
        <Total 
          part1 = {course.parts[0].exercises}
          part2 = {course.parts[1].exercises}
          part3 = {course.parts[2].exercises}
          />
    </div>
    
  )
}

export default App 