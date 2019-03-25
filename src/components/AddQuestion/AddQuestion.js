import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import classes from './AddQuestion.module.css';

export class AddQuestion extends Component {
  state = {
    newQuestion: ''
  }

  handleChange(event) {
    this.setState({newQuestion: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form className={classes.SendQuestionForm} onSubmit={this.handleSubmit}>
            <label>Mit szeretnél tudni? </label>
            <input type="text" onChange={this.handleChange.bind(this)}/><br></br>
            <Link to="/" className={classes.SendButton} onClick={() => this.props.sendQuestionHandler(this.state.newQuestion)}>Küldés</Link>
            
        </form>
      </div>
    )
  }
}

export default AddQuestion
