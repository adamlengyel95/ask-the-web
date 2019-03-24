import React, { Component } from 'react'
import Answer from '../Answer/Answer';

export class QuestionPage extends Component {
    
    render() {
        const {match: {params}} = this.props;
        const selectedId = Number(params.id);
        const questions = this.props.questions;
 
        var actualQuestion;
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].id === selectedId) {
                actualQuestion = questions[i];
                
            }
            
        }
 
        return (
            <div>
                <h2>{actualQuestion.title}</h2>
                <button>Szerkesztés</button>
                <button>Törlés</button>
                <h3>A válaszok:</h3>
                {
                   this.props.questions[params.id-1].answers.map((q, index) => {
                    index++;
                    return <Answer key={q.id} index={index} content={q.content} />
                }) 
                }
                <h2>Hozzászólás: </h2>
                <textarea>Kedved Kérdező!</textarea>
            </div>
        )
    }
}

export default QuestionPage
