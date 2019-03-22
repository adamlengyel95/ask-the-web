import React from 'react';
import Question from '../Question/Question';


const Questions = (props) => {
    
    return(
        <div>
            {
                props.questions.map(q => {
                    return <Question key={q.id} id={q.id} title={q.title} answers={q.answers} onClickHandler={props.onClickHandler}/>
                })
            }
        </div>
    );
};

export default Questions;