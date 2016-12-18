import React, { Component } from 'react'
import '../../css/Flashcard.sass'

class Flashcard extends Component {
  constructor(props) {
    super(props)

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {inputValue:''}
  }
  handleInput(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleSubmit() {
    this.props.handleAnswer(this.state.inputValue)
    this.setState({
      inputValue:''
    })
  }
  render() {
    return (
      <div className='flashcard'>
        <h3>{this.props.vocab[0].term}</h3>
        <div className="answer">
          <input type="text"
            value={this.state.inputValue}
            onChange={this.handleInput}
          />
        <button className='btn' onClick={this.handleSubmit}>Answer</button>
        </div>
        <small>Type the answer</small>

      </div>
    )
  }
}

export default Flashcard
