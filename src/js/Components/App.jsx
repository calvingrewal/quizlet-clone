import React, { Component } from 'react'
import Sidebar from './Sidebar.jsx'
import Flashcard from './Flashcard.jsx'

import '../../css/App.sass'

class App extends Component {
  constructor() {
    super()
    this.state = {
      'vocab': [
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
      ]
    }
  }
  render() {
    return (
      <main>
        <Sidebar />
        <Flashcard vocab={this.state.vocab}/>
      </main>

    );
  }
}

export default App;
