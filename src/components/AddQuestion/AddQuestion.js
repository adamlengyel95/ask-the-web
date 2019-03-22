import React, { Component } from 'react'

export class AddQuestion extends Component {
  render() {
    return (
      <div>
        <form>
            <label>Mit szeretnél tudni?</label>
            <input type="text"/><br></br>
            <button>Küldés</button>
        </form>
      </div>
    )
  }
}

export default AddQuestion
