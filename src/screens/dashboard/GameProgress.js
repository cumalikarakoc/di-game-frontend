import React, { Component } from 'react'
import websocket from 'socket.io-client'

class GameProgress extends Component {
  state = {
    players: []
  };

  componentDidMount () {
    const socket = websocket('http://127.0.0.1:3001');
    socket.on('player joined', player => {
      const {players} = this.state;

      this.setState({
        players: [...players, player]
      })
    })
  }

  render () {
    const {players} = this.state

    return <div>
      <h1>Players</h1>
      <ul>{players.map(x => <li>{x.user_id} joined!</li>)}</ul>
    </div>
  }
}

export default GameProgress
