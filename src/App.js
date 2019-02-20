import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import LoginPage from './screens/auth/LoginPage'
import GameProgressPage from './screens/dashboard/GameProgressPage'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/dashboard" component={GameProgressPage}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
