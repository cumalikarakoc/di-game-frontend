import React, { Component } from 'react'

class LoginPage extends Component {
  render () {
    return <div className='flex justify-center'>
      <div className='shadow-lg mt-6 px-12 py-8'>
        <h1>Login</h1>
        <input type='number' className='input mt-4'/>
        <input type='submit' className='btn block mt-4'/>
      </div>
    </div>
  }
}

export default LoginPage
