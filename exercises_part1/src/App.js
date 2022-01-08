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

    </div>
  )
}

const Total = () => {

}

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    ['Fundamentals of React', 10],
    ['Using props to pass data', 7],
    ['State of a component', 14]
  ]

  const part1 = 'Fundamentals of React' 
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      
      <Header course = {course} />
      <Content part1 = {parts[0][0]} exercises1 = {parts[0][1]} /> 

      {/*
      <Total /> 
      
      
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      */}
    </div>
    
  )
}

export default App 