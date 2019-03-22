import React, { Component } from 'react'

export class QuestionPage extends Component {
    
    render() {
        const {match: {params}} = this.props;
        const selectedId = params.id;
        const questions = this.props.questions;
 
        var actualQuestion;
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].id == selectedId) {
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
                    return <><p key={q.id}><strong>{index}. válasz: </strong> {q.content}</p>
                            
                            <button>Szerkesztés</button>
                            <input type="text" placeholder={q.content}></input>
                            <button>Törlés</button></>
                }) 
                }
                <p></p>
       
            </div>
        )
    }
}

export default QuestionPage
