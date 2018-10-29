import React from 'react'
import './style.css'


 const Countdown = ({count, tick, reset}) => {

  if (count) {
    setTimeout(() => tick(), 1000)
  }

  return (count) ?
    <h1>{count}</h1> :
    <div onClick={() => reset(10)}>
      <span>Celebrate Good Times!! Come on!!</span>
      <span>(Click to start the countdown over)</span>
    </div>

}//close <Countdown />

export default Countdown
