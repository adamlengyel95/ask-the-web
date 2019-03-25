import React, { Component } from 'react'
import Answer from '../Answer/Answer';
import classes from './QuestionPage.module.css';
import { Link } from 'react-router-dom';

export class QuestionPage extends Component {

    state = {
        editedQuestion: '',
        answerToSend: ''
    }

    handleEditQuestionChange(event) {
        this.setState({editedQuestion: event.target.value});
    }

    handleSendAnswerChange(event) {
        this.setState({answerToSend: event.target.value});
    }
    
    render() {
        const {match: {params}} = this.props;
        const selectedId = Number(params.id);
        const questions = this.props.questions;
 
        var actualQuestion;
        var actualQuestionIndex;
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].id === selectedId) {
                actualQuestionIndex = i;
                actualQuestion = questions[i];    
            }
        }
        
        return (
            <div>
                <div className={classes.QuestionContainer}>
                    <h2>{actualQuestion.title}</h2>
                    <div className={classes.QuestionFeatures}>
                        <div className={classes.EditContainer}>
                            <button className={classes.EditButton} onClick={() => this.props.editQuestionHandler(actualQuestion.id, this.state.editedQuestion)}>Szerkesztés</button>
                            <textarea className={classes.EditQuestionTextBox} defaultValue={actualQuestion.title} onChange={this.handleEditQuestionChange.bind(this)}></textarea>  
                        </div>
                        <div className={classes.DeleteButtonContainer}>
                            <Link to="/" className={classes.DeleteButton} onClick={() => this.props.deleteQuestionHandler(actualQuestion.id)}>Törlés</Link>
                        </div>
                        
                    </div>
                </div>
                {
                    this.props.questions[actualQuestionIndex].answers.map((a, index) => {
                        index++;
                        return <Answer 
                                    key={a.id}
                                    id={a.id} 
                                    questionId={a.questionId} 
                                    index={index} 
                                    content={a.content} 
                                    editAnswerHandler={this.props.editAnswerHandler}
                                    deleteAnswerHandler={this.props.deleteAnswerHandler} />
                }) 
                }
                <h2>Szólj hozzá: </h2>
                <textarea className={classes.CommentTextBox}  onChange={this.handleSendAnswerChange.bind(this)} defaultValue="Kedves Kérdező!"></textarea>
                <br></br>
                <button className={classes.SendCommentButton} onClick={() => this.props.sendAnswerHandler(actualQuestion.id, this.state.answerToSend)}>Küldés</button>
            </div>
        )
    }
}

export default QuestionPage
