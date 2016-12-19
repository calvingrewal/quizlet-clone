import React, { Component } from 'react'

import '../../css/Message.sass'

class Message extends Component {

  render() {
    const createMessages = (message, i) => {
        return <p key={i}>{message}</p>
    };
    return (
      <div className="flashcard message">
        {this.props.messages.map(createMessages)}
        <button className='btn' onClick={this.props.handleClick}>Click to {this.props.type}</button>
      </div>
    )
  }
}

export default Message
