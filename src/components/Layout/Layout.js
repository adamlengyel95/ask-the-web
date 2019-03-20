import React, { Component } from 'react';
import Navbar from '../UI/Navbar/Navbar';
import Questions from '../Questions/Questions';

export class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Questions questions={this.props.questions}/>
      </div>
    )
  }
}

export default Layout
