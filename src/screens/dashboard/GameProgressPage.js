import React, { Component } from 'react'
import websocket from 'socket.io-client'
import PlayerProfile from './components/PlayerProfile'

class GameProgressPage extends Component {
  state = {
    players: [
      {
        avatarUrl: 'https://images.unsplash.com/photo-1548161100-34d8add6a8c6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9',
        level: 15,
        id: 1
      },
      {
        avatarUrl: 'https://images.unsplash.com/photo-1548635497-ca63e8c99f70?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9',
        level: 78,
        id: 2
      },
      {
        avatarUrl: 'https://images.unsplash.com/photo-1550425952-05fc5dc5bd55?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9',
        level: 9,
        id: 3
      },
      {
        avatarUrl: 'https://images.unsplash.com/photo-1550368760-861a8bfe1769?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9',
        level: 12,
        id: 4
      },
      {
        avatarUrl: 'https://images.unsplash.com/photo-1548335696-8b43c1f07a5a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9',
        level: 77,
        id: 5
      },
      {
        avatarUrl: 'https://images.unsplash.com/photo-1548761428-882eecfc4f51?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9',
        level: 3,
        id: 6
      },
      {
        avatarUrl: 'https://images.unsplash.com/photo-1549383064-d560ca308a9c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9',
        level: 23,
        id: 7
      },
      {
        avatarUrl: 'https://images.unsplash.com/photo-1549383064-d560ca308a9c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9',
        level: 44,
        id: 8
      }
    ]
  }

  componentDidMount () {
    const socket = websocket('http://127.0.0.1:3001')
    socket.on('player joined', player => {
      const {players} = this.state

      this.setState({
        players: [...players, player]
      })
    })
  }

  buildPlayerProfiles (players, outerCircleWidth, outerCircleHeight) {
    const profileWidth = 100
    const profileHeight = 100

    const radius = 200

    let angle = 0
    let step = (2 * Math.PI) / players.length

    return players.map(player => {
      const x = Math.round(outerCircleWidth / 2 + radius * Math.cos(angle) - profileWidth / 2)
      const y = Math.round(outerCircleHeight / 2 + radius * Math.sin(angle) - profileHeight / 2)

      angle += step

      return <PlayerProfile size={{width: profileWidth, height: profileHeight}} key={player.id}
                            avatarUrl={player.avatarUrl} level={player.level} position={{x: x, y: y}}/>
    })
  }

  render () {
    const outerCircleWidth = 600
    const outerCircleHeight = 600
    const {players} = this.state
    const playersAsComponents = this.buildPlayerProfiles(players, outerCircleWidth, outerCircleHeight)

    return <div>
      <h1>Players</h1>
      <div style={{width: `${outerCircleWidth}px`, height: `${outerCircleHeight}px`}}>
        {playersAsComponents}
      </div>
    </div>
  }
}

export default GameProgressPage
