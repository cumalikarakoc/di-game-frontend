import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import LoginPage from './screens/auth/LoginPage'
import ChallengePage from './screens/challenge/ChallengePage'
import GameProgressPage from './screens/dashboard/GameProgressPage'
import BeforeGameStartPage from './screens/lobby/BeforeGameStartPage'
import QueryCardsPage from './screens/dashboard/QueryCardsPage'

class App extends Component {
  render () {
    return (
      <Router>
        <div style={{backgroundColor: '#f7f7f7'}} className='flex flex-col flex-grow items-stretch h-screen'>
          <div className="py-6 border-b border-grey-lighter pl-6 bg-white"><span
            className="text-2xl font-bold">DI Game</span></div>

          <div className='px-6 mt-12'>
            <Switch>
              <Route exact path="/before-game" component={BeforeGameStartPage}/>
              <Route exact path="/dashboard" component={GameProgressPage}/>
              <Route exact path="/challenge" component={ChallengePage}/>
              <Route exact path="/cards" component={QueryCardsPage}/>
              <Route path="*" component={LoginPage}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
