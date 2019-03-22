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
  render() {
    return (
        <div className="App">
          <Layout questions={this.state.questions} />
        </div>
    );
  }
}

export default App;
