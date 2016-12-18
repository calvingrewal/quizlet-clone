import React, { Component } from 'react'

class Message extends Component {

  render() {
    return (
      <div className="complete">
        <p>{this.props.message}</p>
        <button onClick={this.props.handleClick}>Click to restart</button>
      </div>
    )
  }
}

export default Message
