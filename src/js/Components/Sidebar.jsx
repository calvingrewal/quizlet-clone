import React, { Component } from 'react'
import ProgressBar from './ProgressBar.jsx'
import '../../css/Sidebar.sass'

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <h1>Learn</h1>
        <ProgressBar
          type='remaining'
          totalCards={this.props.totalCards}
          numCards={this.props.numRemaining}
        />
        <ProgressBar
          type='correct'
          totalCards={this.props.totalCards}
          numCards={this.props.numCorrect}
        />
        <ProgressBar
          type='incorrect'
          totalCards={this.props.totalCards}
          numCards={this.props.numIncorrect}
        />
      </div>
    )
  }
}

export default Sidebar
