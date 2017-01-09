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
  handleSubmit(e) {
    e.preventDefault()
    this.props.handleAnswer(this.state.inputValue)
    this.setState({
      inputValue:''
    })
  }
  render() {
    return (
      <div className='flashcard'>
        <h3>{this.props.vocab[0].term}</h3>
        <form className="answer" onSubmit={this.handleSubmit}>
          <input type="number"
            value={this.state.inputValue}
            onChange={this.handleInput}
          />
          <button className='btn' type='submit'>Answer</button>
        </form>
        <small>Type the answer</small>

      </div>
    )
  }
}

export default Flashcard
