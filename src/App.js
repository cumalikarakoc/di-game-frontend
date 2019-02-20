import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import LoginPage from './screens/auth/LoginPage'
import GameProgress from './screens/dashboard/GameProgress'
import ChallengePage from './screens/challenge/ChallengePage'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/dashboard" component={GameProgress}/>
            <Route exact path="/challenge" component={ChallengePage}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
