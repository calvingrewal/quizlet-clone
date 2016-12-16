import React, { Component } from 'react'
import '../../css/ProgressBar.sass'

class ProgressBar extends Component {
  constructor(props) {
    super(props)
  }
  getWidth() {
    return ({
      'width': this.props.numCards / this.props.totalCards  * 100 + '%'
    })
  }
  render() {
    return (
      <div>
        <div className={"bar " + this.props.type}>
          <div className="bar-fill" style={this.getWidth()}></div>
        </div>
        <div className="bar-text">
          <h4>{this.props.type}</h4>
          <h4>{this.props.numCards}</h4>
        </div>
      </div>
    )
  }
}

export default ProgressBar
