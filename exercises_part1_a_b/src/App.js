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
    ['Fundamentals of React', 10],
    ['Using props to pass data', 7],
    ['State of a component', 14]
  ]
  
  return (
    <div>
      <Header course = {course} />
      <Content 
        part1 = {parts[0][0]} 
        exercises1 = {parts[0][1]} 
        part2 = {parts[1][0]}
        exercises2 = {parts[1][1]}
        part3 = {parts[2][0]}
        exercises3 = {parts[2][1]}
        /> 
        <Total 
          part1 = {parts[0][1]}
          part2 = {parts[1][1]}
          part3 = {parts[2][1]}
          />
    </div>
    
  )
}

export default App 