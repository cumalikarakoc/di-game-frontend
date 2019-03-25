import React, { Component } from 'react'
import websocket from 'socket.io-client'
import SqlEditor from '../challenge/components/SqlEditor'

class QueryCardsPage extends Component {
  state = {
    players: []
  }

  componentDidMount () {
    const socket = websocket('http://127.0.0.1:3001')
    socket.on('progress update', players => {
console.log(players)
      this.setState({
        players: players
      })
    })
  }

  render () {
    const {players} = this.state

    return <div>
      <h1>Players</h1>

      <div>
        {players.map(player => {
          return <SqlEditor className="flex-1 h-64" onChange={this.handleChange} value={player.query}/>
        })}
      </div>
    </div>
  }
}

export default QueryCardsPage
