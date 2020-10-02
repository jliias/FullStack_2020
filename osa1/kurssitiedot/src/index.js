import React from 'react'
import ReactDOM from 'react-dom'

const Part = (props) => {
  return(
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
}

const Content = (props) => {
  return (
    <>
      <p>
        <Part part="part1" exercises="5" />
        {/* <Part part={part2} exercises={exercises2} />
        <Part part={part3} exercises={exercises3} /> */}
      </p>
    </>
  );
}

const Total = (props) => {
  return (
    <>
      {props.total}
    </>
  );
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1} />

      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))