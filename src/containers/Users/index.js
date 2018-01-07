import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Users extends Component {
  handleGetUsers = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'USERS_GET_REQUEST'
    })
  }

  render() {
    return (
      <div>
        {this.props.loading ?
          <h2>Loading data...</h2> :
          <div>
            <button onClick={this.handleGetUsers}>Get users list</button>
            {this.props.users.map(it => (
              <div key={it.id}>
                <img src={it.avatar} alt=''/>
                <p>{it.first_name} {it.last_name}</p>
                <hr/>
              </div>
            ))}
          </div>
        }
      </div>
    )
  }
}

const select = ({ users, loading }) => ({ users, loading })

const Connected = connect(select)(Users)

export { Connected as Users }