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
          
          <Route path="/addQuestion" component={AddQuestion}/>
          <Route
            path={"/question/:id"}
            render = {(props) => <QuestionPage {...props}  questions={this.props.questions}/>}
          />
          
          
        
        </div>
      </BrowserRouter>
      
    )
  }
}

export default Layout
