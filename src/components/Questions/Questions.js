import React from 'react';
import Question from '../Question/Question';


const Questions = (props) => {
    
    return(
        <div>
            {
                props.questions.map(q => {
                    return <Question title={q.title} answers={q.answers}/>
                })
            }
        </div>
    );
};

export default Questions;