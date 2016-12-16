import React, { Component } from 'react'
import Sidebar from './Sidebar.jsx'
import Flashcard from './Flashcard.jsx'

import '../../css/App.sass'

class App extends Component {
  constructor() {
    super()

    this.handleAnswer = this.handleAnswer.bind(this)

    this.state = {
      numTerms: 4,
      'remaining': [
        {
          'term': 'Georgia',
          'definition': 'Established as a buffer state'
        },
        {
          'term': 'Iraquois Confederation',
          'definition': 'Largest Native American confederation'
        },
        {
          'term': 'Puritans',
          'definition': 'Wanted to purify the Church of England'
        },
        {
          'term': 'Fundamental Orders',
          'definition': 'First modern constitution established in Connecticut'
        },
      ],

      'incorrect': [],
      'correct': []
    }
  }
  handleAnswer(answer) {
    const correctAnswer = this.state.remaining[0].definition.toLowerCase()
    //User entered correct answer
    if (answer.toLowerCase() === correctAnswer) {
      //TODO: check if everything is correct
      const newCorrect = this.state.correct.concat(this.state.remaining[0])
      const newRemaining = this.state.remaining.slice(1)

      this.setState({
        correct: newCorrect,
        remaining: newRemaining
      })
    } else {
      const newIncorrect = this.state.incorrect.concat(this.state.remaining[0])
      const newRemaining = this.state.remaining.slice(1)

      this.setState({
        incorrect: newIncorrect,
        remaining: newRemaining
      })
    }
  }
  render() {
    return (
      <main>
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
