import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NotFound extends Component {
  render() {
    return (
      <div>
        <h2>You know what <span style={{ color: 'red' }}>404</span> error means, I guess..</h2>
      </div>
    )
  }
}

export { NotFound }