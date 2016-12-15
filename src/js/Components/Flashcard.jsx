import React, { Component } from 'react'
import '../../css/Flashcard.sass'

class Flashcard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='flashcard'>
        <h3>{this.props.vocab[0].term}</h3>
        <div className="answer">
          <input type="text"/>
          <button>Answer</button>
        </div>
        <small>Type the answer</small>

      </div>
    )
  }
}

export default Flashcard
