import React, { Component } from 'react'
import '../../css/ProgressBar.sass'
class ProgressBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className="bar">
          <div className="bar-fill"></div>
        </div>
        <div className="bar-text">
          <h4>Remaining</h4>
          <h4>30</h4>
        </div>


      </div>
    )
  }
}

export default ProgressBar
