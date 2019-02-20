import React, { Component } from 'react'
import PropTypes from 'prop-types'
import websocket from 'socket.io-client'

class BeforeGameStartPage extends Component {
  state = {
    players: []
  }

  componentDidMount () {
    const {state} = this.props.location || {state: {players: []}}

    this.setState({
      players: state.players
    })

    const socket = websocket('http://127.0.0.1:3001')
    socket.on('player joined', player => {
      const {players} = this.state

      this.setState({
        players: [...players, player]
      })
    })

    socket.on('game started', () => {
      const {players} = this.state

      this.props.history.push('/challenge', {players})
    })
  }

  render () {
    const {players} = this.state

    return (
      <div>
        <h1>Waiting for the game to start!...</h1>
        <ul>
          {players.map(player => <li><img src={player.avatarUrl} alt='oef'/> {player.id}</li>)}
        </ul>
      </div>
    )
  }
}

BeforeGameStartPage.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
  })),
}

export default BeforeGameStartPage
