import React from 'react'
import classes from './Answer.module.css';

const Answer = (props) => {
  return (
    <div className={classes.AnswerContainer}>
      <p><strong>{props.index}. válasz: </strong>{ props.content }</p>
      <button className={classes.AnswerButton}>Szerkesztés</button>
      <input type="text" placeholder={props.content}></input>
      <button className={classes.AnswerButton}>Törlés</button>
    </div>
  )
}

export default Answer;