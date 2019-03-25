import React, { Component } from 'react';
import './App.css';
import './components/Layout/Layout';
import Layout from './components/Layout/Layout';


class App extends Component {
  state = {
    questions: [
      {
        id: 1,
        title: 'Hogyan tudom Windows 10-n elindítani a parancssort?',
        answers: [
          {
            id: 1,
            questionId: 1,
            content: 'Start menü, ezután begépeled, hogy cmd és Enter.'
          }
        ]
      },

      {
        id: 2,
        title: 'Hogyan tudok java programot futtatni?',
        answers: [
          {
            id: 2,
            questionId: 2,
            content: 'javac myApp.java paranccsal először lefordítod, majd java myApp parancssal futtatod',
          },
          {
            id: 3,
            questionId: 2,
            content: 'Feltelepítesz valamilyen fejlesztői környezetet pl Eclipse, IntellIJ, ezekből gombnyomással futtathatod.'
          },
          
        ]
      },

      {
        id: 3,
        title: 'Hogyan tudom telepíteni a VLC Media Playert Ubuntu-n?',
        answers: [
          {
            id: 4,
            questionId: 3,
            content: 'Megnyitod a terminált(Ctrl+T) majd  futtatod a következő parancsot: % sudo snap install vlc',
          },
          {
            id: 5,
            questionId: 3,
            content: 'Az Ubuntu Software alkalmazásban is megtalálod.'
          }
        ]
      },
      {
        id: 4,
        title: 'PC-t vagy konzolt érdemes venni 2019-ben?',
        answers: [
          {
            id: 6,
            questionId: 4,
            content: 'A konzol sokkal jobban megéri ha az ár érték arányt nézzük.',
          },
          {
            id: 7,
            questionId: 4,
            content: 'PC-t, mivel azt másra is tudod használni.'
          },
          {
            id: 8,
            questionId: 4,
            content: 'Mindkettő jó választás.'
          }
        ]
      }
    ]
  }

  sendQuestionHandler = (newQuestionTitle) => {
    if(newQuestionTitle !== '') {
      const questionCount = this.state.questions.length;
      let currentLastId;
      if(questionCount > 0){
        currentLastId = this.state.questions[questionCount-1].id;
      } else {
        currentLastId = 0;
      }
    
       const newQuestion = {
            id: currentLastId + 1,
            title: newQuestionTitle,
            answers: []
        } 
      
        
      
      
      const actualQuestions = this.state.questions;
      actualQuestions.push(newQuestion);
      this.setState({questions: actualQuestions});
      
    } else {
      alert('A kérdés megadása kötelező!');
    }
    
  }

  editQuestionHandler = (questionId, newTitle) => {
    
    const actualQuestions = [...this.state.questions];
    
    let questionToEdit;
    let index;
    for (let i = 0; i < actualQuestions.length; i++) {
      if(actualQuestions[i].id === questionId) {
          index = i;
          questionToEdit = actualQuestions[index];
      } 
    }
    

    if(newTitle !== ''){
      questionToEdit.title = newTitle;
      actualQuestions.splice(index, 1, questionToEdit);
    }
    
    this.setState({questions: actualQuestions});
  }

  deleteQuestionHandler = (questionId) => {
    
    const actualQuestions = [...this.state.questions];
  
    let index;
    for (let i = 0; i < actualQuestions.length; i++) {
      if(actualQuestions[i].id === questionId) {
          index = i;
      } 
    }
    actualQuestions.splice(index, 1);
    this.setState({questions: actualQuestions})
    
  }

  editAnswerHandler = (questionId, answerId, newContent) => {
    const actualQuestions = [...this.state.questions];
    
    let questionToEdit;
    let questionIndex;
    for (let i = 0; i < actualQuestions.length; i++) {
      if(actualQuestions[i].id === questionId) {
          questionIndex = i;
          questionToEdit = actualQuestions[questionIndex];
      } 
    }
    
    const answers = questionToEdit.answers;
    let answerToEdit;
    let answerIndex;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].id === answerId) {
        answerIndex = i;
        answerToEdit = answers[answerIndex];
      }
      
    }
    if(newContent !== ''){
      answerToEdit.content = newContent;
      answers[answerIndex] = answerToEdit;
      questionToEdit.answers = answers;
      actualQuestions[questionIndex] = questionToEdit;
    }
    this.setState({questions: actualQuestions});
  }

  deleteAnswerHandler = (questionId, answerId) => {
    const actualQuestions = [...this.state.questions];
    
    let questionToEdit;
    let questionIndex;
    for (let i = 0; i < actualQuestions.length; i++) {
      if(actualQuestions[i].id === questionId) {
          questionIndex = i;
          questionToEdit = actualQuestions[questionIndex];
      } 
    }
    
    const answers = questionToEdit.answers;
    
    let answerIndex;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].id === answerId) {
        answerIndex = i;
        
      }
      
    }

    answers.splice(answerIndex, 1);
    questionToEdit.answers = answers;
    actualQuestions[questionIndex] = questionToEdit;
    this.setState({questions: actualQuestions});
  }

  sendAnswerHandler = (questionId, answerContent) => {
    if(answerContent!== '') {
      const actualQuestions = [...this.state.questions];
      
      
      let questionIndex;
      let questionToEdit;
      for (let i = 0; i < actualQuestions.length; i++) {
        if(actualQuestions[i].id === questionId) {
            questionIndex = i;
            questionToEdit = actualQuestions[questionIndex];
        } 
      }
  
      const answers = questionToEdit.answers;
      const answerCount = answers.length;
  
      let currentLastId;
      if(answerCount > 0){
        currentLastId = this.state.questions[questionIndex].answers[answerCount-1].id;
      } else {
        currentLastId = 0;
      }
  
      const newAnswer = {
        id: currentLastId + 1,
        questionId: questionId,
        content: answerContent
      }
      answers.push(newAnswer);
      questionToEdit.answers = answers;
      actualQuestions[questionIndex] = questionToEdit;
      this.setState({questions: actualQuestions});
    } else {
      alert('A kérdés megadása kötelező!');
    }
    
  }

  render() {
    return (
        <div className="App">
          <Layout
            questions={this.state.questions}
            sendQuestionHandler={this.sendQuestionHandler.bind(this)}
            editQuestionHandler={this.editQuestionHandler.bind(this)}
            deleteQuestionHandler={this.deleteQuestionHandler.bind(this)}
            editAnswerHandler={this.editAnswerHandler.bind(this)}
            deleteAnswerHandler={this.deleteAnswerHandler.bind(this)}
            sendAnswerHandler={this.sendAnswerHandler.bind(this)}
          />
        </div>
    );
  }
}

export default App;
