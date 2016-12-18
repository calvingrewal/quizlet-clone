import React, { Component } from 'react'

import '../../css/Message.sass'

class Message extends Component {

  render() {
    return (
      <div className="flashcard message">
        <p>{this.props.message}</p>
        <button className='btn' onClick={this.props.handleClick}>Click to {this.props.type}</button>
      </div>
    )
  }
}

export default Message
