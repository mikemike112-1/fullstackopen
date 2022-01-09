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
      <Part name = {props.part1} number = {props.exercises1}/> 
      <Part name = {props.part2} number = {props.exercises2}/> 
      <Part name = {props.part3} number = {props.exercises3}/> 

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
  const course = 'Half Stack application development'

  const parts = [
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
  return (
    <div>
      <Header course = {course} />
      <Content 
        part1 = {parts[0].name} 
        exercises1 = {parts[0].exercises} 
        part2 = {parts[1].name}
        exercises2 = {parts[1].exercises}
        part3 = {parts[2].name}
        exercises3 = {parts[2].exercises}
        /> 
        <Total 
          part1 = {parts[0].exercises}
          part2 = {parts[1].exercises}
          part3 = {parts[2].exercises}
          />
    </div>
    
  )
}

export default App 