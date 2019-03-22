import React from 'react';
import classes from './Question.module.css';
import { Link } from 'react-router-dom';

const Question = (props) => {
    const answerCount = props.answers.length;
    
    return(
        <Link to={'/question/' + props.id} className={classes.QuestionContainer}>
            <h2>{props.title}</h2>
            <p className={classes.AnswerCount}>{ answerCount } válasz</p>
        </Link>
    );
};

export default Question;