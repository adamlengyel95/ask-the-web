import React, { Component } from 'react';
import Navbar from '../UI/Navbar/Navbar';
import Questions from '../Questions/Questions';
import AddQuestion from '../AddQuestion/AddQuestion';
import QuestionPage from '../QuestionPage/QuestionPage';
import { BrowserRouter,Route } from 'react-router-dom';

export class Layout extends Component {
  

  render() {
    
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route
            exact path="/" 
            render = {(props) => <Questions {...props} questions={this.props.questions}/>}
          />
          
          <Route 
            path="/addQuestion" 
            render = {(props) => <AddQuestion {...props} sendQuestionHandler={this.props.sendQuestionHandler} />}
          />
          <Route
            path={"/question/:id"}
            render = {(props) => <QuestionPage
              {...props}
              questions={this.props.questions} 
              editQuestionHandler={this.props.editQuestionHandler}
              deleteQuestionHandler={this.props.deleteQuestionHandler}
              editAnswerHandler={this.props.editAnswerHandler}
              deleteAnswerHandler={this.props.deleteAnswerHandler}
              sendAnswerHandler={this.props.sendAnswerHandler}
              />}
          />
          
          
        
        </div>
      </BrowserRouter>
      
    )
  }
}

export default Layout
