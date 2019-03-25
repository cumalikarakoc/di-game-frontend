import React, { Component } from 'react'
import RequestHelper from '../../helpers/RequestHelper'
import FlashMessages from '../../components/FlashMessages'

class LoginPage extends Component {
  state = {
    playerId: '',
    validation: {
      message: '',
      errors: []
    }
  }

  handleLogin = () => {
    const {playerId} = this.state
    RequestHelper.post('/auth/login', {
      playerId
    }).then(({success, players, validation}) => {
      this.setState({
        validation
      })

      if(success){
        localStorage.setItem('playerId', playerId)
        this.props.history.push('/before-game', { players })
      }
    })
  }

  onChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  render () {
    const {validation} = this.state

    return <div className='flex justify-center'>
      <div className='shadow-lg mt-6 px-12 py-8'>
        <FlashMessages errors={validation.errors} message={validation.message}/>
        <h1>Login</h1>
        <input type='number' className='input mt-4' name='playerId' onChange={this.onChange}/>
        <input type='submit' className='btn block mt-4' onClick={this.handleLogin}/>
      </div>
    </div>
  }
}

export default LoginPage
