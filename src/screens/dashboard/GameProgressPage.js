import React, { Component } from 'react'
import websocket from 'socket.io-client'
import PlayerProfile from './components/PlayerProfile'
import Enemy from './components/Enemy'

class GameProgressPage extends Component {
  state = {
    players: []
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
    const radius = outerCircleWidth / 2
    const profileIconSize = ((radius * Math.PI) / players.length) +  20;

    let angle = 0
    let step = (2 * Math.PI) / players.length

    return players.map(player => {
      const x = Math.round(outerCircleWidth / 2 + radius * Math.cos(angle) - profileIconSize / 2)
      const y = Math.round(outerCircleHeight / 2 + radius * Math.sin(angle) - profileIconSize / 2)

      angle += step

      return <PlayerProfile size={{width: profileIconSize, height: profileIconSize}} key={player.id}
                            avatarUrl={player.avatarUrl} level={player.level} position={{x: x, y: y}}/>
    })
  }

  render () {
    const outerCircleDiameter = window.outerHeight - 280

    const {players} = this.state
    const playersAsComponents = this.buildPlayerProfiles(players, outerCircleDiameter, outerCircleDiameter)
    const windowCenterX = window.outerWidth / 2
    const leftSideOfCircle = windowCenterX - (outerCircleDiameter / 2)

    return <div>
      <h1>Players</h1>

      <div style={{width: `${outerCircleDiameter}px`, height: `${outerCircleDiameter}px`, left: leftSideOfCircle}}
           className='absolute mt-6'>
        {playersAsComponents}
        <div className='flex justify-center items-center w-full h-full'>
          <Enemy height={400} width={311}/>
        </div>
      </div>
    </div>
  }
}

export default GameProgressPage
