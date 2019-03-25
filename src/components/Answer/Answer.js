import React, { Component } from 'react'
import classes from './Answer.module.css';

class Answer extends Component {

  state = {
      editedAnswer: ''
  }
  
  handleEditAnswerChange(event) {
      this.setState({editedAnswer: event.target.value});
  }

  render(){
    return (
      <div className={classes.AnswerContainer}>
        <p><strong>{this.props.index}. válasz: </strong>{ this.props.content }</p>
        <div className={classes.AnswerFeatures}>
          <div className={classes.editAnswerContainer}>
            <button className={classes.EditButton} onClick={() => this.props.editAnswerHandler(this.props.questionId, this.props.id, this.state.editedAnswer)}>Szerkesztés</button>
            <textarea className={classes.EditAnswerTextBox} defaultValue={this.props.content} onChange={this.handleEditAnswerChange.bind(this)}></textarea>
          </div>
          <div className={classes.DeleteContainer}>
            <button className={classes.DeleteButton} onClick={() => this.props.deleteAnswerHandler(this.props.questionId, this.props.id)}>Törlés</button>
          </div>
        </div>
      </div>
    )
  }
  
}

export default Answer;