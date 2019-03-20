import React from 'react';
import classes from './Question.module.css';

const Question = (props) => {
    const answerCount = props.answers.length;
    return(
        <div className={classes.QuestionContainer}>
            <h2>{props.title}</h2>
            <p>{ answerCount } válasz</p>
        </div>
    );
};

export default Question;