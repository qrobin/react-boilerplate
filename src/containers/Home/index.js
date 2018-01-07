import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  state = {
    counter: 0
  }

  handleCounter = (value) => {
    this.setState(oldState => ({ counter: oldState.counter + value }))
  }

  render() {
    return (
      <div>
        <div>
          <h2>State counter</h2>
          <h1>{this.state.counter}</h1>
          <button onClick={() => this.handleCounter(-1)}>Decrease</button>
          <button onClick={() => this.handleCounter(1)}>Increase</button>
          <hr/>
          <Link to='/users'>Go to <b>Users Screen</b></Link>
        </div>
      </div>
    )
  }
}

export { Home }