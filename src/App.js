import React, {Component} from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import LoginPage from './screens/auth/LoginPage'
import ChallengePage from './screens/challenge/ChallengePage'
import GameProgressPage from './screens/dashboard/GameProgressPage'
import BeforeGameStartPage from './screens/lobby/BeforeGameStartPage'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={LoginPage}/>
                        <Route exact path="/before-game" component={BeforeGameStartPage}/>
                        <Route exact path="/dashboard" component={GameProgressPage}/>
                        <Route exact path="/challenge" component={ChallengePage}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
