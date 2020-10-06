import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function getArrayMax(array){
  return Math.max.apply(null, array);
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const MostVoted = (allVotes) => {
  console.log(allVotes)
  // const mostVoted = Math.max.apply(null, allVotes)
  // let largest = 0;

  // for (var i = 0; i <= allVotes.length; i++) {
  //   if (allVotes[i] > largest) {
  //     console.log("i: ", i)
  //     largest = allVotes[i];
  //   }
  // }

  const largest = getArrayMax(allVotes)
  console.log("largest: ", largest)
  return (
    <div>
      ahaa
      {/* {anecdotes[Math.max(...allVotes)]} */}
    </div>
  );
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  //const allVotes = new Array(anecdotes.length).fill(0)
  const [allVotes, setAll] = useState(Array(anecdotes.length).fill(0))
  const nextAnecdote = () => setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length)))

  const makeVote = () => {
    allVotes[selected] += 1
    console.log(allVotes);
  }

  console.log(selected);


  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br />
      <Button
        text="vote"
        handleClick={makeVote}
      />
      <Button
        text="next anecdote"
        handleClick={nextAnecdote}
      />
      <h1>Anecdote with most votes</h1>
      <MostVoted allVotes={allVotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)