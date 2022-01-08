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
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
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