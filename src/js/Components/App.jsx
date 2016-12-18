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
      'message': null
    }

  }
  handleAnswer(answer) {
    const { remaining, correct, incorrect, numTerms } = this.state

    const correctAnswer = remaining[0].definition.toLowerCase()

    let newRemaining = remaining
    let newCorrect = correct
    let newIncorrect = incorrect

    if (answer.toLowerCase() === correctAnswer) {
      newCorrect = correct.concat(this.state.remaining[0])
    } else {
      newIncorrect = incorrect.concat(this.state.remaining[0])
    }
    if (remaining.length === 1) {

      if (newCorrect.length === numTerms) {
        console.log('EVERYTHING RIGHTT')
        this.state.gameCompleted = true
        this.state.message = 'You got everything right!'
      }
        //add incorrect to remaining and display some UX indicator

      console.log('set STATTEEE')
      const numCorrect = newCorrect.length
      const message = 'You have gotten ' + numCorrect + ' out of ' + this.state.numTerms + ' correct'
      this.setState({
        'remaining': newIncorrect,
        'correct': newCorrect,
        'incorrect': [],
        message
      })

      return
    } else {
      newRemaining = remaining.slice(1)
      this.setState({
        remaining: newRemaining,
        correct: newCorrect,
        incorrect: newIncorrect
      })
    }
    console.log('answer handlled')
  }
  restart() {
    const newGame = this.state.correct.length == this.state.numTerms

    return newGame ?
      this.setState(this.generateInitialState(this.state.type))
      :
      this.setState({message:null})
  }

  render() {
    if (this.state.message) {
      const type = this.state.gameCompleted ? 'restart' : 'continue'
      return (
        <main className="main">
          <Sidebar
            totalCards={this.state.numTerms}
            numRemaining={this.state.remaining.length}
            numCorrect={this.state.correct.length}
            numIncorrect={this.state.incorrect.length}
          />
          <Message
            message={this.state.message}
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
