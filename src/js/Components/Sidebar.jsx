import React, { Component } from 'react'
import ProgressBar from './ProgressBar.jsx'
import '../../css/Sidebar.sass'

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <h1>Learn</h1>
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
      </div>
    )
  }
}

export default Sidebar
