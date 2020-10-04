import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = (props) => {
  return (
    <div>
      good {props.good}<br/>
      neutral {props.neutral}<br/>
      bad {props.bad}<br/>
      all {props.good + props.neutral + props.bad}
    </div>
  );
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)

  return (
    <div>

      <h1>give feedback</h1>
      <Button
        handleClick={addGood}
        text="good"
      />
      <Button
        handleClick={addNeutral}
        text="neutral"
      />
      <Button
        handleClick={addBad}
        text="bad"
      />
      <h1>statistics</h1>
      <Display
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)