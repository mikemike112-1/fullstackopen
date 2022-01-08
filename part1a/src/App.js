import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app re-created by <a href="https://github.com/mikemike112-1">mikemike112-1</a>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    //<div> //being replaced with an empty element
    //helps the DOM not generate extra div elements 
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age = {age}/>
      <Footer />
    </>
    //</div>
  )
}

export default App 