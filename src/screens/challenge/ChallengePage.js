import React, { Component } from 'react'
import Assignment from './components/Assignment'
import TabbedTable from './components/TabbedTable'
import SqlEditor from './components/SqlEditor'
import ChallengerProgress from './components/ChallengerProgress'
import RequestHelper from '../../helpers/RequestHelper'
import websocket from 'socket.io-client'

class ChallengePage extends Component {
  socket = null
  state = {
    challenge: {
      description: '',
      tables: []
    }
  }

  componentDidMount () {
    this.socket = websocket('http://127.0.0.1:3001')

    // RequestHelper.get('/challenges/next').then(challenge => {
    //   this.setState({challenge})
    // })
  }

  handleChange = (nextValue) => {
    console.log(this.socket)

    this.socket.emit('query update', {playerId: localStorage.getItem('playerId'), query: nextValue})
  }

  render () {
    const {challenge} = this.state

    return (<div>
      <div className="flex justify-end">
        <ChallengerProgress/>
      </div>

      <div className="flex mt-12 items-stretch">
        <SqlEditor className="flex-1 h-64" onChange={this.handleChange}/>
        <div className="flex-1 ml-16">
          <Assignment description={challenge.description}/>
          <TabbedTable tables={challenge.tables}/>
        </div>
      </div>
    </div>)
  }
}

export default ChallengePage
