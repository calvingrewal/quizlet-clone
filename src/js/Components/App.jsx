import React, { Component } from 'react'

import Sidebar from './Sidebar.jsx'
import Flashcard from './Flashcard.jsx'
import Message from './Message.jsx'

import allFlashcards from '../flashcards.js'

import '../../css/App.sass'

class App extends Component {
  constructor() {
    super()

    this.handleAnswer = this.handleAnswer.bind(this)
    this.restart = this.restart.bind(this)


    this.state = this.generateInitialState('MATH')
  }
  generateInitialState(type) {
    const flashcards = allFlashcards[type]
    return {
      type,
      numTerms: flashcards.length,
      'remaining': flashcards,
      'incorrect': [],
      'correct': [],
      'gameCompleted': false,
      'messages': []
    }

  }
  handleAnswer(answer) {
    const { remaining, correct, incorrect, numTerms } = this.state

    const correctAnswer = remaining[0].definition.toLowerCase()

    let newRemaining = remaining
    let newCorrect = correct
    let newIncorrect = incorrect

    let messages = []

    if (answer.toLowerCase() === correctAnswer) {
      newCorrect = correct.concat(this.state.remaining[0])
    } else {
      newIncorrect = incorrect.concat(this.state.remaining[0])
      //the * is used in the Message component to detect if there are multiple messages
      messages.push('The correct answer is actually ' + this.state.remaining[0].definition)
    }
    if (remaining.length === 1) {

      if (newCorrect.length === numTerms) {
        console.log('EVERYTHING RIGHTT')
        this.state.gameCompleted = true

      }
        //add incorrect to remaining and display some UX indicator

      const numCorrect = newCorrect.length
      messages.push('You have gotten ' + numCorrect + ' out of ' + this.state.numTerms + ' correct')
      this.setState({
        'remaining': newIncorrect,
        'correct': newCorrect,
        'incorrect': [],
        messages
      })

      return
    } else {
      newRemaining = remaining.slice(1)
      this.setState({
        remaining: newRemaining,
        correct: newCorrect,
        incorrect: newIncorrect,
        messages
      })
    }
    console.log('answer handlled')
  }
  restart() {
    const newGame = this.state.correct.length == this.state.numTerms

    return newGame ?
      this.setState(this.generateInitialState(this.state.type))
      :
      this.setState({messages:[]})
  }
  getType() {
    console.log(this.state.remaining.length)
    if (this.state.gameCompleted) return 'restart'
    if (this.state.remaining.length === this.state.numTerms) return 'continue to next round'
    return 'continue'
  }
  render() {
    if (this.state.messages.length) {
      //const type = this.state.gameCompleted ? 'restart' : 'continue'
      const type = this.getType()
      return (
        <main className="main">
          <Sidebar
            totalCards={this.state.numTerms}
            numRemaining={this.state.remaining.length}
            numCorrect={this.state.correct.length}
            numIncorrect={this.state.incorrect.length}
          />
          <Message
            messages={this.state.messages}
            handleClick={this.restart}
            type={type}
          />
        </main>
      )
    }
    return (
      <main className='main'>
        <Sidebar
          totalCards={this.state.numTerms}
          numRemaining={this.state.remaining.length}
          numCorrect={this.state.correct.length}
          numIncorrect={this.state.incorrect.length}
        />
        <Flashcard
          handleAnswer={this.handleAnswer}
          vocab={this.state.remaining}
        />
      </main>
    );
  }
}

export default App;
